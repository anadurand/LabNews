'use strict';
const Header = () => {
  const parent = $('<header></header>');
  const header = $('<div class="header row"></div>');
  const divLeft = $('<div class="col-xs-6"></div>');
  const menu = $('<ul><li><img src="assets/img/menu.png" class=""></i><span>sections</span></li><li><img src="assets/img/search.png" class=""></i><span>search</span></li></ul>');
  const divRight = $('<div class="col-xs-6"></div>');
  const media = $('<ul><li><img src="assets/img/fb.png" class=""></i></li><li><img src="assets/img/tw.png" class=""></i></li><li><img src="assets/img/in.png" class=""></i></li></ul>');
  const divLogo = $('<div class="row"><div class="col-xs-12"><img src="assets/img/logoicon.png" class=""></div></div>');
  const divInfo = $('<div class="col-xs-12"></div>');
  const date = $('<span></span>');
  const img = $('<span>|</span><img src="assets/img/cloud.png" class="">');
  const clima = $('<span></span>');

  divLeft.append(menu);
  divRight.append(media);
  header.append(divLeft);
  header.append(divRight);

  divInfo.append(date);
  divInfo.append(img);
  divInfo.append(clima);
  divLogo.append(divInfo);

  parent.append(header);
  parent.append(divLogo);




  return parent;

}
