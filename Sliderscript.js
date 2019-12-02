const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Patches = require('Patches');
const TouchGestures = require('TouchGestures');

var val = 0;
const slider = NativeUI.slider;
slider.value.monitor({fireOnInitialValue:false}).subscribe((mod)=>{
  val = mod.newvaLue;
});

slider.value = 0.1;
slider.visible = true;

slider.value.monitor().subscribe(function(val) {
  Patches.setScalarValue("Slider", val.newValue);
});