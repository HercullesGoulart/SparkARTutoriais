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
{image_texture: Textures.get('botao3')},
{image_texture: Textures.get('botao4')},
{image_texture: Textures.get('botao5')},
{image_texture: Textures.get('botao6')},
{image_texture: Textures.get('botao7')},
{image_texture: Textures.get('botao8')},
{image_texture: Textures.get('botao9')},
    
  ],
  mats: [
    {material: Materials.get("material0")},
{material: Materials.get("material1")},
{material: Materials.get("material2")},
{material: Materials.get("material3")},
{material: Materials.get("material4")},
{material: Materials.get("material5")},
{material: Materials.get("material6")},
{material: Materials.get("material7")},
{material: Materials.get("material8")},
{material: Materials.get("material9")},
   
  ]
};
const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) {
    plane.material = configuration.mats[val.newValue].material;
;
});