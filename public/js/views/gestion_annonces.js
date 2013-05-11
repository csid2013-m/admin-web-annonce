Ext.onReady(function() {

	Ext.QuickTips.init();

	Ext.form.Field.prototype.msgTarget = 'side';
	/**
	 * store annonce
	 */
	var dataProxylistAnnonces = new Ext.data.HttpProxy({
		url : "http://localhost:9000/GestionAnnonce/list",
		method : 'POST'
	});
	var dataRecord_annonces = new Ext.data.Record.create([{
		name : 'id'
	}, {
		name : 'titre'
	}, {
		name : 'description'
	}, {
		name : 'date_publication'
	}, {
		name : 'diffusion'
	}, {
		name : 'langue'
	}, {
		name : 'uneEntreprise'
	}, {
		name : 'Ville'
	}]);

	var dataReader_annonces = new Ext.data.JsonReader({
		root : 'data',
	}, dataRecord_annonces);

	var store_annonces = new Ext.data.Store({
		reader : dataReader_annonces,
		proxy : dataProxylistAnnonces
	});

	var dataProxylist_entreprise = new Ext.data.HttpProxy({
		url : '/GestionAnnonce/getEntreprise',
		method : 'POST'
	});
	var dataRecord_entreprise = new Ext.data.Record.create([{
		name : 'id'
	}, {
		name : 'Libelle'
	}, {
		name : 'description'
	}, {
		name : 'activer'
	}, {
		name : 'secteur_activiter'
	}, {
		name : 'siret'
	}, {
		name : 'taille'
	}]);
	var dataReader_entreprise = new Ext.data.JsonReader({
		root : 'data',
	}, dataRecord_entreprise);

	var store_entreprise = new Ext.data.Store({
		reader : dataReader_entreprise,
		proxy : dataProxylist_entreprise
	});

	store_annonces.load();
	var data_combobox = [[2, 'A.M.S'], [3, 'Consultation'], [4, 'Démo']];
	var combo_langue = new Ext.form.ComboBox({
		xtype : 'combo',
		fieldLabel : 'Langue',
		name : 'combo_langue',
		allowBlank : true,
		id : 'combo_langue',
		store : new Ext.data.SimpleStore({
			id : 4,
			fields : ['myId', 'combo_langue'],
			data : data_combobox
		}),
		valueField : 'myId',
		hiddenName : 'combo_langue',
		displayField : 'combo_langue',
		mode : 'local',
		width : 140,
		triggerAction : 'all',
		editable : false,
		allowBlank : false
	});
	var data_combobox = [[2, 'A.M.S'], [3, 'Consultation'], [4, 'Démo']];
	var statut_combobox_add = new Ext.form.ComboBox({
		xtype : 'combo',
		fieldLabel : 'Statut',
		name : 'statut_combobox_add',
		allowBlank : true,
		id : 'statut_combobox_add',
		store : new Ext.data.SimpleStore({
			id : 4,
			fields : ['myId', 'statut_combobox_add'],
			data : data_combobox
		}),
		valueField : 'myId',
		hiddenName : 'statut_combobox_add',
		displayField : 'statut_combobox_add',
		mode : 'local',
		width : 140,
		triggerAction : 'all',
		editable : false,
		allowBlank : false
	});

	/**
	 * fin store
	 *
	 */

	var sm_annonce = new Ext.grid.CheckboxSelectionModel({
		id : 'checker',
		checkOnly : false,
		checkOnly : true,
		singleSelect : true,
		header : '<style type="text/css">.x-grid3-hd-checkersnone {width:100%;height:10px;background-position:2px 2px;background-repeat:no-repeat;background-color:transparent;}</style>',
	});
	var cm_annonce = new Ext.grid.ColumnModel([sm_annonce, {
		header : "Titre",
		width : 140,
		sortable : true,
		dataIndex : 'titre'
	}, {
		header : "Date de publication",
		width : 170,
		sortable : true,
		dataIndex : 'date_publication'
	}, {
		header : "Langue",
		width : 270,
		sortable : true,
		dataIndex : 'langue'
	}, {
		header : "Diffusion",
		width : 270,
		sortable : true,
		dataIndex : '',
		renderer : function(value, meta, record) {
			meta.css = record.get('diffusion');
			return value;
		}
	}]);
	var cm_annonce_export = new Ext.grid.ColumnModel([{
		header : "Titre",
		width : 140,
		dataIndex : 'titre'
	}, {
		header : "Date de publication",
		width : 170,
		dataIndex : 'date_publication'

	}, {
		header : "Langue",
		width : 270,
		dataIndex : 'langue'
	}, {
		header : "Diffusion",
		width : 270,
		dataIndex : 'diffusion'

	}]);

	/**
	 * les formulaires
	 *
	 *
	 */
	var form_delete_annonce = new Ext.FormPanel({
		frame : false,
		border : false,
		buttonAlign : 'center',
		url : '/GestionAdmin/deleteAnnonce/',
		method : 'POST',
		id : 'form',
		bodyStyle : 'padding:10px 10px 15px 15px;background:#dfe8f6;',
		width : 0,
		labelWidth : 0,
		items : [{
			xtype : 'textfield',
			fieldLabel : 'id_annonce_delete',
			name : 'id_annonce_delete',
			id : 'id_annonce_delete',
			allowBlank : true,
			validationEvent : ''
		}]
	});

	var frm_add_annonce = new Ext.FormPanel({
		id : 'frm_add_annonce',
		url : '/GestionAnnonce/add_annonce',
		frame : true,
		border : false,
		bodyStyle : 'padding:0px 0px 30px 10px',
		labelWidth : 70,
		defaults : {
			width : 340
		},
		items : [{
			xtype : 'textfield',
			fieldLabel : 'Titre',
			name : 'titre_add',
			id : 'titre_add',
			allowBlank : false,
			validationEvent : ''
		}, {
			xtype : 'textarea',
			fieldLabel : 'Description',
			width : 340,
			heigth : 400,
			name : 'description_add',
			id : 'description_add',
			allowBlank : false,
			validationEvent : ''
		}, {
			xtype : 'combo',
			fieldLabel : 'Entreprise',
			name : 'id_entreprise',
			id : 'id_entreprise',
			allowBlank : false,
			editable : false,
			store : store_entreprise,
			displayField : 'Libelle',
			valueField : 'id',
			hiddenName : 'id',
			typeAhead : false,
			mode : 'local',
			triggerAction : 'all',
			selectOnFocus : false
		}, {
			xtype : 'textfield',
			fieldLabel : 'Ville',
			name : 'ville_add',
			id : 'ville_add',
			allowBlank : false,
			validationEvent : ''
		}, {
			xtype : 'datefield',
			fieldLabel : 'Publiée le',
			name : 'date_publication',
			id : 'date_publication',
			allowBlank : false
		}, {
			xtype : 'textfield',
			fieldLabel : 'Langue',
			name : 'langue_add',
			id : 'langue_add',
			allowBlank : false
		}, {
			xtype : 'checkbox',
			fieldLabel : 'Activer',
			name : 'diffusion_add',
			id : 'diffusion_add',
			allowBlank : false

		}]
	});

	var frm_edit_annonce = new Ext.FormPanel({
		id : 'frm_edit_annonce',
		url : '/GestionAnnonce/edit_annonce',
		frame : true,
		border : false,
		resizable : true,
		bodyStyle : 'padding:10px 10px 15px 10px;background:#dfe8f6;',
		labelWidth : 70,
		defaults : {
			width : 340
		},
		items : [{
			xtype : 'hidden',
			fieldLabel : 'id',
			name : 'id_annonce',
			id : 'id_annonce',
			allowBlank : false,
			validationEvent : ''
		}, {
			xtype : 'textfield',
			fieldLabel : 'Titre',
			name : 'titre_edit',
			id : 'titre_edit',
			allowBlank : false,
			validationEvent : ''
		}, {
			xtype : 'textarea',
			fieldLabel : 'Description',
			name : 'description_edit',
			id : 'description_edit',
			allowBlank : false,
			validationEvent : ''
		}, {
			xtype : 'combo',
			fieldLabel : 'Entreprise',
			name : 'id_entreprise_edit',
			id : 'id_entreprise_edit',
			allowBlank : false,
			editable : false,
			width : 340,
			heigth : 400,
			store : store_entreprise,
			displayField : 'Libelle',
			valueField : 'id',
			hiddenName : 'id',
			typeAhead : false,
			mode : 'local',
			triggerAction : 'all',
			selectOnFocus : false
		}, {
			xtype : 'textfield',
			fieldLabel : 'Ville',
			name : 'ville_edit',
			id : 'ville_edit',
			allowBlank : false,
			validationEvent : ''
		}, {
			xtype : 'datefield',
			fieldLabel : 'Publiée le',
			name : 'date_publication_edit',
			id : 'date_publication_edit',
			allowBlank : false
		}, {
			xtype : 'textfield',
			fieldLabel : 'Langue',
			name : 'langue_edit',
			id : 'langue_edit',
			allowBlank : false
		}, {
			xtype : 'checkbox',
			fieldLabel : 'Activer',
			name : 'diffusion_edit',
			id : 'diffusion_edit',
			allowBlank : false

		}]
	});
	/**
	 * Fin formulaire
	 *
	 */
	/**
	 * les fenêtres
	 */
	var win_add_annonce = new Ext.Window({
		title : 'Ajouter une annonce',
		id : 'win_add_annonce',
		plain : true,
		width : 470,
		height : 300,
		layout : 'fit',
		plain : true,
		closeAction : 'hide',
		waitMsgTarget : true,
		modal : true,
		frame : true,
		border : false,
		draggable : true,
		resizable : false,
		items : [frm_add_annonce],
		buttons : [{
			text : 'Valider',
			handler : function() {
				if (frm_add_annonce.getForm().isValid()) {
					frm_add_annonce.getForm().submit({
						success : function(form, action) {
							setTimeout(function() {
								Ext.Msg.alert('Confirmation', 'L\'anonnce a été ajoutée avec succes.');
								win_add_annonce.hide();
								store_annonces.load();
							}, 100);
						},
						failure : function(form, action) {
							Ext.Msg.alert('Confirmation', 'L\'anonnce n\'a pu être ajoutée.');
						}
					})
				}

			}
		}]

	});
	var win_edit_annonce = new Ext.Window({
		title : 'Editer une annonce',
		id : 'win_edit_annonce',
		plain : true,
		width : 470,
		height : 300,
		layout : 'fit',
		plain : true,
		closeAction : 'hide',
		waitMsgTarget : true,
		modal : true,
		frame : true,
		border : false,
		draggable : true,
		resizable : false,
		items : [frm_edit_annonce],
		buttons : [{
			text : 'Valider',
			handler : function() {

				frm_edit_annonce.getForm().submit({
					success : function(form, action) {
						setTimeout(function() {
							Ext.Msg.alert('Confirmation', 'L\'annonce a été modifiée avec succes.');
							win_edit_annonce.hide();
							Ext.getCmp('grid_annonce').getStore().load()

						}, 100);
					},
					failure : function(form, action) {

					}
				})
			}
		}]

	});
	/**
	 * fin fenetres
	 */

	var grid_annonce = new Ext.grid.GridPanel({
		frame : true,
		loadMask : true,
		border : false,
		stripeRows : true,
		height : 730,
		width : 980,
		autoScroll : true,
		enableTabScroll : true,
		store : store_annonces,
		id : 'grid_annonce',
		cm : cm_annonce,
		sm : sm_annonce,
		viewConfig : {
			stripeRows : true,
			enableTextSelection : true
		}
	});

	grid_annonce.getSelectionModel().on('rowselect', function(sm, rowIndex, r) {
		Ext.getCmp('edit_annonce').enable();
		Ext.getCmp('supprimer_annonce').enable();
		var rec = Ext.getCmp('grid_annonce')
		.getSelectionModel().selections.items[0].data;
		form_delete_annonce.getForm().findField('id_annonce_delete').setValue(rec.id);
		frm_edit_annonce.getForm().findField('id_annonce').setValue(rec.id);
		frm_edit_annonce.getForm().findField('titre_edit').setValue(rec.titre);
		frm_edit_annonce.getForm().findField('description_edit').setValue(rec.description);
		frm_edit_annonce.getForm().findField('ville_edit').setValue(rec.Ville);
		frm_edit_annonce.getForm().findField('id_entreprise_edit').setValue(rec.uneEntreprise.id);
		frm_edit_annonce.getForm().findField('diffusion_edit').setValue(rec.description);
		frm_edit_annonce.getForm().findField('date_publication_edit').setValue(rec.date_publication);
		frm_edit_annonce.getForm().findField('langue_edit').setValue(rec.langue);
		Ext.getCmp('diffusion_edit').setValue(rec.diffusion);

	});

	grid_annonce.getSelectionModel().on('rowdeselect', function(sm, rowIndex, r) {
		Ext.getCmp('edit_annonce').disable();
		Ext.getCmp('supprimer_annonce').disable();

	});

	var grid_annonce_export = new Ext.grid.GridPanel({
		frame : true,
		title : 'export annonces',
		loadMask : true,
		border : false,
		stripeRows : true,
		height : 730,
		width : 980,
		autoScroll : true,
		enableTabScroll : true,
		store : store_annonces,
		id : 'grid_annonce_export',
		cm : cm_annonce_export,
		sm : sm_annonce,
		viewConfig : {
			stripeRows : true,
			enableTextSelection : true
		}
	});
	var exportButton = new Ext.ux.Exporter.Button({
		component : grid_annonce_export,
		text : "Download as .xls",
		disabled : false
	});

	var tbar_annonce = new Ext.Toolbar({
		items : ['-', {
			icon : '/public/images/icons/add.gif',
			xtype : 'button',
			text : 'Ajouter une annonce',
			id : 'ajouter_annonce',
			disabled : false,
			handler : function() {
				frm_add_annonce.getForm().reset();
				store_entreprise.load();
				win_add_annonce.show();
			}
		}, '-', {
			icon : '/public/images/icons/write.png',
			xtype : 'button',
			text : 'Editer l\'annonce',
			disabled : true,
			id : 'edit_annonce',
			handler : function() {
				win_edit_annonce.show();
			}
		}, '-', {
			icon : '/public/images/icons/delete.gif',
			xtype : 'button',
			text : 'Supprimer l\'annonce',
			id : 'supprimer_annonce',
			disabled : false,
			handler : function() {

				Ext.MessageBox.show({
					title : 'Confirmation',
					msg : 'Le site a été modifié avec succès',
					buttons : Ext.MessageBox.OKCANCEL,
					fn : function(btn, form) {
						// Ext.getCmp('grid_sites').getColumnModel().getColumnAt(0).selectRow(Ext.getCmp('form').getForm().findField('id_site_selected').getValue().toString());
						if (btn == "ok") {
							form_delete_annonce.getForm().submit({
								success : function(form, action) {

								},
								failure : function(form, action) {
								}
							})
						}
					}
				});
			}
		}, exportButton]
	});
	var win_annonce = new Ext.Window({
		title : "Gestion Annonces",
		id : 'win_annonce',
		frame : true,
		border : true,
		closable : false,
		resizable : true,
		draggable : true,
		x : 260,
		y : 66,
		width : 1000,
		height : 800,
		tbar : tbar_annonce,
		items : [grid_annonce]
	});

	var formLiens = new Ext.FormPanel({
		frame : false,
		border : false,
		hidden : false,
		draggable : false,
		buttonAlign : 'center',
		method : 'POST',
		id : 'frmLiens',
		bodyStyle : 'padding:10px 10px 15px 10px;background:#dfe8f6;',
		width : 300,
		labelWidth : 250,
		height : 790,
		items : [{
			html : "<br><br>",
			xtype : "box"
		}, {
			html : "<a href=   customer >" + "<style='font-family: verdana, arial, sans-serif ; color:#B9121B'>" + "<strong><h1>1.Gestion des annonces</h1>" + "</strong></style></a>",
			xtype : "box"
		}, {
			html : "<br><br>",
			xtype : "box"
		}, {
			html : "<a href=   customer >" + "<style='font-family: verdana, arial, sans-serif ; color:#B9121B'>" + "<strong><h1>2.Gestion des entreprises</h1>" + "</strong></style></a>",
			xtype : "box"
		}, {
			html : "<br><br>",
			xtype : "box"
		}, {
			html : "<a href=   customer >" + "<style='font-family: verdana, arial, sans-serif ; color:#B9121B'>" + "<strong><h1>3.Gestion des candidats</h1>" + "</strong></style></a>",
			xtype : "box"
		}]
	});

	var win_liens = new Ext.Window({
		title : "Navigation",
		id : 'win_liens',
		frame : true,
		border : true,
		closable : false,
		resizable : true,
		draggable : true,
		x : 40,
		y : 70,
		width : 200,
		height : 400,
		items : [formLiens]
	});
	win_liens.show();
	win_annonce.show();

});
