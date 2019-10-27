const router = new require('koa-router')();
const sso = require('../lib/sso');
const _ = require('lodash');
const admin = {
  6031301721: 'กฤษ',
  6142353226: 'น้ำปรุง',
  5930473321: 'จั๊มพ์',
  6141653324: 'เบีย',
  6137925539: 'ภูมิ',
  6130325721: 'ฟิวส์',
  6144010327: 'ครีม',
  6036089632: 'แองเจิ้ล',
  6142371526: 'แป้ง',
  6142389926: 'ปรางบช'
};

function adminOnly(ctx, next) {
  ctx.assert(ctx.state.user, 401, 'not login');
  ctx.assert(ctx.state.user._id in admin, 405, 'admin only');
  return next();
}

module.exports = router
  .post('/login', async ctx => {
    const { username, password } = ctx.request.body;
    ctx.assert(username, 400, 'require username');
    ctx.assert(password, 400, 'require password');

    // if (username.slice(0, 2) == '62' && username == password && username.length == 10) {
    //   var ticket = `${username}${new Date().getTime()}`;
    //   var user = {
    //     _id: username,
    //     nameTH: username,
    //     surnameTH: username,
    //     year: +username.slice(0, 2),
    //     faculty: +username.slice(8)
    //   };
    // } else if (username.slice(0, 2) == '62') {
    //   ctx.throw(401, 'นิสิตปี 1 ใช้ รหัสนิสิตเป็น password ครับ');
    // } else {

    let { ticket, user } = await sso.login(username, password);

    const res = await ctx.users.findOneAndUpdate(
      { _id: user._id },
      { $set: { ticket, ...user } },
      { upsert: true, returnNewDocument: true }
    );

    ctx.ok(res.value || user);
    ctx.cookies.set('ticket', ticket, { httpOnly: true });
  })
  .all('/logout', async ctx => {
    if (ctx.state.user) {
      await ctx.users.findOneAndUpdate({ _id: ctx.state.user._id }, { $unset: { ticket: null } });
      ctx.ok('logout success');
    } else {
      ctx.ok('session already expired');
    }
  })
  .get('/profile', ctx => {
    ctx.assert(ctx.state.user, 401, 'not login');
    ctx.ok(ctx.state.user);
  })
  .patch('/profile', async ctx => {
    ctx.throw(410, 'ปิดระบบ');
    ctx.ok(
      (await ctx.users.findOneAndUpdate(
        { _id: ctx.state.user._id },
        { $set: { ...ctx.request.body, lastUpdate: new Date() } },
        { upsert: false, returnNewDocument: true }
      )).value
    );
  })

  .get('/users', adminOnly, async ctx => {
    const ans = await ctx.users
      .find({
        q1: { $exists: true, $ne: null },
        q2: { $exists: true, $ne: null },
        q3: { $exists: true, $ne: null },
        q4: { $exists: true, $ne: null }
      })
      .project({ ticket: 0, q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 })
      .sort({ lastUpdate: -1 })
      .toArray();
    ctx.ok(ans);
    // console.log(_.countBy(ans, 'gender'));
    // console.log(_.countBy(ans, 'faculty'));
  })
  .get('/users/:id', adminOnly, async ctx => {
    ctx.ok(await ctx.users.findOne({ _id: ctx.params.id }));
    ctx.assert(ctx.body, 404, 'ไม่พบผู้ใช้');
  });
