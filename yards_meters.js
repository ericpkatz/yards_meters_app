function convertToMeters(yards){
  const meters = yards * 0.9144;
  return meters;
}

function createMessage(yards, meters){
  return `You entered ${yards} yards. That is equal to ${meters} meters.`;
}

const inputYards = window.prompt('how many yards do you want to convert');

const convertedMeters = convertToMeters(inputYards);

console.log(createMessage(inputYards, convertedMeters));

