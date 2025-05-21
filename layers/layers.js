var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 0.745000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_NdeOAMsegnprovincia_1 = new ol.format.GeoJSON();
var features_NdeOAMsegnprovincia_1 = format_NdeOAMsegnprovincia_1.readFeatures(json_NdeOAMsegnprovincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NdeOAMsegnprovincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NdeOAMsegnprovincia_1.addFeatures(features_NdeOAMsegnprovincia_1);
var lyr_NdeOAMsegnprovincia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NdeOAMsegnprovincia_1, 
                style: style_NdeOAMsegnprovincia_1,
                popuplayertitle: 'N° de OAM según provincia',
                interactive: true,
    title: 'N° de OAM según provincia<br />\
    <img src="styles/legend/NdeOAMsegnprovincia_1_0.png" /> 0<br />\
    <img src="styles/legend/NdeOAMsegnprovincia_1_1.png" /> 1<br />\
    <img src="styles/legend/NdeOAMsegnprovincia_1_2.png" /> 2<br />\
    <img src="styles/legend/NdeOAMsegnprovincia_1_3.png" /> 3<br />\
    <img src="styles/legend/NdeOAMsegnprovincia_1_4.png" /> 4<br />\
    <img src="styles/legend/NdeOAMsegnprovincia_1_5.png" /> 5<br />\
    <img src="styles/legend/NdeOAMsegnprovincia_1_6.png" /> 8<br />\
    <img src="styles/legend/NdeOAMsegnprovincia_1_7.png" /> 9<br />\
    <img src="styles/legend/NdeOAMsegnprovincia_1_8.png" /> <br />' });
var format_LmiteDistrital_2 = new ol.format.GeoJSON();
var features_LmiteDistrital_2 = format_LmiteDistrital_2.readFeatures(json_LmiteDistrital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmiteDistrital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmiteDistrital_2.addFeatures(features_LmiteDistrital_2);
var lyr_LmiteDistrital_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteDistrital_2, 
                style: style_LmiteDistrital_2,
                popuplayertitle: 'Límite Distrital',
                interactive: false,
                title: '<img src="styles/legend/LmiteDistrital_2.png" /> Límite Distrital'
            });
var format_LimiteProvincial_3 = new ol.format.GeoJSON();
var features_LimiteProvincial_3 = format_LimiteProvincial_3.readFeatures(json_LimiteProvincial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteProvincial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProvincial_3.addFeatures(features_LimiteProvincial_3);
var lyr_LimiteProvincial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteProvincial_3, 
                style: style_LimiteProvincial_3,
                popuplayertitle: 'Limite Provincial',
                interactive: false,
                title: '<img src="styles/legend/LimiteProvincial_3.png" /> Limite Provincial'
            });
var format_LmiteDepartamental_4 = new ol.format.GeoJSON();
var features_LmiteDepartamental_4 = format_LmiteDepartamental_4.readFeatures(json_LmiteDepartamental_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmiteDepartamental_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmiteDepartamental_4.addFeatures(features_LmiteDepartamental_4);
var lyr_LmiteDepartamental_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteDepartamental_4, 
                style: style_LmiteDepartamental_4,
                popuplayertitle: 'Límite Departamental',
                interactive: false,
                title: '<img src="styles/legend/LmiteDepartamental_4.png" /> Límite Departamental'
            });
var format_LimiteCajamarca_5 = new ol.format.GeoJSON();
var features_LimiteCajamarca_5 = format_LimiteCajamarca_5.readFeatures(json_LimiteCajamarca_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteCajamarca_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteCajamarca_5.addFeatures(features_LimiteCajamarca_5);
var lyr_LimiteCajamarca_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteCajamarca_5, 
                style: style_LimiteCajamarca_5,
                popuplayertitle: 'Limite Cajamarca',
                interactive: false,
                title: '<img src="styles/legend/LimiteCajamarca_5.png" /> Limite Cajamarca'
            });
var format_Distritos_6 = new ol.format.GeoJSON();
var features_Distritos_6 = format_Distritos_6.readFeatures(json_Distritos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_6.addFeatures(features_Distritos_6);
var lyr_Distritos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distritos_6, 
                style: style_Distritos_6,
                popuplayertitle: 'Distritos ',
                interactive: true,
    title: 'Distritos <br />\
    <img src="styles/legend/Distritos_6_0.png" /> PARTICIPA<br />\
    <img src="styles/legend/Distritos_6_1.png" /> NO PARTICIPA<br />' });
