function hideShowItems(id){
    var navItems = document.getElementById(id);
        if(navItems.classList.contains('hidden')){
            navItems.classList.remove('hidden');
        } else {
            navItems.classList.add('hidden');
        }
    }

function buttonTest(){
    alert('Holy crap this button works');
}