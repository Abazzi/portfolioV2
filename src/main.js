function hideNavItems(){
    var navItems = document.getElementById("navItems");
    if(navItems.classList.contains('md:hidden')){
        if(navItems.classList.contains('animate__fadeOut')){
            navItems.classList.replace('animate__fadeOut', 'animate__fadeIn');
        }
        navItems.classList.remove('md:hidden');
    } else {
        navItems.classList.replace('animate__fadeIn', 'animate__fadeOut');
        navItems.classList.add('md:hidden');
    }
  }