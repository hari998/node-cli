let count = 0;

let myInterval = setInterval(() => {
  console.log("count-", count);
  count += 1;
  if (count == 1) {
    clearTimeout(mytimeout);
  }
  if (count == 5) {
    clearInterval(myInterval);
  }
}, 2000);

let mytimeout = setTimeout(() => {
  console.log("this is setTimeOut 1");
}, 5000);

let mytimeout2 = setTimeout(() => {
  console.log("this is setTimeOut 2");
}, 3000);

let intervalid = myInterval;
let timeoutid = mytimeout;
let timeoutid2 = mytimeout2;

// console.dir(intervalid, { depth: null });
// console.dir(timeoutid, { depth: null });
