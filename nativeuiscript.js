// const Diagnostics = require('Diagnostics');
const NUI = require('NativeUI');
const Patches = require('Patches');
const Textures = require('Textures');

const Picker = {
  init(assets = []) {
    Promise.all(assets).then((assets) => this.onLoad(assets));
  },
  onLoad(assets) {
    this.icons = assets[0];
    if (this.icons.length <= 0) {
      throw `\nNenhum icone encontrado \n\nEg:\nO nome dos icones devem ser botao0, botao1, botao2 \nBotao0, Botao1, Botao2 nao irao funcionar` ;
    }
    this.setUpPicker().then(() => {
      this.monitorIndex();
    });
  },
  setUpPicker() {
    return new Promise((resolve) => {
      this.icons.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      let iconsArray = [];
      this.icons.forEach((element) => {
        iconsArray.push({ image_texture: element });
      });
      try {
        NUI.picker.configure({ selectedIndex: 0, items: iconsArray });
        NUI.picker.visible = true;
        resolve();
      } catch (error) {
        throw '\nAn error occured:\n\nGo to Project > Edit Properties... > Capabilities > + NativeUI > + Picker\n\nLembre de ativar o no compression das texturas do picker ;)';
      }
    });
  },
  monitorIndex() {
    NUI.picker.selectedIndex
      .monitor({ fireOnInitialValue: true })
      .select('newValue')
      .subscribe((val) => {
        // Please make sure to define a FromScript patch with that name in the patch editor. Select the script > +From Script Variable (scalar) called "index" (case SENSITIVE)
        Patches.inputs.setScalar('index', val);
      });
  },
};

Picker.init([Textures.findUsingPattern('botao*')]);
