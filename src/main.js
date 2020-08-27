function hideNavItems(){
    var navItems = document.getElementById("navItems");
        if(navItems.classList.contains('md:hidden')){
            navItems.classList.remove('md:hidden');
        } else {
            navItems.classList.add('md:hidden');
        }
    }