var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BARRIOS_CALDERON_3 = new ol.format.GeoJSON();
var features_BARRIOS_CALDERON_3 = format_BARRIOS_CALDERON_3.readFeatures(json_BARRIOS_CALDERON_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRIOS_CALDERON_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOS_CALDERON_3.addFeatures(features_BARRIOS_CALDERON_3);
var lyr_BARRIOS_CALDERON_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARRIOS_CALDERON_3, 
                style: style_BARRIOS_CALDERON_3,
                popuplayertitle: 'BARRIOS_CALDERON',
                interactive: true,
                title: '<img src="styles/legend/BARRIOS_CALDERON_3.png" /> BARRIOS_CALDERON'
            });
var format_BARRIOS_ECUADOR_4 = new ol.format.GeoJSON();
var features_BARRIOS_ECUADOR_4 = format_BARRIOS_ECUADOR_4.readFeatures(json_BARRIOS_ECUADOR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRIOS_ECUADOR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOS_ECUADOR_4.addFeatures(features_BARRIOS_ECUADOR_4);
var lyr_BARRIOS_ECUADOR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARRIOS_ECUADOR_4, 
                style: style_BARRIOS_ECUADOR_4,
                popuplayertitle: 'BARRIOS_ECUADOR',
                interactive: true,
                title: '<img src="styles/legend/BARRIOS_ECUADOR_4.png" /> BARRIOS_ECUADOR'
            });
var format_PUNTOS_OBRAS_2024_5 = new ol.format.GeoJSON();
var features_PUNTOS_OBRAS_2024_5 = format_PUNTOS_OBRAS_2024_5.readFeatures(json_PUNTOS_OBRAS_2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOS_OBRAS_2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_OBRAS_2024_5.addFeatures(features_PUNTOS_OBRAS_2024_5);
var lyr_PUNTOS_OBRAS_2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOS_OBRAS_2024_5, 
                style: style_PUNTOS_OBRAS_2024_5,
                popuplayertitle: 'PUNTOS_OBRAS_2024',
                interactive: true,
                title: '<img src="styles/legend/PUNTOS_OBRAS_2024_5.png" /> PUNTOS_OBRAS_2024'
            });
var format_ADM_AZC_6 = new ol.format.GeoJSON();
var features_ADM_AZC_6 = format_ADM_AZC_6.readFeatures(json_ADM_AZC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_AZC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_AZC_6.addFeatures(features_ADM_AZC_6);
var lyr_ADM_AZC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_AZC_6, 
                style: style_ADM_AZC_6,
                popuplayertitle: 'ADM_AZC',
                interactive: true,
                title: '<img src="styles/legend/ADM_AZC_6.png" /> ADM_AZC'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_BARRIOS_CALDERON_3.setVisible(true);lyr_BARRIOS_ECUADOR_4.setVisible(true);lyr_PUNTOS_OBRAS_2024_5.setVisible(true);lyr_ADM_AZC_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_OSMStandard_2,lyr_BARRIOS_CALDERON_3,lyr_BARRIOS_ECUADOR_4,lyr_PUNTOS_OBRAS_2024_5,lyr_ADM_AZC_6];
lyr_BARRIOS_CALDERON_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'BARRIO_ID': 'BARRIO_ID', 'Lat_y': 'Lat_y', 'Long_x': 'Long_x', });
lyr_BARRIOS_ECUADOR_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'BARRIO_ID': 'BARRIO_ID', 'Lat_y': 'Lat_y', 'Long_x': 'Long_x', });
lyr_PUNTOS_OBRAS_2024_5.set('fieldAliases', {'id': 'id', 'CALLE': 'CALLE', });
lyr_ADM_AZC_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BARRIOS_CALDERON_3.set('fieldImages', {'NOMBRE': 'TextEdit', 'BARRIO_ID': 'TextEdit', 'Lat_y': 'TextEdit', 'Long_x': 'TextEdit', });
lyr_BARRIOS_ECUADOR_4.set('fieldImages', {'NOMBRE': 'TextEdit', 'BARRIO_ID': 'TextEdit', 'Lat_y': 'TextEdit', 'Long_x': 'TextEdit', });
lyr_PUNTOS_OBRAS_2024_5.set('fieldImages', {'id': 'TextEdit', 'CALLE': 'TextEdit', });
lyr_ADM_AZC_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BARRIOS_CALDERON_3.set('fieldLabels', {'NOMBRE': 'no label', 'BARRIO_ID': 'no label', 'Lat_y': 'no label', 'Long_x': 'no label', });
lyr_BARRIOS_ECUADOR_4.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'BARRIO_ID': 'no label', 'Lat_y': 'no label', 'Long_x': 'no label', });
lyr_PUNTOS_OBRAS_2024_5.set('fieldLabels', {'id': 'inline label - always visible', 'CALLE': 'no label', });
lyr_ADM_AZC_6.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ADM_AZC_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});