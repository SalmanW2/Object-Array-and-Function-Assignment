interface Student {
  name: string;
  seniorStatus: boolean;
  completedAssignment: boolean;
}
let students: Student[] = [
  {
    name: "Danish Rehman",
    seniorStatus: true,
    completedAssignment: false,
  },
  {
    name: "Kashan Fazal",
    seniorStatus: false,
    completedAssignment: false,
  },
  {
    name: "Muhammad Ghous",
    seniorStatus: false,
    completedAssignment: true,
  },
  {
    name: "Muhammad Salman",
    seniorStatus: true,
    completedAssignment: true,
  },
];
function studentFilter(i: number) {
  if (students[i].seniorStatus && students[i].completedAssignment) {
    return `${students[i].name} is Seniour and also completed the assignment`;
  } else if (students[i].seniorStatus && !students[i].completedAssignment) {
    return `${students[i].name} is Seniour but not completed the assignment`;
  } else if (!students[i].seniorStatus && students[i].completedAssignment) {
    return `${students[i].name} is not Seniour but completed the assignment`;
  } else if (!students[i].seniorStatus && !students[i].completedAssignment) {
    return `${students[i].name} is not Seniour and also not completed the assignment`;
  }
}
for (let i = 0; i < students.length; i++) {
  console.log(studentFilter(i));
}

for (let i = 0; i < students.length; i++) {
  if (students[i].seniorStatus && !students[i].completedAssignment) {
    students.splice(i, 1);
  }
}
console.log(
  "\n \n ******** Remaining Students After Filtering ******** \n",
  students
);
