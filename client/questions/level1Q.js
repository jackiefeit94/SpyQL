const level1Q = [
  {
    prompt:
      'We’ve come up with a list of suspects, so your first task will be to find that list and examine it.',
    plotQuestion: 'Great. How many rows does our suspect table have?',
    plotAnswer: '250',
    hint: 'hint img url',
    successText:
      'That’s right. Hm, that’s a lot of suspects. Let’s see if we can narrow it down at all. Maybe this map has some information…'
  },
  {
    prompt:
      'Interesting. Let’s see if we can get a list of all the suspects whose location is Manhattan.',
    plotQuestion: 'Plot question 2',
    plotAnswer: 'Answer 2',
    hint: 'hint image url',
    successText: 'Great work, agent. What’s this?'
  },
  {
    prompt:
      'So we know our suspect must’ve logged in one of these times. Let’s update our search to look for everyone whose activity was between the shortest and longest durations here…',
    plotQuestion: 'Plot question 3',
    plotAnswer: 'Answer 3',
    hint: 'hint image url',
    successText:
      'Excellent! I’ve just received word that one of our witnesses has some information to give you.'
  },
  {
    prompt:
      'I met the hacker! I swear it was him. He was at a tech conference, just boasting about how he was going to get away with stealing people’s bank data. He didn’t say his last name, but his first name was Steven. Or Stephen? Maybe Stephan? It definitely starts with ‘Ste’…',
    plotQuestion: 'Plot question 4',
    plotAnswer: 'Answer 4',
    hint: 'hint image url',
    successText: 'yay'
  },
  {
    prompt:
      "Let's put it all together and figure out how many suspects fit into all of those criteria: location, length of online activity, and name.",
    plotQuestion: 'Plot question 5',
    plotAnswer: 'Answer 5',
    hint: 'hint image url',
    successText:
      'Good work, Agent. We’re dispatching special operatives now to track down those two and learn more about them…'
  }
]

export default level1Q
