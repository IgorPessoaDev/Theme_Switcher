const toggle = document.querySelector(".toggle");
const main = document.querySelector("#container");

main.classList.add(localStorage.tema)

toggle.addEventListener('click', () =>{
  

  if(main.classList == 'light'){
    main.classList.remove('light')
    main.classList.add('dark')
    localStorage.tema = main.classList
  }else{
    main.classList.remove('dark')
    main.classList.add('light')
    localStorage.tema = main.classList
  }
})