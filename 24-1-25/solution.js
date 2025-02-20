const button=document.getElementById('clik');
const uname=document.getElementById('username');
const nae=document.getElementById('name');

button.addEventListener('click',()=>{
    const val=uname.value;
    localStorage.setItem('name',val);
    location.reload();
});

window.addEventListener('load',()=>{
    const val=localStorage.getItem('name');
    nae.innerText=val;
})