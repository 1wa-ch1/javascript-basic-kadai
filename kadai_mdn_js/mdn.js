const today = new Date('August 22, 23');

const year = today.getFullYear();
const month = (today.getMonth() + 1);
const date = today.getDate();

console.log(year + '年' + month + '月' + date + '日')
