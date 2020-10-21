const level2Q = [
  {
    prompt:
      'We’ve got our list of suspects narrowed down. Let’s make a new table so we can start recording alibis…',
    plotAnswer: 'create table alibis (id integer primary key, location text);',
    hint: 'https://i.imgur.com/rxPQk9m.png'
  },
  {
    prompt:
      'Excellent. Now it’s time to take down all the information we have and put it in our database.',
    plotAnswer:
      'insert into alibis (id, location) values: (1, home) (2, vacation) (3, party) (4, club) (5, null)',
    hint: 'https://i.imgur.com/ZWJz3hB.png'
  },
  {
    prompt:
      'How did that last one get in there? It’s not so helpful, is it? Let’s get rid of it.',
    plotAnswer: 'delete from alibis where location is null',
    hint: 'hint image url'
  },

  {
    prompt:
      'You know what we still need? A place where we can take down the date of all these alibis, in case we come by that information.',
    plotAnswer: 'alter table alibis add column alibi_date date;',
    hint: 'hint image url'
  },
  {
    prompt:
      'A witness tells us the party in question was actually a block party. Let’s make sure to take that down.',
    plotAnswer: 'update alibis set location = ‘block party’ where id = 3;',
    hint: 'hint image url'
  },
  {
    prompt:
      'You need to cover your tracks, so let’s learn how to delete a table completely. Be careful! When I say delete, I really mean delete…',
    plotAnswer: 'drop table alibis;',
    hint: 'hint image url',
    successText:
      'And… it’s gone. Don’t worry - a colleague of yours made a copy of all the alibis. Let’s dig into them and see what we can find.'
  }
]

export default level2Q
