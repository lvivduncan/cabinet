


const log = console.log;

{

    // кнопка редагування сторінки
    document.querySelectorAll('.collapse').forEach(element => {
        element.addEventListener('click', function(){
            this.classList.toggle('collapsed');

            // hidden area show/hide
            this.parentNode.querySelector('.hidden-area').classList.toggle('show');

        });
    });


    // якщо були зміни у полях -- кнопка стає активною
    document.getElementById('checkbox').addEventListener('click', function(){
        document.querySelector('.user-confirm').classList.add('active');

        if(this.checked == true){
            // show select
            this.closest('.hidden-area').querySelector('#tv-value').classList.remove('disabled-select');
            
        } else {
            // hide select
            this.closest('.hidden-area').querySelector('#tv-value').classList.add('disabled-select');

        }

    });


    
    // create modal window wrapper
    const modalWrapper = document.createElement('div');
    modalWrapper.setAttribute('id', 'modal-wrapper');
    
    // add new device
    document.querySelector('#add-device button').addEventListener('click', () => {
        
        // add modal
        document.body.className = 'modal-hidden';
        document.body.append(modalWrapper);

        // show mobile basket
        document.getElementById('modal').classList.add('active');
        
    });

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


    // описи тарифів
    document.querySelector('#tv-value').addEventListener('change', function(){

        const data = document.querySelector('#tv-value').value.split(',');

        document.querySelector('#tv-value-1').innerText = data[0];
        document.querySelector('#tv-value-2').innerText = data[1];
        document.querySelector('#tv-value-3').innerText = data[2];
        
        document.querySelector('.user-confirm').classList.add('active');

    });


    // робимо активною кнопку підтвердження
    document.querySelector('#approuve input[type="password"]').addEventListener('input', function(){
        document.querySelector('#approuve button').className = 'active';
    });

}

// todo: дати нормальні айдішки