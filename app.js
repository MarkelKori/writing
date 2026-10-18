const themeButton=document.getElementById('theme');
function updateThemeButton(){const dark=document.documentElement.classList.contains('dark');themeButton.textContent=dark?'☼':'◐';themeButton.setAttribute('aria-pressed',String(dark))}
themeButton.addEventListener('click',()=>{document.documentElement.classList.toggle('dark');try{localStorage.setItem('mk-theme',document.documentElement.classList.contains('dark')?'dark':'light')}catch(e){}updateThemeButton()});
updateThemeButton();
