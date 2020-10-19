const level1Q = [
  {
    prompt:
      'We’ve come up with a list of suspects, so your first task will be to find that list and examine it.',
    plotQuestion: "Let's see... How many rows does our suspect table have?",
    plotAnswer: '50',
    hint: 'https://i.imgur.com/rxPQk9m.png',
    successText:
      'That’s right. Hm, that’s a lot of suspects. Let’s see if we can narrow it down at all. Maybe this map has some information…',
    clue:
      'https://www.citymetric.com/sites/default/files/images/Manhattan%20London%202.png'
  },
  {
    prompt:
      'Interesting. Let’s see if we can get a list of all the suspects whose location is Manhattan.',
    plotQuestion: "What's the age of our youngest suspect now?",
    plotAnswer: '19',
    hint: 'https://i.imgur.com/ZWJz3hB.png',
    successText: 'Great work, agent. What’s this?',
    clue: 'https://i.ibb.co/ry8rVfd/Screen-Shot-2020-10-16-at-3-33-35-PM.png'
  },
  {
    prompt:
      'So we know our suspect must’ve logged in one of these times. Let’s update our search to look for everyone whose activity was between the shortest and longest durations here…',
    plotQuestion:
      'Neat-o. So how many of those suspects are NOT from Manhattan?',
    plotAnswer: '5',
    hint: 'hint image url',
    successText:
      'Excellent! I’ve just received word that one of our witnesses has some information to give you.',
    clue:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Furbandojo.com%2Fhome%2Fdefault-image%2F&psig=AOvVaw2wleds1gGSpnTnq7Jnvwmo&ust=1602966062373000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDkmIn4uewCFQAAAAAdAAAAABAD'
  },

  {
    prompt:
      'I met the hacker! I swear it was him. He was at a tech conference, just boasting about how he was going to get away with stealing people’s bank data. He didn’t say his last name, but his first name was Steven. Or Stephen? Maybe Stephan? It definitely starts with ‘Ste’…',
    plotQuestion: 'Now how many have we narrowed it down to?',
    plotAnswer: '5',
    hint: 'hint image url',
    clue: '',
    successText: "So what's left?"
  },
  {
    prompt:
      "Let's put it all together and figure out how many suspects fit into all of those criteria: location, length of online activity, and name.",
    plotQuestion:
      "Very close now. What's the last name of the first guy on the list?",
    plotAnswer: 'Brottslig',
    hint: 'hint image url',
    successText:
      'Good work, Agent. We’re dispatching special operatives now to track down those two and learn more about them…',
    clue:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Furbandojo.com%2Fhome%2Fdefault-image%2F&psig=AOvVaw2wleds1gGSpnTnq7Jnvwmo&ust=1602966062373000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDkmIn4uewCFQAAAAAdAAAAABAD'
  }
]

export default level1Q
