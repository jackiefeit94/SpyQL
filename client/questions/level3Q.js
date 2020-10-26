const level3Q = [
  {
    //show all suspects with alibis
    prompt: `The first thing we need to know is which alibis belong to which suspect.<br><br>

    Hurry, there's not much time left!`,
    plotQuestion: 'How many suspects were at the yoga class?',
    //depends on random seed...
    plotAnswer: '8',
    hint: `SELECT * FROM table1_name JOIN table2_name ON table2.table1Id = table1.id;<br><br>

    JOIN (also can be written as INNER JOIN) combines the two tables ON the specified condition. In this case, table1 is alibis and table2 is suspects.<br><br>

    So we're looking for alibiId, in the suspects table, to match the id of the alibis table. Remember that "id" in alibis is the primary key.<br><br>

    Bonus: Instead of SELECT *, SELECT COUNT(*) returns the count of all items in your query. Add WHERE place = 'Blink Fitness Yoga Class' to the end of your query to filter
    by everyone who was at that class.`,
    successText: "You've got it. Oh, that's odd..."
  },
  {
    //pull up the block party guest list
    prompt:
      'Our final two suspects both went to that block party. Maybe we should learn more about it.',
    plotQuestion: 'Which guest has an id of 3?',
    plotAnswer: 'Carrie Bradshaw',
    //add quotes around suspectId
    hint: `SELECT table1.column1_name, table1.column2_name FROM table1 LEFT JOIN table2 ON table1.table2Id = table2.id;<br><br>

    Table 1 is guests and table 2 is suspects. Some of our guests may be suspects, but not all of our suspects are guests!<br><br>

    The columns we want to select are guests.id, guests.first_name, guests.last_name<br><br>

    A LEFT JOIN, unlike an inner join, will return all information from table 1, even if it's not associated with table 2.`,
    successText: "Well done, Agent. Let's take a closer look at that list..."
  },
  {
    //find who invited whom
    prompt:
      'It looks like most guests brought a date. Someone can confirm their alibi, perhaps? We should see if there is a way to display all guests and their dates.',
    plotQuestion: "Who was David Rose's date?",
    plotAnswer: 'Tabby Gonzalez',
    hint: `SELECT columns FROM table1 INNER JOIN table1 AS new_name ON table1.foreign_key = newName.id;<br><br>

    This one's tricky. A table can be joined to itself! If you SELECT * FROM guests, you'll see that it includes a dateId column.<br><br>

    This is a foreign key that refers back to the primary key of another person in the guests table - that person's date.<br><br>

    So, we can SELECT guests.first_name, guests.last_name, dates.first_name AS date_first_name, dates.last_name AS date_last_name<br><br>

    AS renames a column in your results table.<br><br>

    When we INNER JOIN, let's join guests AS dates ON guests.dateId = dates.id. This links the foreign key, dateId, with a new primary key: dates.id.<br><br>`,
    successText: 'So close now, Agent!'
  },

  {
    //find criminal
    prompt:
      "Is there anyone who did not go with a date? Maybe if there's someone whose date column is NULL, they'd be worth a closer look!",
    plotQuestion: "I think we've got him. Who's the criminal?",
    plotAnswer: 'Stefan Verbrecher',
    hint: `SELECT columns FROM guests LEFT JOIN table1 AS new_name ON table1.foreign_key = new_name.id WHERE table1.foreign_key IS NULL;<br><br>

    SELECT guests.first_name, guests.last_name<br><br>

    LEFT JOIN guests AS dates ON guests.dateId = dates.id<br><br>

    Lastly, we're looking for WHERE guests.dateId is null. This person doesn't have a date that can vouch for them at the party!`,
    successText: 'Omg!'
  }
]

export default level3Q
