
import tabledata from '../tabledata';

export default Ractive.extend({
	components: {
		tabledata: tabledata,
	},
	template: `
		<div style='padding: 30px'>
			{{#if tab === 'create'}}
				<h3>Create Global Secondary Index</h3>
				<table cellpadding='10' border='0'>
					<tr>
						<td>Name</td>
						<td><input class="input-text" type='text' value='{{newindex.IndexName}}' on-focus='focus' /></td>
					</tr>
					<tr>
						<td>Type</td>
						<td>GSI</td>
					</tr>
					<tr>
						<td>Partition key</td>
						<td>
							<input class="input-text" type='text' value='{{ newindex.KeySchema.0.AttributeName }}' on-focus='focus' />
							<select class="input-select" value='{{ newindex.KeySchema.0.AttributeType }}'>
								<option value='S'>String</option>
								<option value='N'>Number</option>
								<option value='B'>Binary</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>Sort key</td>
						<td>
							<input class="input-text" type='text' value='{{ newindex.KeySchema.1.AttributeName }}' on-focus='focus' />
							<select class="input-select" value='{{ newindex.KeySchema.1.AttributeType }}'>
								<option value='S'>String</option>
								<option value='N'>Number</option>
								<option value='B'>Binary</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>Projection type</td>
						<td>
							<select class="input-select" value='{{ newindex.Projection.ProjectionType}}'>
								<option value='ALL'>ALL</option>
								<option value='KEYS_ONLY'>KEYS_ONLY</option>
								<option value='INCLUDE'>INCLUDE</option>
							</select>
						</td>
					</tr>
					{{#if newindex.Projection.ProjectionType === 'INCLUDE' }}
					<tr>
						<td>Projected attributes</td>
						<td>
							{{#if newindex.Projection.ProjectionType === 'INCLUDE'}}

							{{#newindex.Projection.NonKeyAttributes}}
								<span class='badge badge-info'>{{.}}</span><br>
							{{/newindex.Projection.NonKeyAttributes}}

							<input class="input-text" type='text' value='{{ ~/nonkeyattribute }}' on-focus='focus' /><a class='btn btn-xs btn-primary' on-click='add-nonkey-attribute'> <icon-plus /></a>

							{{/if}}
						</td>
					</tr>
					{{/if}}
					<tr>
						<td>Read capacity</td>
						<td>
							<input class="input-text" type='text' value='{{ newindex.ProvisionedThroughput.ReadCapacityUnits }}'  size='4' on-focus='focus' />
						</td>
					</tr>
					<tr>
						<td>Write capacity</td>
						<td>
							<input class="input-text" type='text' value='{{ newindex.ProvisionedThroughput.WriteCapacityUnits}}' size='4' on-focus='focus' />
						</td>
					</tr>

				</table>
				<br>
				<div style='color:red'>{{ err }}&nbsp;</div>
				<br>
				<a class='btn btn-md btn-primary' on-click='create-gsi'>Create</a>
				<a class='btn btn-md btn-default' on-click='cancel-gsi'>Cancel</a>
				<br>
			{{else}}
				<h3>Indexes</h3>
				<div>
					<a class='btn btn-sm btn-primary' on-click='create'>Create index</a>
					<a class='btn btn-sm btn-default' on-click='delete'>Delete index</a>

					<a class='btn btn-sm btn-default pull-right' on-click='refresh-table'> <icon-refresh /> </a>
				</div>
				<tabledata columns='{{columns}}' rows='{{rows}}' style='top: 128px'/>
			{{/if}}
		</div>
	`,


	refresh_table_indexes: function() {
		var ractive=this;



			ractive.set('rows',
				(ractive.get('describeTable').LocalSecondaryIndexes || []).map(function(index){
					var partition_key_name = (((index.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'HASH'})[0] || {}).AttributeName);
					var partition_key_type =
						({S: 'String', N: 'Number', B: 'Binary'})[
							ractive.get('describeTable').AttributeDefinitions.filter(function(at) {
								return at.AttributeName === (((index.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'HASH'})[0] || {}).AttributeName)
							})[0].AttributeType
						];
					var sort_key_name = (((index.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'RANGE'})[0] || {}).AttributeName) || '';
					var sort_key_type = ({S: 'String', N: 'Number', B: 'Binary'})[(
								ractive.get('describeTable').AttributeDefinitions.filter(function(at) {
									return at.AttributeName === (((index.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'RANGE'})[0] || {}).AttributeName)
								})[0] || {}
							).AttributeType
						] || '';


					return [
						{ KEY: true },
						{ S: index.IndexName },
						{ S: 'N/A' },
						{ S: 'LSI' },
						{ S: partition_key_name + ' (' + partition_key_type + ' )' },
						{ S: sort_key_name + ( sort_key_type ? ' ( ' + sort_key_type + ' )' : '' ) },
						{ S: index.Projection.ProjectionType + ' ' + (index.Projection.ProjectionType === 'INCLUDE' ? index.Projection.NonKeyAttributes.join(', ') : '')},
						{ N: index.IndexSizeBytes.toString() },
						{ N: index.ItemCount.toString() },
					]
				}).concat(
					(ractive.get('describeTable').GlobalSecondaryIndexes || []).map(function(index){
						var partition_key_name;
						var partition_key_type;
						var sort_key_name;
						var sort_key_type;
						var projection = '';
						try {
							partition_key_name = (((index.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'HASH'})[0] || {}).AttributeName);
							partition_key_type =
								({S: 'String', N: 'Number', B: 'Binary'})[
									ractive.get('describeTable').AttributeDefinitions.filter(function(at) {
										return at.AttributeName === (((index.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'HASH'})[0] || {}).AttributeName)
									})[0].AttributeType
								];
							sort_key_name = (((index.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'RANGE'})[0] || {}).AttributeName) || '';
							sort_key_type = ({S: 'String', N: 'Number', B: 'Binary'})[(
										ractive.get('describeTable').AttributeDefinitions.filter(function(at) {
											return at.AttributeName === (((index.KeySchema || []).filter(function( ks ) { return ks.KeyType === 'RANGE'})[0] || {}).AttributeName)
										})[0] || {}
									).AttributeType
								] || '';
							projection = index.Projection.ProjectionType + ' ' + (index.Projection.ProjectionType === 'INCLUDE' ? index.Projection.NonKeyAttributes.join(', ') : '');
						} catch(e) {}



						return [
							{ KEY: true },
							{ S: index.IndexName },
							{ S: index.IndexStatus },
							{ S: 'GSI' },
							{ S: partition_key_name + ' (' + partition_key_type + ' )' },
							{ S: sort_key_name + ( sort_key_type ? ' ( ' + sort_key_type + ' )' : '' ) },
							{ S: projection },
							{ N: index.hasOwnProperty('IndexSizeBytes') ? index.IndexSizeBytes.toString() : 0 },
							{ N: index.hasOwnProperty('ItemCount')      ? index.ItemCount.toString()      : 0 },
						]
					})
				)
			);

	},

	oninit: function() {
		var ractive = this;
		ractive.on('tabledata.selectrow', function(context) {
			var keypath = context.resolve()
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected') )
		})
		ractive.on('focus', function() {
			ractive.set( 'err' )
		})
		ractive.on('create', function() {
			ractive.set('tab', 'create')
			ractive.set('newindex', {
				IndexName: '',
				KeySchema: [
					{
						AttributeName: '',
						AttributeType: 'S',
						KeyType: 'HASH',
					},
					{
						AttributeName: '',
						AttributeType: 'S',
						KeyType: 'RANGE'
					},
				],
				Projection: {
					ProjectionType: 'ALL',
					NonKeyAttributes: [],
				},
				ProvisionedThroughput: {
					ReadCapacityUnits: 1,
					WriteCapacityUnits: 1,
				}
			})
		})
		ractive.on('cancel-gsi', function() {
			ractive.set('tab')
			ractive.set('newindex')
		})

		ractive.on('add-nonkey-attribute', function(e) {
			var keypath = 'newindex.Projection.NonKeyAttributes';
			ractive.push( keypath , ractive.get('nonkeyattribute'))
			ractive.set(  keypath , ractive.get( keypath ).filter(function(value,index,self) { return self.indexOf(value) === index; }))
			ractive.set('nonkeyattribute')
		})
		ractive.on('create-gsi', function() {
			var newindex = JSON.parse(JSON.stringify(ractive.get('newindex')))
			var AttributeDefinitions = []

			newindex.KeySchema.map(function(ks) {
				if (ks.KeyType === 'HASH') {
					AttributeDefinitions.push({
						AttributeName: ks.AttributeName,
						AttributeType: ks.AttributeType,
					})
					delete ks.AttributeType;
				}
				if (ks.KeyType === 'RANGE') {
					if ( ks.AttributeName.trim() === '' ) {
						newindex.KeySchema = [ newindex.KeySchema[0] ]
					} else {
						AttributeDefinitions.push({
							AttributeName: ks.AttributeName,
							AttributeType: ks.AttributeType,
						})
						delete ks.AttributeType;
					}

				}
			})
			if ( newindex.Projection.ProjectionType !== 'INCLUDE' )
				delete newindex.Projection.NonKeyAttributes;

			var payload = {
				TableName: ractive.get('describeTable.TableName'),
				AttributeDefinitions: AttributeDefinitions,
				GlobalSecondaryIndexUpdates: [],
			};

			payload.GlobalSecondaryIndexUpdates.push({
				Create: newindex
			})

			DynamoDB.client.updateTable( payload , function(err, data) {

				if (err)
					return ractive.set('err', err.message || err.errorMessage );

				ractive.set('tab')
				ractive.set('newindex')

				ractive.set('rows', null )
				setTimeout(function() {
					ractive.parent.describe_table(function() {
						ractive.refresh_table_indexes()
					})
				},500)
			})
		})


		ractive.on('delete', function() {
			var selected = ractive.get('rows').filter(function(r) { return r[0].selected === true } );

			if ( selected.length === 0 )
				return alert('Please select an index to delete')

			if ( selected.length > 1 )
				return alert('Please select one index at a time')

			var tablename = ractive.get('describeTable.TableName')
			var indexname = selected[0][1].S

			if (confirm('Are you sure you want to delete index ' + indexname + ' from table ' + tablename )) {

				var payload = {
					TableName: ractive.get('describeTable.TableName'),
					GlobalSecondaryIndexUpdates: [],
				};

				payload.GlobalSecondaryIndexUpdates.push({
					Delete: {
						IndexName: indexname,
					}
				})

				DynamoDB.client.updateTable( payload , function(err, data) {

					if (err)
						return alert( err.message );

					ractive.set('rows', null )
					setTimeout(function() {
						ractive.parent.describe_table(function() {
							ractive.refresh_table_indexes()
						})
					},500)

				})

			}

		})

		ractive.on('refresh-table', function() {
			ractive.set('rows', null )
			ractive.parent.describe_table(function() {
				ractive.refresh_table_indexes()
			})
		})

		ractive.refresh_table_indexes()
	},
	data: function() {
		return {
			columns: [ null, 'Name', 'Status', 'Type', 'Partition key', 'Sort key', 'Attributes', 'Size', 'Item count' ],
			rows: null,
			//newindex:
		}
	}
})
