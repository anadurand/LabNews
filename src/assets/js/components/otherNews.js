'use strict';

const News = (info) => {
  console.log(info);
  const parent = $('<div class="news"></div>');
  const divImg = $('<div class="new__Img"></div>');
  const img = $('<img src="" class="new__Img--img">');
  const divInfo = $('<div class="news__info"></div>');
  const title = $('<p class="news__info--title></p>');

  divImg.append(img);
  divInfo.append(title);
  parent.append(divImg);
  parent.append(divInfo);

  $(".new__Img--img").attr(info.img);
  title.text(info.title);

  return parent;
}


const InsertNews = (number, noti, container) => {
            console.log(noti);

                  noti.forEach(function(item){
                    console.log(item);
                    if(index<number){
                      container.append(News(item));
                    }
                  });

                }
