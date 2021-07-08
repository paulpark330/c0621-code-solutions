var $contactForm = document.querySelector('#contact-form');
var messageData = {};

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  messageData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('messageData:', messageData);
  $contactForm.reset();
});
