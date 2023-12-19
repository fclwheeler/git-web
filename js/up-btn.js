    // Получить кнопку
    var mybutton = document.getElementById("myBtn");

    // Когда пользователь прокручивает вниз 20px от верхней части документа, показать кнопку
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Когда пользователь нажимает на кнопку, прокрутить до верхней части документа
    function topFunction() {
        document.body.scrollTop = 0; // Для Safari
        document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
    }