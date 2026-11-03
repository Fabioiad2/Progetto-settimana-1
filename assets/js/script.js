const openModal = document.querySelector('#openModal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('#closeModal')
openModal.addEventListener('click',(e)=>{
   e.preventDefault()
    overlay.style.display = 'block'
})



closeModal.addEventListener('click',(e)=>{
     e.preventDefault()
    overlay.style.display = 'none'
})