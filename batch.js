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

    try:
        nums = eval(input())
        target = int(input())
        result=sol.two_sum(nums, target)        

        if result is None:
            result = "None"
        print(result)
        
    except Exception as e:
        raise Exception(f"Error: {e}")

if __name__ == '__main__':
    _driver()
`;




const init = async (code) => {
    const judge = new Judge('https://judge0.ronit.live');

    const batchSize = 50;

    for (let i = 0; i < testCases.length; i += batchSize) {

        //will add time and memory constraint later
        const batchSubmissions = testCases.slice(i, i + batchSize).map((cases) => ({
            source_code: code,
            language_id: 71,
            stdin: cases.nums + "\n" + cases.target,
            expected_output: cases.expected,
                
        }));

        const batchResponse = await judge.createBatchSubmissions(batchSubmissions);
        const tokens = batchResponse.map((submission) => submission.token);


        const poll = setInterval((async () => {
            const batchSubmissionDetails = await judge.getBatchSubmissions(tokens);
            const completedSubmissions = batchSubmissionDetails.filter((submission) =>
                submission.status.id !== 1 && submission.status.id !== 2
            );

            if (completedSubmissions.length !== batchSubmissions.length) {
                return
            }
            clearInterval(poll)
            batchSubmissionDetails.forEach((submission, index) => {
                const testCase = testCases[i + index];
                console.log(submission)
               
            });
        }), 500);
    }
};





const getTime = async () => {
    let totalTime = 0
    console.log("testcase count", testCases.length)

    const numberofTimes = 1

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




