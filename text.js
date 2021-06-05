function result(){
var score = 0,i;
for(i=1;i<6;i++){
if(document.getElementById("correct"+i).checked)
{
    score++;
}}
  
  return score;
 } 
function showmarks(){
  const score1=result();
 alert("YOUR SCORE : "+score1);
 }

var timeflag=new Date();
var starttest=document.getElementsByClassName("welcomebutton");
var endtest=document.getElementsByClassName("submit");
var timemin;
var timesec;
var time =300;

function settimer()
{
    var timer=document.getElementsByClassName("time");   
        timesec=time%60;
        timemin=(time-timesec)/60;
        if(timesec<10)
            l="Time: "+timemin+":0"+timesec;
        else
            l="Time: "+timemin+":"+timesec;
        timer[0].innerHTML=l;
        time--;
    if(time<=1)
    {
        clearInterval(mytimer);

        document.getElementsByClassName('resultbutton').onclick = showmarks();
    }
}
var mytimer = setInterval(settimer,1000);


 