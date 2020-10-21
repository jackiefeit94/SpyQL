const level2Q = [
  {
    prompt:
      'We’ve got our list of suspects narrowed down. Let’s make a new table so we can start recording alibis…',
    plotAnswer: 'create table alibis (id integer primary key, location text);',
    data: {fields: [{name: 'id'}, {name: 'location'}], rows: []},
    hint: 'https://i.imgur.com/rxPQk9m.png'
  },
  {
    prompt:
      'Excellent. Now it’s time to take down all the information we have and put it in our database. Here is the information we need to insert: (id, location) values: (1, Party) (2, Party) (3, Party) (4, Party) (5, Party) (6, Barn Joo Restaurant) (7, Museum of Natural History Exhibit) (8, Greats of Craft Bar) (9, PSY 101, Hunter College) (10, Blink Gym Yoga Class) (11, null)',
    plotAnswer:
      'insert into alibis (id, location) values: (1, Party) (2, Party) (3, Party) (4, Party) (5, Party) (6, Barn Joo Restaurant) (7, Museum of Natural History Exhibit) (8, Greats of Craft Bar) (9, PSY 101, Hunter College) (10, Blink Gym Yoga Class) (11, null);',
    data: {
      fields: [{name: 'id'}, {name: 'location'}],
      rows: [
        {id: 1, location: 'Party'},
        {id: 2, location: 'Party'},
        {id: 3, location: 'Party'},
        {id: 4, location: 'Party'},
        {id: 5, location: 'Party'},
        {id: 6, location: 'Barn Joo Restaurant'},
        {id: 7, location: 'Museum of Natural History Exhibit'},
        {id: 8, location: 'Greats of Craft Bar'},
        {id: 9, location: 'PSY 101, Hunter College'},
        {id: 10, location: 'Blink Gym Yoga Class'},
        {id: 11}
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
        {id: 2, location: 'Party'},
        {id: 3, location: 'Party'},
        {id: 4, location: 'Party'},
        {id: 5, location: 'Party'},
        {id: 6, location: 'Barn Joo Restaurant'},
        {id: 7, location: 'Museum of Natural History Exhibit'},
        {id: 8, location: 'Greats of Craft Bar'},
        {id: 9, location: 'PSY 101, Hunter College'},
        {id: 10, location: 'Blink Gym Yoga Class'}
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
        {id: 2, location: 'Party'},
        {id: 3, location: 'Party'},
        {id: 4, location: 'Party'},
        {id: 5, location: 'Party'},
        {id: 6, location: 'Barn Joo Restaurant'},
        {id: 7, location: 'Museum of Natural History Exhibit'},
        {id: 8, location: 'Greats of Craft Bar'},
        {id: 9, location: 'PSY 101, Hunter College'},
        {id: 10, location: 'Blink Gym Yoga Class'}
      ]
    },
    hint: 'hint image url'
  },
  {
    prompt:
      'A witness tells us the party in question was actually a block party. Let’s make sure to take that down.',
    plotAnswer: 'update alibis set location = ‘block party’ where id = 3;',
    data: {
      fields: [{name: 'id'}, {name: 'location'}, {name: 'date'}],
      rows: [
        {id: 1, location: 'Block Party'},
        {id: 2, location: 'Block Party'},
        {id: 3, location: 'Block Party'},
        {id: 4, location: 'Block Party'},
        {id: 5, location: 'Block Party'},
        {id: 6, location: 'Barn Joo Restaurant'},
        {id: 7, location: 'Museum of Natural History Exhibit'},
        {id: 8, location: 'Greats of Craft Bar'},
        {id: 9, location: 'PSY 101, Hunter College'},
        {id: 10, location: 'Blink Gym Yoga Class'}
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
