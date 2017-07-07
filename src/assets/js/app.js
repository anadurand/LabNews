const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper container"></div>');
  wrapper.append(Header());
  wrapper.append(NavBAr());

  if(state.page ==null){
    wrapper.append(BoardNews(update));
    // wrapper.append(Carrousel(update));
  }else {
    wrapper.append(DetailNews(update));
  }
  //
  // wrapper.append(Footer());
  root.append(wrapper);

}

const update = function() {
  render(root);
}

const state = {
  page: null,
  noticias: null,
  main: [],
  mundo: [],
  tecnologia: [],
  educacion: [],
  opinion: [],
  carrousel: []
};


$( _=>{

  $.get('/api/news/', (result) => {
      if (!result) { return alert('no hay data');}
      state.noticias = result;
      GetInfo();
    });
    const root = $('.root');
    render(root);

});
