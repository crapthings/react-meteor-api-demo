FlowRouter.route('/test002', {
  action () {
    Mount(Components.App, {
      component: () => <Components.Test002 />
    })
  }
})
