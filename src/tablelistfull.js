
import tabledata from './tabledata';

export default Ractive.extend({
	//isolated: true,
	components: {
		tabledata: tabledata,
	},
	template:
		`
			<div class='pull-right' style='padding: 7px;'>
				<a class='btn btn-xs btn-primary ' on-click='create'> CREATE TABLE <i class='zmdi'></i></a>
				<a class='btn btn-xs btn-default {{#if selection_length > 0}}{{else}}disabled{{/if}}' on-click='delete'> <icon-trash /> </a>
				<a class='btn btn-xs btn-default {{#if refresh_tables }}disabled{{/if}}' on-click='@this.refresh_tables()'> <icon-refresh /> </a>
			</div>

		<tabledata columns='{{columns}}' rows='{{rows}}' style='top: 38px;' />
		`,
	data: function() {
		return {
			selection_length: 0,
			refresh_tables: false,
		}
	},
	refresh_tables: function() {
		var ractive = this
		ractive.set('refresh_tables', true)
		ractive.set('tables')

		DynamoDB.query('SHOW TABLES', function(err, data ) {

				ractive.set('refresh_tables', false)

				if (err)
					return ractive.set('err', err )

				ractive.set('err')

				ractive.set('columns', [ null, 'Name', 'Status', 'Partition', 'Sort', 'Indexes', 'Read Capacity', 'Write Capacity'])
				ractive.set('rows', data.map(function(t) {
					return [
						{ KEY: true },
						{ S: t },
						{ },
						{ },
						{ },
						{ },
						{ },
						{ }
					]
				}) )
				var waterfallz = data.map(function(t) {

					var f = function( cb ) {
						//console.log(t)
						DynamoDB.client.describeTable({ TableName: t}, function(err, data) {
							if (err)
								return cb()

							ractive.set('rows', ractive.get('rows').map(function(row) {
								if ( row[1].S === t ) {

									row[2].S = data.Table.TableStatus
									row[3].S = ((data.Table.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'HASH'})[0] || {}).AttributeName || '-'
									row[4].S = ((data.Table.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'RANGE'})[0] || {}).AttributeName || '-'
									row[5].S = (data.Table.GlobalSecondaryIndexes || []).length.toString()
									row[6].S = ([ data.Table.ProvisionedThroughput.ReadCapacityUnits ].concat( (data.Table.GlobalSecondaryIndexes || []).map(function(tr) { return tr.ProvisionedThroughput.ReadCapacityUnits }) )).reduce(function(a, b) { return a + b; }, 0)
									row[7].S = ([ data.Table.ProvisionedThroughput.WriteCapacityUnits ].concat( (data.Table.GlobalSecondaryIndexes || []).map(function(tr) { return tr.ProvisionedThroughput.WriteCapacityUnits }) )).reduce(function(a, b) { return a + b; }, 0)

									if ((data.Table.BillingModeSummary || {}).BillingMode === 'PAY_PER_REQUEST' ) {
										row[6].S = 'On-Demand'
										row[7].S = 'On-Demand'
									}
								}
								return row
							}))
							cb()
						})
					}
					return f;
				})

				async.parallel(waterfallz, function( err ) {


				})

		})
		//ddb.listTables({}, function(err, data) {
		//})
	},
	oninit: function() {
		this.refresh_tables()
		var ractive = this
		//ractive.on('open-table', function(e, table ) {
		//	ractive.root.fire('open-table', table )
		//})
		ractive.on('tabledata.selectrow', function(context) {
			var keypath = context.resolve()
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected') )

			ractive.set('selection_length',
				ractive.get('rows').filter(function(r) { return r[0].selected === true } ).length
			)
		})
		ractive.on('delete', function() {
			var selected = ractive.get('rows').filter(function(r) { return r[0].selected === true } );

			if ( selected.length === 0 )
				return alert('Please select a table to delete')

			if ( selected.length > 1 )
				return alert('Please select one table at a time')

			var tablename = selected[0][1].S

			if (confirm('Are you sure you want to delete table ' + tablename )) {

				DynamoDB.client.deleteTable({ TableName: tablename } , function(err, data) {
					if (err)
						return alert( err.message )

					ractive.refresh_tables()

					// refresh leftside as well
					window.ractive.findComponent('minitablelist').refresh_tables()
				})
			}

		})
		ractive.on('create', function() {
			ractive.root.findComponent('tabs').newtab('tablecreate', 'Create Table' )
		})
	},
})
