(() => {

    const panels = document.querySelector('#teamSection');
    const btns = document.querySelectorAll('.button');
   
    btns.forEach( btn => (btn.addEventListener('click', () =>  {
        if (panels.style.display === "none") {
            panels.style.display = "block";

        panels[1].textContent = things[btns.dataset.key].coding;
        panels[2].textContent = things[btns.dataset.key].iceSkating;
        panels[3].textContent = things[btns.dataset.key].painting;

        } else {
          panels.style.display = "none";
        }
      })));


    const   theTeam = document.querySelector("#teamSection"),
            theTemplate = document.querySelector("#bio-template").content;

    let things = {};

    // set up a Fetch function and get some data
    function getData() {
        // retrieve our data object
        fetch("./data.json") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {
                console.log(data);
                things = data;

                buildTeam(data);
            })
        .catch(error => console.error(error));
    }

    function buildTeam(info) {

        // grab the keys from the data object (the names)
        const things = Object.keys(info);

        things.forEach(filed => {
            let panel = theTemplate.cloneNode(true); // make a copy of the template content
            let containers = panel.firstElementChild.children; // get a reference to the template content

            // cycle through the child elements inside the <section> tag in the <template> tag
            // and update their attributes 
            
            // add the image
            containers[0].querySelector("img").src = `images/${info[filed].biopic}`;

            // update the rest
            containers[1].textContent = info[filed].name;
            containers[2].textContent = info[filed].nature;
            containers[3].textContent = info[filed].reason;
            containers[4].textContent = info[filed].description;

            theTeam.appendChild(panel);
        });

    }

    getData();
})();


