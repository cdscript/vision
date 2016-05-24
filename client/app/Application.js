Ext.define('Vision.Application', {
	extend: 'Ext.app.Application',
	requires: [ 'Ext.plugin.Viewport', 'Vision.*', 'Ext.direct.*', 'Ext.window.Toast', 
	            'Ext.form.action.DirectSubmit', 'Ext.form.action.DirectLoad', 
	            'Ext.container.Container' ],
	name: 'Vision',

	constructor: function() {
		Ext.direct.Manager.addProvider(REMOTING_API);
		this.callParent(arguments);
	},

	launch: function() {
		Ext.fly('loading_container').destroy();
	},

	onAppUpdate: function() {
		window.location.reload();
	}
});
