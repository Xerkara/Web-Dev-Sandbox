// Grade Calculator Demonstrating Multiple Decision-Making Concepts
// This script shows how to use if/else, logical operators, switch, and ternary expressions.

function calculateGrade(score) {
  if (!Number.isFinite(score) || score < 0 || score > 100) {
    return {
      grade: "Invalid",
      feedback: "Please enter a numeric score between 0 and 100.",
      passes: false,
      honors: false,
      eligibleForNextCourse: false,
      message: "Invalid input."
    };
  }

  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  const passes = score >= 60;
  const honors = score >= 90;
  const isPassingWithHonors = passes && honors;

  let feedback;

  switch (grade) {
    case "A":
      feedback = "Excellent work! You earned honors.";
      break;
    case "B":
      feedback = "Great job! You are doing well.";
      break;
    case "C":
      feedback = "Good effort. You are meeting expectations.";
      break;
    case "D":
      feedback = "You passed, but you should review the material.";
      break;
    case "F":
      feedback = "You need more practice to pass this course.";
      break;
    default:
      feedback = "No feedback available.";
  }

  const eligibleForNextCourse = score >= 70 ? true : false;

  return {
    grade,
    feedback,
    passes,
    honors,
    isPassingWithHonors,
    eligibleForNextCourse,
    message: `${score} received a ${grade}. ${feedback}`
  };
}

function runDemo(scores = [59, 60, 89, 90, 101, -5, 70, 85, 100]) {
  scores.forEach((score) => {
    const result = calculateGrade(score);
    console.log(`Score: ${score} -> ${result.message}`);
    console.log(`Passes: ${result.passes}, Honors: ${result.honors}, Passing with honors: ${result.isPassingWithHonors}`);
    console.log(`Eligible for next course: ${result.eligibleForNextCourse ? "Yes" : "No"}`);
    console.log("-".repeat(40));
  });
}

if (require.main === module) {
  const inputScore = Number(process.argv[2]);

  if (process.argv[2] !== undefined && Number.isFinite(inputScore)) {
    const result = calculateGrade(inputScore);
    console.log(`Score: ${inputScore} -> ${result.message}`);
    console.log(`Passes: ${result.passes}, Honors: ${result.honors}, Passing with honors: ${result.isPassingWithHonors}`);
    console.log(`Eligible for next course: ${result.eligibleForNextCourse ? "Yes" : "No"}`);
  } else {
    console.log("No valid score provided. Running demo with sample scores...");
    runDemo();
  }
}

module.exports = {
  calculateGrade,
  runDemo
};
