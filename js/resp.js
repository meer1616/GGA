function toogle(e){
    console.log("prvnt default id enabled")
    
    let x=document.getElementById('sym');
    // console.log(x);
    let y=document.getElementById('nav');
    // console.log(y);

    // let cmn=document.getElementsByClassName("cmntoogle");
    // console.log(cmn);
    
    if( x.style.display!='block' && y.style.display!='block'){
        y.style.display='block';
        x.style.display='block';
    }else{
        x.style.display='none';
        y.style.display='none';
        
        
    }
console.log(e)


}

// function downdrop(){
    // let drpdown=document.getElementById("drdown");
    // console.log(drpdown);
    // if(drpdown.style.display!='block'){
    //     drpdown.style.display='block';
    // }
    // else{
    //     drpdown.style.display='none';
    // }


  // Clicking dropdown button will toggle display
  function downdrop() {
    document.getElementById("Dropdown").classList.toggle("show");
}
    
    // Prevents menu from closing when clicked inside

    document.getElementById("Dropdown").addEventListener('click', function (event) {
        alert("click outside");
        event.stopPropagation();
        // event.isPropagationStopped();
        // event. isPropagationStopped()
    });



     // Closes the menu in the event of outside click
    window.onclick = function(event) {
        if (!event.target.matches('.navelem')) {
          
            var dropdowns = 
            document.getElementsByClassName("dropdown-content");
              
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
// }
