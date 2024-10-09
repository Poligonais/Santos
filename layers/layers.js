var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Anexo093reanoValongo_1 = new ol.format.GeoJSON();
var features_Anexo093reanoValongo_1 = format_Anexo093reanoValongo_1.readFeatures(json_Anexo093reanoValongo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo093reanoValongo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo093reanoValongo_1.addFeatures(features_Anexo093reanoValongo_1);
var lyr_Anexo093reanoValongo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo093reanoValongo_1, 
                style: style_Anexo093reanoValongo_1,
                popuplayertitle: "Anexo 093 - Área no Valongo",
                interactive: true,
                title: '<img src="styles/legend/Anexo093reanoValongo_1.png" /> Anexo 093 - Área no Valongo'
            });
var format_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2 = new ol.format.GeoJSON();
var features_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2 = format_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2.readFeatures(json_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2.addFeatures(features_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2);
var lyr_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2, 
                style: style_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2,
                popuplayertitle: "Anexo 092 - Área Utilizada Pela Praticagem - Ponta da Praia",
                interactive: true,
                title: '<img src="styles/legend/Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2.png" /> Anexo 092 - Área Utilizada Pela Praticagem - Ponta da Praia'
            });
var format_Anexo091reaComplementaraosRIPsdosAnexos091a100_3 = new ol.format.GeoJSON();
var features_Anexo091reaComplementaraosRIPsdosAnexos091a100_3 = format_Anexo091reaComplementaraosRIPsdosAnexos091a100_3.readFeatures(json_Anexo091reaComplementaraosRIPsdosAnexos091a100_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo091reaComplementaraosRIPsdosAnexos091a100_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo091reaComplementaraosRIPsdosAnexos091a100_3.addFeatures(features_Anexo091reaComplementaraosRIPsdosAnexos091a100_3);
var lyr_Anexo091reaComplementaraosRIPsdosAnexos091a100_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo091reaComplementaraosRIPsdosAnexos091a100_3, 
                style: style_Anexo091reaComplementaraosRIPsdosAnexos091a100_3,
                popuplayertitle: "Anexo 091 - Área Complementar aos RIPs dos Anexos 091 a 100",
                interactive: true,
                title: '<img src="styles/legend/Anexo091reaComplementaraosRIPsdosAnexos091a100_3.png" /> Anexo 091 - Área Complementar aos RIPs dos Anexos 091 a 100'
            });
var format_Anexos081a090reasRIP_4 = new ol.format.GeoJSON();
var features_Anexos081a090reasRIP_4 = format_Anexos081a090reasRIP_4.readFeatures(json_Anexos081a090reasRIP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos081a090reasRIP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos081a090reasRIP_4.addFeatures(features_Anexos081a090reasRIP_4);
var lyr_Anexos081a090reasRIP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos081a090reasRIP_4, 
                style: style_Anexos081a090reasRIP_4,
                popuplayertitle: "Anexos 081 a 090 - Áreas RIP",
                interactive: true,
                title: '<img src="styles/legend/Anexos081a090reasRIP_4.png" /> Anexos 081 a 090 - Áreas RIP'
            });
var format_Anexo080IlhaBarnabTrechoLeste_5 = new ol.format.GeoJSON();
var features_Anexo080IlhaBarnabTrechoLeste_5 = format_Anexo080IlhaBarnabTrechoLeste_5.readFeatures(json_Anexo080IlhaBarnabTrechoLeste_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo080IlhaBarnabTrechoLeste_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo080IlhaBarnabTrechoLeste_5.addFeatures(features_Anexo080IlhaBarnabTrechoLeste_5);
var lyr_Anexo080IlhaBarnabTrechoLeste_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo080IlhaBarnabTrechoLeste_5, 
                style: style_Anexo080IlhaBarnabTrechoLeste_5,
                popuplayertitle: "Anexo 080 - Ilha Barnabé - Trecho Leste",
                interactive: true,
                title: '<img src="styles/legend/Anexo080IlhaBarnabTrechoLeste_5.png" /> Anexo 080 - Ilha Barnabé - Trecho Leste'
            });
var format_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6 = new ol.format.GeoJSON();
var features_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6 = format_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6.readFeatures(json_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6.addFeatures(features_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6);
var lyr_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6, 
                style: style_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6,
                popuplayertitle: "Anexos 077 a 079 - Ilha Barnabé (Trecho Norte - partes 1, 2 e 3)",
                interactive: true,
                title: '<img src="styles/legend/Anexos077a079IlhaBarnabTrechoNortepartes12e3_6.png" /> Anexos 077 a 079 - Ilha Barnabé (Trecho Norte - partes 1, 2 e 3)'
            });
var format_Anexos075e076EspaoAquavirioInternosTrechos2e3_7 = new ol.format.GeoJSON();
var features_Anexos075e076EspaoAquavirioInternosTrechos2e3_7 = format_Anexos075e076EspaoAquavirioInternosTrechos2e3_7.readFeatures(json_Anexos075e076EspaoAquavirioInternosTrechos2e3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos075e076EspaoAquavirioInternosTrechos2e3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos075e076EspaoAquavirioInternosTrechos2e3_7.addFeatures(features_Anexos075e076EspaoAquavirioInternosTrechos2e3_7);
var lyr_Anexos075e076EspaoAquavirioInternosTrechos2e3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos075e076EspaoAquavirioInternosTrechos2e3_7, 
                style: style_Anexos075e076EspaoAquavirioInternosTrechos2e3_7,
                popuplayertitle: "Anexos 075 e 076 - Espaço Aquaviário Internos (Trechos 2 e 3)",
                interactive: true,
                title: '<img src="styles/legend/Anexos075e076EspaoAquavirioInternosTrechos2e3_7.png" /> Anexos 075 e 076 - Espaço Aquaviário Internos (Trechos 2 e 3)'
            });
