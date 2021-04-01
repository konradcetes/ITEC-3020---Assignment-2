var pos = 0;
var neg = 0;

function find()
{
    var n = document.getElementById("num").value;
    if(n!=0){
        if(n>0){
            this.pos=this.pos+1;
        }else {
            this.neg=this.neg+1;
        }
    }else{
        document.getElementById("main").innerHTML=("Total Positive values entered: " +this.pos+"<br>Total Negative values entered: "+this.neg+"<br><br>Please refresh the page to start again");
    }
    document.getElementById('num').value='';
}