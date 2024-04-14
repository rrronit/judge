
const testCases = [
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },
    {
        "nums": "[1, 2, 3, 4]",
        "target": "9",
        "expected": "None"
    },
    {
        "nums": "[]",
        "target": "5",
        "expected": "None"
    },
    {
        "nums": "[2, 7, 11, 15]",
        "target": "9",
        "expected": "[0, 1]"
    },
    {
        "nums": "[-1, -2, -3, -4, -5]",
        "target": "-8",
        "expected": "[2, 4]"
    },
    {
        "nums": "[3, 3]",
        "target": "6",
        "expected": "[0, 1]"
    },

]

module.exports = {
    testCases
}