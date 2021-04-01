function calgrade(){
    var num = document.getElementById("number").value;
    var n= parseInt(num);
    var grade = "";
    if(num>=0 && num<=40){
        grade = " F";
    } else if(num>=40 && num<=49){
        grade = " E";
    } else if(num>=50 && num<=54){
        grade = " D";
    } else if(num>=55 && num<=59){
        grade = " D+";
    } else if(num>=60 && num<=64){
        grade = " C";
    } else if(num>=65 && num<=69){
        grade = " C+";
    } else if(num>=70 && num<=74){
        grade = " B";
    } else if(num>=75 && num<=79){
        grade = " B+";
    } else if(num>=80 && num<=89){
        grade = " A";
    } else if(num>=90 && num<=100){
        grade = " A+";
    } else{
        grade = " You entered a wrong grade."
    }
    document.getElementById("grade").innerHTML=grade;
}