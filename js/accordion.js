const accordions = document.getElementsByClassName('accordion');

// Assign togglers to all accordions
for(i = 0; i < accordions.length; i++) {
    for(c = 0; c < accordions[i].childNodes.length; c++) {
        
        if(accordions[i].childNodes[c].className == "accordion-header") {
            accordions[i].childNodes[c].addEventListener('click', openThing)
        }
    }

    
    function openThing(event) {
        event.target.parentNode.classList.toggle('open');
        let accBody = this.parentNode.childNodes[i];
        if(event.target.parentNode.classList.contains('open')) {
            console.log('opened!');
            accBody.style.maxHeight = accBody.scrollHeight + "px";
            accBody.style.padding = "5px";

            
        }

        else {
            console.log('closed!');
            accBody.style.maxHeight = "0px";
            accBody.style.padding = "0 5px";
        }

    }
}

