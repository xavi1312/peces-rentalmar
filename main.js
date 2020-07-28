const form$ = document.getElementById('form-data');
form$.addEventListener('submit', onSubmiteFrom);

function onSubmiteFrom(event) {
  event.preventDefault();

  const form = event.target;
  const inputs = form.getElementsByTagName('input');
  const [hasError, data] = validateForm(inputs);

  if (!hasError) {
    sendForm(data);
  }
}

function validateForm(formFiels) {
  let hasError = false;
  let data = {};

  for (let i = 0; i < formFiels.length; i++) {
    const field = formFiels[i];
    // Set name and value from field to vaiable
    data[field.name] = field.value;

    hasError = isFieldValid(field);

    //  Manage form classes
    const parent = field.parentElement;
    changeClassErrors(hasError, parent);
  }

  return [hasError, data];
}
function isFieldValid(field) {
  let hasError = false;

  if (isEmty(field.value)) {
    hasError = true;
  }

  return hasError;
}

function isEmty(inputData) {
  if (inputData === '' || inputData === undefined) return true;

  return false;
}
function changeClassErrors(hasError, element) {
  if (hasError) {
    element.classList.remove('valid');
    element.classList.add('invalid');
    return;
  }

  element.classList.remove('invalid');
  element.classList.add('valid');
}

function sendForm(data) {
  // Fetching data
  console.table(data);
}
