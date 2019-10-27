const _ = require('lodash');
const axios = require('axios');
const qs = require('qs');

const SSO_URL = 'https://account.it.chula.ac.th';
const SSO_KILL = ticket => `${SSO_URL}/resources/tickets/${ticket}`;
const SSO_LOGIN = () => `${SSO_URL}/login`;
const SSO_USER = () => `${SSO_URL}/resources/users/me`;

async function _login(username, password) {
  const isFreshy = username.slice(0, 2) == '62';
  const res = await axios.get(SSO_LOGIN(), {
    withCredentials: true,
    params: {
      username: isFreshy ? username : username.slice(0, 8),
      password: password,
      service: 'https://account.it.chula.ac.th/html',
      serviceName: 'Chula+SSO'
    }
  });

  if (_.get(res.data, 'type') == 'error') {
    throw new Error(_.get(res.data, 'content', 'SSO login error'));
  }
  const cookie = _.get(res.headers, "['set-cookie'][0]");
  const DeeTGT = _.get(qs.parse(cookie), 'DeeTGT');
  return DeeTGT;
}

async function _validate(ticket) {
  const raw = (await axios.get(SSO_USER(), {
    headers: {
      'accept-encoding': 'gzip;q=0,deflate,sdch',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
      Cookie: `DeeTGT=${ticket}`
    }
  })).data;

  return {
    _id: raw.ouid,
    ticket: ticket,
    nameTH: raw.firstnameTH,
    nameEN: raw.firstname,
    surnameTH: raw.lastnameTH,
    surnameEN: raw.lastname,
    faculty: +raw.ouid.slice(-2),
    year: +raw.ouid.slice(0, 2)
  };
}

async function login(username, password) {
  const ticket = await _login(username, password);
  const user = await _validate(ticket);
  return { ticket, user };
}

function logout(ticket) {
  return axios.delete(SSO_KILL(ticket)).then(res => res.data);
}

module.exports = {
  login,
  logout
};
