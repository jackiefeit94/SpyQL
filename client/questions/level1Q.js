const level1Q = [
  {
    prompt:
      'We’ve come up with a list of suspects, so your first task will be to find that list and examine it.',
    plotQuestion: "Let's see... How many rows does our suspect table have?",
    plotAnswer: '50',
    hint: `
    SELECT * FROM table-name; <br>

    Shows all information in that table. Let’s break that down:<br><br>

	  SELECT: chooses the columns to display <br>
	  * : All columns <br>
	FROM: the source of the table <br><br>
  The table name is suspects. <br>
  Don’t forget the semicolon at the end - it’s very important!
`,
    successText:
      'That’s right. Hm, that’s a lot of suspects. Let’s see if we can narrow it down at all. Maybe this map has some information. Click on it!',
    clue:
      'https://imgs.6sqft.com/wp-content/uploads/2017/02/03102701/nyc-day-versus-night.gif'
  },
  {
    prompt:
      'Interesting. Let’s see if we can get a list of all the suspects whose location is Manhattan.',
    plotQuestion: "What's the age of our youngest suspect now?",
    plotAnswer: '19',
    hint: `
    SELECT * FROM table-name WHERE column-name = ‘target’;<br><br>

	   The column name is ‘location’.<br><br>

	   WHERE: a keyword that lets you filter by a certain value. In this case, try setting the target equal to ‘Manhattan’<br><br>

     Bonus: add ORDER BY column_name at the end of your query. This sorts by the information in that column.
`,
    successText: 'Great work, agent. What’s this? Click on it!',
    clue: 'https://i.ibb.co/ry8rVfd/Screen-Shot-2020-10-16-at-3-33-35-PM.png'
  },
  {
    prompt:
      'We know our suspect must’ve logged in one of these times. Let’s update our search to look for everyone whose logged in activity was between 4.1 and 5.6 hours...',
    plotQuestion:
      'Neat-o. So how many of those suspects are NOT from Manhattan?',
    plotAnswer: '3',
    hint: `SELECT * FROM table-name WHERE column-name BETWEEN shortest AND longest;<br><br>

The column name is ‘logged_in_duration’<br><br>

BETWEEN/AND: the lowest and highest bounds of what you’re searching for (4.1 and 5.6).<br><br>

Bonus: add AND column_name != 'target' at the end of your query to filter by everything that does not match target.
`,
    successText:
      'Excellent! I’ve just received word that one of our witnesses has some information to give you. Click to hear what he has to say...',
    clue: 'https://i.ibb.co/tZB4LX9/unnamed.png'
  },
  {
    prompt:
      'I met the hacker! I swear it was him. He was at a tech conference, just boasting about how he was going to get away with stealing people’s bank data. He didn’t say his last name, but his first name was Steven. Or Stephen? Maybe Stephan? It definitely starts with ‘Ste’…',
    plotQuestion: 'Now how many have we narrowed it down to?',
    plotAnswer: '5',
    hint: `
    SELECT * FROM table-name WHERE column-name LIKE ‘A%’; <br><br>

Column name is ‘first_name’<br><br>

LIKE: An operator that lets you search by values similar to your input<br><br>

%: a wildcard operator. A% is everything that starts with A, whereas %A is everything that ends with A.
`,
    clue:
      'https://i.pinimg.com/originals/90/eb/33/90eb3356db7c9b3e826c6f6c26bd6e6c.png',
    successText:
      "So what's left? Click on the clue and let's put it all together."
  },
  {
    prompt:
      'We need to figure out how many suspects fit into all of those criteria: location, length of online activity, and name.',
    plotQuestion:
      "Very close now. What's the last name of the first guy on the list?",
    plotAnswer: 'Brottslig',
    hint: `SELECT * FROM table-name WHERE … AND … AND … <br><br>

AND: lets you combine different operations and only returns values that meet all of the input criteria.<br><br>

In this case: Manhattan, duration between 4.1 and 5.6 hours, and name starting with ‘Ste’.
`,
    successText:
      'Good work, Agent. We’re dispatching special operatives now to track down those two and learn more about them…',
    clue:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Furbandojo.com%2Fhome%2Fdefault-image%2F&psig=AOvVaw2wleds1gGSpnTnq7Jnvwmo&ust=1602966062373000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDkmIn4uewCFQAAAAAdAAAAABAD'
  }
]

export default level1Q
