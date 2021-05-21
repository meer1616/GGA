function toogle(e){
    let x=document.getElementById('sym');
    let y=document.getElementById('nav');
    if( x.style.display!='block' && y.style.display!='block'){
        y.style.display='block';
        x.style.display='block';
    }else{
        x.style.display='none';
        y.style.display='none';       
    }
}
