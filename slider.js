
    (function() {

/*Для работы слайдера:
1. Подключаем jQuery до файла модуля
2. Оборачиваем в div, ему присваиваем класс slider
3. Все картинки в слайдере должны иметь класс pictures
4. Вызываем mySlider();




*/


        function mySlider(options) {
         
            
            //настройки
           var autoplay =  true;//автозапуск
           var items = 2;//количество отображаемых за раз
           var startInterval = 0;
           var interval = 3000;//время , 3 секунды
           var width = 300;//ширина картинок
           var height = 300;//высота картинок
           var sliderSelector = $('.slider');//селектор для обращения
           var imageDistance = '1%';//расстояние между картинками
           
           var usingImages = [];
   
   
        var allImages = document.querySelectorAll('.pictures');
        var images = [];
       for(var i=0; i<allImages.length;i++)
           images.push(allImages[i]);
           allImages.length = 0;
              
           

           if(autoplay==true){
        setTimeout(function letsGo() {
   
              for(var i=0; i<items; i++)
               usingImages.push(images.shift());
              
   
            $(sliderSelector).fadeOut();
            
            var fragment = document.createDocumentFragment();
            while(usingImages.length!=0){
           var currentIm = document.createElement('img');
           currentIm.src=`${usingImages[0].src}`;
           currentIm.style.marginLeft = imageDistance;
           currentIm.width = `${usingImages[0].width}`;
           currentIm.height = `${usingImages[0].height}`;
            fragment.appendChild(currentIm);
                  images.push(usingImages.shift());
               
            }
           
            sliderSelector.html(fragment);
            $(sliderSelector).fadeIn();
            
            
            setTimeout(letsGo,interval);
            
        },startInterval);
   
   
    }
}

window.mySlider = mySlider;
        })();