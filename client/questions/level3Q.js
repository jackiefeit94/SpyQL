const level3Q = [
  {
    //the point of this is to show all suspects with alibis
    prompt: 'prompt1',
    plotQuestion: 'plotquestion1',
    plotAnswer: 'plotanswer1',
    //add quotes around alibiId
    hint: `select * from suspects inner join alibis on suspects.alibiId = alibis.id;`,
    successText: 'successtext1'
  },
  {
    //the point of this is to pull up the block party guest list
    prompt: 'prompt2',
    plotQuestion: 'plotquestion2',
    plotAnswer: 'plotanswer2',
    //add quotes around suspectId
    hint: `select guests.first_name, guests.last_name from guests left join suspects on guests.suspectId = suspects.id;`,
    successText: 'successtext2'
  },
  {
    //point is to find who invited whom
    prompt: 'prompt3',
    plotQuestion: 'plotquestion3',
    plotAnswer: 'plotanswer3',
    //add quotes around dateId
    hint: `select guests.first_name, guests.last_name, dates.first_name as date_first_name, dates.last_name as date_last_name from guests inner join guests as dates on guests.dateId = dates.id;`,
    successText: 'successtext3'
  },

  {
    //point is to find crim
    prompt: 'prompt4',
    plotQuestion: 'plotquestion4',
    plotAnswer: 'plotanswer4',
    //add quotes around dateId
    hint: `select guests.first_name, guests.last_name from guests left join guests as dates on guests."dateId" = dates.id where guests.dateId is null;`,
    successText: 'successtext4'
  }
]

export default level3Q
