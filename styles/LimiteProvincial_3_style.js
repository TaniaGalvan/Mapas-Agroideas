var size = 0;
var placement = 'point';

var style_LimiteProvincial_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#0b2e0b";
    var bufferColor = "#ffffff";
    var bufferWidth = 2.0999999999999996;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("PROVINCIA") !== null) {
        labelText = String(feature.get("PROVINCIA"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(11,46,11,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
