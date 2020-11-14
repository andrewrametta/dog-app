function getDogImage(qty) {
  // create a variable to store the form value

  // add quantity at the end of the API link
  fetch(`https://dog.ceo/api/breeds/image/random/${qty}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson));
}

function displayResults(results) {
  console.log(results);
  $(".images").html("");
  results.message.map((imgurl) =>
    $(".images").append(`<img src="${imgurl}" width="300"/>`)
  );
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    const qty = $("form #img-quantity").val();
    getDogImage(qty);
  });
}

$(function () {
  console.log("App ready!");
  watchForm();
});
