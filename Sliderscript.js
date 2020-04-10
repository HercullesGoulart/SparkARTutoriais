const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Patches = require('Patches');

// Cria o Slider na cena
var slider = NativeUI.slider;

// Faz o slider ficar visivel
slider.visible = true;

// Quando o slider é usado ele passa o valor para o Patch Editor
slider.value.monitor().subscribe(function(val) {
    Patches.setScalarValue("Slider", val.newValue);
});
