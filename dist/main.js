function hideNavItems(){
    var navItems = document.getElementById("navItems");
    if(navItems.classList.contains('md:hidden')){
        navItems.classList.add('animate__animated', 'animate__fadeIn')
        navItems.classList.remove('md:hidden');
    } else {
        navItems.classList.remove('animate__animated', 'animate__fadeIn');
        navItems.classList.add('animate__animated', 'animate__fadeIn');
        navItems.classList.add('md:hidden');
    }
  }