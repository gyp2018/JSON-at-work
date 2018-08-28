var speaker = {
  firstName: 'Larson',
  lastName: 'Richard',
  email: 'larsonricard@ecratic.com',
  about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
  company: 'Ecratic',
  tags: ['json', 'rest', 'api', 'oauth'],
  registered: true
};

function serializeSpeaker(key, value) {
  return (typeof value === 'string' || Array.isArray(value)) ? undefined : value;
}

console.log('Speaker (pretty print):\n' + JSON.stringify(speaker, null, 2) + '\n');

console.log('Speaker without String and Arrays:\n' + JSON.stringify(speaker, serializeSpeaker, 2));
