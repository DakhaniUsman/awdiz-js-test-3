//  DSA TEST 3 (11-09-2024)


// Question 1 : find indices of two numbers that add up to a target.

function Question1() {

    function Question1a() {

        var input = [2, 7, 11, 15]
        var target = 9;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            for (let j = i + 1; j < input.length; j++) {

                // console.log(input[j]);

                if (input[i] + input[j] === target) {

                    console.log(i, j);

                }

            }

        }
    }

    console.log(Question1a());

    function Question1b() {

        var input = [3, 2, 4]
        var target = 6;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            for (let j = i + 1; j < input.length; j++) {

                // console.log(input[j]);

                if (input[i] + input[j] === target) {

                    console.log(i, j);

                }

            }

        }



    }

    console.log(Question1b());

    function Question1c() {

        var input = [3, 3]
        var target = 6;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            for (let j = i + 1; j < input.length; j++) {

                // console.log(input[j]);

                if (input[i] + input[j] === target) {

                    console.log(i, j);

                }

            }

        }



    }

    console.log(Question1c());


}

// console.log(Question1());


// Question 2 : Determine if two strings are anagrams of each other
// What is anagram ?

function Question2() {

    function Question2a () {

        var input = "listen";
        var target = "silent";

        for (let i = 0 ; i < target.length ; i ++){

            console.log(target[i])

            for (let j = 0 ; j < input.length ; j ++){

                console.log(input[i])

            }

        }

    }

    console.log(Question2a());

}

console.log(Question2());


// Question 3 : Remove all occurences of a specific element from an array

function Question3() {

    function Question3a() {

        var input = [3, 2, 2, 3];
        var target = 3;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            if (input[i] === target) {

                delete input[i];

            }

        }

        return input;

    }

    console.log(Question3a());

    function Question3b() {

        var input = [0, 1, 2, 2, 3, 0, 4, 2];
        var target = 2;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            if (input[i] === target) {

                delete input[i];

            }

        }

        return input;

    }

    console.log(Question3b());

    function Question3c() {

        var input = [1, 1, 1];
        var target = 1;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            if (input[i] === target) {

                delete input[i];

            }

        }

        return input;

    }

    console.log(Question3c());

}

console.log(Question3());


// Question 4 : find the sum of all digits in a number

function Question4() {

    function Question4a() {

        var input = [1, 2, 3];
        var sum = 0;

        // console.log(input.length);

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            sum += input[i];

        }

        return sum;

    }

    console.log(Question4a());

    function Question4b() {

        var input = [4, 5, 6];
        var sum = 0;

        // console.log(input.length);

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            sum += input[i];

        }

        return sum;

    }

    console.log(Question4b());

    function Question4c() {

        var input = [7, 8, 9];
        var sum = 0;

        // console.log(input.length);

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            sum += input[i];

        }

        return sum;

    }

    console.log(Question4c());

}

// console.log(Question4());


// Question 5 : perform binary seach on a sorted array

function Question5() {

    function Question5a() {

        var input = [1, 2, 3, 4, 5];
        var target = 3;

        var left = 0;
        var right = input.length - 1;

        while (left <= right) {

            const midIndex = Math.floor((left + right) / 2);

            if (input[midIndex] === target) {

                return midIndex;

            }

            else if (input[midIndex] < target) {

                left = midIndex + 1;

            }

            else if (input[midIndex] > target) {

                right = midIndex - 1;

            }


        }

    }

    console.log(Question5a());

    function Question5b() {

        var input = [10, 20, 30, 40, 50];
        var target = 25;

        var left = 0;
        var right = input.length - 1;

        while (left <= right) {

            const midIndex = Math.floor((left + right) / 2);

            if (input[midIndex] === target) {

                return midIndex;

            }

            else if (input[midIndex] < target) {

                left = midIndex + 1;

            }

            else if (input[midIndex] > target) {

                right = midIndex - 1;

            }

            // checking if element really exist in array
            for (let i = 0; i < input.length; i++) {

                if (input[i] !== target) {

                    return -1;

                }

            }


        }


    }

    console.log(Question5b());

    function Question5c() {

        var input = [5, 15, 25, 35, 45];
        var target = 35;

        var left = 0;
        var right = input.length - 1;

        while (left <= right) {

            const midIndex = Math.floor((left + right) / 2);

            if (input[midIndex] === target) {

                return midIndex;

            }

            else if (input[midIndex] < target) {

                left = midIndex + 1;

            }

            else if (input[midIndex] > target) {

                right = midIndex - 1;

            }



        }


    }

    console.log(Question5c());

}

// console.log(Question5());


// Question 6 : move all zeroes in an array to the end while maintaiing the order of non zero elements.

function Question6() {

    function Question6a() {

        var input = [0, 0, 1];
        // [1, 3, 12, 0, 0]
        // 0 to usko last me daal

        for (let i = 0; i < input.length; i++) {

            console.log(input[i]);


        }

        return input;


    }

    console.log(Question6a());

}


