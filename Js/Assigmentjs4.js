let mathmark=prompt("enter the math marks");
let physics=prompt("enter the  physics marks");
let chemistry=prompt("enter the chemistry marks");
let totalmarks=mathmark+physics+chemistry;
let percentage=(totalmarks/300)*100;
let grade;
if(percentage>=90){grade="A+"}
else if(percentage>=80){grade="A";}
else if(percentage>=70){grade="B";}
else if(percentage>=60){grade="C";}
else if(percentage>=50){grade="D";}
else if(percentage>=40){grade="fail";}

console.log("mathmarks"+mathmark);
console.log("physicsmarks"+physics);
console.log("chemistrymarks"+chemistry);
console.log("totalmarks"+totalmarks);
console.log("percentage"+percentage);
console.log("grade"+grade);