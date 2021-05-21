function toogle(e){
    let sym=document.getElementById('sym');
    let nav=document.getElementById('nav');
    if( sym.style.display!='block' && nav.style.display!='block'){
        nav.style.display='block';
        sym.style.display='block';
    }else{
        sym.style.display='none';
        nav.style.display='none';       
    }
}
function downdrop(){
    let Dropdown=document.getElementById("Dropdown");
    if(Dropdown.style.display=="none"){
        Dropdown.style.display="block"
    }
    else{
    Dropdown.style.display="none"
    }
}
