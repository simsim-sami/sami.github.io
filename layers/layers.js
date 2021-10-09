var wms_layers = [];

var lyr_cout_cumule_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "cout_cumule",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/cout_cumule_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8769175.188580, 4257730.301061, -8750671.870652, 4274489.212729]
                            })
                        });
var format_drain_1 = new ol.format.GeoJSON();
var features_drain_1 = format_drain_1.readFeatures(json_drain_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drain_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drain_1.addFeatures(features_drain_1);
var lyr_drain_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_drain_1, 
                style: style_drain_1,
                interactive: true,
                title: '<img src="styles/legend/drain_1.png" /> drain'
            });
var format_lac_2 = new ol.format.GeoJSON();
var features_lac_2 = format_lac_2.readFeatures(json_lac_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lac_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lac_2.addFeatures(features_lac_2);
var lyr_lac_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lac_2, 
                style: style_lac_2,
                interactive: true,
                title: '<img src="styles/legend/lac_2.png" /> lac'
            });
var format_grotte_3 = new ol.format.GeoJSON();
var features_grotte_3 = format_grotte_3.readFeatures(json_grotte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grotte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grotte_3.addFeatures(features_grotte_3);
var lyr_grotte_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grotte_3, 
                style: style_grotte_3,
                interactive: true,
                title: '<img src="styles/legend/grotte_3.png" /> grotte'
            });

lyr_cout_cumule_0.setVisible(true);lyr_drain_1.setVisible(true);lyr_lac_2.setVisible(true);lyr_grotte_3.setVisible(true);
var layersList = [lyr_cout_cumule_0,lyr_drain_1,lyr_lac_2,lyr_grotte_3];
lyr_drain_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', });
lyr_lac_2.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', });
lyr_grotte_3.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', });
lyr_drain_1.set('fieldImages', {'fid': '', 'cat': '', });
lyr_lac_2.set('fieldImages', {'field_1': '', 'field_2': '', });
lyr_grotte_3.set('fieldImages', {'field_1': '', 'field_2': '', });
lyr_drain_1.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', });
lyr_lac_2.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', });
lyr_grotte_3.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', });
lyr_grotte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});