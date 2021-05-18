
// create modal window wrapper
const modalWrapper = document.createElement('div');
modalWrapper.setAttribute('id', 'modal-wrapper');

// approuve -- підтвердження
document.querySelector('.user-confirm button').addEventListener('click', function(){

    // add modal
    document.body.className = 'modal-hidden';
    document.body.append(modalWrapper);

    // show mobile basket
    document.getElementById('approuve').classList.add('active');
});

// click close
modalWrapper.addEventListener('click', () => {

    // clear
    document.body.className = '';
    modalWrapper.remove();        
    document.querySelectorAll('.approuve').forEach(item => item.classList.remove('active'));

});

// esc button
document.addEventListener('keydown', e => {
    if(e.code == 'Escape' || e.key == 'Escape'){
        
        // clear
        document.body.className = '';
        modalWrapper.remove();
        document.querySelectorAll('.approuve').forEach(item => item.classList.remove('active'));
    }
});

// робимо активною кнопку підтвердження
document.querySelector('#approuve input[type="password"]').addEventListener('input', function(){
    document.querySelector('#approuve button').className = 'active';
});