var format_Anexo074readeDespejo_8 = new ol.format.GeoJSON();
var features_Anexo074readeDespejo_8 = format_Anexo074readeDespejo_8.readFeatures(json_Anexo074readeDespejo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo074readeDespejo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo074readeDespejo_8.addFeatures(features_Anexo074readeDespejo_8);
var lyr_Anexo074readeDespejo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo074readeDespejo_8, 
                style: style_Anexo074readeDespejo_8,
                popuplayertitle: "Anexo 074 - Área de Despejo",
                interactive: true,
                title: '<img src="styles/legend/Anexo074readeDespejo_8.png" /> Anexo 074 - Área de Despejo'
            });
var format_Anexo073EsperadoPrtico_9 = new ol.format.GeoJSON();
var features_Anexo073EsperadoPrtico_9 = format_Anexo073EsperadoPrtico_9.readFeatures(json_Anexo073EsperadoPrtico_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo073EsperadoPrtico_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo073EsperadoPrtico_9.addFeatures(features_Anexo073EsperadoPrtico_9);
var lyr_Anexo073EsperadoPrtico_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo073EsperadoPrtico_9, 
                style: style_Anexo073EsperadoPrtico_9,
                popuplayertitle: "Anexo 073 - Espera do Prático",
                interactive: true,
                title: '<img src="styles/legend/Anexo073EsperadoPrtico_9.png" /> Anexo 073 - Espera do Prático'
            });
var format_Anexos067a072reasdeFundeios_10 = new ol.format.GeoJSON();
var features_Anexos067a072reasdeFundeios_10 = format_Anexos067a072reasdeFundeios_10.readFeatures(json_Anexos067a072reasdeFundeios_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos067a072reasdeFundeios_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos067a072reasdeFundeios_10.addFeatures(features_Anexos067a072reasdeFundeios_10);
var lyr_Anexos067a072reasdeFundeios_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos067a072reasdeFundeios_10, 
                style: style_Anexos067a072reasdeFundeios_10,
                popuplayertitle: "Anexos 067  a 072 - Áreas de Fundeios",
                interactive: true,
                title: '<img src="styles/legend/Anexos067a072reasdeFundeios_10.png" /> Anexos 067  a 072 - Áreas de Fundeios'
            });
var format_Anexo066CanaldeAcessoExternoereasAdjacentes_11 = new ol.format.GeoJSON();
var features_Anexo066CanaldeAcessoExternoereasAdjacentes_11 = format_Anexo066CanaldeAcessoExternoereasAdjacentes_11.readFeatures(json_Anexo066CanaldeAcessoExternoereasAdjacentes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo066CanaldeAcessoExternoereasAdjacentes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo066CanaldeAcessoExternoereasAdjacentes_11.addFeatures(features_Anexo066CanaldeAcessoExternoereasAdjacentes_11);
var lyr_Anexo066CanaldeAcessoExternoereasAdjacentes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo066CanaldeAcessoExternoereasAdjacentes_11, 
                style: style_Anexo066CanaldeAcessoExternoereasAdjacentes_11,
                popuplayertitle: "Anexo 066 - Canal de Acesso Externo e Áreas Adjacentes",
                interactive: true,
                title: '<img src="styles/legend/Anexo066CanaldeAcessoExternoereasAdjacentes_11.png" /> Anexo 066 - Canal de Acesso Externo e Áreas Adjacentes'
            });
var format_Anexo065EspaoAquavirioInternoTrechos1e4_12 = new ol.format.GeoJSON();
var features_Anexo065EspaoAquavirioInternoTrechos1e4_12 = format_Anexo065EspaoAquavirioInternoTrechos1e4_12.readFeatures(json_Anexo065EspaoAquavirioInternoTrechos1e4_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo065EspaoAquavirioInternoTrechos1e4_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo065EspaoAquavirioInternoTrechos1e4_12.addFeatures(features_Anexo065EspaoAquavirioInternoTrechos1e4_12);
var lyr_Anexo065EspaoAquavirioInternoTrechos1e4_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo065EspaoAquavirioInternoTrechos1e4_12, 
                style: style_Anexo065EspaoAquavirioInternoTrechos1e4_12,
                popuplayertitle: "Anexo 065 - Espaço Aquaviário Interno (Trechos 1 e 4)",
                interactive: true,
                title: '<img src="styles/legend/Anexo065EspaoAquavirioInternoTrechos1e4_12.png" /> Anexo 065 - Espaço Aquaviário Interno (Trechos 1 e 4)'
            });
var format_Anexo064PontedaPortofer_13 = new ol.format.GeoJSON();
var features_Anexo064PontedaPortofer_13 = format_Anexo064PontedaPortofer_13.readFeatures(json_Anexo064PontedaPortofer_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo064PontedaPortofer_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo064PontedaPortofer_13.addFeatures(features_Anexo064PontedaPortofer_13);
var lyr_Anexo064PontedaPortofer_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo064PontedaPortofer_13, 
                style: style_Anexo064PontedaPortofer_13,
                popuplayertitle: "Anexo 064 - Ponte da Portofer",
                interactive: true,
                title: '<img src="styles/legend/Anexo064PontedaPortofer_13.png" /> Anexo 064 - Ponte da Portofer'
            });
var format_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14 = new ol.format.GeoJSON();
var features_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14 = format_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14.readFeatures(json_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14.addFeatures(features_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14);
var lyr_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14, 
                style: style_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14,
                popuplayertitle: "Anexos 062 e 063 - Terreno a Leste da Linha Férrea em Guarujá",
                interactive: true,
                title: '<img src="styles/legend/Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14.png" /> Anexos 062 e 063 - Terreno a Leste da Linha Férrea em Guarujá'
            });
var format_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15 = new ol.format.GeoJSON();
var features_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15 = format_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15.readFeatures(json_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15.addFeatures(features_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15);
var lyr_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15, 
                style: style_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15,
                popuplayertitle: "Anexo 061 - Área para Compensação Ambiental ao Lado do Terreno de Itatinga",
                interactive: true,
                title: '<img src="styles/legend/Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15.png" /> Anexo 061 - Área para Compensação Ambiental ao Lado do Terreno de Itatinga'
            });
