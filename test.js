const Judge = require("./judgeWrapper");
const { testCases2 } = require("./testcase");
const code = `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <sstream>
using namespace std;


vector<int> func(vector<int>& nums, int target){    
    unordered_map<int, int> numMap;
    int n = nums.size();
    for (int i = 0; i < n; i++) {
        int complement = target - nums[i];
        if (numMap.count(complement)) {
            return {numMap[complement], i};
        }
        numMap[nums[i]] = i;   
    }
    return {}; 

}


int main() {
    int t;
    cin >> t;

   // stringstream buffer;
    while (t--) {
        int n, target;
        cin >> n >> target;
        vector<int> nums(n);
        for (int i = 0; i < n; ++i) {
            cin >> nums[i];
            
        }

       // streambuf* old = cout.rdbuf(buffer.rdbuf());

        vector<int> result = func(nums, target);

      //  cout.rdbuf(old);
      

        for (int i = 0; i < result.size(); ++i) {
            
            cout << result[i] << " ";
        }
        cout << endl;

    }
    //cout << buffer.str();
    return 0;
}
`




const init = async (code) => {
const judge = new Judge('https://judge0.ronit.live');

    const { token } = await judge.submitCode((code), 54, `${testCases2.slice(0,200).length.toString()} ${testCases2.map(cases => cases.input).join(" ")}`)
    const { stdout } = await getSubmission(token)
    const testCount=testCases2.slice(0,200).length
    let correctCount=0
    const results=stdout.split("\n")
    testCases2.slice(0,200).every((cases,idx)=>{
        
        if (cases.expected !== results[idx].trim()){
            console.log( {input:cases.input,expected:cases.expected,output:results[idx].trim()})
            return false
        }
        correctCount++;
        return true
    })
    console.log(`${correctCount} / ${testCount}`)

}


const getSubmission = async (token) => {
const judge = new Judge('https://judge0.ronit.live');

    const submission = await judge.getSubmissionDetails(token)
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

