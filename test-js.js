const Judge = require("./judgeWrapper");
const { testCases } = require("./testcase");


const code = `
function func(nums, target) {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

function main() {
  let t = parseInt(readLine()); // Convert input to number
  while (t-- > 0) {
    let n = parseInt(readLine()); // Convert input to number
    let target = parseInt(readLine()); // Convert input to number
    let nums = readLine().split(' ').map(Number);
    let result = func(nums, target);
    console.log(result.join(' '));
  }
}

function readLine() {
  // This function is not suitable for web browser environment
  // You need to use a different method to read input in a browser
  // For example, use HTML input forms and event listeners
  return require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }).question('', (answer) => {
    return answer.trim();
  });
}

// Call the main function
main();
`;
const judge = new Judge('https://judge0.ronit.live');

const init = async (code) => {
  const submit = await judge.submitCode(code, 63, `${testCases.map(testCase => testCase.nums + "\n" + testCase.target).join("\n")}`)
  console.log(submit)
  const token = submit.token
  let testResult = await getcodewithtoken(token)
  testResult = testResult.stdout.trim().split('\n')

  const res = testResult.map(objString => JSON.parse(objString));
  
  console.log(res);
  


}

const getcodewithtoken = async (token) => {
  const submission = await judge.getSubmissionDetails(token)
  if (submission.status.id === 1 || submission.status.id === 2) {
    return await getcodewithtoken(token)
  }
  return submission



}

const getTime = async () => {
  let totalTime = 0
  console.log("testcase count", testCases.length)

  const numberofTimes=1

  for (i = 1; i <= numberofTimes; i++) {
      const startTime = performance.now();
      console.log("started:", i)

      await init(code);
      const endTime = performance.now();
      totalTime += endTime - startTime

  }
  console.log("avg time", totalTime / numberofTimes)

}
getTime();




