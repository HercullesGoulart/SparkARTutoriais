const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

const plane = Scene.root.find('plane0');
const index = 0;
const configuration = {
  selectedIndex: index,
  items: [
    {image_texture: Textures.get('botao0')},
{image_texture: Textures.get('botao1')},
{image_texture: Textures.get('botao2')},

    
  ],
  mats: [
    {material: Materials.get("material0")},
{material: Materials.get("material1")},
{material: Materials.get("material2")},

  ]
};
const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) {
    plane.material = configuration.mats[val.newValue].material;
;
});
