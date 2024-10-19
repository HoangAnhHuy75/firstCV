let nodeTypes1=document.querySelectorAll(".control1 .card__type");
nodeTypes1.forEach(function(item){
    item.addEventListener("click",function(){
        let listItem1=document.querySelectorAll("#card__item--one");
        listItem1.forEach(function(value){
            value.style.display="block";
            let typeCardName=value.querySelector("#card__name--one").innerText;
            if(item.innerText=="ALL")
            {
                thisPage1=1;
                limit1=8;
                loadItem1();
                let hiddenPagging1=document.querySelector(".list__Page1");
                hiddenPagging1.classList.remove("activelistPage");
            }
            else if(item.innerText==typeCardName)
            {
                value.style.display="block";
                let hiddenPagging1=document.querySelector(".list__Page1");
                hiddenPagging1.classList.add("activelistPage");
            }
            else
                value.style.display="none";
        })
    })
})