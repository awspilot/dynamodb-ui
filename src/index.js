




	import "./css/style.less";
	import Ractive from 'ractive';
	import minitablelist from './minitablelist';
	//import RactiveWindow from './ractive-window.min.js'

	import RactiveWindow from '@databank/ractive-window';

	var ddb;


	var DynamodbFactory = require('@awspilot/dynamodb')

	var AWS = require('aws-sdk')
	AWS.config.update({maxRetries: 1});

	import tabs from './tabs';

	var hsplit = Ractive.extend({
		isolated: false,
		data: {
			direction: 'horizontal'
		},
		template: '<div class="hsplit {{class}} " style="{{style}}">{{yield}}</div>',
	})



	export default Ractive.extend({
		template: `
			<div class='ractive-dynamodb-ui theme-{{theme}}'>
				<WindowContainer theme={{theme}} />
			</div>
			<hsplit style='' class='ractive-dynamodb-ui theme-{{theme}}'>
				<left>
					<minitablelist />
				</left>
				<split />
				<content>
					<tabs
						active_id='tables'
						theme={{theme}}
					/>
				</content>
			</hsplit>
		`,
		components: {
			hsplit: hsplit,
			minitablelist: minitablelist,
			tabs: tabs,
			Window: RactiveWindow.Window,
			WindowContainer: RactiveWindow.Container,
		},

		data: function() {
			return {}
		},
		delegate: false,
		elToFocus: null,
		on: {
			init: function() {
				var ractive=this;
				this.on('open-table', function(e, table ) {
					this.findComponent('tabs').newtab('tabletab', table )
				})

				// if (this.get('account.endpoint')) {
				// 	credentials.endpoint = this.get('account.endpoint')
				// 	if (this.get('account.endpoint').indexOf( location.protocol + '//' + location.host ) === 0) {
				// 		// dynamodb is proxied via same host, force version signature 3 so Authorization header is not used
				// 		credentials.signatureVersion = 'v3'
				// 		// httpOptions: { xhrWithCredentials: true },
				// 	}
				// }

				ddb = new AWS.DynamoDB({
					endpoint: this.get('endpoint'),
					region: this.get('region'),
					credentials: {
						accessKeyId: this.get('accessKeyId'),
						secretAccessKey: this.get('secretAccessKey'),
					}
				});


				DynamoDB  = new DynamodbFactory(ddb)

				cloudwatch = new AWS.CloudWatch({
					endpoint: this.get('cwendpoint'),
					region: this.get('region'),
					credentials: {
						accessKeyId: this.get('accessKeyId'),
						secretAccessKey: this.get('secretAccessKey'),
					}
				})

				this.observe('theme', function() {

					this.findAllComponents('WindowContainer')[0].findAllComponents('Window').map(function(w) {
						console.log("window", w.get('_editor').set({theme: ractive.get('theme') }) )
					})

				})

			}
		},
	});
