

function getDogImage() {
    // create a variable to store the form value
    const i = $('form #img-quantity').val();
    // add quantity at the end of the API link 
    fetch('https://dog.ceo/api/breeds/image/random/'+ i)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }

  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }
  
  $(function() {
    console.log('App ready!');
    watchForm();
  });

  