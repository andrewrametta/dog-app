function getDogImage(breed) {
  // add breed at the end of the API link
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson));
}

function displayResults(responseJson) {
  //replace the existing image with the new one
  $(".results-img").replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $(".results").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    const breed = $("form #img-breed").val();
    getDogImage(breed);
  });
}

$(function () {
  console.log("App ready!");
  watchForm();
});
