$(`#login`).on(`click`, event => {
    event.preventDefault();

    const username = $("#username").val().trim();
    const password = $("#password").val().trim();

    // console.log(username, password);

    $.ajax({
        url: '/api/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({username, password})
    }).then(res => {
        console.log(res);
    });
});