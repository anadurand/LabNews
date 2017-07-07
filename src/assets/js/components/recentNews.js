'use strict';

const RecentNews = () => {
  const parent = $('<div class="actualNews"></div>');
  const firstNews = $('<div class="firstNews"></div>');
  const divInfo = $('<div class="firstNews__info"></div>');
  const title = $('<h2 class="firstNews__info--title></h2>');
  const brief = $('<p class="firstNews__info--brief></p>');
  const actualNews = $('<div class="news"></div>');



  divInfo.append(title);
  divInfo.append(brief);
  firstNews.append(divInfo);
  parent.append(firstNews);
  parent.append(actualNews);

  InsertNews(3,state.main, actualNews);

  return parent;
}
