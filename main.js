const time=document.getElementById("time");
const startbutton=document.getElementById("start");
const stopbutton=document.getElementById("stop");
const resetbutton=document.getElementById("reset");

let starttime;
let stoptime=0;
let timeoutID;

function displaytime(){
  const currenttime=new Date(Date.now()-starttime+stoptime);
  const h =String(currenttime.getUTCHours()).padStart(1,'0');
  const m=String(currenttime.getMinutes()).padStart(1,'0');
  const s=String(currenttime.getSeconds()).padStart(1,'0');
  const ms=String(currenttime.getMilliseconds()).slice(0, 1);
  
  time.textContent=`${h}:${m}:${s}:${ms}`;
  timeoutID=setTimeout(displaytime);
}



startbutton.addEventListener(`click`,()=>{
  startbutton.disabled=true;
  stopbutton.disabled=false;
  resetbutton.disabled=true;
  starttime=Date.now();
  displaytime();
});

stopbutton.addEventListener(`click`,function(){
  startbutton.disabled=false;
  stopbutton.disabled=true;
  resetbutton.disabled=false;
  clearTimeout(timeoutID);
  stoptime+=(Date.now()-starttime);
});

resetbutton.addEventListener(`click`,function(){
  startbutton.disabled=false;
  stopbutton.disabled=true;
  resetbutton.disabled=true;
  time.textContent="0:0:0:0";
  stoptime=0
});
