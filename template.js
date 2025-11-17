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
  let btn = document.querySelector(".button")
window.onscroll = function(){
    
    if (window.scrollY >= 5000){
      btn.classList.add("show")
    }else{
      btn.classList.remove("show")
    }
};
btn.onclick= function(){
   
    window.scrollTo({
      top: 0,
      right: 0, 
      behavior: "smooth",
    });
};




