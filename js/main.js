// Код для получения значения скрола
window.addEventListener("scroll", e => {
  // Присваиваем боди переменную которая отслеживает скрол по y
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})


// Cоздание плавного скрола при помощи библиотеки Gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//Если мы хотим что бы плавный скролл работал только на устройствах без сенсора 
// то весь код создания скрола нужно внести в условие вида
//if (ScrollTrigge.isTouch !==1) { условие ниже}
ScrollSmoother.create({
  //присваиваем 2 значениям классы которые требуют плавный скролл
  wrapper: '.Scrollsmoother-wrapper',
  content: '.Scrollsmoother-content',
  smooth: 1.5, // Чем выше значение тем медленее скролл
  effects: true, // Активирет возможность добавлять эффекты при помощи атрибутов для тегов
// Атрибуты 
// data-speed="" замедляет или ускоряет объет на фоне
  // transform который приблизительно совпадает с анимацией gsap transform .75s cubic-bezier(.075,0.5, 0, 1)
})

// Следущая конструккия позволяет создать анимаци задав параменты объект откуда куда
gsap.fromTo('.about', { opacity: 1 },{
  opacity:0,
  // Определяем тригер для срабатывания и указываем в нем параметры
  scrollTrigger: {
    trigger: '.about', // класс тригера
    start: 'center', // Начало тригера
    end: 'bottom', // Конец тригера
    scrub: true,  // Этот параметр горовит о то что мы возвращаем эфффект при прокрутке обратно
  }
})


// Использование конструкции fromTo в цикте для применения эффекта к каждому элементу класса отдельно
//1 Заносим класс или классы для перебора в переменную
let itemsL = gsap.utils.toArray('.galary__left .galary__item')
// 2 Перебираем в переменной нужное слово
itemsL.forEach(item => {
  // Задаем это слово в условие и для каждого элемента в блоке по очереди будет применятся анимация
  gsap.fromTo(item, { x: -150, opacity: 0 },{
    opacity:1, x: 0,
  
    scrollTrigger: {
      trigger: item,
      start: '-800',
      end: '-150',
      scrub: true,
    }
  })
})


let itemsR = gsap.utils.toArray('.galary__right .galary__item')

itemsR.forEach(item => {

  gsap.fromTo(item, { x: 150, opacity: 0 },{
    opacity:1, x: 0,
  
    scrollTrigger: {
      trigger: item,
      start: '-200',
      end: '-10',
      scrub: true,
    }
  })
})








