window.addEventListener('scroll', onScroll)
/*serve para rodar a primeira vez que a pagina carregar. No caso de carregar ela pelo meio, daria erro se ñ tivesse esse chamado.*/
onScroll()

/*chamar as 2 funções abaixo*/
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

/*ativar o menu na seção do momento*/
function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  // quais dados vou precisar?  Preciso pegar o valor exato da HOME, SECTION ...

  //o topo da seção
  const sectionTop = section.offsetTop

  //a altura da seção
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  /*
  console.log(
    'O topo da seção chegou ou passou da linha ? ' +
      sectionTopReachOrPassedTargetline
  )
  */
  //verificar se a base esta abaixo da linha alvo
  // quais dados vou precisar ?

  // a seção termina onde ?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  /*
  console.log(
    'O final da seção passou da linha alvo ? ' + sectionEndPassedTargetline
  ) */

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')

  //procura no .menu tag a algum href q possua id.
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  // já começa removendo caso encontre algum que tenha a class active.
  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

/*mostrar o navegation ao rolar o SCROLL*/
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
    backToTopButton.classList.add('show')
  } else {
    navigation.classList.remove('scroll')
    backToTopButton.classList.remove('show')
  }
}

/*mostrar o button lateral flutuante ao rolar o SCROLL*/
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

/*SCROLL REVEAL - foi inserido o script no HTML*/
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000
}).reveal(`#home, 
          #home img,
          #home .stats, 
          #services,
          #services header,
          #services .card,
          #about,
          #about header,
          #about .content`)