var format_Anexo060TerrenoBertioga_16 = new ol.format.GeoJSON();
var features_Anexo060TerrenoBertioga_16 = format_Anexo060TerrenoBertioga_16.readFeatures(json_Anexo060TerrenoBertioga_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo060TerrenoBertioga_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo060TerrenoBertioga_16.addFeatures(features_Anexo060TerrenoBertioga_16);
var lyr_Anexo060TerrenoBertioga_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo060TerrenoBertioga_16, 
                style: style_Anexo060TerrenoBertioga_16,
                popuplayertitle: "Anexo 060 - Terreno - Bertioga",
                interactive: true,
                title: '<img src="styles/legend/Anexo060TerrenoBertioga_16.png" /> Anexo 060 - Terreno - Bertioga'
            });
var format_Anexos058e059TerrenoItatinga_17 = new ol.format.GeoJSON();
var features_Anexos058e059TerrenoItatinga_17 = format_Anexos058e059TerrenoItatinga_17.readFeatures(json_Anexos058e059TerrenoItatinga_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos058e059TerrenoItatinga_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos058e059TerrenoItatinga_17.addFeatures(features_Anexos058e059TerrenoItatinga_17);
var lyr_Anexos058e059TerrenoItatinga_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos058e059TerrenoItatinga_17, 
                style: style_Anexos058e059TerrenoItatinga_17,
                popuplayertitle: "Anexos 058 e 059 - Terreno Itatinga",
                interactive: true,
                title: '<img src="styles/legend/Anexos058e059TerrenoItatinga_17.png" /> Anexos 058 e 059 - Terreno Itatinga'
            });
var format_Anexos056e057MarezinhaPrainha_18 = new ol.format.GeoJSON();
var features_Anexos056e057MarezinhaPrainha_18 = format_Anexos056e057MarezinhaPrainha_18.readFeatures(json_Anexos056e057MarezinhaPrainha_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos056e057MarezinhaPrainha_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos056e057MarezinhaPrainha_18.addFeatures(features_Anexos056e057MarezinhaPrainha_18);
var lyr_Anexos056e057MarezinhaPrainha_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos056e057MarezinhaPrainha_18, 
                style: style_Anexos056e057MarezinhaPrainha_18,
                popuplayertitle: "Anexos 056 e 057 - Marezinha-Prainha",
                interactive: true,
                title: '<img src="styles/legend/Anexos056e057MarezinhaPrainha_18.png" /> Anexos 056 e 057 - Marezinha-Prainha'
            });
var format_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19 = new ol.format.GeoJSON();
var features_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19 = format_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19.readFeatures(json_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19.addFeatures(features_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19);
var lyr_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19, 
                style: style_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19,
                popuplayertitle: "Anexo 055 - Trecho Ferroviário em Guarujá Sob Responsabilidade da Portofer",
                interactive: true,
                title: '<img src="styles/legend/Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19.png" /> Anexo 055 - Trecho Ferroviário em Guarujá Sob Responsabilidade da Portofer'
            });
var format_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20 = new ol.format.GeoJSON();
var features_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20 = format_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20.readFeatures(json_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20.addFeatures(features_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20);
var lyr_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20, 
                style: style_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20,
                popuplayertitle: "Anexo 054 - Terrenos na Margem Esquerda do Porto de Santos (Principal)",
                interactive: true,
                title: '<img src="styles/legend/Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20.png" /> Anexo 054 - Terrenos na Margem Esquerda do Porto de Santos (Principal)'
            });
var format_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21 = new ol.format.GeoJSON();
var features_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21 = format_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21.readFeatures(json_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21.addFeatures(features_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21);
var lyr_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21, 
                style: style_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21,
                popuplayertitle: "Anexos 038 a 053 - Área Destinada à Expansão das Vias Perimetrais em Processo de Desapropriação ou Convênio",
                interactive: true,
                title: '<img src="styles/legend/Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21.png" /> Anexos 038 a 053 - Área Destinada à Expansão das Vias Perimetrais em Processo de Desapropriação ou Convênio'
            });
var format_Anexo037ERCharlie_22 = new ol.format.GeoJSON();
var features_Anexo037ERCharlie_22 = format_Anexo037ERCharlie_22.readFeatures(json_Anexo037ERCharlie_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo037ERCharlie_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo037ERCharlie_22.addFeatures(features_Anexo037ERCharlie_22);
var lyr_Anexo037ERCharlie_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo037ERCharlie_22, 
                style: style_Anexo037ERCharlie_22,
                popuplayertitle: "Anexo 037 - ER Charlie",
                interactive: true,
                title: '<img src="styles/legend/Anexo037ERCharlie_22.png" /> Anexo 037 - ER Charlie'
            });
var format_Anexo036ERAlfa_23 = new ol.format.GeoJSON();
var features_Anexo036ERAlfa_23 = format_Anexo036ERAlfa_23.readFeatures(json_Anexo036ERAlfa_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo036ERAlfa_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo036ERAlfa_23.addFeatures(features_Anexo036ERAlfa_23);
var lyr_Anexo036ERAlfa_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo036ERAlfa_23, 
                style: style_Anexo036ERAlfa_23,
                popuplayertitle: "Anexo 036 - ER Alfa",
                interactive: true,
                title: '<img src="styles/legend/Anexo036ERAlfa_23.png" /> Anexo 036 - ER Alfa'
            });
var format_Anexo035ERBravo_24 = new ol.format.GeoJSON();
var features_Anexo035ERBravo_24 = format_Anexo035ERBravo_24.readFeatures(json_Anexo035ERBravo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo035ERBravo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo035ERBravo_24.addFeatures(features_Anexo035ERBravo_24);
var lyr_Anexo035ERBravo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo035ERBravo_24, 
                style: style_Anexo035ERBravo_24,
                popuplayertitle: "Anexo 035 - ER Bravo",
                interactive: true,
                title: '<img src="styles/legend/Anexo035ERBravo_24.png" /> Anexo 035 - ER Bravo'
            });
var format_Anexo034Jabaquara_25 = new ol.format.GeoJSON();
var features_Anexo034Jabaquara_25 = format_Anexo034Jabaquara_25.readFeatures(json_Anexo034Jabaquara_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo034Jabaquara_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo034Jabaquara_25.addFeatures(features_Anexo034Jabaquara_25);
var lyr_Anexo034Jabaquara_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo034Jabaquara_25, 
                style: style_Anexo034Jabaquara_25,
                popuplayertitle: "Anexo 034 - Jabaquara",
                interactive: true,
                title: '<img src="styles/legend/Anexo034Jabaquara_25.png" /> Anexo 034 - Jabaquara'
            });
