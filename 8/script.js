const openForm = document.getElementById('open-form');
const formPopup = document.getElementById('feedback-form');
const form = document.getElementById('feedback-form-data');
const feedbackMessage = document.getElementById('feedback-message');
const close = document.getElementById('close');

// Сохранение/восстановление данных в LocalStorage
function saveFormData() {
  localStorage.setItem('formData', JSON.stringify({
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    company: document.getElementById('company').value,
    message: document.getElementById('message').value,
  }));
}

function restoreFormData() {
  const formData = localStorage.getItem('formData');
  if (formData) {
    const data = JSON.parse(formData);
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('phone').value = data.phone;
    document.getElementById('company').value = data.company;
    document.getElementById('message').value = data.message;
  }
}

// Открытие формы
openForm.addEventListener('click', () => {
  formPopup.style.display = 'block';
  history.pushState(null, null, '#feedback-form');
  restoreFormData();
});

close.addEventListener('click', () => {
    formPopup.style.display = 'none';
    history.replaceState(null, null, ' '); 
    localStorage.removeItem('formData'); 
})