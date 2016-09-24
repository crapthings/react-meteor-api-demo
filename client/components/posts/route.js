FlowRouter.route('/', {
  action () {
    Mount(Components.App, {
      component: () => <Components.Posts />
    })
  }
})
