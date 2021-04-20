(function () {

    // 1. кнопка редагування сторінки
    $('.collapse').on('click', function () {
        $(this).toggleClass('collapsed');

        $(this).siblings('.hidden-area').fadeToggle(100);
    });

    // 2. якщо були зміни у полях -- кнопка стає активною
    $('#checkbox').on('click', function () {
        $('.user-confirm').addClass('active');

        // перевірка чи активна послуга (для активації полів)
        if($(this).prop('checked')){
            $(this).parents('.user-data').find('select').removeClass('disabled-select');
        } else {
            $(this).parents('.user-data').find('select').addClass('disabled-select');
        }
    });

    // кількість полів (min - 3, max - 5)
    var devices = 5;

    // кількість кліків
    var click = 0;

    // дані, які вставляються по дефолту в <ol class="user-data">
    // початковий блок (також вставляється після видалення пристрою)
    var origin = '<li><p>Новий пристрій</p></li>';

    // приклад даних
    var code = '<span>Код активації <strong>ABC132</strong> для застосунку Omega-TV </span>';

    // приклад даних
    var playlist = '<a href="">Завантажити плейлист</a>';

    // проміжний масив, в який кладуться дані для рендерингу
    var data = [];
    // for (let i = 0; i < devices; i++) {
    //     data.push(origin);
    // }
    
    // todo: кладемо об'єкти з id та даними
    for (let i = 0; i < devices; i++) {
        data.push({
            id:i,
            line:origin
        });
    }
    
    // функція оновлення DOM (відмальовує масив)
    function render(){
        // $('#tv-devices ol.user-data').html(data);

        var renderData = '';

        for (let i = 0; i < data.length; i++) {
            
            renderData += data[i].line;
            
        }

        $('#tv-devices ol.user-data').html(renderData);
    }

    // 3.1 кількість полів по дефолту (для тесту поклав 5)
    render();

    // 3.2 описи тарифів 
    $('#tv-value').on('change', function(){
        var data = $('#tv-value').val().split(',');

        // міняємо кількість полів
        devices = data[1];

        $('#tv-value-1').text(data[0]);
        $('#tv-value-2').text(devices);
        $('#tv-value-3').text(data[2]);

        $('.user-confirm').addClass('active');

        render();

    });

    // 4. fancybox

    // 5. підтвердження
    $('#approuve input[type="password"]').on('input', function () {
        $('#approuve button').addClass('active');
    });

    // 6. показати блок пристроїв після збереження тарифу
    $('#approuve button').on('click', function(){
        $('#tv-devices').addClass('active');

        // деактивую кнопку "зберегти зміни"
        $('.user-confirm').removeClass('active');

        // todo: remove fancybox 
    });

    // клік на кнопку додавання
    function add(element){
        click++;

        if(click-1 != devices){
            
/* 
            // оновлення масиву (видаляємо 1 li-елемент і додаємо в кінець li-заглушку)
            data.unshift('<li class="insert">'+ element +'<span class="icon-on-the-right delete" data-fancybox="" data-src="#delete-item" data-modal="true" href="javascript:;" data-id="' + (click-1) + '"></span></li>');

            data.pop();
*/

            // оновлення масиву з об'єктами (видаляємо 1 li-елемент і додаємо у кінець li-заглушку)
            var insert = '<li class="insert">'+ element +'<span class="icon-on-the-right delete" data-fancybox data-src="#delete-item" data-modal="true" href="javascript:;" data-id="' + (click-1) + '"></span></li>'

            data.unshift({
                id:click, 
                line:insert
            });
            data.pop();

        } else {
            click = devices;
        }

        // вимикаємо батони
        if(click == devices){
            $('#add-device').removeClass('active');
        }
        
        render();
    }

    // 7.0 додати код
    $('#add-code').on('click', function(){
        add(code);
    });

    // 7.1 додати плейлист
    $('#add-playlist').on('click', function(){
        add(playlist);
    });

    // 8. клік на кнопці видалення
    $('#tv-devices ol.user-data').on('click', function(e){
        click--;
        
        // якщо клікнули саме на кнопку видалення
        if(e.target.classList.contains('delete')){
            // номер поля
            var attr = e.target.getAttribute("data-id");

            data.splice(attr,1); // видалити аттр - 1 раз
            // todo: видалити той об'єкт, в якого айді співпала
            // ................................................


            // data.push(origin); // вставити в кінець заглушку
            data.push({
                id:click,
                line:origin
            }); // вставити в кінець заглушку

            // вмикаємо батони
            if(click != devices) {
                $('#add-device').addClass('active');
            }
            
            console.log(attr, click, data)
        }
        render();

    });


})();