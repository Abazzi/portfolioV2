function hideNavItems(){
    var navItems = document.getElementById("navItems");
        if(navItems.classList.contains('md:hidden')){
            if(navItems.classList.contains('animate__zoomOut')){
                navItems.classList.replace('animate__zoomOut', 'animate__zoomIn');
            }
            navItems.classList.remove('md:hidden');
        } else {
            if(navItems.classList.contains('animate__zoomIn')){
                navItems.classList.replace('animate__zoomIn', 'animate__zoomOut');
            }
                navItems.classList.add('md:hidden');
        }
    }