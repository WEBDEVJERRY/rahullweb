// ==================typing animation=======================
var typed = Typed(".typing",{
    strings:["","Web Designer","Graphic Designer","Developer","Gamer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
}) 
// ==========================aside===========================
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++)
      {
        console.log(navList[i])
      }