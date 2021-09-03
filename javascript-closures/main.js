const graduate = credential => {
  return fullName => `${fullName}, ${credential}`;
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(`medicalSchool('Paul Park'): ${medicalSchool('Paul Park')}`);
console.log(`lawSchool('Paul Park'): ${lawSchool('Paul Park')}`);
