var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 0.745000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_EEMRI2025_1 = new ol.format.GeoJSON();
var features_EEMRI2025_1 = format_EEMRI2025_1.readFeatures(json_EEMRI2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EEMRI2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEMRI2025_1.addFeatures(features_EEMRI2025_1);
var lyr_EEMRI2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EEMRI2025_1, 
                style: style_EEMRI2025_1,
                popuplayertitle: 'EEMRI 2025',
                interactive: true,
                title: '<img src="styles/legend/EEMRI2025_1.png" /> EEMRI 2025'
            });
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
var format_LimiteAncash_5 = new ol.format.GeoJSON();
var features_LimiteAncash_5 = format_LimiteAncash_5.readFeatures(json_LimiteAncash_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteAncash_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteAncash_5.addFeatures(features_LimiteAncash_5);
var lyr_LimiteAncash_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteAncash_5, 
                style: style_LimiteAncash_5,
                popuplayertitle: 'Limite Ancash',
                interactive: false,
                title: '<img src="styles/legend/LimiteAncash_5.png" /> Limite Ancash'
            });
var format_DistritosparticipanEEMRI_6 = new ol.format.GeoJSON();
var features_DistritosparticipanEEMRI_6 = format_DistritosparticipanEEMRI_6.readFeatures(json_DistritosparticipanEEMRI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosparticipanEEMRI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosparticipanEEMRI_6.addFeatures(features_DistritosparticipanEEMRI_6);
var lyr_DistritosparticipanEEMRI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosparticipanEEMRI_6, 
                style: style_DistritosparticipanEEMRI_6,
                popuplayertitle: 'Distritos participan EEMRI ',
                interactive: true,
    title: 'Distritos participan EEMRI <br />\
    <img src="styles/legend/DistritosparticipanEEMRI_6_0.png" /> PARTICIPA<br />' });
var format_DistritosnoparticipanEEMRI_7 = new ol.format.GeoJSON();
var features_DistritosnoparticipanEEMRI_7 = format_DistritosnoparticipanEEMRI_7.readFeatures(json_DistritosnoparticipanEEMRI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosnoparticipanEEMRI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosnoparticipanEEMRI_7.addFeatures(features_DistritosnoparticipanEEMRI_7);
var lyr_DistritosnoparticipanEEMRI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosnoparticipanEEMRI_7, 
                style: style_DistritosnoparticipanEEMRI_7,
                popuplayertitle: 'Distritos no participan EEMRI',
                interactive: false,
    title: 'Distritos no participan EEMRI<br />\
    <img src="styles/legend/DistritosnoparticipanEEMRI_7_0.png" /> NO PARTICIPA<br />' });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_EEMRI2025_1.setVisible(true);lyr_LmiteDistrital_2.setVisible(true);lyr_LimiteProvincial_3.setVisible(true);lyr_LmiteDepartamental_4.setVisible(true);lyr_LimiteAncash_5.setVisible(true);lyr_DistritosparticipanEEMRI_6.setVisible(true);lyr_DistritosnoparticipanEEMRI_7.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_EEMRI2025_1,lyr_LmiteDistrital_2,lyr_LimiteProvincial_3,lyr_LmiteDepartamental_4,lyr_LimiteAncash_5,lyr_DistritosparticipanEEMRI_6,lyr_DistritosnoparticipanEEMRI_7];
