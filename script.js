function startRocket() {
    var speedInput = document.getElementById('speedInput');
    var rocket = document.getElementById('rocket');
  
    var speed = parseInt(speedInput.value, 10) || 1; // Get input value and fallback to 1 if non-numeric.
  
    rocket.style.left = "100%"; // Move the rocket to the right side of the screen.
  
    setTimeout(function() {
      rocket.style.left = "-100px"; // Move the rocket back to the left side of the screen.
    }, speed * 1000); // Convert speed to milliseconds.
  
    speedInput.value = ""; // Clear input value after starting.
  }



  /* -----Gemini ai----- */

  const profilePic = document.querySelector('.profile-pic');
const profileUpload = document.getElementById('profile-upload');

profilePic.addEventListener('click', function() {
    profileUpload.click();
});

profileUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        profilePic.src = reader.result;
    };

    reader.readAsDataURL(file);
});