import showTemplate from "./js/template";
import menu from './menu.json';

window.addEventListener('DOMContentLoaded', () => {
    
    if(localStorage.getItem('theme') === 'null'){        
        localStorage.setItem ('theme','light-theme');
    }
    
    showTemplate(menu);

    const switchTheme = document.querySelector('.theme-switch__toggle');
    if(localStorage.getItem('theme') === 'dark-theme'){
        switchTheme.checked = 'true';
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }

    switchTheme.addEventListener('change', ()=>{
        if (document.body.classList.contains('light-theme')){
            localStorage.setItem ('theme','dark-theme');
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            localStorage.setItem ('theme','light-theme');
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
        

    })
   
})