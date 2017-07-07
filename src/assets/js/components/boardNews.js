'use strict';

const BoardNews = (update) => {
  const parent = $('<div class="board"></div>');



  // const firstNews = $('<div class="firstNews"></div>');
  // const divInfo = $('<div class="firstNews__info"></div>');
  // const title = $('<h2 class="firstNews__info--title></h2>');
  // const brief = $('<p class="firstNews__info--brief></p>');

  parent.append(RecentNews());

  return parent;
}
