let emailValid =  document.querySelector("[name='email']")
   document.forms[0].onsubmit /*هتبعت امتى*/  = function (e){
         let emailINValid = false
        
         if(emailValid.value !== "" /*لو هى مش فاضية */  ){   
           emailINValid = true /*send */
         }
         //
         
          
         if (emailINValid === false ){
            e.preventDefault()
         }
    }