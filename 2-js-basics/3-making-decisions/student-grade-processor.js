let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];

let passingLetterGrades = ['A', 'A-', 'B', 'B-', 'C', 'C-'];

for (let studentGrade of allStudents) {
    if (typeof studentGrade === 'string') {
        if (passingLetterGrades.includes(studentGrade)) 
        {
            studentsWhoPass.push(studentGrade);
        }
        else 
        {
            console.log(`Invalid letter grade: ${studentGrade}`);
        }
    }

    else if (typeof studentGrade === 'number') {
        if (studentGrade >= 3 && studentGrade <= 5) {
            studentsWhoPass.push(studentGrade);
        }
        else if (studentGrade >= 0 && studentGrade < 3) {
            console.log(`Failed numeric grade: ${studentGrade}`);
        }
        else {
            console.log(`Invalid numeric grade: ${studentGrade}`);
        }
    }

    else {
        console.log(`Invalid grade type: ${studentGrade}`);
    }
}

console.log(`Students who passed: ${studentsWhoPass}`);