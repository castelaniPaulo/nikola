alert("Algo pensando com muito carinho e destinado a uma unica pessoa, espero que goste S2")

const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop;

window.onscroll = function(){
    fixarMenuNotopo();
} 

function fixarMenuNotopo(){
    if(window.pageYOffset >= topoNav){
        nav.classList.add("fixoNotopo")
    }
    else{
        nav.classList.remove("fixoNotopo")
    }
}
 