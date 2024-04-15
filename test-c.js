const Judge = require("./judgeWrapper");
const { testCases2 } = require("./testcase");
const code = `
#include <stdio.h>
#include <stdlib.h>

int* func(int* nums, int numsSize, int target, int* returnSize) {
    int *result = malloc(2 * sizeof(int));
    *returnSize = 2;
    
    int *numMap = malloc(10001 * sizeof(int)); // Dynamic allocation for numMap
    
    for (int i = 0; i < 10001; i++) {
        numMap[i] = -1; // Initialize numMap with -1
    }
    
    for (int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];
        if (numMap[complement] != -1) {
            result[0] = numMap[complement];
            result[1] = i;
            free(numMap); // Free the allocated memory for numMap
            return result;
        }
        numMap[nums[i]] = i; // Store the index in numMap
    }
    
    *returnSize = 0;
    free(result);
    free(numMap); // Free the allocated memory for numMap
    return NULL;
}

int main() {
    int t;
    scanf("%d", &t);
    
    while (t--) {
        int n, target;
        scanf("%d %d", &n, &target);
        
        int *nums = malloc(n * sizeof(int));
        for (int i = 0; i < n; i++) {
            scanf("%d", &nums[i]);
        }
        
        int returnSize;
        int *result = func(nums, n, target, &returnSize);
        
        if (returnSize == 2) {
            printf("%d %d\n", result[0], result[1]);
            free(result);
        } else {
            printf("\n");
        }
        
        free(nums);
    }
    
    return 0;
}
`




const judge = new Judge('https://judge0.ronit.live');
const init = async (code) => {

    const { token } = await judge.submitCode((code), 49, `${testCases2.slice(0,2).length.toString()} ${testCases2.map(cases => cases.input).join(" ")}`,null,true)
    console.log(token)
    const { stdout,compile_output } = await getSubmission(token)
    console.log((compile_output))
    console.log(stdout)
    const testCount=testCases2.slice(0,2).length
    let correctCount=0
    const results=encodeURI(stdout).split("\n")
    testCases2.slice(0,2).every((cases,idx)=>{
        
        if (cases.expected !== results[idx].trim()){
            console.log( {input:cases.input,expected:cases.expected,output:(results[idx]).trim()})
            return false
        }
        correctCount++;
        return true
    })
    console.log(`${correctCount} / ${testCount}`)

}


const getSubmission = async (token) => {

    const submission = await judge.getSubmissionDetails(token,true)
    if (submission.status.id === 1 || submission.status.id === 2) {
        return getSubmission(token)
    }
    return submission
}


const getTime = async () => {

    const startTime = performance.now();
    console.log("started")
    await init(code);
    const endTime = performance.now();

    console.log("time: ", endTime - startTime)

}
getTime();

