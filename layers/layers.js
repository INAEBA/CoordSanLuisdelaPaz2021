var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionSanLuisdelaPaz_3 = new ol.format.GeoJSON();
var features_CoordinacionSanLuisdelaPaz_3 = format_CoordinacionSanLuisdelaPaz_3.readFeatures(json_CoordinacionSanLuisdelaPaz_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanLuisdelaPaz_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanLuisdelaPaz_3.addFeatures(features_CoordinacionSanLuisdelaPaz_3);
var lyr_CoordinacionSanLuisdelaPaz_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanLuisdelaPaz_3, 
                style: style_CoordinacionSanLuisdelaPaz_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanLuisdelaPaz_3.png" /> Coordinacion San Luis de la Paz'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionVIC1_5 = new ol.format.GeoJSON();
var features_MicroregionVIC1_5 = format_MicroregionVIC1_5.readFeatures(json_MicroregionVIC1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionVIC1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionVIC1_5.addFeatures(features_MicroregionVIC1_5);
var lyr_MicroregionVIC1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionVIC1_5, 
                style: style_MicroregionVIC1_5,
                interactive: false,
    title: 'Microregion VIC1<br />\
    <img src="styles/legend/MicroregionVIC1_5_0.png" /> 2 - 25 Personas<br />\
    <img src="styles/legend/MicroregionVIC1_5_1.png" /> 25 - 60 Personas<br />\
    <img src="styles/legend/MicroregionVIC1_5_2.png" /> 60 - 124 Personas<br />\
    <img src="styles/legend/MicroregionVIC1_5_3.png" /> 124 - 213 Personas<br />\
    <img src="styles/legend/MicroregionVIC1_5_4.png" /> 213 - 319 Personas<br />'
        });
var format_MicroregionSLP4_6 = new ol.format.GeoJSON();
var features_MicroregionSLP4_6 = format_MicroregionSLP4_6.readFeatures(json_MicroregionSLP4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSLP4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSLP4_6.addFeatures(features_MicroregionSLP4_6);
var lyr_MicroregionSLP4_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSLP4_6, 
                style: style_MicroregionSLP4_6,
                interactive: false,
    title: 'Microregion SLP4<br />\
    <img src="styles/legend/MicroregionSLP4_6_0.png" /> 2 - 37 Personas<br />\
    <img src="styles/legend/MicroregionSLP4_6_1.png" /> 37 - 89 Personas<br />\
    <img src="styles/legend/MicroregionSLP4_6_2.png" /> 89 - 149 Personas<br />\
    <img src="styles/legend/MicroregionSLP4_6_3.png" /> 149 - 321 Personas<br />\
    <img src="styles/legend/MicroregionSLP4_6_4.png" /> 321 - 529 Personas<br />'
        });
var format_MicroregionSLP3_7 = new ol.format.GeoJSON();
var features_MicroregionSLP3_7 = format_MicroregionSLP3_7.readFeatures(json_MicroregionSLP3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSLP3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSLP3_7.addFeatures(features_MicroregionSLP3_7);
var lyr_MicroregionSLP3_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSLP3_7, 
                style: style_MicroregionSLP3_7,
                interactive: false,
    title: 'Microregion SLP3<br />\
    <img src="styles/legend/MicroregionSLP3_7_0.png" /> 1 - 17 Personas<br />\
    <img src="styles/legend/MicroregionSLP3_7_1.png" /> 17 - 46 Personas<br />\
    <img src="styles/legend/MicroregionSLP3_7_2.png" /> 46 - 106 Personas<br />\
    <img src="styles/legend/MicroregionSLP3_7_3.png" /> 106 - 287 Personas<br />\
    <img src="styles/legend/MicroregionSLP3_7_4.png" /> 287 - 474 Personas<br />'
        });
