// Button click event handler
function navigateToPage() {
    // Redirect to the desired HTML page
    window.location.href = "login.html";
  }
  
  // Get the button element
  const button = document.getElementById("myButton");
  
  // Add click event listener to the button
  button.addEventListener("click", navigateToPage);