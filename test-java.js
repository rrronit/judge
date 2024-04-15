const Judge = require("./judgeWrapper");
const { testCases2 } = require("./testcase");
const code = `
import java.util.*;

public class Main {
    
    public static int[] func(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[] {numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }
        return new int[0];
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        while (t-- > 0) {
            int n = scanner.nextInt();
            int target = scanner.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = scanner.nextInt();
            }

            int[] result = func(nums, target);

            for (int i = 0; i < result.length; i++) {
                System.out.print(result[i] + " ");
            }
            System.out.println();
        }
        scanner.close();
    }
}
`




const init = async (code) => {
const judge = new Judge('https://judge0.ronit.live');

    const { token } = await judge.submitCode((code), 62, `${testCases2.slice(0,800).length.toString()} ${testCases2.map(cases => cases.input).join(" ")}`)
    const { stdout } = await getSubmission(token)
    const testCount=testCases2.slice(0,800).length
    let correctCount=0
    const results=stdout.split("\n")
    testCases2.slice(0,800).every((cases,idx)=>{
        
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

