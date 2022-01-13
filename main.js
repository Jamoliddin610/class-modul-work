let elOpenModalbtn = document.getElementById('contentModul');
let elCloseModalbtn = document.getElementById('closebtn');
let elModalBox= document.getElementById('hidden');

elOpenModalbtn.addEventListener('click',function(){
    elModalBox.classList.add('show');
});

elCloseModalbtn.addEventListener('click',function(){
    elModalBox.classList.remove('show');
});