$(`#loading`).hide();

$(`#submit`).on(`click`, event => {
    event.preventDefault();

    const username = $("#username").val().trim();
    const password = $("#password").val().trim();

    $.ajax({
        url: '/api/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({username, password})
    }).then(res => {
        $(`#login`).hide();
        $(`#loading`).show();
        $(`body`).attr("style", "background-color: #5D4674;")
        
        setTimeout( function() {
            window.location.href="/main";
        }, 3000);
    });
});