// console.log(Question6());

// Question 7 : count primes up to N

function Question7() {

}

// console.log(Question17());


// Question 8 :


// Question 9 :


// Question 10 :

function Question10() {

    function Question10a() {

        var input = "hello";
        var count = 0;
        var target = "l";

        for (let i = 0; i < input.length; i++) {

            if (input[i] === target) {

                count++;

            }

        }

        return count;

    }

    console.log(Question10a());

    function Question10b() {

        var input = "banana";
        var count = 0;
        var target = "a";

        for (let i = 0; i < input.length; i++) {

            if (input[i] === target) {

                count++;

            }

        }

        return count;

    }

    console.log(Question10b());

    function Question10c() {

        var input = "javascript";
        var count = 0;
        var target = "j";

        for (let i = 0; i < input.length; i++) {

            if (input[i] === target) {

                count++;

            }

        }

        return count;

    }

    console.log(Question10c());

}

// console.log(Question10());


// Question 11 : find the minimum distance between two elements in array

function Question11() {

    function Question11a() {

        var input = [1, 2, 3, 2];
        var target1 = 1;
        var target2 = 2;
        var target1Index;
        var target2Index

        for (let i = 0; i < input.length; i++) {

            if (input[i] === target1) {

                var target1Index = i;
                // console.log(target1Index);
                break;


            }

        }

        for (let j = 0; j < input.length; j++) {

            if (input[j] === target2) {

                var target2Index = j;
                // console.log(target2Index);
                break;


            }

        }

        return target2Index - target1Index;

    }

    console.log(Question11a());

    function Question11b() {

        var input = [1, 2, 3, 4, 1, 2];
        var target1 = 1;
        var target2 = 4;
        var target1Index;
        var target2Index

        for (let i = 0; i < input.length; i++) {

            if (input[i] === target1) {

                var target1Index = i;
                // console.log(target1Index);
                break;


            }

        }

        for (let j = 0; j < input.length; j++) {

            if (input[j] === target2) {

                var target2Index = j;
                // console.log(target2Index);
                break;


            }

        }

        return target2Index - target1Index;

    }

    console.log(Question11b());

    function Question11c() {

        var input = [5, 6, 7, 8];
        var target1 = 6;
        var target2 = 8;
        var target1Index;
        var target2Index

        for (let i = 0; i < input.length; i++) {

            if (input[i] === target1) {

                var target1Index = i;
                // console.log(target1Index);
                break;


            }

        }

        for (let j = 0; j < input.length; j++) {

            if (input[j] === target2) {

                var target2Index = j;
                // console.log(target2Index);
                break;


            }

        }

        return target2Index - target1Index;

    }

    console.log(Question11c());
}

// console.log(Question11());


// Question 12 : maximum product of two elements

function Question12() {

    function Question12a() {

        var input = [3, 4, 5, 2];
        var product = 0;
        var output = 0;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            for (let j = i + 1; j < input.length; j++) {

                // console.log(input[j]);

                product = input[i] * input[j];
                // console.log(product)

                if (product > output) {

                    output = product;
                    // console.log(output)

                }


            }


        }

        return output;

    }

    console.log(Question12a());

    function Question12b() {

        var input = [1, 5, 4, 5];
        var product = 0;
        var output = 0;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            for (let j = i + 1; j < input.length; j++) {

                // console.log(input[j]);

                product = input[i] * input[j];
                // console.log(product)

                if (product > output) {

                    output = product;
                    // console.log(output)

                }


            }


        }

        return output;

    }

    console.log(Question12b());

    function Question12c() {

        var input = [10, 2, 5, 2];
        var product = 0;
        var output = 0;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            for (let j = i + 1; j < input.length; j++) {

                // console.log(input[j]);

                product = input[i] * input[j];
                // console.log(product)

                if (product > output) {

                    output = product;
                    // console.log(output)

                }


            }


        }

        return output;

    }

    console.log(Question12c());

}

// console.log(Question12());


// Question 13 : number of steps to reduce to zero

function Question13() {

    function Question13a() {

        var input = 14;
        var steps = 0;

        while (input > 0) {

            if (input % 2 == 0) {

                input = input / 2;

            }

            else if (input % 2 == 1) {

                input = input - 1;

            }

            steps++;
        }

        return steps;

    }

    console.log(Question13a());

    function Question13b() {

        var input = 8;
        var steps = 0;

        while (input > 0) {

            if (input % 2 == 0) {

                input = input / 2;

            }

            else if (input % 2 == 1) {

                input = input - 1;

            }

            steps++;
        }

        return steps;

    }

    console.log(Question13b());

    function Question13c() {

        var input = 123;
        var steps = 0;

        while (input > 0) {

            if (input % 2 == 0) {

                input = input / 2;

            }

            else if (input % 2 == 1) {

                input = input - 1;

            }

            steps++;
        }

        return steps;

    }

    console.log(Question13c());

}

