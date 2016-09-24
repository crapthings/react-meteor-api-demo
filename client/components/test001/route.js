FlowRouter.route('/test001', {
  action () {
    Mount(Components.App, {
      component: () => <Components.Test001 />
    })
  },
  name: 'hello'
})
