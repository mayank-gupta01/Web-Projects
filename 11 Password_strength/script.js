const password = document.getElementById('password')
const background = document.getElementById('background')
const submitEl = document.getElementById('submit')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})

submitEl.addEventListener('click', ()=> {
  const passVal = password.value

  let hasLower = false
  let hasUpper = false
  let hasSymbol = false
  let hasNumber = false

  for(let i=0; i<passVal.length; i++) {
    const ch = passVal[i]
    if (!isNaN(ch * 1)){
      hasNumber = true;
   }
    else {
      if (ch == ch.toUpperCase()) {
         hasUpper = true;
      }
      if (ch == ch.toLowerCase()){
         hasLower = true;
      }
   }
  }
  
  resultEl = document.getElementById("result")
  if(hasLower && hasUpper && hasNumber)
  {
    resultEl.style.color = "green"
    resultEl.innerHTML = "Password is Strong"
  }
  else{
    resultEl.style.color = "red"
    resultEl.innerHTML = "Password is Weak"
  }
})