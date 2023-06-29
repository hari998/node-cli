async function run() {
  for (let i = 0; i <= 20; i++) {
    const dots = ".".repeat(i);
    const left = 20 - i;
    const empty = " ".repeat(left);
    process.stdout.write(`\r[${dots}${empty}] ${i * 5}%`);
    await wait(180);
  }
}
run();

async function main() {
  for (let i = 0; i <= 20; i++) {
    const dots = ".".repeat(i);
    const left = 20 - i;
    const empty = " ".repeat(left);
    process.stdout.write(`\r[${dots}${empty}] ${i * 5}%`);
    await wait(80);
  }
}

main();

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
