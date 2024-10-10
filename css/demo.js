let products=[
    {
        id:1,
        image: "./img_gundam/img1.jpg",
        iMage: "./img_gundam2/img1.jpg",
        name:"GUNDAM",
        introduce:"MNP-XH04 1/72 Metal Frame Nezha Na Tra",
        price:190.000
    },
    {
        id:2,
        image: "./img_gundam/img2.jpg",
        iMage: "./img_gundam2/img2.jpg",
        name:"FIGURE",
        introduce:"303 Toys 1/12 Ngũ Hổ Tướng Tam Quốc Chí",
        price:550.000
    },
    {
        id:3,
        image: "./img_gundam/img3.jpg",
        iMage: "./img_gundam2/img3.jpg",
        name:"FIGURE",
        introduce:"Banpresto Blue Eyes White Dragon",
        price:200.000
    },
    {
        id:4,
        image: "./img_gundam/img4.jpg",
        iMage: "./img_gundam2/img4.jpg",
        name:"GUNDAM",
        introduce:"MNP-XH05 1/72 Metal Frame Triệu Vân + Bạch Long Mã",
        price:175.000
    },
    {
        id:5,
        image: "./img_gundam/img5.jpg",
        iMage: "./img_gundam2/img5.jpg",
        name:"GUNDAM",
        introduce:"Mô hình HG 1/144 JMS Hyaku Shiki",
        price:250.000
    },
    {
        id:6,
        image: "./img_gundam/img6.jpg",
        iMage: "./img_gundam2/img6.jpg",
        name:"GUNDAM",
        introduce:"HG Gyan-Gundam Chính hãng Bandai",
        price:195.000
    },
    {
        id:7,
        image: "./img_gundam/img7.jpg",
        iMage: "./img_gundam2/img7.jpg",
        name:"FIGURE",
        introduce:"Haoyu Toys 1/12 Tây Du Ký 5 Thầy trò Đường Tăng",
        price:430.000
    },
    {
        id:8,
        image: "./img_gundam/img8.jpg",
        iMage: "./img_gundam2/img1.jpg",
        name:"GUNDAM",
        introduce:"HG Forbidden Gundam -Gundam Chính hãng Bandai",
        price:350.000
    },
    {
        id:9,
        image: "./img_gundam/img9.jpg",
        iMage: "./img_gundam2/img9.jpg",
        name:"FIGURE-RISE",
        introduce:"Mô hình lắp ráp Figure-rise Standard Kamen Rider Build",
        price:595.000
    },
    {
        id:10,
        image: "./img_gundam/img10.jpg",
        iMage: "./img_gundam2/img10.jpg",
        name:"FIGURE-RISE",
        introduce:"Mô hình lắp ráp Figure-rise Standard Kamen Rider Zi-O",
        price:750.000
    },
    {
        id:11,
        image: "./img_gundam/img11.jpg",
        iMage: "./img_gundam2/img11.jpg",
        name:"FIGURE",
        introduce:"Mô hình figure: Luffy – King Of Artist The Bound Man",
        price:195.000
    }, 
    {
        id:12,
        image: "./img_gundam/img12.jpg",
        iMage: "./img_gundam2/img12.jpg",
        name:"GUNDAM",
        introduce:"HG Shin Burning – Series Gundam Build Metaverse",
        price:570.000
    },
    {
        id:13,
        image: "./img_gundam/img13.jpg",
        iMage: "./img_gundam2/img13.jpg",
        name:"GUNDAM",
        introduce:"HG UC 241 MS-06 Zaku II – Mô hình lắp ráp Gundam Bandai",
        price:570.000
    },
    {
        id:14,
        image: "./img_gundam/img14.jpg",
        iMage: "./img_gundam2/img14.jpg",
        name:"MÔ HÌNH TĨNH",
        introduce:"Bleach – Kenpachi Zaraki Anime Solid and Souls",
        price:820.000
    },
    {
        id:15,
        image: "./img_gundam/img15.jpg",
        iMage: "./img_gundam2/img15.jpg",
        name:"MÔ HÌNH TĨNH",
        introduce:"One Piece Film Red – King Of Artist The Shanks",
        price:399.000
    },
    {
        id:16,
        image: "./img_gundam/img35.jpg",
        iMage: "./img_gundam2/img35.jpg",
        name:"DRAGON BALL",
        introduce:"Mô hình lắp ráp Dragon Ball Kid Buu",
        price:672.000
    },
    {
        id:17,
        image: "./img_gundam/img36.jpg",
        iMage: "./img_gundam2/img36.jpg",
        name:"DỤNG CỤ",
        introduce:"Kềm Cắt Mô Hình Bandai Spirits High Build Up Nippers",
        price:450.000
    },
    {
        id:18,
        image: "./img_gundam/img37.jpg",
        iMage: "./img_gundam2/img37.jpg",
        name:"DỤNG CỤ",
        introduce:"Bút kẻ chảy Gundam Marker – GM301",
        price:70.000
    },
    {
        id:18,
        image: "./img_gundam/img38.jpg",
        iMage: "./img_gundam2/img38.jpg",
        name:"DỤNG CỤ",
        introduce:"Kềm cắt mô hình 1 lưỡi MANWAH",
        price:180.000
    },
    {
        id:19,
        image: "./img_gundam/img39.jpg",
        iMage: "./img_gundam2/img39.jpg",
        name:"DRAGON BALL",
        introduce:"Mô hình lắp ráp Dragon Ball Super Saiyan Broly Full Powers",
        price:879.000
    }
]
let listproduct=document.querySelector(".card__items");
let listCards=[];
function inItCard(){
    products.forEach(function(value){
        let newDiv=document.createElement("div");
        newDiv.setAttribute("class","card__item");
        newDiv.setAttribute("id","card__item--one");
        newDiv.innerHTML=`
                    <div class="card__img" id="card__img--one">
                        <img src="${value.image}" alt="">
                        <img src="${value.iMage}" alt="" id="img__after">
                    </div>
                    <div class="card__name" id="card__name--one">
                        <p>${value.name}</p>
                    </div>
                    <div class="card__introduce" id="card__introduce--one">
                        ${value.introduce}
                    </div>
                    <div class="card__price" id="card__price--one" data__price--one="${(value.price*1000).toLocaleString()}">
                        <p><span>${(value.price*1000).toLocaleString()}</span><sup>VNĐ</sup></p>
                    </div>
                    <div class="card__action" id="card__action--one">
                        <button class="card__view" id="card__view--one">
                            View
                        </button>
                        <button class="card__addcart" id="card__addcart--one">
                            Add Cart
                        </button>
                    </div>`
        listproduct.appendChild(newDiv);
    })
}
inItCard();
let products2=[
{
    id:1,
    image: "./img_gundam/img16.jpg",
    iMage: "./img_gundam2/img16.jpg",
    name:"MÔ HÌNH TĨNH",
    introduce:"One Piece – Senkouzekkei – Portgas.D.Ace",
    price:600.000
},
{
    id:2,
    image: "./img_gundam/img17.jpg",
    iMage: "./img_gundam2/img17.jpg",
    name:"MÔ HÌNH TĨNH",
    introduce:"One Piece – Battle Record Collection – Rorona Zoro",
    price:429.000
},
{
    id:3,
    image: "./img_gundam/img18.jpg",
    iMage: "./img_gundam2/img18.jpg",
    name:"GUNDAM",
    introduce:"MG Strike Freedom Gundam",
    price:429.000
},
{
    id:4,
    image: "./img_gundam/img19.jpg",
    iMage: "./img_gundam2/img19.jpg",
    name:"FIGURE",
    introduce:"Mô hình figure: Luffy Tay Lửa",
    price:210.000
},
{
    id:5,
    image: "./img_gundam/img20.jpg",
    iMage: "./img_gundam2/img20.jpg",
    name:"GUNDAM",
    introduce:"Mô hình lắp ráp Gundam MG EX Strike Freedom Gundam",
    price:200.000
},
{
    id:6,
    image: "./img_gundam/img21.jpg",
    iMage: "./img_gundam2/img21.jpg",
    name:"MÔ HÌNH TĨNH",
    introduce:"One Piece Film Red DXF – Brook Vol.9",
    price:429.000
},
{
    id:7,
    image: "./img_gundam/img22.jpg",
    iMage: "./img_gundam2/img22.jpg",
    name:"GUNDAM",
    introduce:"Mô hình lắp ráp CF-06 Cyber Forest Fantasy Girls Mad Wolf Caroline Rolphe",
    price:150.000
},
{
    id:8,
    image: "./img_gundam/img23.jpg",
    iMage: "./img_gundam2/img23.jpg",
    name:"GUNDAM",
    introduce:"MG 1/100 GUNDAM EXIA",
    price:429.000
},
{
    id:9,
    image: "./img_gundam/img24.jpg",
    iMage: "./img_gundam2/img24.jpg",
    name:"FIGURE-RISE",
    introduce:"Figure-rise Standard Avatar Fumina – Mô hình lắp ráp Bandai",
    price:100.000
},
{
    id:10,
    image: "./img_gundam/img25.jpg",
    iMage: "./img_gundam2/img25.jpg",
    name:"FIGURE-RISE",
    introduce:"HG CE Black Knight Squad Rud-Ro.A (Tentative Ver)",
    price:125.000
},
{
    id:11,
    image: "./img_gundam/img26.jpg",
    iMage: "./img_gundam2/img26.jpg",
    name:"FIGURE-RISE",
    introduce:"30mm eEXM-S03H Forestieri 03 – 30 Minutes Missions",
    price:122.000
},
{
    id:12,
    image: "./img_gundam/img27.jpg",
    iMage: "./img_gundam2/img27.jpg",
    name:"MÔ HÌNH TĨNH",
    introduce:"Demon Slayer – Kimetsu no Yaiba – Tanjiro Kamado Vol.19",
    price:429.000
},
{
    id:13, 
    image: "./img_gundam/img28.jpg",
    iMage: "./img_gundam2/img28.jpg",
    name:"DRAGON BALL",
    introduce:"Demon Slayer – Kimetsu no Yaiba – Tanjiro Kamado Vol.19",
    price:429.000
},
{
    id:13,
    image: "./img_gundam/img29.jpg",
    iMage: "./img_gundam2/img29.jpg",
    name:"MÔ HÌNH TĨNH",
    introduce:"Mô hình lắp ráp Dragon Ball Z Piccolo",
    price:828.000
},
{
    id:14,
    image: "./img_gundam/img30.jpg",
    iMage: "./img_gundam2/img30.jpg",
    name:"MÔ HÌNH TĨNH",
    introduce:"Dragon Ball Super – Super Saiyan Gogeta Vol.7",
    price:124.000
},
{
    id:15,
    image: "./img_gundam/img31.jpg",
    iMage: "./img_gundam2/img31.jpg",
    name: "BANDAI",
    introduce: "RG 29 MSN-04 SAZABI",
    price:120.000
},
{
    id:16, 
    image: "./img_gundam/img32.jpg",
    iMage: "./img_gundam2/img32.jpg",
    name: "DỤNG CỤ",
    introduce: "Khoan tay 5 mũi khoan MS-060 Hãng MOSHI",
    price:149.000
},
{
    id:17,
    image: "./img_gundam/img33.jpg",
    iMage: "./img_gundam2/img33.jpg",
    name: "DỤNG CỤ",
    introduce: "Bút kẻ lằn chìm Gundam Marker – GM01 GM02 GM03",
    price:149.000
},
{
    id:18,
    image: "./img_gundam/img34.jpg",
    iMage: "./img_gundam2/img34.jpg",
    name: "DRAGON BALL",
    introduce: "Mô hình lắp ráp Dragon Ball Z – Son Goku New Spec Ver",
    price:674.000
},
{
    id:19,
    image: "./img_gundam/img40.jpg",
    iMage: "./img_gundam2/img40.jpg",
    name: "FIGURE",
    introduce: "Youmu Konpaku Half-Human Half-Phantom Gardener Ver 1/7 - Touhou",
    price:900.000
},
{
    id:20,
    image: "./img_gundam/img41.jpg",
    iMage: "./img_gundam2/img41.jpg",
    name: "DRAGON BALL",
    introduce: "Mô hình lắp ráp Dragon Ball Final Form Frieza",
    price:870.000
}
]
let listproduct2=document.querySelector("#card__items--two");
function inItCard2(){
    products2.forEach(function(value){
        let newDiv2=document.createElement("div");
        newDiv2.setAttribute("id","card__item--two");
        newDiv2.setAttribute("class","card__item");
        newDiv2.innerHTML=`
                    <div class="card__img" id="card__img--two">
                        <img src="${value.image}" alt="">
                        <img src="${value.iMage}" alt="" id="img__after">
                    </div>
                    <div class="card__name" id="card__name--two">
                        <p>${value.name}</p>
                    </div>
                    <div class="card__introduce two" id="card__introduce--two">
                        ${value.introduce}
                    </div>
                    <div class="card__price" id="card__price--two" data__price--two="${(value.price*1000).toLocaleString()}">
                        <p><span>${((value.price)*1000).toLocaleString()}</span><sup>VNĐ</sup></p>
                    </div>
                    <div class="card__action" id="card__action--two">
                        <button class="card__view" id="card__view--two">
                            View
                        </button>
                        <button class="card__addcart" id="card__addcart--two">
                            Add Cart
                        </button>
                    </div>`
        listproduct2.appendChild(newDiv2);
    })
}
inItCard2();
const btn=document.querySelectorAll(".card__addcart");
btn.forEach(function(information){
    information.addEventListener("click",function(event){
        let bTn=event.target;
        let elementParent=bTn.parentNode.parentNode;
        let cardIMG = elementParent.querySelector(".card__img img").src;
        let cardNAME = elementParent.querySelector(".card__name").innerText;
        let cardINTRODUCE= elementParent.querySelector(".card__introduce").innerText;
        let cardPRICE= elementParent.querySelector(".card__price span").innerText;
        console.log(cardIMG,cardNAME,cardINTRODUCE,cardPRICE);
        addCART(cardIMG,cardNAME,cardINTRODUCE,cardPRICE);
    })
})
function addCART(cardIMG,cardNAME,cardINTRODUCE,cardPRICE){
    let addProduct=document.createElement("tr");
    let cartItem=document.querySelectorAll("tbody tr");
    swal({
        text:"Sản phẩm đã được thêm vào giỏ hàng!",
        timer:1500,
        button: "OK",
    });
    //console.log(cartItem);
    for(let i=0;i<cartItem.length;i++)
    {
        let productNAME=document.querySelectorAll(".name__product");
        console.log(productNAME);
        let productINTRODUCT=document.querySelectorAll(".introduce__product");  
        console.log(productINTRODUCT);
        if(productNAME[i].innerText==cardNAME&&productINTRODUCT[i].innerText==cardINTRODUCE)
        {
            swal({
                text:"Sản phẩm đã có trong giỏ hàng của bạn",
                timer:3000,
                icon:"error",   
            });
            return;
        }
        else
        {
            swal({
                text:"Sản phẩm đã được thêm vào giỏ hàng!",
                timer:1500,
                button: "OK",
            });
        }
    }
    let inforPRODUCTadd=`<tr>
                        <td style="display: flex;align-items: center;"><img src="`+cardIMG+`" alt=""><span class=name__product>`+cardNAME+`</span></td>
                        <td><p><span class="introduce__product">`+cardINTRODUCE+`</span></p></td>
                        <td><p><span class="price__product">`+cardPRICE+`</span><sup>VNĐ</sup></p></td>
                        <td><input style="width: 30px;outline:none;" type="number" value="1" min="0"></td>
                        <td><span style="cursor:pointer;" class="delete__product">Xóa</span></td>
                    </tr>`
    //console.log(inforPRODUCTadd);
    addProduct.innerHTML=inforPRODUCTadd;
    let addinTABLE=document.querySelector("tbody");
    addinTABLE.append(addProduct);
    totalPrice();
    deleteProduct();
}
let nodeCart=document.querySelector(".card__shopping a");
let tableCart=document.querySelector(".cart");
console.log(nodeCart);
nodeCart.addEventListener("click",function(){
    tableCart.classList.add("activeCart");
})
let nodeClose=document.querySelector(".close__cart");
nodeClose.addEventListener("click",function(){
    tableCart.classList.remove("activeCart");
})
function totalPrice(){
    let cartItem=document.querySelectorAll("tbody tr");
    let totalB=0;
    for(let i=0;i<cartItem.length;i++)
    {
        let getPRICE=cartItem[i].querySelector(".price__product").innerHTML;
        //console.log(getPRICE);
        let getQUANTITY=cartItem[i].querySelector("input").value;
        //console.log(getQUANTITY);
        let totalA=getPRICE*getQUANTITY;
        totalB+=totalA;
    }
    let totalA=document.querySelector("tfoot span");
    totalA.innerHTML=(totalB*1000).toLocaleString();
    changeQuantity();
}
function deleteProduct(){
    let cartItem=document.querySelectorAll("tbody tr");
    for(let i=0;i<cartItem.length;i++)
    {
        let nodeDelete=cartItem[i].querySelector(".delete__product");
        nodeDelete.addEventListener("click",function(event){
            let nodeDeletetemp=event.target;
            let nodeDeleteParent=nodeDeletetemp.parentNode.parentNode;
            //console.log(nodeDeleteParent)
            nodeDeleteParent.remove();
            totalPrice();
        })
    }
}
function changeQuantity(){
    let cartItem=document.querySelectorAll("tbody tr");
    for(let i=0;i<cartItem.length;i++)
    {
        let nodeQuantity=cartItem[i].querySelector("input");
        nodeQuantity.addEventListener("change",function(){
            totalPrice();
        })
    }
}
let thisPage1=1;
let limit1=4;
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
let thisPage2=1;
let limit2=4;
let listItem2=document.querySelectorAll("#card__item--two");
function loadItem2(){
    let starT2=(thisPage2-1)*limit2;
    let enD2=limit2*thisPage2-1;
    listItem2.forEach(function(item,index){
        if(index>=starT2&&index<=enD2)
            item.style.display="block";
        else 
            item.style.display="none";
    })
    listPage2();
}
loadItem2();
function listPage2(){
    let totalPage2=Math.ceil(listItem2.length/limit2);
    document.querySelector("#number__pages--two").innerHTML="";
    //console.log(totalPage);
    for(let i=1;i<=totalPage2;i++){
        let newPage2=document.createElement("li");
        let tempLi2=`<li id="number__page--two">`+i+`</li>`;
        //console.log(tempLi);
        newPage2.innerHTML=tempLi2;
        //console.log(newPage);
        if(i==thisPage2){
            newPage2.classList.add("active");
        }
        newPage2.addEventListener("click",function(){
            changePage2(i);
        })
        let addINUL2=document.querySelector("#number__pages--two");
        addINUL2.appendChild(newPage2);
    }
}
function changePage2(i){
    thisPage2=i;
    loadItem2();
}
let totalPage2=Math.ceil(listItem2.length/limit2);
let nodeNext=document.querySelector(".next");
nodeNext.addEventListener("click",function(){
    thisPage2++;
    if(thisPage2>totalPage2)
        thisPage2=totalPage2;
    loadItem2();
})
let nodePrev=document.querySelector(".prev");
nodePrev.addEventListener("click",function(){
    thisPage2--;
    if(thisPage2<1)
        thisPage2=1;
    loadItem2();
})
let nodeTypes1=document.querySelectorAll(".control1 .card__type");
nodeTypes1.forEach(function(item){
    item.addEventListener("click",function(){
        let listItem1=document.querySelectorAll("#card__item--one");
        listItem1.forEach(function(value){
            value.style.display="block";
            let typeCardName=value.querySelector("#card__name--one").innerText;
            if(item.innerText=="ALL")
            {
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
let nodeTypes2=document.querySelectorAll(".control2 .card__type");
nodeTypes2.forEach(function(item){
    item.addEventListener("click",function(){
        let listItem2=document.querySelectorAll("#card__item--two");
        listItem2.forEach(function(value){
            value.style.display="block";
            let typeCardName=value.querySelector("#card__name--two").innerText;
            if(item.innerText=="ALL")
            {
                loadItem2();
                let hiddenPagging2=document.querySelector(".list__Page2");
                hiddenPagging2.classList.remove("activelistPage");
            }
            if(item.innerText==typeCardName)
            {
                value.style.display="block";
                let hiddenPagging2=document.querySelector(".list__Page2");
                hiddenPagging2.classList.add("activelistPage");
            }
            else
                value.style.display="none";
        })
    })
})
let nodeCHoose1=document.querySelector("#filter__card--one");
nodeCHoose1.addEventListener("change",function(){
    let listItem1=document.querySelectorAll("#card__item--one");
    listItem1.forEach(function(item){
        let nodePrice=item.querySelectorAll("#card__price--one");
        nodePrice.forEach(function(price){
            //console.log(value.getAttribute("data__price"));
            let inforPrice=price.getAttribute("data__price--one");
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
                loadItem1();
                hiddenPagging1.classList.remove("activelistPage");
            }
        })
    })
})
let nodeCHoose2=document.querySelector("#filter__card--two");
nodeCHoose2.addEventListener("change",function(){
    let listItem2=document.querySelectorAll("#card__item--two");
    listItem2.forEach(function(item,key){
        let nodePrice=item.querySelectorAll("#card__price--two");
        nodePrice.forEach(function(value,key){
            let inforPrice=value.getAttribute("data__price--two");
            if(inforPrice<200.000&&nodeCHoose2.value=="Under 200.000")
                item.style.display="block";
            else if((inforPrice<400.000&&inforPrice>=200.000)&&nodeCHoose2.value=="Under 400.000 Over 200.000")
                item.style.display="block";
            else if((inforPrice<600.000&&inforPrice>=400.000)&&nodeCHoose2.value=="Under 600.000 Over 400.000")
                item.style.display="block";
            else if((inforPrice<800.000&&inforPrice>=600.000)&&nodeCHoose2.value=="Under 800.000 Over 600.000")
                item.style.display="block";
            else if((inforPrice<1000000&&inforPrice>=800.000)&&nodeCHoose2.value=="Under 1.000.000 Over 800.000")
                item.style.display="block";
            else
                item.style.display="none";
            let hiddenPagging2=document.querySelector(".list__Page2");
            hiddenPagging2.classList.add("activelistPage");
            if(nodeCHoose2.value=="All"){
                loadItem2();
                hiddenPagging2.classList.remove("activelistPage");
            }
        })
    })
})


