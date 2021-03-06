
import _table_utils from './_utils';
import _open_item from './items/_open_item';
import _create_item from './items/_create_item';
import _duplicate_item from './items/_duplicate_item';

import tabledata from '../tabledata';


export default Ractive.extend({
	components: {
		tabledata: tabledata,
	},
	isolated: true,
	template: `
	<div class='tablebrowse'>
		{{#if !describeTable }}
			<br>reading table schema...
		{{else}}
		<div class='tablequery'>
			<table width='100%' style='border-collapse: separate;border-spacing: 5px;'>
				<tr>
					<td>
						<select class="input-select" value='{{ .type }}'>
							<option value='scan'>SCAN</option>
							<option value='query'>QUERY</option>
						</select>
					</td>
					<td colspan='4'>
						{{#if .type === 'scan' }}
						<select class="input-select" value='{{ .scan.table }}'>
							<option value=''>
								[ Table ] {{ describeTable.TableName }}: {{ @this._hash_key_name() }} ( {{ @this._hash_key_type_name() }} )
								{{#if describeTable.KeySchema.length === 2}}
									, {{ @this._range_key_name() }} ( {{ @this._range_key_type_name() }} )
								{{/if}}
							</option>

							{{#describeTable.LocalSecondaryIndexes:j}}
							<option value='lsi:{{ .IndexName }}'>
								[ LSI ] {{ .IndexName }}: {{ @this._lsi_hash_key_name( .IndexName ) }} ( {{ @this._lsi_hash_key_type_name( .IndexName ) }} )
								{{#if .KeySchema.length === 2}}
									, {{ @this._lsi_range_key_name( .IndexName ) }} (  {{ @this._lsi_range_key_type_name( .IndexName ) }} )
								{{/if}}
							</option>
							{{/describeTable.LocalSecondaryIndexes}}

							{{#describeTable.GlobalSecondaryIndexes:j}}
							<option value='gsi:{{ .IndexName }}'>
								[ GSI ] {{ .IndexName }}: {{ @this._gsi_hash_key_name( .IndexName ) }} ( {{ @this._gsi_hash_key_type_name( .IndexName ) }} )
								{{#if .KeySchema.length === 2}}
									, {{ @this._gsi_range_key_name( .IndexName ) }} (  {{ @this._gsi_range_key_type_name( .IndexName ) }} )
								{{/if}}
							</option>
							{{/describeTable.GlobalSecondaryIndexes}}
						</select>
						{{/if}}

						{{#if .type === 'query' }}
						<select class="input-select" value='{{ .query.table }}'>
							<option value=''>
								[ Table ] {{ describeTable.TableName }}: {{ @this._hash_key_name() }} ( {{ @this._hash_key_type_name() }} )
								{{#if describeTable.KeySchema.length === 2}}
									, {{ @this._range_key_name() }} ( {{ @this._range_key_type_name() }} )
								{{/if}}

							</option>

							{{#describeTable.LocalSecondaryIndexes:j}}
							<option value='lsi:{{ .IndexName }}'>
								[ LSI ] {{ .IndexName }}: {{ @this._lsi_hash_key_name( .IndexName ) }} ( {{ @this._lsi_hash_key_type_name( .IndexName ) }} )
								{{#if .KeySchema.length === 2}}
									, {{ @this._lsi_range_key_name( .IndexName ) }} (  {{ @this._lsi_range_key_type_name( .IndexName ) }} )
								{{/if}}
							</option>
							{{/describeTable.LocalSecondaryIndexes}}

							{{#describeTable.GlobalSecondaryIndexes:j}}
							<option value='gsi:{{ .IndexName }}'>
								[ GSI ] {{ .IndexName }}: {{ @this._gsi_hash_key_name( .IndexName ) }} ( {{ @this._gsi_hash_key_type_name( .IndexName ) }} )
								{{#if .KeySchema.length === 2}}
									, {{ @this._gsi_range_key_name( .IndexName ) }} (  {{ @this._gsi_range_key_type_name( .IndexName ) }} )
								{{/if}}
							</option>
							{{/describeTable.GlobalSecondaryIndexes}}
						</select>
						{{/if}}
					</td>
				</tr>
				{{#if .type === 'query' }}
				<tr>
					<td>Partition</td>
					{{#if .query.table === ''  }}
						<td>{{ _hash_key_name() }}</td>
						<td><select class="input-select"><option>{{ @this._hash_key_type_name() }}</option></select></td>
					{{/if}}
					{{#describeTable.LocalSecondaryIndexes:j}}
						{{#if ~/.query.table === ('lsi:' +  .IndexName)  }}
							<td>{{ @this._lsi_hash_key_name( .IndexName ) }}</td>
							<td><select class="input-select"><option>{{ @this._lsi_hash_key_type_name( .IndexName ) }}</option></select></td>
						{{/if}}
					{{/describeTable.LocalSecondaryIndexes}}
					{{#describeTable.GlobalSecondaryIndexes:j}}
						{{#if ~/.query.table === ('gsi:' +  .IndexName)  }}
							<td>{{ @this._gsi_hash_key_name( .IndexName ) }}</td>
							<td><select class="input-select"><option>{{ @this._gsi_hash_key_type_name( .IndexName ) }}</option></select></td>
						{{/if}}
					{{/describeTable.GlobalSecondaryIndexes}}
					<td><select class="input-select"><option>=</option></select></td>
					<td><input class="input-text" type='text' value='{{.query.partition.value}}'></td>
				</tr>
				{{#if .query.table === ''  }}
					{{#if describeTable.KeySchema.length === 2}}
					<tr>
						<td>Sort</td>
						<td>{{ @this._range_key_name() }}</td>
						<td><select class="input-select"><option>{{ @this._range_key_type_name( ) }}</option></select></td>
						<td>
							<select class="input-select" value='{{ ~/query.sort.op }}'>
								<option value='eq'>=</option>
								<option value='gt'>&gt;</option>
								<option value='ge'>&gt;=</option>
								<option value='lt'>&lt;</option>
								<option value='le'>&lt;=</option>
								<option value='between'>between</option>
								{{#if _range_key_type()  === 'S' }}
									<option value='begins_with'>begins with</option>
								{{/if}}
							</select>
						</td>
						<td>
							<input class="input-text" type='text' value='{{ ~/query.sort.value }}'>
							{{#if ~/query.sort.op === 'between' }}
								<input class="input-text" type='text' value='{{ ~/query.sort.value2 }}'>
							{{/if}}
						</td>
					</tr>
					{{/if}}
				{{/if}}
				{{#describeTable.GlobalSecondaryIndexes:j}}
					{{#if ~/.query.table === ('gsi:' +  .IndexName)  }}
						{{#if .KeySchema.length === 2}}
						<tr>
							<td>Sort</td>
							<td>{{ @this._gsi_range_key_name( .IndexName ) }}</td>
							<td><select class="input-select"><option>{{ @this._gsi_range_key_type_name( .IndexName ) }}</option></select></td>
							<td>
								<select class="input-select" value='{{ ~/query.sort.op }}'>
									<option value='eq'>=</option>
									<option value='gt'>&gt;</option>
									<option value='ge'>&gt;=</option>
									<option value='lt'>&lt;</option>
									<option value='le'>&lt;=</option>
									<option value='between'>between</option>
									{{#if @this._gsi_range_key_type( .IndexName )  === 'S' }}
										<option value='begins_with'>begins with</option>
									{{/if}}
								</select>
							</td>
							<td>
								<input class="input-text" type='text' value='{{ ~/query.sort.value }}'>
								{{#if ~/query.sort.op === 'between' }}
									<input class="input-text" type='text' value='{{ ~/query.sort.value2 }}'>
								{{/if}}
							</td>
						</tr>
						{{/if}}
					{{/if}}
				{{/describeTable.GlobalSecondaryIndexes}}
				{{#describeTable.LocalSecondaryIndexes:j}}
					{{#if ~/.query.table === ('lsi:' +  .IndexName)  }}
						{{#if .KeySchema.length === 2}}
						<tr>
							<td>Sort</td>
							<td>{{ @this._lsi_range_key_name( .IndexName ) }}</td>
							<td><select class="input-select"><option>{{ @this._lsi_range_key_type_name( .IndexName ) }}</option></select></td>
							<td>
								<select class="input-select" value='{{ ~/query.sort.op }}'>
									<option value='eq'>=</option>
									<option value='gt'>&gt;</option>
									<option value='ge'>&gt;=</option>
									<option value='lt'>&lt;</option>
									<option value='le'>&lt;=</option>
									<option value='between'>between</option>
									{{#if @this._lsi_range_key_type( .IndexName )  === 'S' }}
										<option value='begins_with'>begins with</option>
									{{/if}}
								</select>
							</td>
							<td>
								<input class="input-text" type='text' value='{{ ~/query.sort.value }}'>
								{{#if ~/query.sort.op === 'between' }}
									<input class="input-text" type='text' value='{{ ~/query.sort.value2 }}'>
								{{/if}}
							</td>
						</tr>
						{{/if}}
					{{/if}}
				{{/describeTable.LocalSecondaryIndexes}}

				{{/if}}
			</table>

		</div>
		<div class='tabledatacontrols'>
			<div class='btn btn-xs btn-default {{#if oop_running}}disabled{{/if}}' on-click='run-oop' style='padding-right: 10px;'> <icon-play /> RUN</div>
			<div class='btn btn-xs btn-default {{#if prev_running}}disabled{{/if}} {{#if start_reached }}disabled{{/if}}' on-click='prev'> <icon-prev /> </div>
			<div class='btn btn-xs btn-default {{#if next_running}}disabled{{/if}} {{#if end_reached   }}disabled{{/if}}' on-click='next'> <icon-next /> </div>

			<div class='pull-right'>
				<a class='btn btn-xs btn-default' on-click='refresh'> <icon-refresh /> </a>
				<div class='btn-group'>
					<button class='btn btn-default btn-xs' type='button'>
						<icon-filter />
					</button>
					<button type='button' class='btn btn-xs btn-default dropdown-toggle dropdown-toggle-split' on-click='@this.toggle("drowndownfilteropen")'>
						<icon-caret-down />
					</button>
					<div class='dropdown-menu pull-right {{#if drowndownfilteropen}}show{{/if}}' style='max-height: 250px;overflow-y: auto;'>
						{{#display_columns}}
							<li><a> <input class="input-checkbox" type=checkbox checked='{{.show}}' />  {{.name}}</a>
						{{/display_columns}}

					</div>
				</div>

				<a class='btn btn-xs btn-primary' on-click='create-item'  > Create Item </a>
				<a class='btn btn-xs btn-default {{#if selection_length === 1}}{{else}}disabled{{/if}}' on-click='duplicate-item'  > Duplicate </a>
				<a class='btn btn-xs btn-danger {{#if selection_length > 0}}{{else}}disabled{{/if}}'  on-click='delete-selected' > <icon-trash /> </a>
			</div>
		</div>
		<tabledata columns='{{columns}}' rows='{{rows}}' on-colclick='open-item' style='top: 148px'/>
		{{/if}}
	</div>
		`,

	_hash_key_name: _table_utils._hash_key_name,
	_hash_key_type: _table_utils._hash_key_type,
	_hash_key_type_name: _table_utils._hash_key_type_name,

	_range_key_name: _table_utils._range_key_name,
	_range_key_type: _table_utils._range_key_type,
	_range_key_type_name: _table_utils._range_key_type_name,


	_gsi_hash_key_name: _table_utils._gsi_hash_key_name,
	_gsi_hash_key_type: _table_utils._gsi_hash_key_type,
	_gsi_hash_key_type_name: _table_utils._gsi_hash_key_type_name,



	_gsi_range_key_name: _table_utils._gsi_range_key_name,
	_gsi_range_key_type: _table_utils._gsi_range_key_type,
	_gsi_range_key_type_name: _table_utils._gsi_range_key_type_name,











	_lsi_hash_key_name: _table_utils._lsi_hash_key_name,
	_lsi_hash_key_type: _table_utils._lsi_hash_key_type,
	_lsi_hash_key_type_name: _table_utils._lsi_hash_key_type_name,


	_lsi_range_key_name: _table_utils._lsi_range_key_name,
	_lsi_range_key_type: _table_utils._lsi_range_key_type,
	_lsi_range_key_type_name: _table_utils._lsi_range_key_type_name,




	display_data: function() {
		var ractive = this;

		var dbrows_json = this.get('dbrows_json');
		var dbrows_raw  = this.get('dbrows_raw');

		var columns = [null]
		var rows = []
		var display_columns = {}
		this.get('display_columns').map(function(dc) {
			if (dc.show)
				columns.push(dc.name)
		})
		var rows = []



		dbrows_json.map(function(row, idx ) {
			var thisrow = []

			columns.map(function(column_name) {
				if (column_name === null) {
					// checkbox
					var key = {}
					key[ractive._hash_key_name()] = row[ractive._hash_key_name()]
					if (ractive._range_key_name()) key[ractive._range_key_name()] = row[ractive._range_key_name()]
					thisrow.push({KEY: key})
				} else {
					if (row.hasOwnProperty(column_name)) {
						if ( column_name === ractive._hash_key_name() ) {
							thisrow.push({
								HASH:row[column_name],
								item: row,
								raw: dbrows_raw[idx],
							})
						} else if (typeof row[column_name] === 'string')
							thisrow.push({'S':row[column_name]})
						else if (typeof row[column_name] === 'number')
							thisrow.push({'N':row[column_name]})
						else if (typeof row[column_name] === 'boolean') {
							thisrow.push({'BOOL':row[column_name].toString()})
						} else if (row[column_name] === null) {
							thisrow.push({'NULL': "NULL"})
						} else if ((typeof row[column_name] === 'object') &&  Array.isArray(row[column_name]) ) {
							thisrow.push({'L': true })
						} else if ((typeof row[column_name] === 'object') && !Array.isArray(row[column_name]) ) {
							thisrow.push({'M': true })
						} else
							thisrow.push({'U': true })
					} else {
						thisrow.push({'U': true })
					}
				}
			})
			rows.push(thisrow)
		})




		this.set('columns', columns )
		this.set('rows', rows )
	},

	refresh_data: function( LastEvaluatedKey ) {

		var ractive = this;
		this.set('columns', [])
		this.set('rows', [])

		var dbrows_json = null
		var dbrows_raw = null
		var hash_key = null
		var range_key = null
		var fields = {}
		var columns = [null]


		async.waterfall([


			// describeTable is set by parent

			function( cb ) {
				if (ractive.get('type') !== 'scan')
					return cb()

				fields = {}


				hash_key = ractive._hash_key_name();
				range_key = ractive._range_key_name();

				columns.push(hash_key)
				ractive.add_display_column( hash_key, true )
				fields[hash_key] = 1;
				if (range_key) {
					columns.push(range_key)
					ractive.add_display_column( range_key, true )
					fields[range_key] = 1;
				}


				var scan_index = ractive.get('scan.table')
				if (scan_index === '') {
				} else {
					var scan_type = scan_index.split(':')[0]
					scan_index = scan_index.split(':')[1]
					if (scan_type === 'gsi') {
						var index = ractive.get('describeTable.GlobalSecondaryIndexes').filter(function(i) { return i.IndexName === scan_index})[0]

						var index_hash_key  = (index.KeySchema.filter(function(k) { return k.KeyType === 'HASH' })[0] || {}).AttributeName;
						var index_range_key = (index.KeySchema.filter(function(k) { return k.KeyType === 'RANGE'})[0] || {}).AttributeName;

						columns.push(index_hash_key)
						ractive.add_display_column( index_hash_key, true )
						fields[index_hash_key] = 1;

						if (index_range_key) {
							columns.push(index_range_key)
							ractive.add_display_column( index_range_key, true )
							fields[index_range_key] = 1;
						}
					}


				}

				var ddb = DynamoDB.table(ractive.get('table.name'))
				if (LastEvaluatedKey)
					ddb.resume( LastEvaluatedKey )
				ddb.limit(100)
				if (scan_index)
					ddb = ddb.index(scan_index)

				ddb.scan(function(err, data, raw ) {
					if (err)
						return alert("scan error")

					dbrows_json = data;
					dbrows_raw  = raw.Items

					ractive.push('scan.LastEvaluatedKey', this.LastEvaluatedKey )
					ractive.set('end_reached' ,this.LastEvaluatedKey ? false : true )

					cb()
				})
			},

			function( cb ) {
				if (ractive.get('type') !== 'query')
					return cb()

				fields = {}
				var query_partition_name = '';
				var query_partition_type = 'S';
				var query_sort_name = '';
				var query_sort_type = 'S';



				hash_key = ractive._hash_key_name();
				range_key = ractive._range_key_name();

				columns.push(hash_key)
				ractive.add_display_column( hash_key, true )
				fields[hash_key] = 1;
				if (range_key) {
					columns.push(range_key)
					ractive.add_display_column( range_key, true )
					fields[range_key] = 1;
				}


				var query_index = ractive.get('query.table')
				if (query_index === '') {
					query_partition_name = hash_key
					query_partition_type = ractive._hash_key_type();
					if (range_key) {
						query_sort_name = ractive._range_key_name();
						query_sort_type = ractive._range_key_type();
					}
				} else {
					var query_type = query_index.split(':')[0]
					query_index = query_index.split(':')[1]
					if (query_type === 'gsi') {

						var index = ractive.get('describeTable.GlobalSecondaryIndexes').filter(function(i) { return i.IndexName === query_index})[0]
						var index_hash_key  = ractive._gsi_hash_key_name( index.IndexName )
						var index_range_key = ractive._gsi_range_key_name( index.IndexName )
						query_partition_name = index_hash_key;
						query_partition_type = ractive._gsi_hash_key_type( index.IndexName )

						if (index_range_key) {
							query_sort_name = ractive._gsi_range_key_name( index.IndexName )
							query_sort_type = ractive._gsi_range_key_type( index.IndexName )
						}

						columns.push(index_hash_key)
						ractive.add_display_column( index_hash_key, true )
						fields[index_hash_key] = 1;

						if (index_range_key) {
							columns.push(index_range_key)
							ractive.add_display_column( index_range_key, true )
							fields[index_range_key] = 1;
						}
					}
					if (query_type === 'lsi') {

						var index = ractive.get('describeTable.LocalSecondaryIndexes').filter(function(i) { return i.IndexName === query_index})[0]
						var index_hash_key  = ractive._lsi_hash_key_name( index.IndexName )
						var index_range_key = ractive._lsi_range_key_name( index.IndexName )
						query_partition_name = index_hash_key;
						query_partition_type = ractive._lsi_hash_key_type( index.IndexName )

						if (index_range_key) {
							query_sort_name = ractive._lsi_range_key_name( index.IndexName )
							query_sort_type = ractive._lsi_range_key_type( index.IndexName )
						}

						columns.push(index_hash_key)
						ractive.add_display_column( index_hash_key, true )
						fields[index_hash_key] = 1;

						if (index_range_key) {
							columns.push(index_range_key)
							ractive.add_display_column( index_range_key, true )
							fields[index_range_key] = 1;
						}

					}

				}

				var ddb = DynamoDB.table(ractive.get('table.name'))
				if (LastEvaluatedKey)
					ddb.resume( LastEvaluatedKey )
				ddb.limit(100)
				if (query_index)
					ddb = ddb.index(query_index)

				if (query_partition_type === 'S')
					ddb = ddb.where(query_partition_name).eq( ractive.get('query.partition.value').toString() )

				if (query_partition_type === 'N')
					ddb = ddb.where(query_partition_name).eq( parseFloat(ractive.get('query.partition.value')) )


				if ( ractive.get('query.sort.value').length ) {
					// apply sort
					console.log("sort", query_sort_name, ractive.get('query.sort.op') , query_sort_type )
					if (query_sort_type === 'S')
						ddb = ddb.where(query_sort_name)[ ractive.get('query.sort.op') ]( ractive.get('query.sort.value').toString(), ractive.get('query.sort.value2').toString() )

					if (query_sort_type === 'N')
						ddb = ddb.where(query_sort_name)[ ractive.get('query.sort.op') ]( parseFloat(ractive.get('query.sort.value')), parseFloat(ractive.get('query.sort.value2')) )


				}

				console.log("query_partition_name=",query_partition_name)

				dbrows_json = []
				ddb.query(function(err, data, raw ) {
					if (err) {
						alert("query error")
						return cb(err)
					}
console.log("query LastEvaluatedKey=", this.LastEvaluatedKey )
					dbrows_json = data;
					dbrows_raw  = raw.Items;

					ractive.push('scan.LastEvaluatedKey', this.LastEvaluatedKey )

					ractive.set('end_reached' ,this.LastEvaluatedKey ? false : true )

					cb()


				})

			},

			// save raw data
			function(cb ) {
				ractive.set('dbrows_json', dbrows_json )
				ractive.set('dbrows_raw', dbrows_raw )
				cb()
			}
		], function(err) {
			ractive.set('oop_running'  ,false )
			ractive.set('prev_running' ,false )
			ractive.set('next_running' ,false )

			if (err)
				ractive.set('err', err.errorMessage )


			if (ractive.get('autocolumns')) {
				dbrows_json.map(function(row) {
					Object.keys(row).map(function(column_name) {
						if (!fields.hasOwnProperty(column_name)) {
							if (columns.length > 10) {
								ractive.add_display_column( column_name, false )
							} else {
								ractive.add_display_column( column_name, true )
								fields[column_name] = 1;
								columns.push(column_name)
							}
						}
					})
				})
				ractive.set('autocolumns', false)
			}
			ractive.display_data()
			/*
			var rows = []







			dbrows_.map(function(row) {
				var thisrow = []

				columns.map(function(column_name) {
					if (column_name === null) {
						// checkbox
						var key = {}
						key[hash_key] = row[hash_key]
						if (range_key) key[range_key] = row[range_key]
						thisrow.push({KEY: key})
					} else {
						if (row.hasOwnProperty(column_name)) {
							if (typeof row[column_name] === 'string')
								thisrow.push({'S':row[column_name]})
							else if (typeof row[column_name] === 'number')
								thisrow.push({'N':row[column_name]})
							else if (typeof row[column_name] === 'boolean') {
								thisrow.push({'BOOL':row[column_name].toString()})
							} else if (row[column_name] === null) {
								thisrow.push({'NULL': "NULL"})
							} else if ((typeof row[column_name] === 'object') &&  Array.isArray(row[column_name]) ) {
								thisrow.push({'L': true })
							} else if ((typeof row[column_name] === 'object') && !Array.isArray(row[column_name]) ) {
								thisrow.push({'M': true })
							} else
								thisrow.push({'U': true })
						} else {
							thisrow.push({'U': true })
						}
					}
				})
				rows.push(thisrow)
			})
			ractive.set('columns', columns )
			ractive.set('rows', rows )
			*/
		})
	},
	add_display_column: function( cname, show ) {
		var display_columns = this.get('display_columns')
		if ( display_columns.filter(function(dc) { return dc.name === cname}).length )
			return;

		display_columns.push({
			name: cname,
			show: show,
		})
		this.set('display_columns', display_columns )
	},
	data: function() {
		return {
			oop_running: false,
			prev_running: false,
			next_running: false,
			start_reached: true,
			end_reached: false,

			type: 'scan',
			display_columns: [
				// { name, type, show: true|false|null}
			],
			autocolumns: true,
			scan: {
				table: '',
				LastEvaluatedKey: [null],
			},
			query: {
				table: '',
				sort: {
					op: 'eq',
					value: '',
					value2: '',
				}
			}
		}
	},

	_duplicate_item: _duplicate_item,

	on: {
		'open-item': _open_item,
		'create-item': _create_item,
		'duplicate-item': function() {

			var to_duplicate = this.findComponent('tabledata').get('rows')
				.filter(function(r) { return r[0].selected })
				.map(function(r) { return r[1] }) // r[0] = checkbox, r[1]=hash+raw

			if (!to_duplicate.length)
				return alert('No Items Selected')

			this._duplicate_item( to_duplicate[0].raw )
		},
		prev: function() {

			if (this.get('prev_running'))
				return;

			this.set('prev_running' ,true )

			if (this.get('scan.LastEvaluatedKey').length < 3)
				return;

			var next = this.pop('scan.LastEvaluatedKey')

			var current = this.pop('scan.LastEvaluatedKey')

			var LastEvaluatedKey = this.get('scan.LastEvaluatedKey').slice(-1)[0]

			this.refresh_data(LastEvaluatedKey)
		},
		next: function() {

			if (this.get('next_running'))
				return;

			if (this.get('end_reached'))
				return;

			this.set('next_running' ,true )
			var LastEvaluatedKey = this.get('scan.LastEvaluatedKey').slice(-1)[0]


			this.refresh_data(LastEvaluatedKey)
		},
	},
	oninit: function() {
		var ractive = this




		//this.on('open-item', )

		this.on('run-oop', function() {
			if (this.get('oop_running'))
				return;

			this.set('oop_running' ,true )

			// reset scan.LastEvaluatedKey
			ractive.set('scan.LastEvaluatedKey', [null] )

			this.refresh_data(null)
		})
		this.on('prev', )


		ractive.observe('scan.LastEvaluatedKey', function( n, o, keypath ) {
			if (n.length > 2)
				ractive.set('start_reached', false)
			else
				ractive.set('start_reached', true)
		})
		ractive.observe('display_columns.*.show', function( n, o, keypath ) {
			if (o === undefined)
				return;

			if (o == n)
				return;

			var col = ractive.get(keypath.slice(0,-5)).name
			console.log(col, n, o )
			ractive.display_data()
		})





		ractive.on('tabledata.selectrow', function(context) {
			var keypath = context.resolve()
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected') )

			ractive.set('selection_length',
				ractive.get('rows').filter(function(r) { return r[0].selected === true } ).length
			)


		})

		ractive.on('delete-selected', function(context) {
			//console.log(ractive.findComponent('tabledata').get('rows'))
			var to_delete = ractive.findComponent('tabledata').get('rows')
				.map(function(r) { return r[0] })
				.filter(function(r) { return r.selected })
				.map(function(r) { return r.KEY })

			if (!to_delete.length)
				return alert('No Items Selected')

			var to_remove_from_list = []



			async.each(to_delete, function(item, cb) {

				var Key = {}
				Object.keys(item).map(function(k) {
					if (typeof item[k] === "string")
						Key[k] = {"S": item[k]}

					if (typeof item[k] === "number")
						Key[k] = {"N": item[k].toString()}
				})

				var payload = {
					Key: Key,
					TableName: ractive.get('table.name')
				};

				DynamoDB.client.deleteItem( payload , function(err, data) {

					if (err) {
						alert("delete failed " + err.message )
						return cb(err)
					} else
						to_remove_from_list.push(item)

					cb()
				});
			}, function(err) {
				if (err)
					alert('some items failed to delete')

				ractive.set('rows',
					ractive.get('rows')
						.filter(function(r) {

							var is_in_deleted_list = false
							to_remove_from_list.map(function(deleted_item) {
								var isequal = true;
								Object.keys(deleted_item).map(function(k) {
									if (deleted_item[k] !==  r[0].KEY[k] )
										isequal = false;
								})

								if (isequal)
									is_in_deleted_list = true
							})
							return !is_in_deleted_list
						})
				)
			})

		})


		ractive.refresh_data(null)



	},
})