var format_Anexo033PontedeInspeoNavalVTMIS_26 = new ol.format.GeoJSON();
var features_Anexo033PontedeInspeoNavalVTMIS_26 = format_Anexo033PontedeInspeoNavalVTMIS_26.readFeatures(json_Anexo033PontedeInspeoNavalVTMIS_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo033PontedeInspeoNavalVTMIS_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo033PontedeInspeoNavalVTMIS_26.addFeatures(features_Anexo033PontedeInspeoNavalVTMIS_26);
var lyr_Anexo033PontedeInspeoNavalVTMIS_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo033PontedeInspeoNavalVTMIS_26, 
                style: style_Anexo033PontedeInspeoNavalVTMIS_26,
                popuplayertitle: "Anexo 033 - Ponte de Inspeção Naval + VTMIS",
                interactive: true,
                title: '<img src="styles/legend/Anexo033PontedeInspeoNavalVTMIS_26.png" /> Anexo 033 - Ponte de Inspeção Naval + VTMIS'
            });
var format_Anexo032PolciaFederalNEPOM_27 = new ol.format.GeoJSON();
var features_Anexo032PolciaFederalNEPOM_27 = format_Anexo032PolciaFederalNEPOM_27.readFeatures(json_Anexo032PolciaFederalNEPOM_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo032PolciaFederalNEPOM_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo032PolciaFederalNEPOM_27.addFeatures(features_Anexo032PolciaFederalNEPOM_27);
var lyr_Anexo032PolciaFederalNEPOM_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo032PolciaFederalNEPOM_27, 
                style: style_Anexo032PolciaFederalNEPOM_27,
                popuplayertitle: "Anexo 032 - Polícia Federal-NEPOM",
                interactive: true,
                title: '<img src="styles/legend/Anexo032PolciaFederalNEPOM_27.png" /> Anexo 032 - Polícia Federal-NEPOM'
            });
var format_Anexos028a031TerrenosCOMAP_28 = new ol.format.GeoJSON();
var features_Anexos028a031TerrenosCOMAP_28 = format_Anexos028a031TerrenosCOMAP_28.readFeatures(json_Anexos028a031TerrenosCOMAP_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos028a031TerrenosCOMAP_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos028a031TerrenosCOMAP_28.addFeatures(features_Anexos028a031TerrenosCOMAP_28);
var lyr_Anexos028a031TerrenosCOMAP_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos028a031TerrenosCOMAP_28, 
                style: style_Anexos028a031TerrenosCOMAP_28,
                popuplayertitle: "Anexos 028 a 031 - Terrenos COMAP",
                interactive: true,
                title: '<img src="styles/legend/Anexos028a031TerrenosCOMAP_28.png" /> Anexos 028 a 031 - Terrenos COMAP'
            });
var format_Anexos024a027readoEstacionamentodeCaminhes_29 = new ol.format.GeoJSON();
var features_Anexos024a027readoEstacionamentodeCaminhes_29 = format_Anexos024a027readoEstacionamentodeCaminhes_29.readFeatures(json_Anexos024a027readoEstacionamentodeCaminhes_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos024a027readoEstacionamentodeCaminhes_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos024a027readoEstacionamentodeCaminhes_29.addFeatures(features_Anexos024a027readoEstacionamentodeCaminhes_29);
var lyr_Anexos024a027readoEstacionamentodeCaminhes_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos024a027readoEstacionamentodeCaminhes_29, 
                style: style_Anexos024a027readoEstacionamentodeCaminhes_29,
                popuplayertitle: "Anexos 024 a 027 - Área do Estacionamento de Caminhões",
                interactive: true,
                title: '<img src="styles/legend/Anexos024a027readoEstacionamentodeCaminhes_29.png" /> Anexos 024 a 027 - Área do Estacionamento de Caminhões'
            });
var format_ANEXO022e023TerrenosCOMAP_30 = new ol.format.GeoJSON();
var features_ANEXO022e023TerrenosCOMAP_30 = format_ANEXO022e023TerrenosCOMAP_30.readFeatures(json_ANEXO022e023TerrenosCOMAP_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANEXO022e023TerrenosCOMAP_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEXO022e023TerrenosCOMAP_30.addFeatures(features_ANEXO022e023TerrenosCOMAP_30);
var lyr_ANEXO022e023TerrenosCOMAP_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEXO022e023TerrenosCOMAP_30, 
                style: style_ANEXO022e023TerrenosCOMAP_30,
                popuplayertitle: "ANEXO 022 e 023 - Terrenos COMAP",
                interactive: true,
                title: '<img src="styles/legend/ANEXO022e023TerrenosCOMAP_30.png" /> ANEXO 022 e 023 - Terrenos COMAP'
            });
var format_Anexo021OGMOCENEP_31 = new ol.format.GeoJSON();
var features_Anexo021OGMOCENEP_31 = format_Anexo021OGMOCENEP_31.readFeatures(json_Anexo021OGMOCENEP_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo021OGMOCENEP_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo021OGMOCENEP_31.addFeatures(features_Anexo021OGMOCENEP_31);
var lyr_Anexo021OGMOCENEP_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo021OGMOCENEP_31, 
                style: style_Anexo021OGMOCENEP_31,
                popuplayertitle: "Anexo 021 - OGMO-CENEP",
                interactive: true,
                title: '<img src="styles/legend/Anexo021OGMOCENEP_31.png" /> Anexo 021 - OGMO-CENEP'
            });
var format_Anexo020readeAcessoaoViaduto_32 = new ol.format.GeoJSON();
var features_Anexo020readeAcessoaoViaduto_32 = format_Anexo020readeAcessoaoViaduto_32.readFeatures(json_Anexo020readeAcessoaoViaduto_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo020readeAcessoaoViaduto_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo020readeAcessoaoViaduto_32.addFeatures(features_Anexo020readeAcessoaoViaduto_32);
var lyr_Anexo020readeAcessoaoViaduto_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo020readeAcessoaoViaduto_32, 
                style: style_Anexo020readeAcessoaoViaduto_32,
                popuplayertitle: "Anexo 020 - Área de Acesso ao Viaduto",
                interactive: true,
                title: '<img src="styles/legend/Anexo020readeAcessoaoViaduto_32.png" /> Anexo 020 - Área de Acesso ao Viaduto'
            });
