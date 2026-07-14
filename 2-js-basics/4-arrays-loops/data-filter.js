const students = [
    {name: 'Harry', age: 20, grade: 90},
    {name: 'Jude', age: 17, grade:84},
    {name: 'Lily', age: 19, grade: 75},
    {name: 'Ron', age: 21, grade: 88},
    {name: 'Hermione', age: 18, grade: 65},
    {name: 'Draco', age: 22, grade: 55}
]

function studentsAboveAge(students, ageThreshold) {
    const aboveThreshold = students.filter((student) => student.age >= ageThreshold).map((student) => student.name);
    return aboveThreshold;
}

function averageGrade(students) {
    const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
    const average = totalGrade / students.length;
    return average;
}

function studentsWithGradeAbove(students, threshold) {
    const aboveThreshold = students.filter((student) => student.grade > threshold).map((student) => student.name);
    return aboveThreshold;
}

console.log(studentsAboveAge(students, 18));
console.log(averageGrade(students));
console.log(studentsWithGradeAbove(students, 85));