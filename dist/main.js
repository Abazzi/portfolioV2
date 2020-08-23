function hideNavItems(){
    var navItems = document.getElementById("navItems");
    if(navItems.style.display === "none"){
        navItems.style.display = "block";
    } else{
        navItems.style.display = "none";
    }
}