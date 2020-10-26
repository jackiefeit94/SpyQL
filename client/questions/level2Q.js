const level2Q = [
  {
    prompt:
      'We’ve got our list of suspects narrowed down. Let’s make a new table so we can start recording alibis…',
    plotAnswer: 'create table alibis (id integer primary key, place text);',
    data: {fields: [{name: 'id'}, {name: 'place'}], rows: []},
    hint: `CREATE table table_name (column_name column_type, column_name column_type);<br><br>

    Let's call the table alibis.<br><br>

    Here, the information we need after CREATE table is (id integer primary key, place text)`
  },
  {
    prompt: `Excellent. Now it’s time to take down all the information we have and put it in our database. Here is the information we need to insert: (id, place) values: <br>
    (1, Party) <br>
    (2, Barn Joo Restaurant) <br>
    (3, Museum of Natural History Exhibit) <br>
    (4, Greats of Craft Bar) <br>
    (5, PSY 101, Hunter College) <br>
    (6, Blink Gym Yoga Class) <br>
    (7, null);`,
    plotAnswer:
      'insert into alibis (id, place) values: (1, Party) (2, Barn Joo Restaurant) (3, Museum of Natural History Exhibit) (4, Greats of Craft Bar) (5, PSY 101, Hunter College) (6, Blink Gym Yoga Class) (7, null);',
    data: {
      fields: [{name: 'id'}, {name: 'place'}],
      rows: [
        {id: 1, place: 'Party'},
        {id: 2, place: 'Barn Joo Restaurant'},
        {id: 3, place: 'Museum of Natural History Exhibit'},
        {id: 4, place: 'Greats of Craft Bar'},
        {id: 5, place: 'PSY 101, Hunter College'},
        {id: 6, place: 'Blink Gym Yoga Class'},
        {id: 7}
      ]
    },
    hint: `INSERT INTO table values: (column1_value, column2_value);<br><br>

    The table name is alibis<br><br>

    Here is the information we need to insert after VALUES: <br>
    (1, Party)<br>
    (2, Barn Joo Restaurant)<br>
    (3, Museum of Natural History Exhibit)<br>
    (4, Greats of Craft Bar)<br>
    (5, PSY 101, Hunter College)<br>
    (6, Blink Gym Yoga Class)<br>
    (7, null);`
  },
  {
    prompt:
      'How did that last one get in there? It’s not so helpful, is it? Let’s get rid of it.',
    plotAnswer: 'delete from alibis where place is null;',
    data: {
      fields: [{name: 'id'}, {name: 'place'}],
      rows: [
        {id: 1, place: 'Party'},
        {id: 2, place: 'Barn Joo Restaurant'},
        {id: 3, place: 'Museum of Natural History Exhibit'},
        {id: 4, place: 'Greats of Craft Bar'},
        {id: 5, place: 'PSY 101, Hunter College'},
        {id: 6, place: 'Blink Gym Yoga Class'}
      ]
    },
    hint: `DELETE FROM table_name WHERE column_name IS NULL;<br><br>

    The table name is alibis and the column name is place.`
  },

  {
    prompt:
      'You know what we still need? A place where we can take down the date of all these alibis, in case we come by that information.',
    plotAnswer: 'alter table alibis add column alibi_date date;',
    data: {
      fields: [{name: 'id'}, {name: 'place'}, {name: 'alibi_date'}],
      rows: [
        {id: 1, place: 'Party'},
        {id: 2, place: 'Barn Joo Restaurant'},
        {id: 3, place: 'Museum of Natural History Exhibit'},
        {id: 4, place: 'Greats of Craft Bar'},
        {id: 5, place: 'PSY 101, Hunter College'},
        {id: 6, place: 'Blink Gym Yoga Class'}
      ]
    },
    hint: `ALTER TABLE table_name ADD COLUMN column_name column_type;<br><br>

    The table name is alibis and let's call the new column alibi_date.<br><br>

    The column_type on alibi_date will be DATE.`
  },
  {
    prompt:
      'A witness tells us the party in question was actually a block party. Let’s make sure to take that down.',
    plotAnswer: `update alibis set place = 'Block Party' where place = 'Party';`,
    data: {
      fields: [{name: 'id'}, {name: 'place'}, {name: 'alibi_date'}],
      rows: [
        {id: 1, place: 'Block Party'},
        {id: 2, place: 'Barn Joo Restaurant'},
        {id: 3, place: 'Museum of Natural History Exhibit'},
        {id: 4, place: 'Greats of Craft Bar'},
        {id: 5, place: 'PSY 101, Hunter College'},
        {id: 6, place: 'Blink Gym Yoga Class'}
      ]
    },
    hint: `UPDATE table_name SET column_name = 'new name' WHERE condition;<br><br>

    The table name is alibis and the column name is place. Let's make the new name 'Block Party'<br><br>

    The condition is WHERE place = 'Party'.`
  },
  {
    prompt:
      'You need to cover your tracks, so let’s learn how to delete a table completely. Be careful! When I say delete, I really mean delete…',
    plotAnswer: 'drop table alibis;',
    data: {fields: [], rows: []},
    hint: `DROP TABLE table_name;<br><br>

    The table name is alibis. Yep, it's as simple as that!`,
    successText:
      'And… it’s gone. Don’t worry - a colleague of yours made a copy of all the alibis. Let’s dig into them and see what we can find.'
  }
]

export default level2Q
