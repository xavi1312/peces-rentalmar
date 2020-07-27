const form$ = document.getElementById('form-data');
const FILDS = [
  'name',
  'lastname',
  'email',
  'phone',
  'cPostal',
  'population',
  'country',
];

form$.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();
  let errorsCounter = 0;
  let data = {};
  FILDS.forEach(fieldName => {
    const field = form$[fieldName];
    data[fieldName] = field.value;

    const parent = field.parentElement;
    if (isEmty(field.value)) {
      errorsCounter++;
      parent.classList.remove('valid');
      parent.classList.add('invalid');
    } else {
      parent.classList.remove('invalid');
      parent.classList.add('valid');
    }
  });
  if (errorsCounter === 0) {
    sendForm(data);
  }
}

function isEmty(inputData) {
  if (inputData === '' || inputData === undefined) return true;

  return false;
}

async function sendForm(data) {
  // Fetching data
}
