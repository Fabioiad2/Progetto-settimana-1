const openModal = document.querySelector('#openModal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('#closeModal')
const form = document.querySelector('.staticForm')
const userName = document.querySelector('#name')
const useremail = document.querySelector('#email')
const select = document.querySelector('#select')
const messaggio = document.querySelector('#messaggio')
const userDate = document.querySelector('#date')
openModal.addEventListener('click',(e)=>{
   e.preventDefault()
    overlay.style.display = 'block'
})


const compiledForm = {
    userName:"",
    useremail:"",
    userSelect:"",
    userMessage:"",
    userDate:"",
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    compiledForm.userName = userName.value
    compiledForm.useremail = useremail.value
    compiledForm.userSelect = select.value
    compiledForm.userMessage = messaggio.value
    compiledForm.userDate = userDate.value
    console.log(compiledForm,'submit')
    form.reset()
})


closeModal.addEventListener('click',(e)=>{
     e.preventDefault()
    overlay.style.display = 'none'
})

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape'){
        overlay.style.display = 'none'
    }
})