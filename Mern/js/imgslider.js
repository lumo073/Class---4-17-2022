let image = ["banner.jpg", "img1.jpg","img7.jpg"]
let index = 0

document.getElementById("sliderimg").setAttribute("src","./sliderimg/"+image[index])

function next(){
    index++
    if(index==image.length){
        index = 0
    }
    document.getElementById("sliderimg").setAttribute("src","./sliderimg/"+image[index])
}

function previous(){
    index--
    if(index<0){
        index = image.length -1
    }
    document.getElementById("sliderimg").setAttribute("src","./sliderimg/"+image[index])
}

setInterval(next,3000)
