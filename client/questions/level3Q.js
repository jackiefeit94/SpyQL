const level3Q = [
  {
    //the point of this is to show all suspects with alibis
    prompt: `The first thing we need to know is which alibis belong to which suspect.<br><br>

    Hurry, there's not much time left!`,
    plotQuestion: 'How many suspects were at the yoga class?',
    plotAnswer: '10',
    //add quotes around alibiId
    hint: `select * from suspects inner join alibis on suspects.alibiId = alibis.id;`,
    successText: "You've got it. Oh, that's odd..."
  },
  {
    //the point of this is to pull up the block party guest list
    prompt:
      'Our final two suspects both went to that block party. Maybe we should learn more about it.',
    plotQuestion: 'Who was the first guest on the guest list?',
    plotAnswer: 'Carrie Bradshaw',
    //add quotes around suspectId
    hint: `select guests.first_name, guests.last_name from guests left join suspects on guests.suspectId = suspects.id;`,
    successText:
      "Well done, Agent. Let's take a closer look at that last column..."
  },
  {
    //point is to find who invited whom
    prompt:
      '...It looks like most guests brought a date. Someone to confirm their alibi, perhaps? We should see if there is a way to display all guests and their date.',
    plotQuestion: "Who was David Rose's date?",
    plotAnswer: 'Tabby Gonzalez',
    //add quotes around dateId
    hint: `select guests.first_name, guests.last_name, dates.first_name as date_first_name, dates.last_name as date_last_name from guests inner join guests as dates on guests.dateId = dates.id;`,
    successText: 'So close now, Agent!'
  },

  {
    //point is to find crim
    prompt:
      "Is there anyone who did not go with a date? Maybe if there's someone whose date column is NULL, they'd be worth a closer look!",
    plotQuestion: "I think we've got him. Who's the criminal?",
    plotAnswer: 'Stefan Verbrecher',
    //add quotes around dateId
    hint: `select guests.first_name, guests.last_name from guests left join guests as dates on guests."dateId" = dates.id where guests.dateId is null;`,
    successText: '!!'
  }
]

export default level3Q
