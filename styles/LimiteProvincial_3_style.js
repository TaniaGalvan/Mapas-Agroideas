var size = 0;
var placement = 'point';

var style_LimiteProvincial_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 2.7;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("wordwrap(\"PROVINCIA\",8)") !== null) {
        labelText = String(feature.get("wordwrap(\"PROVINCIA\",8)"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(97,9,78,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(251,238,250,0.30196078431372547)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