// console.log(Question13());


// Question 14 : find duplicates in array

function Question14() {

    function Question14a() {

        var input = [4, 3, 2, 7, 8, 2, 3, 1];
        var output = [];

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            for (let j = i + 1; j < input.length; j++) {

                // console.log(input[j]);

                if (input[i] === input[j]) {

                    // console.log(i , j , "matched");

                    output.push(input[i]);

                }

            }

        }

        return output;

    }

    console.log(Question14a());

    function Question14b() {

        var input = [1, 1, 2];
        var output = [];

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            for (let j = i + 1; j < input.length; j++) {

                // console.log(input[j]);

                if (input[i] === input[j]) {

                    // console.log(i , j , "matched");

                    output.push(input[i]);

                }

            }

        }

        return output;

    }

    console.log(Question14b());

    function Question14c() {

        var input = [1, 2, 3, 4];
        var output = [];

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            for (let j = i + 1; j < input.length; j++) {

                // console.log(input[j]);

                if (input[i] === input[j]) {

                    // console.log(i , j , "matched");

                    output.push(input[i]);

                }

            }

        }

        return output;

    }

    console.log(Question14c());

}

// console.log(Question14());


// Question 15 : find peak element in array

function Question15() {

    function Question15a() {

        var input = [1, 2, 3, 1];
        var peak = 0;
        var output = 0;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            if (input[i] > input[i - 1] || input[i] > input[i + 1]) {

                // console.log(input[i], "peak");
                peak = input[i];

                if (peak > output) {

                    output = peak;

                }

            }

        }

        return output;

    }

    console.log(Question15a());

    function Question15b() {

        var input = [1, 2, 1, 3, 5, 6, 4];
        var peak = 0;
        var output = 0;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            if (input[i] > input[i - 1] || input[i] > input[i + 1]) {

                // console.log(input[i], "peak");
                peak = input[i];

                if (peak > output) {

                    output = peak;

                }

            }

        }

        return output;

    }

    console.log(Question15b());

    function Question15c() {

        var input = [10, 20, 15];
        var peak = 0;
        var output = 0;

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            if (input[i] > input[i - 1] || input[i] > input[i + 1]) {

                // console.log(input[i], "peak");
                peak = input[i];

                if (peak > output) {

                    output = peak;

                }

            }

        }

        return output;

    }

    console.log(Question15c());

}

// console.log(Question15());


// Question 16 : check if array is sorted

function Question16() {

    function Question16a() {

        var input = [1, 2, 3, 4];

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            if (input[i] <= input[i - 1]) {

                return false;

            }

        }

        return true;

    }

    console.log(Question16a());

    function Question16b() {

        var input = [4, 3, 2, 1];

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            if (input[i] <= input[i - 1]) {

                return false;

            }

        }

        return true;

    }

    console.log(Question16b());

    function Question16c() {

        var input = [1, 3, 2, 4];

        for (let i = 0; i < input.length; i++) {

            // console.log(input[i]);

            if (input[i] <= input[i - 1]) {

                return false;

            }

        }

        return true;

    }

    console.log(Question16c());

}

// console.log(Question16());


// Question 17 :


// Question 18 :


// Question 19 :

function Question19() {

    function Question19a() {

        var input = "Hello World";
        var count = 0;
        // console.log(input[5]);


        for (let i = input.length - 1; i >= 0 ; i-- ){

            // console.log(i);
            // console.log(input[i]);

            count++;

            if (input[i] == " "){

                return count - 1;

            }


        }

        return count;

    }

    console.log(Question19a());

    function Question19b() {

        var input = "Welcome to JavaScript";
        var count = 0;


        for (let i = input.length - 1; i >= 0 ; i-- ){

            // console.log(i);
            // console.log(input[i]);

            count++;

            if (input[i] == " "){

                return count - 1;

            }


        }

        return count;


    }

    console.log(Question19b());

    function Question19c() {

        var input = "Coding";
        var count = 0;


        for (let i = input.length - 1; i >= 0 ; i-- ){

            // console.log(i);
            // console.log(input[i]);

            count++;

            if (input[i] == " "){

                return count - 1;

            }

        }

        return count;

    }

    console.log(Question19c());

}

// console.log(Question19());


// Question 20 : count the number of distinct elements in array


function Question20 () {

    function Question20a () {

        var input = [1,2,2,3];
        var count = 0;

        for ( let i = 0 ; i < input.length ; i ++){

            console.log(input[i]);

            for (let j = i + 1 ; j < input.length ; j ++){

                console.log(input[j]);

            }

        }

        return count;

    }

    console.log(Question20a());

}

// console.log(Question20());