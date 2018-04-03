$(document).ready(function() {

    $('.menu-trigger').click(function () {
        $('nav ul').slideToggle(500);
    });

    $(window).resize(function () {
        if ($(window).width() > 500 ){
            $('nav ul').removeAttr('style');
        }
    })


// function validateEmail(email) {
//     var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return reg.test(email);
// }
//
// $(document).ready(function() {
//     $(".registration-button").fancybox();
//     $("#contact").submit(function() { return false; });
//     $('reg-success').submit(function(){
//         $.fancybox.close(true);
//
//         return false;
//     });
//
//     $("#send").on("click", function(){
//         var emailval  = $("#email").val();
//         var msgval    = $("#msg").val();
//         var msglen    = msgval.length;
//         var mailvalid = validateEmail(emailval);
//
//         if(mailvalid == false) {
//             $("#email").addClass("error");
//         }
//         else if(mailvalid == true){
//             $("#email").removeClass("error");
//         }
//
//         if(msglen < 4) {
//             $("#msg").addClass("error");
//         }
//         else if(msglen >= 4){
//             $("#msg").removeClass("error");
//         }
//
//         if(mailvalid == true && msglen >= 4) {
//             // если обе проверки пройдены
//             // сначала мы скрываем кнопку отправки
//             $("#send").replaceWith("<em>отправка...</em>");
//
//             $.ajax({
//                 type: 'POST',
//                 url: 'sendmessage.php',
//                 data: $("#contact").serialize(),
//                 success: function(data) {
//                     if(data == "true") {
//                         $("#contact").fadeOut("fast", function(){
//                             $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
//                             setTimeout("$.fancybox.close()", 1000);
//                         });
//                     }
//                 }
//             });
//         }
//     });
// });
//
//
// function validateEmail(email) {
//     var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return reg.test(email);
// }
//
// $(document).ready(function() {
//     $(".open-alert").fancybox();
//     $("#contact").submit(function() { return false; });
//     $('reg-success').submit(function(){
//         $.fancybox.close(true);
//
//         return false;
//     });
//
//     $("#send").on("click", function(){
//         var emailval  = $("#email").val();
//         var msgval    = $("#msg").val();
//         var msglen    = msgval.length;
//         var mailvalid = validateEmail(emailval);
//
//         if(mailvalid == false) {
//             $("#email").addClass("error");
//         }
//         else if(mailvalid == true){
//             $("#email").removeClass("error");
//         }
//
//         if(msglen < 4) {
//             $("#msg").addClass("error");
//         }
//         else if(msglen >= 4){
//             $("#msg").removeClass("error");
//         }
//
//         if(mailvalid == true && msglen >= 4) {
//             // если обе проверки пройдены
//             // сначала мы скрываем кнопку отправки
//             $("#send").replaceWith("<em>отправка...</em>");
//
//             $.ajax({
//                 type: 'POST',
//                 url: 'sendmessage.php',
//                 data: $("#contact").serialize(),
//                 success: function(data) {
//                     if(data == "true") {
//                         $("#contact").fadeOut("fast", function(){
//                             $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
//                             setTimeout("$.fancybox.close()", 1000);
//                         });
//                     }
//                 }
//             });
//         }
//     });
// });
//
//
// function validateEmail(email) {
//     var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return reg.test(email);
// }
//
// $(document).ready(function() {
//     $(".reg-thx").fancybox();
//     $("#contact").submit(function() { return false; });
//     $('reg-success').submit(function(){
//         $.fancybox.close(true);
//
//         return false;
//     });
//
//     $("#send").on("click", function(){
//         var emailval  = $("#email").val();
//         var msgval    = $("#msg").val();
//         var msglen    = msgval.length;
//         var mailvalid = validateEmail(emailval);
//
//         if(mailvalid == false) {
//             $("#email").addClass("error");
//         }
//         else if(mailvalid == true){
//             $("#email").removeClass("error");
//         }
//
//         if(msglen < 4) {
//             $("#msg").addClass("error");
//         }
//         else if(msglen >= 4){
//             $("#msg").removeClass("error");
//         }
//
//         if(mailvalid == true && msglen >= 4) {
//             // если обе проверки пройдены
//             // сначала мы скрываем кнопку отправки
//             $("#send").replaceWith("<em>отправка...</em>");
//
//             $.ajax({
//                 type: 'POST',
//                 url: 'sendmessage.php',
//                 data: $("#contact").serialize(),
//                 success: function(data) {
//                     if(data == "true") {
//                         $("#contact").fadeOut("fast", function(){
//                             $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
//                             setTimeout("$.fancybox.close()", 1000);
//                         });
//                     }
//                 }
//             });
//         }
//     });
// });
//
//
//
//
// function validateEmail(email) {
//     var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return reg.test(email);
// }
//
// $(document).ready(function() {
//     $(".reg-thx").fancybox();
//     $("#contact").submit(function() { return false; });
//     $('reg-success').submit(function(){
//         $.fancybox.close(true);
//
//         return false;
//     });
//
//     $("#send").on("click", function(){
//         var emailval  = $("#email").val();
//         var msgval    = $("#msg").val();
//         var msglen    = msgval.length;
//         var mailvalid = validateEmail(emailval);
//
//         if(mailvalid == false) {
//             $("#email").addClass("error");
//         }
//         else if(mailvalid == true){
//             $("#email").removeClass("error");
//         }
//
//         if(msglen < 4) {
//             $("#msg").addClass("error");
//         }
//         else if(msglen >= 4){
//             $("#msg").removeClass("error");
//         }
//
//         if(mailvalid == true && msglen >= 4) {
//             // если обе проверки пройдены
//             // сначала мы скрываем кнопку отправки
//             $("#send").replaceWith("<em>отправка...</em>");
//
//             $.ajax({
//                 type: 'POST',
//                 url: 'sendmessage.php',
//                 data: $("#contact").serialize(),
//                 success: function(data) {
//                     if(data == "true") {
//                         $("#contact").fadeOut("fast", function(){
//                             $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
//                             setTimeout("$.fancybox.close()", 1000);
//                         });
//                     }
//                 }
//             });
//         }
//     });
// });
//
//
//
//
//
// function validateEmail(email) {
//     var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return reg.test(email);
// }
//
// $(document).ready(function() {
//     $(".alert").fancybox();
//     $("#contact").submit(function() { return false; });
//     $('reg-success').submit(function(){
//         $.fancybox.close(true);
//
//         return false;
//     });
//
//     $("#send").on("click", function(){
//         var emailval  = $("#email").val();
//         var msgval    = $("#msg").val();
//         var msglen    = msgval.length;
//         var mailvalid = validateEmail(emailval);
//
//         if(mailvalid == false) {
//             $("#email").addClass("error");
//         }
//         else if(mailvalid == true){
//             $("#email").removeClass("error");
//         }
//
//         if(msglen < 4) {
//             $("#msg").addClass("error");
//         }
//         else if(msglen >= 4){
//             $("#msg").removeClass("error");
//         }
//
//         if(mailvalid == true && msglen >= 4) {
//             // если обе проверки пройдены
//             // сначала мы скрываем кнопку отправки
//             $("#send").replaceWith("<em>отправка...</em>");
//
//             $.ajax({
//                 type: 'POST',
//                 url: 'sendmessage.php',
//                 data: $("#contact").serialize(),
//                 success: function(data) {
//                     if(data == "true") {
//                         $("#contact").fadeOut("fast", function(){
//                             $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
//                             setTimeout("$.fancybox.close()", 1000);
//                         });
//                     }
//                 }
//             });
//         }
//     });
// });


$(document).ready(function(){

    $("#slow-down").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(function () {

    $('#my-menu').mmenu({
        extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black']
    });


});

/*Validation*/


$(function () {

    $('#reg-modal').fancybox();
    $('#reg-success').fancybox();
    $('.alert-modal').fancybox();
    $('#alert-success').fancybox();

    $('.button-close-f').on('click', function (e) {
        e.preventDefault();
        setTimeout(function (e) {
            $.fancybox.close();
        }, 1);
    });

    $('.button-reg').on('click', function (e) {
        $.fancybox.open('#reg');
    });

    $('#button-open-alert').on('click', function (e) {
        $.fancybox.open('#alert');
    });


    $("#js-register-form").validate({
       rules: {
           form_email:{
               required: true,
               email: true
           },
           form_phone:{
               required: true,
           },
           form_check:{
               required: true
           }
       },

        submitHandler: function(form){
            $.ajax({
                url: "mail.php",
                type: "POST",
                data: $(form).serializeArray(),
                success: function (response) {
                    $.fancybox.open("#reg-success");
                }
            })
        }

    });



    $("#reg").validate({
        debug: true,
        rules: {
            form_email:{
                required: true,
                email: true
            },
            form_phone:{
                required: true,
            },
            form_check:{
                required: true
            }
        },
        submitHandler: function(form){
            console.log(form);
            $.ajax({
                url: "mail.php",
                type: "POST",
                data: $(form).serializeArray(),
                success: function (response) {
                    $.fancybox.open("#reg-success");
                }
            })
        }

    });







    $("#alert").validate({
        debug: true,
        rules: {
            form_email:{
                required: true,
                email: true
            },
            form_phone:{
                required: true,
            },
            form_check:{
                required: true
            }
        },
        submitHandler: function(form){
            console.log(form);
            $.ajax({
                url: "mail.php",
                type: "POST",
                data: $(form).serializeArray(),
                success: function (response) {
                    $.fancybox.open("#alert-success");
                }
            })
        }

    });













});

    var clock;
    clock = $(".clock").FlipClock({
        clockFace : "DailyCounter",
        autoStart : false,
        language : "ru",
        callbacks : {
            stop : function () {
                $(".message").html("Время прошло");
            }
        }
    });

    clock.setTime(50000);
    clock.setCountdown(true);
    clock.start();




});