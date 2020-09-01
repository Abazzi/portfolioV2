function hideNavItems(){
    var navItems = document.getElementById("navItems");
        if(navItems.classList.contains('hidden')){
            navItems.classList.remove('hidden');
        } else {
            navItems.classList.add('hidden');
        }
    }