var group_SanMiguel = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'San Miguel'});
var group_Cajamarca = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cajamarca'});
var group_Hualgayoc = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hualgayoc'});
var group_SantaCruz = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Santa Cruz'});
var group_SanIgnacio = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'San Ignacio'});
var group_Jaen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Jaen'});
var group_Cutervo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cutervo'});
var group_Chota = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Chota'});
var group_Celendin = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Celendin'});
var group_Cajabamba = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cajabamba'});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_NdeOAMsegnprovincia_1.setVisible(true);lyr_LmiteDistrital_2.setVisible(true);lyr_LimiteProvincial_3.setVisible(true);lyr_LmiteDepartamental_4.setVisible(true);lyr_LimiteCajamarca_5.setVisible(true);lyr_Distritos_6.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_NdeOAMsegnprovincia_1,lyr_LmiteDistrital_2,lyr_LimiteProvincial_3,lyr_LmiteDepartamental_4,lyr_LimiteCajamarca_5,lyr_Distritos_6];
lyr_NdeOAMsegnprovincia_1.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMENTO', 'PROVINCIA': 'PROVINCIA', 'CAPITAL': 'CAPITAL', 'OAM': 'SOLICITUDES EEMRI', 'ELEGIBLES': 'ELEGIBLES', 'NO ELEGIBL': 'NO ELEGIBLE', 'INFORMACIO': 'INFORMACIO', });
lyr_LmiteDistrital_2.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'IDPROV': 'IDPROV', 'PROVINCIA': 'PROVINCIA', 'IDDIST': 'IDDIST', 'DISTRITO': 'DISTRITO', 'CAPITAL': 'CAPITAL', 'CODCCPP': 'CODCCPP', 'AREA': 'AREA', 'FUENTE': 'FUENTE', 'Minusculas': 'Minusculas', });
lyr_LimiteProvincial_3.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'CAPITAL': 'CAPITAL', 'OAM': 'OAM', 'ELEGIBLES': 'ELEGIBLES', 'NO ELEGIBL': 'NO ELEGIBL', 'INFORMACIO': 'INFORMACIO', });
lyr_LmiteDepartamental_4.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', 'FUENTE': 'FUENTE', });
lyr_LimiteCajamarca_5.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', 'FUENTE': 'FUENTE', });
lyr_Distritos_6.set('fieldAliases', {'CATEGORIA': 'CATEGORIA', 'NOMBRE': 'NOMBRE', 'DISTRITO': 'DISTRITO', 'DEPARTA': 'DEPARTA', 'EEMRI': 'SOLICITUDES EEMRI', 'participa': 'PARTICIPA EEMRI', 'ELEGIBLES': 'ELEGIBLES', 'NO ELEGIBL': 'NO ELEGIBLES', 'Minusculas': 'Minusculas', });
lyr_NdeOAMsegnprovincia_1.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CAPITAL': 'TextEdit', 'OAM': 'TextEdit', 'ELEGIBLES': 'Range', 'NO ELEGIBL': 'Range', 'INFORMACIO': 'ExternalResource', });
lyr_LmiteDistrital_2.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'IDPROV': 'TextEdit', 'PROVINCIA': 'TextEdit', 'IDDIST': 'TextEdit', 'DISTRITO': 'TextEdit', 'CAPITAL': 'TextEdit', 'CODCCPP': 'TextEdit', 'AREA': 'Range', 'FUENTE': 'TextEdit', 'Minusculas': 'TextEdit', });
lyr_LimiteProvincial_3.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CAPITAL': 'TextEdit', 'OAM': 'TextEdit', 'ELEGIBLES': 'TextEdit', 'NO ELEGIBL': 'TextEdit', 'INFORMACIO': 'ExternalResource', });
lyr_LmiteDepartamental_4.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_LimiteCajamarca_5.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_Distritos_6.set('fieldImages', {'CATEGORIA': 'TextEdit', 'NOMBRE': 'TextEdit', 'DISTRITO': 'TextEdit', 'DEPARTA': 'TextEdit', 'EEMRI': 'TextEdit', 'participa': 'TextEdit', 'ELEGIBLES': 'Range', 'NO ELEGIBL': 'Range', 'Minusculas': 'TextEdit', });
lyr_NdeOAMsegnprovincia_1.set('fieldLabels', {'IDDPTO': 'hidden field', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'CAPITAL': 'hidden field', 'OAM': 'inline label - always visible', 'ELEGIBLES': 'inline label - always visible', 'NO ELEGIBL': 'inline label - always visible', 'INFORMACIO': 'inline label - always visible', });
lyr_LmiteDistrital_2.set('fieldLabels', {'IDDPTO': 'no label', 'DEPARTAMEN': 'no label', 'IDPROV': 'no label', 'PROVINCIA': 'no label', 'IDDIST': 'no label', 'DISTRITO': 'inline label - visible with data', 'CAPITAL': 'no label', 'CODCCPP': 'no label', 'AREA': 'no label', 'FUENTE': 'no label', 'Minusculas': 'no label', });
lyr_LimiteProvincial_3.set('fieldLabels', {'IDDPTO': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'CAPITAL': 'no label', 'OAM': 'no label', 'ELEGIBLES': 'no label', 'NO ELEGIBL': 'no label', 'INFORMACIO': 'no label', });
lyr_LmiteDepartamental_4.set('fieldLabels', {'IDDPTO': 'no label', 'DEPARTAMEN': 'no label', 'CAPITAL': 'no label', 'FUENTE': 'no label', });
lyr_LimiteCajamarca_5.set('fieldLabels', {'IDDPTO': 'hidden field', 'DEPARTAMEN': 'hidden field', 'CAPITAL': 'no label', 'FUENTE': 'no label', });
lyr_Distritos_6.set('fieldLabels', {'CATEGORIA': 'hidden field', 'NOMBRE': 'hidden field', 'DISTRITO': 'inline label - always visible', 'DEPARTA': 'hidden field', 'EEMRI': 'inline label - always visible', 'participa': 'hidden field', 'ELEGIBLES': 'inline label - always visible', 'NO ELEGIBL': 'inline label - always visible', 'Minusculas': 'hidden field', });
lyr_Distritos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});