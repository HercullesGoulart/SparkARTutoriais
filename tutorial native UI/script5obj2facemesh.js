const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

const objeto = Scene.root.find('faceMesh0');
const objeto2 = Scene.root.find('faceMesh1');
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
  mats: [
    {material: Materials.get("mats1")},
{material: Materials.get("mats2")},
{material: Materials.get("mats3")},
{material: Materials.get("mats4")},
{material: Materials.get("mats5")},

   
  ],
 mat: [
    {material: Materials.get("mat1")},
{material: Materials.get("mat2")},
{material: Materials.get("mat3")},
{material: Materials.get("mat4")},
{material: Materials.get("mat5")},
 
  ],
};
const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) {
    objeto.material = configuration.mats[val.newValue].material;
;

}

);
picker.selectedIndex.monitor().subscribe(function(val) {
  objeto2.material = configuration.mat[val.newValue].material;
  ;

}

);
