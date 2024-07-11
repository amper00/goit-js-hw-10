import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let timerInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0]; 


   document.querySelector("button[data-start]").disabled = true;
   document.querySelector("button[data-start]").classList.add("disabled");
    if (userSelectedDate < Date.now()) {
      
      
         iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
     
      document.querySelector("button[data-start]").disabled = false;
      document.querySelector("button[data-start]").classList.remove("disabled");
    }
  }
};

flatpickr("#datetime-picker", options);





function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



function addLeadingZero(value)
{
  return String(value).padStart(2, 0);
}


function timer()
{

  const currentTime = Date.now();
  const Remainingtime = userSelectedDate - currentTime;
  console.log(Remainingtime);
  if (Remainingtime < 0)
  {
    document.querySelector("[data-days]").textContent = '0';
    document.querySelector("[data-hours]").textContent = '0';
    document.querySelector("[data-minutes]").textContent = '0';
    document.querySelector("[data-seconds]").textContent = '0';


  }

const { days, hours, minutes, seconds } = convertMs(Remainingtime);

    document.querySelector("[data-days]").textContent = addLeadingZero(days);
    document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
    document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
    

  }

document.querySelector('button[data-start]').addEventListener('click', () =>

{
  // document.querySelector('button[data-start]').disabled = true;
  document.querySelector('button[data-start]').classList.add("disabled");

  timer();
  timerInterval = setInterval(timer ,1000)


})