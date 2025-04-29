function convertEnabled() {
  return game.settings.get("DND5e-PTBR", "convert");
}

function setEncumbranceData() {
  let convert = convertEnabled();
  game.settings.set("dnd5e", "metricWeightUnits", convert);
}




Hooks.once('babele.init', (Babele) => {
    
    game.settings.register("DND5e-PTBR", "convert", {
      name: "Conversão Automática",
      hint: "Automaticamente aplica a conversão de medidas (pés-metros/milhas-quilômetros).",
      scope: "world",
      type: Boolean,
      default: true,
      config: true,
      onChange: convert => {
        setEncumbranceData();
      }
    });


    Babele.register({
      module: 'DND5e-PTBR',
      lang: 'pt-BR',
      dir: 'compendium'
    });


});


