var grade = [100, 50, 75];
var totalGrade = 0;
for (var i = 0; i < grade.length; i++) {
  totalGrade += grade[i];
}
var averageGrade = totalGrade / grade.length;

console.log(averageGrade);