lyr_EEMRI2025_1.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMENTO', 'PROVINCIA': 'PROVINCIA', 'CAPITAL': 'CAPITAL', 'OAM': 'SOLICITUDES EEMRI', 'ELEGIBLES': 'ELEGIBLES', 'NO ELEGIBL': 'NO ELEGIBLES', 'INFORMACIO': 'INFORMACIÓN', });
lyr_LmiteDistrital_2.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'IDPROV': 'IDPROV', 'PROVINCIA': 'PROVINCIA', 'IDDIST': 'IDDIST', 'DISTRITO': 'DISTRITO', 'CAPITAL': 'CAPITAL', 'CODCCPP': 'CODCCPP', 'AREA': 'AREA', 'FUENTE': 'FUENTE', 'Minusculas': 'Minusculas', });
lyr_LimiteProvincial_3.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'CAPITAL': 'CAPITAL', 'OAM': 'OAM', 'ELEGIBLES': 'ELEGIBLES', 'NO ELEGIBL': 'NO ELEGIBL', 'INFORMACIO': 'INFORMACIO', });
lyr_LmiteDepartamental_4.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', 'FUENTE': 'FUENTE', });
lyr_LimiteAncash_5.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', 'FUENTE': 'FUENTE', });
lyr_DistritosparticipanEEMRI_6.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'DISTRITO': 'DISTRITO', 'DEPARTA': 'DEPARTA', 'SOL EEMRI': 'SOLICITUDES EEMRI 2023', 'ELEGIBLES': 'SOLICITUDES EEMRI 2024', 'NO ELEGI': 'SOLICITUDES EEMRI 2025', 'minusculas': 'minusculas', 'PARTICIPA': 'PARTICIPA EEMRI', 'RESULTADOS': 'RESULTADOS', });
lyr_DistritosnoparticipanEEMRI_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'DISTRITO': 'DISTRITO', 'DEPARTA': 'DEPARTA', 'SOL EEMRI': 'SOLICITUDES EEMRI 2023', 'ELEGIBLES': 'SOLICITUDES EEMRI 2024', 'NO ELEGI': 'SOLICITUDES EEMRI 2025', 'minusculas': 'minusculas', 'PARTICIPA': 'PARTICIPA EEMRI', 'RESULTADOS': 'RESULTADOS', });
lyr_EEMRI2025_1.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CAPITAL': 'TextEdit', 'OAM': 'TextEdit', 'ELEGIBLES': 'Range', 'NO ELEGIBL': 'Range', 'INFORMACIO': 'ExternalResource', });
lyr_LmiteDistrital_2.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'IDPROV': 'TextEdit', 'PROVINCIA': 'TextEdit', 'IDDIST': 'TextEdit', 'DISTRITO': 'TextEdit', 'CAPITAL': 'TextEdit', 'CODCCPP': 'TextEdit', 'AREA': 'Range', 'FUENTE': 'TextEdit', 'Minusculas': 'TextEdit', });
lyr_LimiteProvincial_3.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CAPITAL': 'TextEdit', 'OAM': 'TextEdit', 'ELEGIBLES': 'TextEdit', 'NO ELEGIBL': 'TextEdit', 'INFORMACIO': 'ExternalResource', });
lyr_LmiteDepartamental_4.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_LimiteAncash_5.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_DistritosparticipanEEMRI_6.set('fieldImages', {'NOMBRE': 'TextEdit', 'DISTRITO': 'TextEdit', 'DEPARTA': 'TextEdit', 'SOL EEMRI': 'TextEdit', 'ELEGIBLES': 'TextEdit', 'NO ELEGI': 'TextEdit', 'minusculas': 'TextEdit', 'PARTICIPA': 'TextEdit', 'RESULTADOS': 'ExternalResource', });
lyr_DistritosnoparticipanEEMRI_7.set('fieldImages', {'NOMBRE': 'TextEdit', 'DISTRITO': 'TextEdit', 'DEPARTA': 'TextEdit', 'SOL EEMRI': 'TextEdit', 'ELEGIBLES': 'TextEdit', 'NO ELEGI': 'TextEdit', 'minusculas': 'TextEdit', 'PARTICIPA': 'TextEdit', 'RESULTADOS': 'ExternalResource', });
lyr_EEMRI2025_1.set('fieldLabels', {'IDDPTO': 'hidden field', 'DEPARTAMEN': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'CAPITAL': 'hidden field', 'OAM': 'inline label - always visible', 'ELEGIBLES': 'inline label - always visible', 'NO ELEGIBL': 'inline label - always visible', 'INFORMACIO': 'hidden field', });
lyr_LmiteDistrital_2.set('fieldLabels', {'IDDPTO': 'inline label - visible with data', 'DEPARTAMEN': 'no label', 'IDPROV': 'no label', 'PROVINCIA': 'header label - always visible', 'IDDIST': 'no label', 'DISTRITO': 'no label', 'CAPITAL': 'no label', 'CODCCPP': 'no label', 'AREA': 'no label', 'FUENTE': 'no label', 'Minusculas': 'no label', });
lyr_LimiteProvincial_3.set('fieldLabels', {'IDDPTO': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'CAPITAL': 'no label', 'OAM': 'no label', 'ELEGIBLES': 'no label', 'NO ELEGIBL': 'no label', 'INFORMACIO': 'no label', });
lyr_LmiteDepartamental_4.set('fieldLabels', {'IDDPTO': 'no label', 'DEPARTAMEN': 'no label', 'CAPITAL': 'no label', 'FUENTE': 'no label', });
lyr_LimiteAncash_5.set('fieldLabels', {'IDDPTO': 'hidden field', 'DEPARTAMEN': 'hidden field', 'CAPITAL': 'no label', 'FUENTE': 'no label', });
lyr_DistritosparticipanEEMRI_6.set('fieldLabels', {'NOMBRE': 'hidden field', 'DISTRITO': 'inline label - always visible', 'DEPARTA': 'hidden field', 'SOL EEMRI': 'inline label - always visible', 'ELEGIBLES': 'inline label - always visible', 'NO ELEGI': 'inline label - always visible', 'minusculas': 'hidden field', 'PARTICIPA': 'hidden field', 'RESULTADOS': 'header label - always visible', });
lyr_DistritosnoparticipanEEMRI_7.set('fieldLabels', {'NOMBRE': 'hidden field', 'DISTRITO': 'inline label - always visible', 'DEPARTA': 'no label', 'SOL EEMRI': 'no label', 'ELEGIBLES': 'no label', 'NO ELEGI': 'no label', 'minusculas': 'no label', 'PARTICIPA': 'no label', 'RESULTADOS': 'no label', });
lyr_DistritosnoparticipanEEMRI_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});