var format_MicroregionSLP2_8 = new ol.format.GeoJSON();
var features_MicroregionSLP2_8 = format_MicroregionSLP2_8.readFeatures(json_MicroregionSLP2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSLP2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSLP2_8.addFeatures(features_MicroregionSLP2_8);
var lyr_MicroregionSLP2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSLP2_8, 
                style: style_MicroregionSLP2_8,
                interactive: false,
    title: 'Microregion SLP2<br />\
    <img src="styles/legend/MicroregionSLP2_8_0.png" /> 2 - 32 Personas<br />\
    <img src="styles/legend/MicroregionSLP2_8_1.png" /> 32 - 83 Personas<br />\
    <img src="styles/legend/MicroregionSLP2_8_2.png" /> 83 - 154 Personas<br />\
    <img src="styles/legend/MicroregionSLP2_8_3.png" /> 154 - 290 Personas<br />\
    <img src="styles/legend/MicroregionSLP2_8_4.png" /> 290 - 526 Personas<br />'
        });
var format_MicroregionSLP1_9 = new ol.format.GeoJSON();
var features_MicroregionSLP1_9 = format_MicroregionSLP1_9.readFeatures(json_MicroregionSLP1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSLP1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSLP1_9.addFeatures(features_MicroregionSLP1_9);
var lyr_MicroregionSLP1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSLP1_9, 
                style: style_MicroregionSLP1_9,
                interactive: false,
    title: 'Microregion SLP1<br />\
    <img src="styles/legend/MicroregionSLP1_9_0.png" /> 3 - 16 Personas<br />\
    <img src="styles/legend/MicroregionSLP1_9_1.png" /> 16 - 36 Personas<br />\
    <img src="styles/legend/MicroregionSLP1_9_2.png" /> 36 - 59 Personas<br />\
    <img src="styles/legend/MicroregionSLP1_9_3.png" /> 59 - 93 Personas<br />\
    <img src="styles/legend/MicroregionSLP1_9_4.png" /> 93 - 144 Personas<br />'
        });
var format_CoordinacionSanLuisdelaPaz_10 = new ol.format.GeoJSON();
var features_CoordinacionSanLuisdelaPaz_10 = format_CoordinacionSanLuisdelaPaz_10.readFeatures(json_CoordinacionSanLuisdelaPaz_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanLuisdelaPaz_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanLuisdelaPaz_10.addFeatures(features_CoordinacionSanLuisdelaPaz_10);
var lyr_CoordinacionSanLuisdelaPaz_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanLuisdelaPaz_10, 
                style: style_CoordinacionSanLuisdelaPaz_10,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionSanLuisdelaPaz_10.png" /> Coordinacion San Luis de la Paz'
            });
var group_CoordinacionSanLuisdelaPazRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionVIC1_5,lyr_MicroregionSLP4_6,lyr_MicroregionSLP3_7,lyr_MicroregionSLP2_8,lyr_MicroregionSLP1_9,],
                                title: "Coordinacion San Luis de la Paz Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionSanLuisdelaPaz_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionSanLuisdelaPaz_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionVIC1_5.setVisible(true);lyr_MicroregionSLP4_6.setVisible(true);lyr_MicroregionSLP3_7.setVisible(true);lyr_MicroregionSLP2_8.setVisible(true);lyr_MicroregionSLP1_9.setVisible(true);lyr_CoordinacionSanLuisdelaPaz_10.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionSanLuisdelaPazRezago,lyr_CoordinacionSanLuisdelaPaz_10];
lyr_CoordinacionSanLuisdelaPaz_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionVIC1_5.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSLP4_6.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSLP3_7.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSLP2_8.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSLP1_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanLuisdelaPaz_10.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionSanLuisdelaPaz_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionVIC1_5.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSLP4_6.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSLP3_7.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSLP2_8.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSLP1_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanLuisdelaPaz_10.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionSanLuisdelaPaz_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionVIC1_5.set('fieldLabels', {});
lyr_MicroregionSLP4_6.set('fieldLabels', {});
lyr_MicroregionSLP3_7.set('fieldLabels', {});
lyr_MicroregionSLP2_8.set('fieldLabels', {});
lyr_MicroregionSLP1_9.set('fieldLabels', {});
lyr_CoordinacionSanLuisdelaPaz_10.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionSanLuisdelaPaz_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});