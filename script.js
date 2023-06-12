// TABS

const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItem = document.querySelectorAll(".tabs__item");

//приховує таби та прибирає active в кнопок

function hideTabs(){
    tabsItem.forEach(item=>item.classList.add("hide"));    
    tabsBtns.forEach(item => item.classList.remove("active"));
}

//показує переданий номер таба и робить відповідну йому кнопку активною

function showTab(index){
    tabsItem[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index)=> btn.addEventListener("click", ()=>{
    hideTabs();
    showTab(index);
}));


// Anchors

const anchors = document.querySelectorAll(".header__nav a")

anchors.forEach(anc => {
    anc.addEventListener("click" , function(event){
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top:elem.offsetTop-74,
            behavior: 'smooth'
        });
    });
});