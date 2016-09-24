FlowRouter.route('/authors', {
  action () {
    Mount(Components.App, {
      component: () => <Components.Authors />
    })
  }
})
