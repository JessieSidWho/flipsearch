$(`#loading`).hide();


$(`#submit`).on(`click`, event => {
    event.preventDefault();

    const username = $("#username").val().trim();
    const password = $("#password").val().trim();

    if (username !== "catman" || password !== "test") {
        $("#username").val("");
        $("#password").val("");
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Invalid Username or Password!',
        })
    }

    $.ajax({
        url: '/api/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ username, password })
    }).then(res => {
        $(`#login`).hide();
        $(`#loading`).show();
        $(`body`).attr("style", "background-color: #5D4674 !important;")
        $(`html`).attr("style", "background-color: #5D4674 !important;")

        setTimeout(function () {
            window.location.href = "/main";
        }, 3000);
    });
});

$(document).keyup(function(e) {
    // console.log(e);
    if (e.keyCode === 13) {
        event.preventDefault();

        const username = $("#username").val().trim();
        const password = $("#password").val().trim();

        if (username !== "catman" || password !== "test") {
            $("#username").val("");
            $("#password").val("");
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Invalid Username or Password!',
            })
        }

        $.ajax({
            url: '/api/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username, password })
        }).then(res => {
            $(`#login`).hide();
            $(`#loading`).show();
            $(`body`).attr("style", "background-color: #5D4674 !important;")
            $(`html`).attr("style", "background-color: #5D4674 !important;")

            setTimeout(function () {
                window.location.href = "/main";
            }, 3000);
        });
    }
})