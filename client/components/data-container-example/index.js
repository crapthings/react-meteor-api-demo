import { Posts, Authors } from '/collections'

import { MeteorDataContainer } from '/react-meteor-api'

const data = {
  posts () { return Posts.find().fetch() }
}

const subscriptions = {
  test: ['id', { test: 1 }]
}

const sources = { data, subscriptions }

Components.Test002 = () => <div>
  <h3>Data Container Example</h3>
  <p>{__filename}</p>
  <MeteorDataContainer sources={sources} component={({posts, ...props}) => <div>
    {posts.map(post => <p key={post._id}>{post.title}</p>)}
  </div>} />
</div>
