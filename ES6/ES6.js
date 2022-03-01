// Rest Operator

// function f (a,b, ...c) {

// }

function printNums1(num1,num2) {
    console.log(num1,num2);
}

function printNums2(num1,num2) {
    console.log(arguments);
}

function printNums3(num1, ...num2) {
    console.log(num1, num2);
}


printNums1(1,2,3,4,5); // 1,2
printNums2(1,2,3,4,5); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
printNums3(1,2,3,4,5); // 1 [ 2, 3, 4, 5 ]