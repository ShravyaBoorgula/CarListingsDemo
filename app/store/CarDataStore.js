/*
 * File: app/store/CarDataStore.js
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

Ext.define('CarListings.store.CarDataStore', {
    extend: 'Ext.data.Store',
    alias: 'store.cardatastore',

    requires: [
        'CarListings.model.CarData',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'CarDataStore',
            autoLoad: true,
            model: 'CarListings.model.CarData',
            proxy: {
                type: 'ajax',
                url: 'data/cars.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});