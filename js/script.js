$(document).ready(function() {

    $('.menu-trigger').click(function () {
        $('nav ul').slideToggle(500);
    });

    $(window).resize(function () {
        if ($(window).width() > 500 ){
            $('nav ul').removeAttr('style');
        }
    })


});





function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

$(document).ready(function() {
    $(".registration-button").fancybox();
    $('reg-success').submit(function(){
        $.fancybox.close(true);

        return false;
    });

    // $("#send").on("click", function(){
    //     console.log(this);
    //     return false;
    //     var emailval  = $("#email").val();
    //     var phone = $("#phone").val();
    //     var accept = $("#accept").prop('checked');
    //     var mailvalid = validateEmail(emailval);
    //
    //     if(mailvalid == false) {
    //         $("#email").addClass("error");
    //     }
    //     else if(mailvalid == true){
    //         $("#email").removeClass("error");
    //     }
    //
    //     if(phone < 4) {
    //         $("#phone").addClass("error");
    //     }
    //     else if(phone >= 4){
    //         $("#phone").removeClass("error");
    //     }
    //
    //     if(mailvalid == true && msglen >= 4) {
    //         // если обе проверки пройдены
    //         // сначала мы скрываем кнопку отправки
    //         $("#send").replaceWith("<em>отправка...</em>");
    //
    //         $.ajax({
    //             type: 'POST',
    //             url: 'sendmessage.php',
    //             data: $("#contact").serialize(),
    //             success: function(data) {
    //                 if(data == "true") {
    //                     $("#contact").fadeOut("fast", function(){
    //                         $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
    //                         setTimeout("$.fancybox.close()", 1000);
    //                     });
    //                 }
    //             }
    //         });
    //     }
    // });
});


function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

$(document).ready(function() {
    $(".open-alert").fancybox();
    $("#contact").submit(function() { return false; });
    $('reg-success').submit(function(){
        $.fancybox.close(true);

        return false;
    });

    $("#send").on("click", function(){
        var emailval  = $("#email").val();
        var msgval    = $("#msg").val();
        var msglen    = msgval.length;
        var mailvalid = validateEmail(emailval);

        if(mailvalid == false) {
            $("#email").addClass("error");
        }
        else if(mailvalid == true){
            $("#email").removeClass("error");
        }

        if(msglen < 4) {
            $("#msg").addClass("error");
        }
        else if(msglen >= 4){
            $("#msg").removeClass("error");
        }

        if(mailvalid == true && msglen >= 4) {
            // если обе проверки пройдены
            // сначала мы скрываем кнопку отправки
            $("#send").replaceWith("<em>отправка...</em>");

            $.ajax({
                type: 'POST',
                url: 'sendmessage.php',
                data: $("#contact").serialize(),
                success: function(data) {
                    if(data == "true") {
                        $("#contact").fadeOut("fast", function(){
                            $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
                            setTimeout("$.fancybox.close()", 1000);
                        });
                    }
                }
            });
        }
    });
});


function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

$(document).ready(function() {
    $(".reg-thx").fancybox();
    $("#contact").submit(function() { return false; });
    $('reg-success').submit(function(){
        $.fancybox.close(true);

        return false;
    });

    $("#send").on("click", function(){
        var emailval  = $("#email").val();
        var msgval    = $("#msg").val();
        var msglen    = msgval.length;
        var mailvalid = validateEmail(emailval);

        if(mailvalid == false) {
            $("#email").addClass("error");
        }
        else if(mailvalid == true){
            $("#email").removeClass("error");
        }

        if(msglen < 4) {
            $("#msg").addClass("error");
        }
        else if(msglen >= 4){
            $("#msg").removeClass("error");
        }

        if(mailvalid == true && msglen >= 4) {
            // если обе проверки пройдены
            // сначала мы скрываем кнопку отправки
            $("#send").replaceWith("<em>отправка...</em>");

            $.ajax({
                type: 'POST',
                url: 'sendmessage.php',
                data: $("#contact").serialize(),
                success: function(data) {
                    if(data == "true") {
                        $("#contact").fadeOut("fast", function(){
                            $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
                            setTimeout("$.fancybox.close()", 1000);
                        });
                    }
                }
            });
        }
    });
});