var format_Anexo019AvMrioCovasSantos_33 = new ol.format.GeoJSON();
var features_Anexo019AvMrioCovasSantos_33 = format_Anexo019AvMrioCovasSantos_33.readFeatures(json_Anexo019AvMrioCovasSantos_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo019AvMrioCovasSantos_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo019AvMrioCovasSantos_33.addFeatures(features_Anexo019AvMrioCovasSantos_33);
var lyr_Anexo019AvMrioCovasSantos_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo019AvMrioCovasSantos_33, 
                style: style_Anexo019AvMrioCovasSantos_33,
                popuplayertitle: "Anexo 019 - Av. Mário Covas-Santos",
                interactive: true,
                title: '<img src="styles/legend/Anexo019AvMrioCovasSantos_33.png" /> Anexo 019 - Av. Mário Covas-Santos'
            });
var format_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34 = new ol.format.GeoJSON();
var features_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34 = format_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34.readFeatures(json_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34.addFeatures(features_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34);
var lyr_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34, 
                style: style_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34,
                popuplayertitle: "Anexo 018 - Área para Estacionamento de Caminhões e Armazenamento de Sucata",
                interactive: true,
                title: '<img src="styles/legend/Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34.png" /> Anexo 018 - Área para Estacionamento de Caminhões e Armazenamento de Sucata'
            });
var format_Anexos016e017readaRuaAlmiranteTamandar_35 = new ol.format.GeoJSON();
var features_Anexos016e017readaRuaAlmiranteTamandar_35 = format_Anexos016e017readaRuaAlmiranteTamandar_35.readFeatures(json_Anexos016e017readaRuaAlmiranteTamandar_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos016e017readaRuaAlmiranteTamandar_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos016e017readaRuaAlmiranteTamandar_35.addFeatures(features_Anexos016e017readaRuaAlmiranteTamandar_35);
var lyr_Anexos016e017readaRuaAlmiranteTamandar_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos016e017readaRuaAlmiranteTamandar_35, 
                style: style_Anexos016e017readaRuaAlmiranteTamandar_35,
                popuplayertitle: "Anexos 016 e 017 - Área da Rua Almirante Tamandaré",
                interactive: true,
                title: '<img src="styles/legend/Anexos016e017readaRuaAlmiranteTamandar_35.png" /> Anexos 016 e 017 - Área da Rua Almirante Tamandaré'
            });
var format_Anexo015reaAdministrativaCODESP_36 = new ol.format.GeoJSON();
var features_Anexo015reaAdministrativaCODESP_36 = format_Anexo015reaAdministrativaCODESP_36.readFeatures(json_Anexo015reaAdministrativaCODESP_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo015reaAdministrativaCODESP_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo015reaAdministrativaCODESP_36.addFeatures(features_Anexo015reaAdministrativaCODESP_36);
var lyr_Anexo015reaAdministrativaCODESP_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo015reaAdministrativaCODESP_36, 
                style: style_Anexo015reaAdministrativaCODESP_36,
                popuplayertitle: "Anexo 015 - Área Administrativa - CODESP",
                interactive: true,
                title: '<img src="styles/legend/Anexo015reaAdministrativaCODESP_36.png" /> Anexo 015 - Área Administrativa - CODESP'
            });
var format_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37 = new ol.format.GeoJSON();
var features_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37 = format_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37.readFeatures(json_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37.addFeatures(features_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37);
var lyr_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37, 
                style: style_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37,
                popuplayertitle: "Anexo 014 - Terreno Vizinho ao Terminal Marítimo de Passageiros Giusfredo Santini",
                interactive: true,
                title: '<img src="styles/legend/Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37.png" /> Anexo 014 - Terreno Vizinho ao Terminal Marítimo de Passageiros Giusfredo Santini'
            });
var format_Anexo013GinsiodeEsportes_38 = new ol.format.GeoJSON();
var features_Anexo013GinsiodeEsportes_38 = format_Anexo013GinsiodeEsportes_38.readFeatures(json_Anexo013GinsiodeEsportes_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo013GinsiodeEsportes_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo013GinsiodeEsportes_38.addFeatures(features_Anexo013GinsiodeEsportes_38);
var lyr_Anexo013GinsiodeEsportes_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo013GinsiodeEsportes_38, 
                style: style_Anexo013GinsiodeEsportes_38,
                popuplayertitle: "Anexo 013 - Ginásio de Esportes",
                interactive: true,
                title: '<img src="styles/legend/Anexo013GinsiodeEsportes_38.png" /> Anexo 013 - Ginásio de Esportes'
            });
var format_ANEXO012Estaodetratamentodeesgoto_39 = new ol.format.GeoJSON();
var features_ANEXO012Estaodetratamentodeesgoto_39 = format_ANEXO012Estaodetratamentodeesgoto_39.readFeatures(json_ANEXO012Estaodetratamentodeesgoto_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANEXO012Estaodetratamentodeesgoto_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEXO012Estaodetratamentodeesgoto_39.addFeatures(features_ANEXO012Estaodetratamentodeesgoto_39);
var lyr_ANEXO012Estaodetratamentodeesgoto_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEXO012Estaodetratamentodeesgoto_39, 
                style: style_ANEXO012Estaodetratamentodeesgoto_39,
                popuplayertitle: "ANEXO 012 - Estação de tratamento de esgoto",
                interactive: true,
                title: '<img src="styles/legend/ANEXO012Estaodetratamentodeesgoto_39.png" /> ANEXO 012 - Estação de tratamento de esgoto'
            });
