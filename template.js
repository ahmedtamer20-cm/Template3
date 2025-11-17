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
  let btn = document.querySelector(".button")
window.onscroll = function(){
    
    if (window.scrollY >= 5000){
      btn.style.display = " block"
      btn.style.transition = "0.5s"

    }else{
      btn.style.display = " none"
    }
};
btn.onclick= function(){
   
    window.scrollTo({
      top: 0,
      
      right: 0, 
      behavior: "smooth",
    });
};

  let btn1 = document.querySelector(".go-down")

    
  
btn1.onclick= function(){
   
    window.scrollTo({
      top: 20000000,
      
      right: 0, 
      behavior: "smooth",
    });
};