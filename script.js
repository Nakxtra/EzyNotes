var pen = document.querySelector('.fa-pen');
var text = document.querySelector('#text');
var title = document.querySelector('#title');
var submit = document.querySelector('.submit');
var box = document.querySelector('.box');
var box_head = document.querySelector('.box-head');
var box_para = document.querySelector('.box-para');
var dot = document.querySelector('.fa-ellipsis-h');
var style = getComputedStyle(document.body);
var save_head = document.querySelector('.save-head');
var color = document.querySelector('.color')

pen.addEventListener('click', ()=>{
    title.focus();
});

dot.addEventListener('click', ()=>{
    color.classList.toggle('active');
})

var x, y, i=1;
submit.addEventListener('click', ()=>{
    x = title.value;
    y = text.value;
    
    if(x!="" && y!="")
    {
        box.innerHTML += `
        <div id="box-${i}" class="note">
            <i class="fas fa-trash"></i>
            <div class="box-head">${x}</div>
            <p class="box-para">${y}</p>
            <div class="more">more..</div>
        </div>`;
        
        text.value="";
        title.value="";
        
        i++;
    }
    else
    {
        alert('Please write some text in note');
    }

    save_head.style.opacity = '1';
    

});

var classList;
window.onclick = function(e) {
    classList = e.target;
    if (classList.className === 'fas fa-trash') 
    {
        classList.parentElement.style.display = "none";

        classList.parentElement.parentElement.parentElement.parentElement.children[2].classList.remove('top-cont-active');
        
    }

    if(classList.className === 'more')
    {
            // classList.parentElement.classList.toggle('note-active');
            $(document).ready(function(){
            $(classList.parentElement).toggleClass('note-active').siblings().removeClass('note-active');
            })
            classList.parentElement.parentElement.classList.toggle('box-active');
            if(classList.parentElement.className === 'note note-active')
            {
            classList.parentElement.parentElement.parentElement.parentElement.children[2].classList.remove('top-cont-active');
            }
            else{
                classList.parentElement.parentElement.parentElement.parentElement.children[2].classList.add('top-cont-active');
            }
    }
}

var r = document.querySelector(':root');

var purple = document.querySelector('.purple');
purple.addEventListener('click', ()=>{
    r.style.setProperty('--black', '#5f0a87');
    r.style.setProperty('--orange', '#e5bdf6');
})

var blue = document.querySelector('.blue');
blue.addEventListener('click', ()=>{
    r.style.setProperty('--black', '#647dee');
    r.style.setProperty('--orange', '#dff9fb');
})

var yellow = document.querySelector('.yellow');
yellow.addEventListener('click', ()=>{
    r.style.setProperty('--black', '#000000');
    r.style.setProperty('--orange', '#fffa65');
})

var pink = document.querySelector('.pink');
pink.addEventListener('click', ()=>{
    r.style.setProperty('--black', '#000000');
    r.style.setProperty('--orange', '#ffcccc');
})

var green = document.querySelector('.green');
green.addEventListener('click', ()=>{
    r.style.setProperty('--black', '#9EC862');
    r.style.setProperty('--orange', '#ECFAF5');
})

var orange = document.querySelector('.orange');
orange.addEventListener('click', ()=>{
    r.style.setProperty('--black', '#000000');
    r.style.setProperty('--orange', '#fad390');
})



