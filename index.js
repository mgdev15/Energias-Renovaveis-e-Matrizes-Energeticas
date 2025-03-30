const gameBlocks = document.querySelectorAll(".games");

let lastClickedBlock = null;

gameBlocks.forEach(block => {

    block.addEventListener("click", event => {

        if(lastClickedBlock){
            lastClickedBlock.style.display = "flex";
        }

        event.target.style.display = "none";
        lastClickedBlock = block;
        
    })

})