function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

$(document).ready(function() {
    $(".reg-thx").fancybox();
    $("#contact").submit(function() { return false; });
    $('reg-success').submit(function(){
        $.fancybox.close(true);

        return false;
    });

    $("#send").on("click", function(){
        var emailval  = $("#email").val();
        var msgval    = $("#msg").val();
        var msglen    = msgval.length;
        var mailvalid = validateEmail(emailval);

        if(mailvalid == false) {
            $("#email").addClass("error");
        }
        else if(mailvalid == true){
            $("#email").removeClass("error");
        }

        if(msglen < 4) {
            $("#msg").addClass("error");
        }
        else if(msglen >= 4){
            $("#msg").removeClass("error");
        }

        if(mailvalid == true && msglen >= 4) {
            // если обе проверки пройдены
            // сначала мы скрываем кнопку отправки
            $("#send").replaceWith("<em>отправка...</em>");

            $.ajax({
                type: 'POST',
                url: 'sendmessage.php',
                data: $("#contact").serialize(),
                success: function(data) {
                    if(data == "true") {
                        $("#contact").fadeOut("fast", function(){
                            $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
                            setTimeout("$.fancybox.close()", 1000);
                        });
                    }
                }
            });
        }
    });
});





function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

$(document).ready(function() {
    $(".alert").fancybox();
    $("#contact").submit(function() { return false; });
    $('reg-success').submit(function(){
        $.fancybox.close(true);

        return false;
    });

    $("#send").on("click", function(){
        var emailval  = $("#email").val();
        var msgval    = $("#msg").val();
        var msglen    = msgval.length;
        var mailvalid = validateEmail(emailval);

        if(mailvalid == false) {
            $("#email").addClass("error");
        }
        else if(mailvalid == true){
            $("#email").removeClass("error");
        }

        if(msglen < 4) {
            $("#msg").addClass("error");
        }
        else if(msglen >= 4){
            $("#msg").removeClass("error");
        }

        if(mailvalid == true && msglen >= 4) {
            // если обе проверки пройдены
            // сначала мы скрываем кнопку отправки
            $("#send").replaceWith("<em>отправка...</em>");

            $.ajax({
                type: 'POST',
                url: 'sendmessage.php',
                data: $("#contact").serialize(),
                success: function(data) {
                    if(data == "true") {
                        $("#contact").fadeOut("fast", function(){
                            $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
                            setTimeout("$.fancybox.close()", 1000);
                        });
                    }
                }
            });
        }
    });
});


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



/*Валидация формы*/

$(document).ready(function(){
    $("#reg-form").on("submit", function (e) {
        e.preventDefault();
        var isError = false;
        var data = $(this).serializeArray();
        console.log(data);
        $.each(data, function (i, v) {
            console.log(v);
            if(v.value.length > 0) {
                if (v.name == "email"){
                    console.log(!isValidEmailAddress(v.value));
                    if(t){
                        $("#email").addClass("error");
                        isError = true;
                    } else {
                        $("#email").removeClass("error")
                    }
                }
                if(v.name == "phone"){
                    if(!isValidPhoneNumber(v.value)){
                        $("#phone").addClass("error");
                        isError = true;
                    } else {
                        $("#phone").removeClass("error");
                    }
                }
            } else {
                isError = true;
                $("#" + v.name).addClass('error');
            }
        });
        if(!isError){
            $.ajax({
               type: "POST",
               url: "send.php",
               data: data
            }).done(function () {
                alert("")
            })
        }
    })
});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

function isValidPhoneNumber(phoneNumber) {
    var pattern = /^[0-9()\-+ ]+$/;
    return pattern.test(phoneNumber);
}


