const formData = {
    email: '',
    message: '',
  };
  
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name = "email"]');
  
  const messageInput = form.querySelector('textarea[name = "message"]');
  
  const savetoLocalStorage = () => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  };
  
  const saveForm = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      emailInput.value = email;
      messageInput.value = message;
      formData.email = email;
      formData.message = message;
    }
  };
  document.addEventListener('DOMContentLoaded', saveForm);
  
  form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    savetoLocalStorage();
  });
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!emailInput.value.trim() || !messageInput.value.trim()) {
      alert('Fill please all fields');
      return;
    }
    console.log('Form data:', formData);
    localStorage.removeItem('feedback-form-state');
  
    form.reset();
  });