default_link = document.getElementById("v-link-topv").click()
function load(current_id)
{
    let all_element=document.querySelectorAll('.v-link')
    for(let i=0;i<all_element.length;i++){
        all_element[i].removeAttribute("style");
    }

    let current_element=document.getElementById(current_id)
    current_element.style.color="var(--red)"
    current_element.style.borderBottom="3PX SOLID var(--red)"

}
function show(current){
    let topC = document.querySelector('#TopvideosC')
    let latestC = document.querySelector('#LatestC')
    let classicsC = document.querySelector('#ClassicsC')
    switch(current){
    case topC:
       latestC.style.display="none"
       classicsC.style.display="none"
       topC.style.display="block"
       break;
       default:
    case latestC:
        topC.style.display="none"
        classicsC.style.display="none"
        latestC.style.display="block"
        break;
    case classicsC:
        topC.style.display="none"
        latestC.style.display="none"
        classicsC.style.display="block"
        break
    }

}
console.log()
let video=document.querySelectorAll(".crvideo1")
let play =document.querySelectorAll(".playbg")
let pause =document.querySelectorAll(".pausebg")
console.log(play)
console.log(pause)
video.forEach((item, index) => {
    console.log("ITEM",item,index)
    item.addEventListener('mouseover', arrow=>{
        video[index].play()
        play[index].style.display = "none"
        pause[index].style.display = "flex"
    })
    item.addEventListener('mouseout', arrow=>{
        video[index].currentTime=0
        video[index].pause()
        play[index].style.display = "flex"
        pause[index].style.display = "none"
    }
)})
