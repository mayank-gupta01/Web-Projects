const codes = document.querySelectorAll('.code')
// focus method focus on the index which you give
codes[0].focus()

codes.forEach((code,idx) => {
    // keydown indicates which character was entered
    code.addEventListener('keydown', (e)=>{
        if(e.key>=0 && e.key<=9)
        {
            codes[idx].value = ''
            setTimeout(() => codes[idx+1].focus(), 10)
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => codes[idx-1].focus(), 10)
        }
    })
})