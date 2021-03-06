const videoRange = document.querySelector('.video__range');
  
videoRange.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

const sound = document.querySelector('.video__sounds');
  
sound.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})


$(function(){


  $('.video__items').slick({
    slidesToShow: 3,
    
    slidesToScroll: 1,
    prevArrow: '<div class="slick-arrow slick-prev"><img src="images/video-slider-left.svg" alt=""></div>',
    
    nextArrow: '<div class="slick-arrow slick-next"><img src="images/video-slider-right.svg" alt=""></div>',
    dots: true

});
});

console.log(/* Выполненные пункты: Ваша оценка - 40 баллов

1) при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео с YouTube. Никакие изменения с основным видео при этом не происходят

2) слайды перелистываются плавно с анимацией смещения вправо или влево (для смены основного видео анимация смещения не требуется и не проверяется)

3) перелистывание слайдов бесконечное (зацикленное)

4) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем)

5) даже при частых кликах по стрелкам нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда

6) прогресс-бар отображает прогресс проигрывания видео

7) перетягивание ползунка прогресс-бара позволяет изменить время с которого проигрывается видео

8) при перемещении ползунка громкости звука изменяется громкость видео

9) ползунок можно перетягивать мышкой по горизонтали

10) ползунок никогда не выходит за границы картины

11) при перемещении ползунка справа налево плавно появляется нижняя картина

12) при перемещении ползунка слева направо плавно появляется верхняя картина

13) при обновлении страницы ползунок возвращается в исходное положение */)