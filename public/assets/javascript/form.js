$(document).ready(function () {

  $("#formSubmit").on("click", function () {
    event.preventDefault();

    var newZip = {
      zip: $("#zip").val().trim(),
      city: $("#city").val().trim(),
      rproperties: $("#rprop").val().trim(),
      cproperties: $("#cprop").val().trim(),
      avgyearbuilt: $("#year").val().trim(),
      avgsqft: $("#sqft").val().trim(),
      sales2019: $("#sales19").val().trim(),
      flippercent2019: $("#fp19").val().trim(),
      flippedhomes2019: $("#fh19").val().trim(),
      sales2018: $("#sales18").val().trim(),
      flippercent2018: $("#fp18").val().trim(),
      flippedhomes2018: $("#fh18").val().trim()
    };

    // console.log(newZip);

    // Send the POST request.
    $.ajax({
      url: "/api/form",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(newZip)
    }).then(
      function (res) {
        console.log("Created New Area by Zip Code", res);
        // Reload the page to get the updated list
        // location.reload();
        Swal.fire(
          'SUCCESS!',
          'Data by Zip Code has been added!',
          'success'
        )

        $(".fieldClear").val("");
      }
    );

  })

});