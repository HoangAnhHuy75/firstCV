let thisPage1=1;
let limit1=8;
let listItem1=document.querySelectorAll("#card__item--one");
function loadItem1(){
    let starT1=(thisPage1-1)*limit1;
    let enD1= limit1*thisPage1-1;
    listItem1.forEach(function(item,index){
         if(index>=starT1&&index<=enD1)
             item.style.display="block";
         else  
             item.style.display="none";
     })
     listPage1();
 }
loadItem1();
function listPage1(){
     let totalPage1=Math.ceil(listItem1.length/limit1);
     document.querySelector("#number__pages--one").innerHTML=" ";
     for(let i=1;i<=totalPage1;i++)
     {
         let newPage1=document.createElement("li");
         tempLi1=`<li id="number__page--one">`+i+`</li>`;
         newPage1.innerHTML=tempLi1;
         if(i==thisPage1)
             newPage1.classList.add("active");
         newPage1.addEventListener("click",function(){
             changePage1(i);
         })
         let addINUL1=document.querySelector("#number__pages--one");
         addINUL1.appendChild(newPage1);
     }
 }
function changePage1(i){
     thisPage1=i;
     loadItem1();
}
let totalPage1=Math.ceil(listItem1.length/limit1);
let nodeNext1=document.querySelector(".go");
nodeNext1.addEventListener("click",function(){
    thisPage1++;
    if(thisPage1>totalPage1)
        thisPage1=totalPage1;
    loadItem1();
})
let nodePrev1=document.querySelector(".back");
nodePrev1.addEventListener("click",function(){
    thisPage1--;
    if(thisPage1<1)
        thisPage1=1;
    loadItem1();
})