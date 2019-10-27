import dayjs from 'dayjs';

export function getCountDown() {
  return dayjs(new Date('Oct 27 2019 23:59:59 GMT+0700')).fromNow();
}