var format_Anexo011TerrenonaRuaSenadorDantas_40 = new ol.format.GeoJSON();
var features_Anexo011TerrenonaRuaSenadorDantas_40 = format_Anexo011TerrenonaRuaSenadorDantas_40.readFeatures(json_Anexo011TerrenonaRuaSenadorDantas_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo011TerrenonaRuaSenadorDantas_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo011TerrenonaRuaSenadorDantas_40.addFeatures(features_Anexo011TerrenonaRuaSenadorDantas_40);
var lyr_Anexo011TerrenonaRuaSenadorDantas_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo011TerrenonaRuaSenadorDantas_40, 
                style: style_Anexo011TerrenonaRuaSenadorDantas_40,
                popuplayertitle: "Anexo 011 - Terreno na Rua Senador Dantas",
                interactive: true,
                title: '<img src="styles/legend/Anexo011TerrenonaRuaSenadorDantas_40.png" /> Anexo 011 - Terreno na Rua Senador Dantas'
            });
var format_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41 = new ol.format.GeoJSON();
var features_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41 = format_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41.readFeatures(json_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41.addFeatures(features_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41);
var lyr_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41, 
                style: style_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41,
                popuplayertitle: "Anexo 010 - Guarda Portuária e Estacionamento de Caminhões",
                interactive: true,
                title: '<img src="styles/legend/Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41.png" /> Anexo 010 - Guarda Portuária e Estacionamento de Caminhões'
            });
var format_Anexo009ArmaznsAntigoseLinhasFrreas_42 = new ol.format.GeoJSON();
var features_Anexo009ArmaznsAntigoseLinhasFrreas_42 = format_Anexo009ArmaznsAntigoseLinhasFrreas_42.readFeatures(json_Anexo009ArmaznsAntigoseLinhasFrreas_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo009ArmaznsAntigoseLinhasFrreas_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo009ArmaznsAntigoseLinhasFrreas_42.addFeatures(features_Anexo009ArmaznsAntigoseLinhasFrreas_42);
var lyr_Anexo009ArmaznsAntigoseLinhasFrreas_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo009ArmaznsAntigoseLinhasFrreas_42, 
                style: style_Anexo009ArmaznsAntigoseLinhasFrreas_42,
                popuplayertitle: "Anexo 009 - Armazéns Antigos e Linhas Férreas",
                interactive: true,
                title: '<img src="styles/legend/Anexo009ArmaznsAntigoseLinhasFrreas_42.png" /> Anexo 009 - Armazéns Antigos e Linhas Férreas'
            });
var format_Anexo008TerrenonaAlemoa_43 = new ol.format.GeoJSON();
var features_Anexo008TerrenonaAlemoa_43 = format_Anexo008TerrenonaAlemoa_43.readFeatures(json_Anexo008TerrenonaAlemoa_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo008TerrenonaAlemoa_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo008TerrenonaAlemoa_43.addFeatures(features_Anexo008TerrenonaAlemoa_43);
var lyr_Anexo008TerrenonaAlemoa_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo008TerrenonaAlemoa_43, 
                style: style_Anexo008TerrenonaAlemoa_43,
                popuplayertitle: "Anexo 008 - Terreno na Alemoa",
                interactive: true,
                title: '<img src="styles/legend/Anexo008TerrenonaAlemoa_43.png" /> Anexo 008 - Terreno na Alemoa'
            });
var format_Anexos004a007AvPerimetral_44 = new ol.format.GeoJSON();
var features_Anexos004a007AvPerimetral_44 = format_Anexos004a007AvPerimetral_44.readFeatures(json_Anexos004a007AvPerimetral_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexos004a007AvPerimetral_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexos004a007AvPerimetral_44.addFeatures(features_Anexos004a007AvPerimetral_44);
var lyr_Anexos004a007AvPerimetral_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexos004a007AvPerimetral_44, 
                style: style_Anexos004a007AvPerimetral_44,
                popuplayertitle: "Anexos 004 a 007 - Av. Perimetral",
                interactive: true,
                title: '<img src="styles/legend/Anexos004a007AvPerimetral_44.png" /> Anexos 004 a 007 - Av. Perimetral'
            });
var format_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45 = new ol.format.GeoJSON();
var features_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45 = format_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45.readFeatures(json_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45.addFeatures(features_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45);
var lyr_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45, 
                style: style_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45,
                popuplayertitle: "Anexo 003 - Terrenos na Margem Direita do Porto de Santos (Principal)",
                interactive: true,
                title: '<img src="styles/legend/Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45.png" /> Anexo 003 - Terrenos na Margem Direita do Porto de Santos (Principal)'
            });
var format_Anexo002EspaoTerrestrenaIlhaBarnab_46 = new ol.format.GeoJSON();
var features_Anexo002EspaoTerrestrenaIlhaBarnab_46 = format_Anexo002EspaoTerrestrenaIlhaBarnab_46.readFeatures(json_Anexo002EspaoTerrestrenaIlhaBarnab_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo002EspaoTerrestrenaIlhaBarnab_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo002EspaoTerrestrenaIlhaBarnab_46.addFeatures(features_Anexo002EspaoTerrestrenaIlhaBarnab_46);
var lyr_Anexo002EspaoTerrestrenaIlhaBarnab_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo002EspaoTerrestrenaIlhaBarnab_46, 
                style: style_Anexo002EspaoTerrestrenaIlhaBarnab_46,
                popuplayertitle: "Anexo 002 - Espaço Terrestre na Ilha Barnabé",
                interactive: true,
                title: '<img src="styles/legend/Anexo002EspaoTerrestrenaIlhaBarnab_46.png" /> Anexo 002 - Espaço Terrestre na Ilha Barnabé'
            });
