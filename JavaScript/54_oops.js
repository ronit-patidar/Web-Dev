//  class 

class Collage{
    constructor(name,semister,roll_no,section,grade,placed){
       this.name=name;
       this.semister=semister;  
       this.roll_no=roll_no;
       this.section=section;
       this.grade=grade;
       this.placed=placed;
    }
}
Collage.prototype.fees = 127000;  // is used if common in all class
let student = new Collage("ronit",4,169,"C",7.59,true);
console.log(student);
console.log(Collage.prototype);
// sabse pehle property ko object me dundenge agar nahi he to prototype me dundte hn