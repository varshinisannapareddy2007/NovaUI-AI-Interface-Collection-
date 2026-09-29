const btn=document.getElementById("themeBtn");
btn?.addEventListener("click",()=>{document.body.classList.toggle("dark");btn.textContent=document.body.classList.contains("dark")?"☀":"☾";localStorage.setItem("novaui-theme",document.body.classList.contains("dark")?"dark":"light")});
if(localStorage.getItem("novaui-theme")==="dark"){document.body.classList.add("dark");if(btn)btn.textContent="☀";}
