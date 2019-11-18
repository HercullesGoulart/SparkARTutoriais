const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');
const TouchGestures = require('TouchGestures');

const index = 0;
const configuration = {
  selectedIndex: index,
  items: [
    {image_texture: Textures.get('botao0')},
{image_texture: Textures.get('botao1')},
{image_texture: Textures.get('botao2')},
{image_texture: Textures.get('botao3')},
{image_texture: Textures.get('botao4')},    
  ],
};
const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) {
  Patches.setScalarValue("Number", val.newValue);
});
