/*
 * File: app/view/CarListings.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CarListings.view.CarListings', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.carlistings',

    requires: [
        'CarListings.view.CarListingsViewModel',
        'CarListings.view.CarListingsViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.XTemplate',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar',
        'Ext.chart.plugin.ItemEvents'
    ],

    controller: 'carlistings',
    viewModel: {
        type: 'carlistings'
    },
    frame: true,
    height: 650,
    itemId: 'chartPanel',
    width: 1000,
    title: ' Car Listing',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'gridpanel',
            width: '100%',
            store: 'CarDataStore',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'manufacturer',
                    text: 'Manufacturer'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'model',
                    text: 'Model'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'price',
                    text: 'Price'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'wiki',
                    text: 'Wiki'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'img',
                    text: 'Img'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'quality',
                    text: 'Quality'
                }
            ],
            listeners: {
                select: 'onGridpanelSelect'
            }
        },
        {
            xtype: 'panel',
            baseCls: 'x-deatils-panel',
            height: 200,
            itemId: 'detailPanel',
            tpl: [
                '<figure class="carThumbnail">',
                '<img src="data/{img}" style="float: left" />',
                '<figcaption>    ',
                'Manufacturer: {manufacturer} ',
                'Model: <a href="{wiki}" target="_blank">{model}</a><br>',
                'Price: {price:usMoney}',
                '</figcaption>',
                '</figure>'
            ],
            width: '100%',
            bodyPadding: 10
        },
        {
            xtype: 'panel',
            flex: 1,
            margins: '5 0 0 0',
            itemId: 'chartPanel',
            layout: 'fit',
            items: [
                {
                    xtype: 'cartesian',
                    height: 250,
                    itemId: 'qualityChart',
                    width: 478,
                    insetPadding: 20,
                    store: 'CarChartStore',
                    axes: [
                        {
                            type: 'category',
                            fields: [
                                'name'
                            ],
                            title: 'Quality',
                            position: 'bottom'
                        },
                        {
                            type: 'numeric',
                            fields: [
                                'rating'
                            ],
                            majorTickSteps: 4,
                            maximum: 5,
                            minimum: 0,
                            position: 'left',
                            title: 'Score'
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            label: {
                                display: 'insideEnd',
                                field: 'rating',
                                color: '#333',
                                'text-anchor': 'middle'
                            },
                            xField: 'name',
                            yField: [
                                'rating'
                            ]
                        }
                    ],
                    listeners: {
                        itemclick: 'onQualityChartItemClick'
                    }
                }
            ]
        }
    ]

});