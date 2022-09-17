function menu_btn()
{
    
    let menubar=document.getElementsByClassName('menu-bar');

    if(menubar[0].classList.length==6)
    {
        menubar[0].classList.add('hidden')
    }
    else if(menubar[0].classList.length==7)
    {
        menubar[0].classList.remove('hidden')
    }
}