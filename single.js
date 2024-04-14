const Judge = require("./judgeWrapper");
const { testCases } = require("./testcase");


const code = `
class Solution:
    def two_sum(self, nums, target):
        num_dict = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_dict:
                return [num_dict[complement], i]
            num_dict[num] = i
        return None

import json
import sys
from io import StringIO

def _driver():
    sol = Solution()
    for i in range(73):
        try:
            captured_prints = StringIO()
            nums = eval(input())
            target = int(input())

            sys.stdout = captured_prints
            result=sol.two_sum(nums, target)
            sys.stdout = sys.__stdout__

            if result is None:
              result = "None"
            print(json.dumps({"nums": nums, "target": target, "output": result,"stdout": captured_prints.getvalue()}))

        except (EOFError, KeyboardInterrupt):
            print("Exiting...")
        except Exception as e:
            raise Exception(f"Error: {e}")

if __name__ == '__main__':
    _driver()
     

`;
const judge = new Judge('https://judge.ronit.live');

const init = async (code) => {
  const submit = await judge.submitCode(code, 71, `${testCases.map(testCase => testCase.nums + "\n" + testCase.target).join("\n")}`)
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

  const numberofTimes =20

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




