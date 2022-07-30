(function(){
    const listElements = document.querySelectorAll('.menu-item--show');
    const list = document.querySelector('.menu-links');
    const menu = document.querySelector('.menu-hamburguer');

    const addClick = () =>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{
                let submenu = element.children[1];
                let height = 0;
                element.classList.toggle('.menu-item--active');

                if(submenu.clientHeight === 0)
                {
                    height = submenu.scrollHeight;
                }

                submenu.style.height = `${height}px`;
            })
        })
    }

    const deleteStyleHeigth = ()=>{
        listElements.forEach(element => {
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu-item--active');
            }
        })
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800)
        {
            deleteStyleHeigth();
            if(list.classList.contains('menu-links--show')) list.classList.remove('menu-links--show');
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800)
    {
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu-links--show'));
})();