var format_Anexo001EstradadeAcessoIlhaBarnab_47 = new ol.format.GeoJSON();
var features_Anexo001EstradadeAcessoIlhaBarnab_47 = format_Anexo001EstradadeAcessoIlhaBarnab_47.readFeatures(json_Anexo001EstradadeAcessoIlhaBarnab_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo001EstradadeAcessoIlhaBarnab_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo001EstradadeAcessoIlhaBarnab_47.addFeatures(features_Anexo001EstradadeAcessoIlhaBarnab_47);
var lyr_Anexo001EstradadeAcessoIlhaBarnab_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo001EstradadeAcessoIlhaBarnab_47, 
                style: style_Anexo001EstradadeAcessoIlhaBarnab_47,
                popuplayertitle: "Anexo 001 - Estrada de Acesso à Ilha Barnabé",
                interactive: true,
                title: '<img src="styles/legend/Anexo001EstradadeAcessoIlhaBarnab_47.png" /> Anexo 001 - Estrada de Acesso à Ilha Barnabé'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Anexo093reanoValongo_1.setVisible(true);lyr_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2.setVisible(true);lyr_Anexo091reaComplementaraosRIPsdosAnexos091a100_3.setVisible(true);lyr_Anexos081a090reasRIP_4.setVisible(true);lyr_Anexo080IlhaBarnabTrechoLeste_5.setVisible(true);lyr_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6.setVisible(true);lyr_Anexos075e076EspaoAquavirioInternosTrechos2e3_7.setVisible(true);lyr_Anexo074readeDespejo_8.setVisible(true);lyr_Anexo073EsperadoPrtico_9.setVisible(true);lyr_Anexos067a072reasdeFundeios_10.setVisible(true);lyr_Anexo066CanaldeAcessoExternoereasAdjacentes_11.setVisible(true);lyr_Anexo065EspaoAquavirioInternoTrechos1e4_12.setVisible(true);lyr_Anexo064PontedaPortofer_13.setVisible(true);lyr_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14.setVisible(true);lyr_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15.setVisible(true);lyr_Anexo060TerrenoBertioga_16.setVisible(true);lyr_Anexos058e059TerrenoItatinga_17.setVisible(true);lyr_Anexos056e057MarezinhaPrainha_18.setVisible(true);lyr_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19.setVisible(true);lyr_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20.setVisible(true);lyr_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21.setVisible(true);lyr_Anexo037ERCharlie_22.setVisible(true);lyr_Anexo036ERAlfa_23.setVisible(true);lyr_Anexo035ERBravo_24.setVisible(true);lyr_Anexo034Jabaquara_25.setVisible(true);lyr_Anexo033PontedeInspeoNavalVTMIS_26.setVisible(true);lyr_Anexo032PolciaFederalNEPOM_27.setVisible(true);lyr_Anexos028a031TerrenosCOMAP_28.setVisible(true);lyr_Anexos024a027readoEstacionamentodeCaminhes_29.setVisible(true);lyr_ANEXO022e023TerrenosCOMAP_30.setVisible(true);lyr_Anexo021OGMOCENEP_31.setVisible(true);lyr_Anexo020readeAcessoaoViaduto_32.setVisible(true);lyr_Anexo019AvMrioCovasSantos_33.setVisible(true);lyr_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34.setVisible(true);lyr_Anexos016e017readaRuaAlmiranteTamandar_35.setVisible(true);lyr_Anexo015reaAdministrativaCODESP_36.setVisible(true);lyr_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37.setVisible(true);lyr_Anexo013GinsiodeEsportes_38.setVisible(true);lyr_ANEXO012Estaodetratamentodeesgoto_39.setVisible(true);lyr_Anexo011TerrenonaRuaSenadorDantas_40.setVisible(true);lyr_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41.setVisible(true);lyr_Anexo009ArmaznsAntigoseLinhasFrreas_42.setVisible(true);lyr_Anexo008TerrenonaAlemoa_43.setVisible(true);lyr_Anexos004a007AvPerimetral_44.setVisible(true);lyr_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45.setVisible(true);lyr_Anexo002EspaoTerrestrenaIlhaBarnab_46.setVisible(true);lyr_Anexo001EstradadeAcessoIlhaBarnab_47.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Anexo093reanoValongo_1,lyr_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2,lyr_Anexo091reaComplementaraosRIPsdosAnexos091a100_3,lyr_Anexos081a090reasRIP_4,lyr_Anexo080IlhaBarnabTrechoLeste_5,lyr_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6,lyr_Anexos075e076EspaoAquavirioInternosTrechos2e3_7,lyr_Anexo074readeDespejo_8,lyr_Anexo073EsperadoPrtico_9,lyr_Anexos067a072reasdeFundeios_10,lyr_Anexo066CanaldeAcessoExternoereasAdjacentes_11,lyr_Anexo065EspaoAquavirioInternoTrechos1e4_12,lyr_Anexo064PontedaPortofer_13,lyr_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14,lyr_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15,lyr_Anexo060TerrenoBertioga_16,lyr_Anexos058e059TerrenoItatinga_17,lyr_Anexos056e057MarezinhaPrainha_18,lyr_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19,lyr_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20,lyr_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21,lyr_Anexo037ERCharlie_22,lyr_Anexo036ERAlfa_23,lyr_Anexo035ERBravo_24,lyr_Anexo034Jabaquara_25,lyr_Anexo033PontedeInspeoNavalVTMIS_26,lyr_Anexo032PolciaFederalNEPOM_27,lyr_Anexos028a031TerrenosCOMAP_28,lyr_Anexos024a027readoEstacionamentodeCaminhes_29,lyr_ANEXO022e023TerrenosCOMAP_30,lyr_Anexo021OGMOCENEP_31,lyr_Anexo020readeAcessoaoViaduto_32,lyr_Anexo019AvMrioCovasSantos_33,lyr_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34,lyr_Anexos016e017readaRuaAlmiranteTamandar_35,lyr_Anexo015reaAdministrativaCODESP_36,lyr_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37,lyr_Anexo013GinsiodeEsportes_38,lyr_ANEXO012Estaodetratamentodeesgoto_39,lyr_Anexo011TerrenonaRuaSenadorDantas_40,lyr_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41,lyr_Anexo009ArmaznsAntigoseLinhasFrreas_42,lyr_Anexo008TerrenonaAlemoa_43,lyr_Anexos004a007AvPerimetral_44,lyr_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45,lyr_Anexo002EspaoTerrestrenaIlhaBarnab_46,lyr_Anexo001EstradadeAcessoIlhaBarnab_47];
