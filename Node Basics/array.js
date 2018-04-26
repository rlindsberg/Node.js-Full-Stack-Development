var grade = [90, 80, 'Pass', true];

grade.push(100);
grade.unshift(10);
console.log(grade);

var gradePop = grade.pop(); //keep the last item
console.log(gradePop);

var gradePop = grade.shift(); //keep the first item
console.log(gradePop);
