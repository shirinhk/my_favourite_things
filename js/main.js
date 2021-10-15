(() => {

    const btns = document.querySelectorAll('.button');

    let things = {};

    function getData() {

        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                things = data;
            })
            .catch(error => console.error(error));
    }


    function buildControl(event) {
        console.log('click');

        let panel = document.querySelector('.bio-panel');

        if (panel) {
            panel.classList.remove('hidden');

            let containers = panel.children;

            containers[0].querySelector("img").src = `images/${things[this.dataset.key].biopic}`;
            containers[1].textContent = things[this.dataset.key].name;
            containers[2].textContent = things[this.dataset.key].nature;
            containers[3].textContent = things[this.dataset.key].reason;
            containers[4].textContent = things[this.dataset.key].description;
        }
        else {
            panel.classList.add('hidden');
        }

    };

    btns.forEach(btn => (btn.addEventListener("click", buildControl)));

    getData();

})();