lyr_Anexo093reanoValongo_1.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo091reaComplementaraosRIPsdosAnexos091a100_3.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos081a090reasRIP_4.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo080IlhaBarnabTrechoLeste_5.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos075e076EspaoAquavirioInternosTrechos2e3_7.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo074readeDespejo_8.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo073EsperadoPrtico_9.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos067a072reasdeFundeios_10.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo066CanaldeAcessoExternoereasAdjacentes_11.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo065EspaoAquavirioInternoTrechos1e4_12.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo064PontedaPortofer_13.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo060TerrenoBertioga_16.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos058e059TerrenoItatinga_17.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos056e057MarezinhaPrainha_18.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo037ERCharlie_22.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo036ERAlfa_23.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo035ERBravo_24.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo034Jabaquara_25.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo033PontedeInspeoNavalVTMIS_26.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo032PolciaFederalNEPOM_27.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos028a031TerrenosCOMAP_28.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos024a027readoEstacionamentodeCaminhes_29.set('fieldAliases', {'Name': 'Name', });
lyr_ANEXO022e023TerrenosCOMAP_30.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo021OGMOCENEP_31.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo020readeAcessoaoViaduto_32.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo019AvMrioCovasSantos_33.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos016e017readaRuaAlmiranteTamandar_35.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo015reaAdministrativaCODESP_36.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo013GinsiodeEsportes_38.set('fieldAliases', {'Name': 'Name', });
lyr_ANEXO012Estaodetratamentodeesgoto_39.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo011TerrenonaRuaSenadorDantas_40.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo009ArmaznsAntigoseLinhasFrreas_42.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo008TerrenonaAlemoa_43.set('fieldAliases', {'Name': 'Name', });
lyr_Anexos004a007AvPerimetral_44.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo002EspaoTerrestrenaIlhaBarnab_46.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo001EstradadeAcessoIlhaBarnab_47.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo093reanoValongo_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo091reaComplementaraosRIPsdosAnexos091a100_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos081a090reasRIP_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo080IlhaBarnabTrechoLeste_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos075e076EspaoAquavirioInternosTrechos2e3_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo074readeDespejo_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo073EsperadoPrtico_9.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos067a072reasdeFundeios_10.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo066CanaldeAcessoExternoereasAdjacentes_11.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo065EspaoAquavirioInternoTrechos1e4_12.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo064PontedaPortofer_13.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo060TerrenoBertioga_16.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos058e059TerrenoItatinga_17.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos056e057MarezinhaPrainha_18.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo037ERCharlie_22.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo036ERAlfa_23.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo035ERBravo_24.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo034Jabaquara_25.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo033PontedeInspeoNavalVTMIS_26.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo032PolciaFederalNEPOM_27.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos028a031TerrenosCOMAP_28.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos024a027readoEstacionamentodeCaminhes_29.set('fieldImages', {'Name': 'TextEdit', });
lyr_ANEXO022e023TerrenosCOMAP_30.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo021OGMOCENEP_31.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo020readeAcessoaoViaduto_32.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo019AvMrioCovasSantos_33.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos016e017readaRuaAlmiranteTamandar_35.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo015reaAdministrativaCODESP_36.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo013GinsiodeEsportes_38.set('fieldImages', {'Name': 'TextEdit', });
lyr_ANEXO012Estaodetratamentodeesgoto_39.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo011TerrenonaRuaSenadorDantas_40.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo009ArmaznsAntigoseLinhasFrreas_42.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo008TerrenonaAlemoa_43.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexos004a007AvPerimetral_44.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo002EspaoTerrestrenaIlhaBarnab_46.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo001EstradadeAcessoIlhaBarnab_47.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo093reanoValongo_1.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo092reaUtilizadaPelaPraticagemPontadaPraia_2.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo091reaComplementaraosRIPsdosAnexos091a100_3.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos081a090reasRIP_4.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo080IlhaBarnabTrechoLeste_5.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos077a079IlhaBarnabTrechoNortepartes12e3_6.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos075e076EspaoAquavirioInternosTrechos2e3_7.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo074readeDespejo_8.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo073EsperadoPrtico_9.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos067a072reasdeFundeios_10.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo066CanaldeAcessoExternoereasAdjacentes_11.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo065EspaoAquavirioInternoTrechos1e4_12.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo064PontedaPortofer_13.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos062e063TerrenoaLestedaLinhaFrreaemGuaruj_14.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo061reaparaCompensaoAmbientalaoLadodoTerrenodeItatinga_15.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo060TerrenoBertioga_16.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos058e059TerrenoItatinga_17.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos056e057MarezinhaPrainha_18.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo055TrechoFerrovirioemGuarujSobResponsabilidadedaPortofer_19.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo054TerrenosnaMargemEsquerdadoPortodeSantosPrincipal_20.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos038a053reaDestinadaExpansodasViasPerimetraisemProcessodeDesapropriaoouConvnio_21.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo037ERCharlie_22.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo036ERAlfa_23.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo035ERBravo_24.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo034Jabaquara_25.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo033PontedeInspeoNavalVTMIS_26.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo032PolciaFederalNEPOM_27.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos028a031TerrenosCOMAP_28.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos024a027readoEstacionamentodeCaminhes_29.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_ANEXO022e023TerrenosCOMAP_30.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo021OGMOCENEP_31.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo020readeAcessoaoViaduto_32.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo019AvMrioCovasSantos_33.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo018reaparaEstacionamentodeCaminheseArmazenamentodeSucata_34.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos016e017readaRuaAlmiranteTamandar_35.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo015reaAdministrativaCODESP_36.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo014TerrenoVizinhoaoTerminalMartimodePassageirosGiusfredoSantini_37.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo013GinsiodeEsportes_38.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_ANEXO012Estaodetratamentodeesgoto_39.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo011TerrenonaRuaSenadorDantas_40.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo010GuardaPorturiaeEstacionamentodeCaminhes_41.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo009ArmaznsAntigoseLinhasFrreas_42.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo008TerrenonaAlemoa_43.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexos004a007AvPerimetral_44.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo003TerrenosnaMargemDireitadoPortodeSantosPrincipal_45.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo002EspaoTerrestrenaIlhaBarnab_46.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo001EstradadeAcessoIlhaBarnab_47.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Anexo001EstradadeAcessoIlhaBarnab_47.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});