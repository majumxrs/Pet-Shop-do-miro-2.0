function SubMenu() {
    var aberto = document.getElementById("submenu").style.display;
    if(aberto == 'block')
        document.getElementById("submenu").style.display = "none";
    else
        document.getElementById("submenu").style.display = "block";
}