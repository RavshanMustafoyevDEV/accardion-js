const accItems = document.querySelectorAll(".acc-item")


accItems.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        accItems.forEach((e)=>e.classList.remove("active"))
        elem.classList.toggle("active")
    })
})



