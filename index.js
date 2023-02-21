//question 1 answer
let arithmeticSym = ("+", "-", "*", "/", "%");
let assignOperator = ("=", "==", "===");
let comparisonOp = ("&&", "||");
let logicOperator = ("=", "!=");
let bitwiseOp = ("&", "<<");

//question 2 answer

let sum = 1 + 2;
let minus = 2 - 1;

let num = 40;
let isEven = 40 % 2 === 0;

let hour = 12;
let mins = 00;
let checkNoon = hour === 12 && mins === 00;
let checkAfternoon = hour > 12 || mins === 00;

let me = "Victoria";
let isNotMe = me != "Victoria";

let c = 1 & 2;
let d = 2 << 2;

//question 3 answer
let classGroups = [
  "Arts Subjects",
  "Social Science Subjects",
  "Science Subjects",
  "General Subjects",
];

let bolatitosClassGroup = "Arts Subjects";
let generalStudiesSubjects = "English, Mathematics";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";

// checking if bola's class group is arts subjects
if (bolatitosClassGroup == classGroups[0]) {
  console.log(`${generalStudiesSubjects} ${artsSubjects}`);
} else {
  console.log(generalStudiesSubjects);
}

//question 4 answer
for (let i = 1; i < 20; i += 7) {
  console.log(i);
}

//question 5 answer
function findNearestPowerOfTwo(num) {
  let pwr = 1;

  for (let i = 1; i <= num; i++) {
    if (i == num) break;
    if (2 << i == 2) {
      pwr = i;
    }
    // console.log(i);
  }

  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
}

// test cases
findNearestPowerOfTwo(40);

// custom test case
