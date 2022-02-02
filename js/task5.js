let inp = document.querySelector('#name-input')
let outp = document.querySelector('#name-output')
let spanText = document.querySelector('#name-output');

inp.addEventListener('input',() =>{
    nameValue(inp.value)
})
let nameValue = (name) =>{
  if (name ==''){
    outp.innerText = 'stranger'
  }
  else{
  outp.innerText = name
  }
}