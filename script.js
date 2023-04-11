$('#delivery').click(function() {
    $(this).addClass('active');
    $('#pickup').removeClass('active');
    $('#search').show();
    $('#list-address').hide();
});

$('#pickup').click(function() {
    $(this).addClass('active');
    $('#delivery').removeClass('active');
    $('#list-address').show();
    $('#search').hide();
});

$('#login-btn').click(function() {
    $('#login').dialog();
});

// $('#close-window').click(function (){
//    $('#login').;
// });
