function hideNavItems(){
    var navItems = document.getElementById("navItems");
        if(navItems.classList.contains('md:hidden')){
            if(navItems.classList.contains('animate__backOutDown')){
                navItems.classList.replace('animate__backOutDown', 'animate__backOutUp');
            }
            navItems.classList.remove('md:hidden');
        } else {
            navItems.classList.replace('animate__backOutUp', 'animate__backOutDown');
            navItems.classList.add('hidden');
        }
    }