// Store the current URL hash in a variable. Loop through each section and close the <details> element inside. Then compare the hash to the section ID and open the <details> element back up if they are equal.

function openLink() {
    history.scrollRestoration = "manual";
    var theHash = window.location.hash;
    const secs = document.querySelectorAll("section:not(#leadin)");
    secs.forEach((section) => {
      section.querySelector("details").removeAttribute("open");
  
      if (theHash.substring(1) == section.id) {
        section.querySelector("details").setAttribute("open", "true");
      }
    });
  }
  
  window.addEventListener("hashchange", openLink);
  
  // Loop through all <details> elements and close all of them except the one that was just clicked
  details = document.querySelectorAll("details");
  
  details.forEach((detail) => {
    detail.addEventListener("click", function () {
      details.forEach((header) => {
        if (header != detail) {
          header.removeAttribute("open");
          console.log("closed!");
        }
      });
    });
  });
  