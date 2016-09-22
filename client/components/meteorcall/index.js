import { MeteorCall } from '/react-meteor-api'

const Showcase = () => <div>
	<h3>test</h3>
	<MeteorCall name='test' component={(props) => <button onClick={props.call}>
		{props.result || 'this button call a meteor method'}
	</button>} />
</div>

FlowRouter.route('/meteor-call', {
  action () {
    Mount(Components.App, {
      content: () => <Showcase />
    })
  }
})
