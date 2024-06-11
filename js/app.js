// Button elements
const homeBtn_element = document.querySelector('.homeBtn');
const rsvpBtn_element = document.querySelector('.rsvpBtn');
const submitEvent_element = document.querySelector('#submitEvent');

// Wrapper elements
const homeWrapper_element = document.querySelector('.wrapper');
const detailsWrapper_element = document.querySelector('.detailsWrapper');
const formWrapper_element = document.querySelector('.formWrapper');

// Events
homeBtn_element.addEventListener('click', function () {
  if (homeWrapper_element.classList.contains('active')) {
    homeWrapper_element.classList.replace('active', 'deactive');
    detailsWrapper_element.classList.replace('deactive', 'active');
    // document.body.classList.remove('bodyStyle');
  }
});

rsvpBtn_element.addEventListener('click', function () {
  if (
    detailsWrapper_element.classList.contains('active') ||
    homeBtn_element.classList.contains('active')
  ) {
    detailsWrapper_element.classList.replace('active', 'deactive');
    homeWrapper_element.classList.replace('active', 'deactive');
    formWrapper_element.classList.replace('deactive', 'active');
  }
});
