// Calculate the average marks of students and assign grade based on the average

function averageGrade(students) {
  const avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
  let grade;

  if(avg < 60) grade = 'F';
  else if(avg < 70) grade = 'D';
  else if(avg < 80) grade = 'C';
  else if(avg < 90) grade = 'B';
  else grade = 'A';

  return { average: avg, grade };
}

console.log(averageGrade([
  {name:"David", marks:80},
  {name:"Vinoth", marks:77},
  {name:"Divya", marks:88},
  {name:"Ishitha", marks:95},
  {name:"Thomas", marks:68}
]));
