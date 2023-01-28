;(function() {

    const panels = document.querySelectorAll(".panel");

    function clickHandler() {
        this.classList.toggle("open");
    }    
    
    function transitionHandler(e) {
        console.log(e);
        if(e.propertyName.indexOf('flex') !== -1){
            this.classList.toggle("open-active")

        }
    }

    panels.forEach(panel=>{
        panel.addEventListener("click", clickHandler);
        panel.addEventListener("transitionend", transitionHandler);
    });

})();