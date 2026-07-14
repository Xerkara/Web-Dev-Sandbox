function analyzeGrades(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return {
      highestScore: 0,
      lowestScore: 0,
      averageScore: 0,
      passedCount: 0,
      aboveAverageStudents: []
    };
  }

  let highestScore = students[0].score;
  let lowestScore = students[0].score;
  let totalScore = 0;
  let passedCount = 0;

  for (const student of students) {
    totalScore += student.score;

    if (student.score > highestScore) {
      highestScore = student.score;
    }

    if (student.score < lowestScore) {
      lowestScore = student.score;
    }

    if (student.score >= 70) {
      passedCount++;
    }
  }

  const averageScore = totalScore / students.length;
  const aboveAverageStudents = students.filter((student) => student.score > averageScore).map((student) => student.name);

  return {
    highestScore,
    lowestScore,
    averageScore,
    passedCount,
    aboveAverageStudents
  };
}

// Test cases
const testStudents = [
  { name: 'Alice', score: 95 },
  { name: 'Bob', score: 65 },
  { name: 'Charlie', score: 85 },
  { name: 'Diana', score: 72 },
  { name: 'Eve', score: 88 }
];

console.log(analyzeGrades(testStudents));