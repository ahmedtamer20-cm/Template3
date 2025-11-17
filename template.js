let emailValid =  document.querySelector("[name='email']")
   document.forms[0].onsubmit   = function (e){
         let emailINValid = false
        
         if(emailValid.value !== ""   ){   
           emailINValid = true 
         }
         else{
             e.preventDefault()
         }
    }
    // scroll to top
  let scrollToTopBtn = document.querySelector(".button")
window.onscroll = function(){
    
    if (window.scrollY >= 5000){
      scrollToTopBtn.classList.add("show")
    }else{
      scrollToTopBtn.classList.remove("show")
    }
};
scrollToTopBtn.onclick= function(){
   
    window.scrollTo({
      top: 0,
      right: 0, 
      behavior: "smooth",
    });
};

// Seconds & Minutes Timers
let secondsSpan = document.querySelector(".seconds");
let minutesSpan = document.querySelector(".minutes");
let secondsCounter = setInterval(secondsCountdown, 1000);

function secondsCountdown() {
    // قراءة القيمة الحالية للثواني
    let seconds = parseInt(secondsSpan.innerHTML) || 0;

    // زيادة ثانية
    seconds += 1;

    // لو عدّينا 59 نرجع 0 ونزوّد الدقيقة
    if (seconds >= 60) {
        seconds = 0;

        // تحديث الدقايق
        let minutes = parseInt(minutesSpan.innerHTML) || 0;
        minutes += 1;

        // لو عدّينا 59 دقيقة نرجع تاني 0
        if (minutes >= 60) {
            minutes = 0;
        }

        minutesSpan.innerHTML = minutes;
    }

    secondsSpan.innerHTML = seconds;
}

// Hours Timer &Days
let hoursSpan = document.querySelector(".hours");
let daysSpan = document.querySelector(".days");
let hoursSpanCounter = setInterval(hoursCountdown,  3600000);

function hoursCountdown() {
    let hours = parseInt(hoursSpan.innerHTML) || 0;

    // تحديث القيمة حسب الاتجاه الحالي
    hours += 1;

   

    // لو وصلنا لـ 0 نخلي الاتجاه طالع
    if (hours >= 24) {
        hours = 0;

        let days = parseInt(daysSpan.innerHTML) || 0;
        days += 1;

        daysSpan.innerHTML = days;
    }

    hoursSpan.innerHTML = hours;
}



