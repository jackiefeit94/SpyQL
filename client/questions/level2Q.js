const question2Line1 =
  '(id, location) values: (1, Party) (2, Barn Joo Restaurant)'
const question2Line2 =
  '(3, Museum of Natural History Exhibit) (4, Greats of Craft Bar)'
const question2Line3 =
  '(5, PSY 101, Hunter College) (6, Blink Gym Yoga Class) (7, null)'

const level2Q = [
  {
    prompt:
      'We’ve got our list of suspects narrowed down. Let’s make a new table so we can start recording alibis…',
    plotAnswer: 'create table alibis (id integer primary key, location text);',
    data: {fields: [{name: 'id'}, {name: 'location'}], rows: []},
    hint: 'https://i.imgur.com/rxPQk9m.png'
  },
  {
    prompt: `Excellent. Now it’s time to take down all the information we have and put it in our database. Here is the information we need to insert: ${question2Line1} <br> ${question2Line2} <br> ${question2Line3};`,
    plotAnswer:
      'insert into alibis (id, location) values: (1, Party) (2, Barn Joo Restaurant) (3, Museum of Natural History Exhibit) (4, Greats of Craft Bar) (5, PSY 101, Hunter College) (6, Blink Gym Yoga Class) (7, null);',
    data: {
      fields: [{name: 'id'}, {name: 'location'}],
      rows: [
        {id: 1, location: 'Party'},
        {id: 2, location: 'Barn Joo Restaurant'},
        {id: 3, location: 'Museum of Natural History Exhibit'},
        {id: 4, location: 'Greats of Craft Bar'},
        {id: 5, location: 'PSY 101, Hunter College'},
        {id: 6, location: 'Blink Gym Yoga Class'},
        {id: 7}
      ]
    },
    hint: 'https://i.imgur.com/ZWJz3hB.png'
  },
  {
    prompt:
      'How did that last one get in there? It’s not so helpful, is it? Let’s get rid of it.',
    plotAnswer: 'delete from alibis where location is null;',
    data: {
      fields: [{name: 'id'}, {name: 'location'}],
      rows: [
        {id: 1, location: 'Party'},
        {id: 2, location: 'Barn Joo Restaurant'},
        {id: 3, location: 'Museum of Natural History Exhibit'},
        {id: 4, location: 'Greats of Craft Bar'},
        {id: 5, location: 'PSY 101, Hunter College'},
        {id: 6, location: 'Blink Gym Yoga Class'}
      ]
    },
    hint: 'hint image url'
  },

  {
    prompt:
      'You know what we still need? A place where we can take down the date of all these alibis, in case we come by that information.',
    plotAnswer: 'alter table alibis add column alibi_date date;',
    data: {
      fields: [{name: 'id'}, {name: 'location'}, {name: 'date'}],
      rows: [
        {id: 1, location: 'Party'},
        {id: 2, location: 'Barn Joo Restaurant'},
        {id: 3, location: 'Museum of Natural History Exhibit'},
        {id: 4, location: 'Greats of Craft Bar'},
        {id: 5, location: 'PSY 101, Hunter College'},
        {id: 6, location: 'Blink Gym Yoga Class'}
      ]
    },
    hint: 'hint image url'
  },
  {
    prompt:
      'A witness tells us the party in question was actually a block party. Let’s make sure to take that down.',
    plotAnswer: 'update alibis set location = ‘block party’ where id = 1;',
    data: {
      fields: [{name: 'id'}, {name: 'location'}, {name: 'date'}],
      rows: [
        {id: 1, location: 'Block Party'},
        {id: 2, location: 'Barn Joo Restaurant'},
        {id: 3, location: 'Museum of Natural History Exhibit'},
        {id: 4, location: 'Greats of Craft Bar'},
        {id: 5, location: 'PSY 101, Hunter College'},
        {id: 6, location: 'Blink Gym Yoga Class'}
      ]
    },
    hint: 'hint image url'
  },
  {
    prompt:
      'You need to cover your tracks, so let’s learn how to delete a table completely. Be careful! When I say delete, I really mean delete…',
    plotAnswer: 'drop table alibis;',
    data: {fields: [], rows: []},
    hint: 'hint image url',
    successText:
      'And… it’s gone. Don’t worry - a colleague of yours made a copy of all the alibis. Let’s dig into them and see what we can find.'
  }
]

export default level2Q
