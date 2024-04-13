const Judge = require("./judgeWrapper");
const code = `
def sum(a, b):
    return a + b
`;
const testingCode = ` 
a=int(input())
b=int(input())
res=(sum(a, b))
print(res)`

const testCases = [
    { input: "1\n 2", expectedOutput: "3" },
    { input: "5\n 5", expectedOutput: "10" },
    { input: "10\n -5", expectedOutput: "5" },
    { input: "0\n 0", expectedOutput: "0" },
    { input: "100\n 200", expectedOutput: "300" },
    { input: "-10\n 10", expectedOutput: "0" },
    { input: "3\n 7", expectedOutput: "10" },
    { input: "2\n 3", expectedOutput: "5" },
    { input: "8\n 8", expectedOutput: "16" },
    { input: "20\n 30", expectedOutput: "50" },
    { input: "-1\n -1", expectedOutput: "-2" },
    { input: "0\n 5", expectedOutput: "5" },
    { input: "15\n 25", expectedOutput: "40" },
    { input: "-5\n -10", expectedOutput: "-15" },
    { input: "123\n 6", expectedOutput: "129" },
    { input: "999\n 1", expectedOutput: "1000" },
    { input: "7\n 3", expectedOutput: "10" },
    { input: "1000\n 1000", expectedOutput: "2000" },
    { input: "4\n 58", expectedOutput: "62" },
    { input: "9\n 4", expectedOutput: "13" },
    { input: "1\n 2", expectedOutput: "3" },
    { input: "5\n 5", expectedOutput: "10" },
    { input: "10\n -5", expectedOutput: "5" },
    { input: "0\n 0", expectedOutput: "0" },
    { input: "100\n 200", expectedOutput: "300" },
    { input: "-10\n 10", expectedOutput: "0" },
    { input: "3\n 7", expectedOutput: "10" },
    { input: "2\n 3", expectedOutput: "5" },
    { input: "8\n 8", expectedOutput: "16" },
    { input: "20\n 30", expectedOutput: "50" },
    { input: "-1\n -1", expectedOutput: "-2" },
    { input: "0\n 5", expectedOutput: "5" },
    { input: "15\n 25", expectedOutput: "40" },
    { input: "-5\n -10", expectedOutput: "-15" },
    { input: "123\n 6", expectedOutput: "129" },
    { input: "999\n 1", expectedOutput: "1000" },
    { input: "7\n 3", expectedOutput: "10" },
    { input: "1000\n 1000", expectedOutput: "2000" },
    { input: "4\n 58", expectedOutput: "62" },
    { input: "9\n 4", expectedOutput: "13" },
    { input: "1\n 2", expectedOutput: "3" },
    { input: "5\n 5", expectedOutput: "10" },
    { input: "10\n -5", expectedOutput: "5" },
    { input: "0\n 0", expectedOutput: "0" },
    { input: "100\n 200", expectedOutput: "300" },
    { input: "-10\n 10", expectedOutput: "0" },
    { input: "3\n 7", expectedOutput: "10" },
    { input: "2\n 3", expectedOutput: "5" },
    { input: "8\n 8", expectedOutput: "16" },
    { input: "20\n 30", expectedOutput: "50" },
    { input: "-1\n -1", expectedOutput: "-2" },
    { input: "0\n 5", expectedOutput: "5" },
    { input: "15\n 25", expectedOutput: "40" },
    { input: "-5\n -10", expectedOutput: "-15" },
    { input: "123\n 6", expectedOutput: "129" },
    { input: "999\n 1", expectedOutput: "1000" },
    { input: "7\n 3", expectedOutput: "10" },
    { input: "1000\n 1000", expectedOutput: "2000" },
    { input: "4\n 58", expectedOutput: "62" },
    { input: "9\n 4", expectedOutput: "13" },
];




const init = async (code) => {
    const judge = new Judge('https://judge.ronit.live');

    const batchSize = 20;
    for (let i = 0; i < testCases.length; i += batchSize) {

        //will add time and memory constraint later
        const batchSubmissions = testCases.slice(i, i + batchSize).map((cases) => ({
            source_code: code,
            language_id: 71,
            stdin: cases.input,
        }));

        const batchResponse = await judge.createBatchSubmissions(batchSubmissions);
        const tokens = batchResponse.map((submission) => submission.token);

        let counter = 0;
        const poll = async () => {
            const batchSubmissionDetails = await judge.getBatchSubmissions(tokens);
            const completedSubmissions = batchSubmissionDetails.filter((submission) =>
                submission.status.id !== 1 && submission.status.id !== 2
            );

            if (completedSubmissions.length !== batchSubmissions.length) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                counter++;

                poll();
                return;
            }

            console.log(`----------------------------Batch ${Math.floor(i / batchSize) + 1} - Completed in ${counter} seconds----------------------------`);
            batchSubmissionDetails.forEach((submission, index) => {
                const testCase = testCases[i + index];
              
                if (testCase.expectedOutput === submission.stdout?.trim().split('\n').pop()) {
                    console.log('Test Passed');
                } else {
                    console.log(`input: ${testCase.input.replace("\n"," ")} output: ${submission.stdout?.trim().split('\n').pop()} expected: ${testCase.expectedOutput}`);
                }
            });
        };
        await poll();
    }
};

init(code + testingCode);