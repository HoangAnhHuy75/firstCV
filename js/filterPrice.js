let nodeCHoose1=document.querySelector(".filter__card--price");
nodeCHoose1.addEventListener("change",function(){
    let listItem1=document.querySelectorAll(".card__item");
    listItem1.forEach(function(item){
        let nodePrice=item.querySelectorAll(".card__price");
        nodePrice.forEach(function(price){
            let inforPrice=price.getAttribute("data__price");
            console.log(inforPrice);
            if(inforPrice<200.000&&nodeCHoose1.value=="Under 200.000")
                item.style.display="block";
            else if((inforPrice>=200.000&&inforPrice<400.000)&&nodeCHoose1.value=="Under 400.000 Over 200.000")
                item.style.display="block";
            else if((inforPrice>=400.000&&inforPrice<600.000)&&nodeCHoose1.value=="Under 600.000 Over 400.000")
                item.style.display="block";
            else if((inforPrice>=600.000&&inforPrice<800.000)&&nodeCHoose1.value=="Under 800.000 Over 600.000")
                item.style.display="block";
            else if((inforPrice>=800.000&&inforPrice<1000000)&&nodeCHoose1.value=="Under 1.000.000 Over 800.000")
                item.style.display="block";
            else if((inforPrice>=1000000)&&nodeCHoose1.value=="Over 1.000.000")
                item.style.display="block";
            else
                item.style.display="none";
            let hiddenPagging1=document.querySelector(".list__Page1");
            hiddenPagging1.classList.add("activelistPage");
            if(nodeCHoose1.value=="All"){
                thisPage1=1;
                limit1=8;
                loadItem1();
                hiddenPagging1.classList.remove("activelistPage");
            }
        })
    })
})


