import * as collections from '/collections'

collections.Todos = Todos

const dummy = {
  makeAuthors,
  makePosts,
  makeTodos,
}

const idsHolder = {}

_.each(collections, collection => {

  const _name = collection._name

  const _Name = _.capitalize(_name)

  collection.remove({})

  idsHolder[_name] = _.times(10, () => collection.insert(dummy['make' + _Name]()))

})

function makeAuthors () {
  return {
    name: faker.name.findName(),
    createdAt: new Date(),
  }
}

function makePosts () {
  return {
    title: faker.lorem.sentence(),
    createdAt: new Date(),
    authorId: _.sample(idsHolder.authors),
  }
}

function makeTodos () {
  return {
    content: faker.lorem.sentence(),
    createdAt: new Date(),
    completed: false,
  }
}
