const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  const newTutorials = tutorials.map((tutorial) =>
    {
      const wordsArray = tutorial.split(" ")
      let tString = ""
      function capitalize1stLtr(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }

      for (const word of wordsArray) {
        tString += `${capitalize1stLtr(word)} `;
      }
      return tString.slice(0, tString.length-1)
    })
    for (let i = 0; i < newTutorials.length; ++i) {
      tutorials[i] = newTutorials[i]
    }
  return tutorials
}
