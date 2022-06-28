const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.getElementById('send')
const panel = document.getElementById('panel')

selectedRating = 'Satisfied'

// if we add event listener on every rating then there is need to write more and more code(suppose if we have 200 rating)
//so instead of above case we should use event bubbling
ratingsContainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')

        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e)=>{
    
    panel.innerHTML=`
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive(){
    ratings.forEach((rating)=>{
        rating.classList.remove('active')
    })
}