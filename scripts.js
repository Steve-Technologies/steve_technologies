body = document.querySelector('body')
read_steve = document.querySelector('#read_steve');
steve_popup = document.querySelector('#more_steve')
read_steve.addEventListener('click',()=>{
    steve_popup.showModal();
    body.classList.add('modal-open')
})

read_joyce = document.querySelector('#read_joyce');
joyce_popup = document.querySelector('#more_joyce')
read_joyce.addEventListener('click',()=>{
    joyce_popup.showModal();
    body.classList.add('modal-open')
})

function close_popup(e){
    body.classList.remove('modal-open')
    e.parentElement.parentElement.parentElement.close();
 }