// Prompt 
let name = prompt("Enter your name:");
let totalMarks = parseFloat(prompt("Enter total marks:"));
let marksObtained = parseFloat(prompt("Enter marks obtained:"));


// Calculate percentage
let percentage = (marksObtained / totalMarks) * 100;

// grade and remarks
let grade, remarks;
if (percentage >= 90) {
  grade = "A+";
  remarks = "Excellent!";
} else if (percentage >= 80) {
  grade = "A";
  remarks = "Very Good!";
} else if (percentage >= 70) {
  grade = "B";
  remarks = "Good!";
} else if (percentage >= 60) {
  grade = "C";
  remarks = "Fair!";
} else if (percentage >= 50) {
  grade = "D";
  remarks = "Pass!";
} else {
  grade = "F";
  remarks = "Fail!";
}

// results
document.write(`
  <h2>Result Card</h2>
  <p>Name: ${name}</p>
  <p>Totalmarks; ${totalMarks}</p>
  <p>Marks Obtained: ${marksObtained}  </p>
  <p>Percentage: ${percentage.toFixed(2)}%</p>
  <p>Grade: ${grade}</p>
  <p>Remarks: ${remarks}</p>
`);




