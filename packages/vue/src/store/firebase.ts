import { database, storage } from '../config';
import _ from 'lodash';

export { database, storage };

export async function limit() {
  return (await database.ref('/limit').once('value')).val();
}
export async function watchUsers(cb) {
  return database.ref('/users').on('value', snp => {
    cb(snp.val());
  });
}
export async function patchUsers(ouid, val) {
  // console.log('TCL: patchUsers -> patchUsers', ouid, val);
  return await database.ref(`/users/${ouid}`).set(val);
}

