const closebtn = ()=> {
    var item = document.getElementById('menu-Item');
    // item.style.transition='all 0.3s ease-in-out 0s';
    // item.style.marginRight='100%';
    // item.style.transform = 'scale(-20px) translate(-30px)';
    item.style.display = 'none';
    //window.alert("Please wait...");
}
function menu(){
   var item = document.getElementById('menu-Item');

   item.style.display = 'block';
   item.style.transition='all 0.3s ease-in-out 0s';
   item.style.transform = 'scale(20px) translate(30px)';
   item.style.width = '200px';
   
  // window.alert("Please wait...");
}

// const closebtn = ()=> {

//     var item = document.getElementById('menu-Item');
    
//     item.style.transition='all 0.3s ease-in-out 0s';
//     item.style.marginRight='-100%';
//     item.style.transform = 'scale(20px) translate(30px)';
//     item.style.display = 'none';
//         window.alert("Please wait...");
// }

