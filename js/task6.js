let inp = document.querySelector('#validation-input')
let dataLength = inp.getAttribute("data-length");
inp.addEventListener('focus',(e)=>{
    e.target.classList.remove('valid');
    e.target.classList.remove('invalid');
})
inp.addEventListener('focusout', (e) =>{
      if (inp.value.length == dataLength){
          e.target.classList.add('valid');
        } else{
            e.target.classList.add('invalid');
        }
      })