var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tumbes_limite_distrito_1 = new ol.format.GeoJSON();
var features_tumbes_limite_distrito_1 = format_tumbes_limite_distrito_1.readFeatures(json_tumbes_limite_distrito_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tumbes_limite_distrito_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tumbes_limite_distrito_1.addFeatures(features_tumbes_limite_distrito_1);
var lyr_tumbes_limite_distrito_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tumbes_limite_distrito_1, 
                style: style_tumbes_limite_distrito_1,
                interactive: true,
    title: 'tumbes_limite_distrito<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_0.png" /> AGUAS VERDES<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_1.png" /> CANOAS DE PUNTA SAL<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_2.png" /> CASITAS<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_3.png" /> CORRALES<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_4.png" /> LA CRUZ<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_5.png" /> MATAPALO<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_6.png" /> PAMPAS DE HOSPITAL<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_7.png" /> PAPAYAL<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_8.png" /> SAN JACINTO<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_9.png" /> SAN JUAN DE LA VIRGEN<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_10.png" /> TUMBES<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_11.png" /> ZARUMILLA<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_12.png" /> ZORRITOS<br />\
    <img src="styles/legend/tumbes_limite_distrito_1_13.png" /> <br />'
        });
var format_tumbes_infraestructura_salud_2 = new ol.format.GeoJSON();
var features_tumbes_infraestructura_salud_2 = format_tumbes_infraestructura_salud_2.readFeatures(json_tumbes_infraestructura_salud_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tumbes_infraestructura_salud_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tumbes_infraestructura_salud_2.addFeatures(features_tumbes_infraestructura_salud_2);
var lyr_tumbes_infraestructura_salud_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tumbes_infraestructura_salud_2, 
                style: style_tumbes_infraestructura_salud_2,
                interactive: true,
    title: 'tumbes_infraestructura_salud<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_0.png" /> AGUAS VERDES<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_1.png" /> CANOAS DE PUNTA SAL<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_2.png" /> CASITAS<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_3.png" /> CORRALES<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_4.png" /> LA CRUZ<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_5.png" /> MATAPALO<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_6.png" /> PAMPAS DE HOSPITAL<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_7.png" /> PAPAYAL<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_8.png" /> SAN JACINTO<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_9.png" /> SAN JUAN DE LA VIRGEN<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_10.png" /> TUMBES<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_11.png" /> ZARUMILLA<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_12.png" /> ZORRITOS<br />\
    <img src="styles/legend/tumbes_infraestructura_salud_2_13.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_tumbes_limite_distrito_1.setVisible(true);lyr_tumbes_infraestructura_salud_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_tumbes_limite_distrito_1,lyr_tumbes_infraestructura_salud_2];
lyr_tumbes_limite_distrito_1.set('fieldAliases', {'CCDD': 'CCDD', 'NOMBDEP': 'NOMBDEP', 'CCPP': 'CCPP', 'NOMBPROV': 'NOMBPROV', 'CCDI': 'CCDI', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', 'UBIGEO': 'UBIGEO', 'IDPROV': 'IDPROV', 'CODIGO': 'CODIGO', 'CNT_CCPP': 'CNT_CCPP', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_tumbes_infraestructura_salud_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'Institucio': 'Institucio', 'Nombre': 'Nombre', 'Clasificac': 'Clasificac', 'Tipo': 'Tipo', 'Departamen': 'Departamen', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'UBIGEO': 'UBIGEO', 'Direccion': 'Direccion', 'DISA': 'DISA', 'Red': 'Red', 'Microrred': 'Microrred', 'U_Ejecutor': 'U_Ejecutor', 'Categoria': 'Categoria', 'Telefono': 'Telefono', 'Inicio': 'Inicio', 'Responsabl': 'Responsabl', 'Estado': 'Estado', 'Condicion': 'Condicion', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'COTA': 'COTA', 'CAMAS': 'CAMAS', });
lyr_tumbes_limite_distrito_1.set('fieldImages', {'CCDD': 'TextEdit', 'NOMBDEP': 'TextEdit', 'CCPP': 'TextEdit', 'NOMBPROV': 'TextEdit', 'CCDI': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', 'UBIGEO': 'TextEdit', 'IDPROV': 'TextEdit', 'CODIGO': 'TextEdit', 'CNT_CCPP': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_tumbes_infraestructura_salud_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'Institucio': 'TextEdit', 'Nombre': 'TextEdit', 'Clasificac': 'TextEdit', 'Tipo': 'TextEdit', 'Departamen': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'UBIGEO': 'TextEdit', 'Direccion': 'TextEdit', 'DISA': 'TextEdit', 'Red': 'TextEdit', 'Microrred': 'TextEdit', 'U_Ejecutor': 'TextEdit', 'Categoria': 'TextEdit', 'Telefono': 'TextEdit', 'Inicio': 'TextEdit', 'Responsabl': 'TextEdit', 'Estado': 'TextEdit', 'Condicion': 'TextEdit', 'NORTE': 'TextEdit', 'ESTE': 'TextEdit', 'COTA': 'TextEdit', 'CAMAS': 'TextEdit', });
lyr_tumbes_limite_distrito_1.set('fieldLabels', {'CCDD': 'no label', 'NOMBDEP': 'no label', 'CCPP': 'no label', 'NOMBPROV': 'no label', 'CCDI': 'no label', 'NOMBDIST': 'no label', 'CAPITAL': 'no label', 'UBIGEO': 'no label', 'IDPROV': 'no label', 'CODIGO': 'no label', 'CNT_CCPP': 'no label', 'DESCRIPCIO': 'no label', });
lyr_tumbes_infraestructura_salud_2.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'Institucio': 'no label', 'Nombre': 'no label', 'Clasificac': 'no label', 'Tipo': 'no label', 'Departamen': 'no label', 'Provincia': 'no label', 'Distrito': 'no label', 'UBIGEO': 'no label', 'Direccion': 'no label', 'DISA': 'no label', 'Red': 'no label', 'Microrred': 'no label', 'U_Ejecutor': 'no label', 'Categoria': 'no label', 'Telefono': 'no label', 'Inicio': 'no label', 'Responsabl': 'no label', 'Estado': 'no label', 'Condicion': 'no label', 'NORTE': 'no label', 'ESTE': 'no label', 'COTA': 'no label', 'CAMAS': 'no label', });
lyr_tumbes_infraestructura_salud_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});