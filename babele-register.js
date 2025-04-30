Hooks.once('init', () => {
  if(typeof Babele !== 'undefined'){
    Babele.get().register({
      module: 'DND5e-PTBR',
      lang: 'pt-BR',
      dir: 'compendium'
    });
  }

});


