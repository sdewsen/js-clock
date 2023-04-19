const secondHand = document.querySelector('.second-hand');
console.log(secondHand)
const minutesHand = document.querySelector('.min-hand');
console.log(minutesHand)
const hourHand = document.querySelector('.hour-hand');
console.log(hourHand)
function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds/60)*360 +90 );
  secondHand.style.transform = `rotate(${secondsDegree}deg)`
  const minutes = now.getMinutes();
  const minutesDegree = ((minutes/60)*360 +90 );
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`
  const hours = now.getHours();
  const hoursDegree = (((hours*360) + (minutes/2)) +90 );
  hourHand.style.transform = `rotate(${hoursDegree}deg)`
  
}
setInterval(setDate , 1000);