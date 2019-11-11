const router = new require('koa-router')();
const sso = require('../lib/sso');
const _ = require('lodash');
const JSON5 = require('json5')

const admin = {
  5837227537: 'x',
  6031301721: 'กฤษ',
  6142353226: 'น้ำปรุง',
  5930473321: 'จั๊มพ์',
  6141653324: 'เบีย',
  6137925539: 'ภูมิ',
  6130325721: 'ฟิวส์',
  6144010327: 'ครีม',
  6036089632: 'แองเจิ้ล',
  6142371526: 'แป้ง',
  6142389926: 'ปรางบช',
  5943224626: 'โอค'
};

const passR1 = [
  '6242006827',
  '6242118427',
  '6143597227',
  '6144706527',
  '6037527338',
  '6037586338',
  '6240045240',
  '6036006532',
  '6146053734',
  '6146079034',
  '6146102834',
  '6146126934',
  '6146156734',
  '6146163034',
  '6146184234',
  '6145120928',
  '5945110028',
  '6240191526',
  '6240212026',
  '6241244326',
  '6242040826',
  '6248046726',
  '6248092526',
  '6142013926',
  '6142042026',
  '6142404626',
  '6142736026',
  '6142737626',
  '6142810726',
  '6142813626',
  '6142838326',
  '6142846326',
  '6142847026',
  '6142919526',
  '6143209826',
  '6143248226',
  '6143288326',
  '6143330026',
  '6042469326',
  '6042803226',
  '5942026526',
  '6230421230',
  '6035296030',
  '6136515733',
  '6136779033',
  '6240036424',
  '6141033224',
  '6141229024',
  '6141603024',
  '6041031924',
  '6041226024',
  '6137981639',
  '6231216323',
  '6233103423',
  '6233231023',
  '6233233323',
  '6233251623',
  '6133403523',
  '6133603723',
  '6133845223',
  '6032336923',
  '6033336023',
  '6033836523',
  '5932307223',
  '6230078321',
  '6230381421',
  '6230476421',
  '6231324921',
  '6130089621',
  '6130096021',
  '6130098221',
  '6130099921',
  '6130170721',
  '6130243921',
  '6130260521',
  '6130332021',
  '6130355521',
  '6130413221',
  '6130421221',
  '6130425821',
  '6130447621',
  '6130455621',
  '6130466521',
  '6130485421',
  '6130501821',
  '6130540221',
  '6130545421',
  '6130552821',
  '6130559221',
  '6130575221',
  '6130708421',
  '6130814221',
  '6131320721',
  '6030458421',
  '6030507521',
  '6031035821',
  '5930323921',
  '6134024525',
  '5834515725',
  '6231074237',
  '6137090437',
  '6135557931',
  '6243004835',
  '6146552535',
  '6240205622',
  '6248033422',
  '6140150822',
  '6040140422',
  '6040273222',
  '5940514022'
];

const passR2 = {
  6045082628: "ครีม",
  6230381421:	"A009	ปูม	วิศวะ	1",
  6230476421:	"A014	ปัน	วิศวะ	1",
  6130089621:	"A024	ปั้น	วิศวะ	2",
  6130096021:	"A025	เมเม	วิศวะ	2",
  6130332021:	"A041	ไป่ไป๋	วิศวะ	2",
  6130421221:	"A047	ภีม	วิศวะ	2",
  6130425821:	"A048	ปาล์ม	วิศวะ	2",
  6130466521:	"A054	ฟรองซ์	วิศวะ	2",
  6030458421:	"A081	บอส	วิศวะ	3",
  6040273222:	"A115	โจโจ้	อักษร	3",
  6233251623:	"A133	กันคุง	วิทยา	1",
  6133403523:	"A138	ดีส	วิทยา	2",
  6141033224:	"A162	ไอซ์	รัฐศาสตร์	2",
  6041031924:	"A171	ทิว	รัฐศาสตร์	3",
  5834515725:	"A182	พีช	สถาปัตย์	5",
  6240212026:	"A192	เนเน่	บัญชี	1",
  6248092526:	"A208	นุช	บัญชี	1",
  6143330026:	"A237	เตย	บัญชี	2",
  6042803226:	"A248	จิ๊บ	บัญชี	3",
  6242006827:	"A257	ปังปอนด์	ครุ	1",
  6143597227:	"A261	ป๊อป	ครุ	2",
  5945110028:	"A273	ปราง	นิเทศ	4",
  6035296030:	"A278	เอิร์ก	แพทย์	3",
  6146079034:	"A298	กลิ้ง	นิติ	2",
  6146126934:	"A302	สิตา	นิติ	2",
  6146156734:	"A303	นัชชา	นิติ	2",
  6037586338:	"A323	นุ่น	จิตวิทยา	3",
  6137981639:	"A324	Robert	วิทย์กีฬา	2",
}

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
    if (user._id in admin || user._id in passR2) {
      ctx.ok(res.value || user);
      ctx.cookies.set('ticket', ticket, { httpOnly: true });
    } else {
      ctx.throw(405, 'เฉพาะผู้ผ่านการคัดเลือกเท่านั้น');
      ctx.cookies.set('ticket', null, { httpOnly: true });
    }
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
    // ctx.throw(410, 'ปิดระบบ');
    ctx.ok(
      (await ctx.users.findOneAndUpdate(
        { _id: ctx.state.user._id },
        { $set: { ...ctx.request.body, lastUpdate: new Date() } },
        { upsert: false, returnNewDocument: true }
      )).value
    );
  })

  .get('/users', adminOnly, require('koa-json2xlsx')(), async ctx => {
    const fnd = JSON5.parse(_.get(ctx.query, 'find', '{}'))
    const ans = await ctx.users
      .find({
        q1: { $exists: true, $ne: null },
        q2: { $exists: true, $ne: null },
        q3: { $exists: true, $ne: null },
        q4: { $exists: true, $ne: null },
        ...fnd
      })
      .project({ ticket: 0, q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 })
      .sort({ lastUpdate: -1 })
      .toArray();
    if (_.includes(["xlsx", "excel"], ctx.query.type)) {
      ctx.xlsx('users.xlsx', ans)
    } else {
      ctx.ok(ans);
    }
  })
  .get('/users/:id', adminOnly, async ctx => {
    ctx.ok(await ctx.users.findOne({ _id: ctx.params.id }));
    ctx.assert(ctx.body, 404, 'ไม่พบผู้ใช้');
  });
