const accordions = document.getElementsByClassName('accordion');
const optionCloseOthers = true;

// Assign togglers to all accordions
// Loop through for all instances of accordion class
for(i = 0; i < accordions.length; i++) {

    // Add a listener to header in the accordions as the activation point
    for(c = 0; c < accordions[i].childNodes.length; c++) {
        if(accordions[i].childNodes[c].className == "accordion-header") {
            accordions[i].childNodes[c].addEventListener('click', openThing)
        }
    }

    // Open the accordion
    function openThing(event) {
        
        // Add a way to track rather or not the accordion is open by giving it the "open" class
        event.target.parentNode.classList.toggle('open');

        // Select body element. Should always be the third child, since there is the header and the header text then the body element
        let accBody = this.parentNode.childNodes[3];

        // Check to see if the accordion is open or not
        if(event.target.parentNode.classList.contains('open')) {

            // Set the max height to the scroll height instead of a fixed height or percentage so that the animation stops and starts at the bottom of the accordion
            console.log('opened!');
            accBody.style.maxHeight = accBody.scrollHeight + "px";
            accBody.style.padding = "5px";
        }

        else {

            // Close the accordion by resetting the CSS
            console.log('closed!');
            accBody.style.maxHeight = "0px";
            accBody.style.padding = "0 5px";
        }
    }
}

