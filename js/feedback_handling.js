// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); 
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxhgTqXMx3swz3wNVfeoe49Wrvs2yJ0eEoWxX8ue6sGti9x_cDdR6v1ioF04lQPoXq9FQ/exec'; 
    const form = document.forms['FeedbackForm'];
  
    
    const formData = new FormData(form);
  
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { 
            throw new Error(`Error submitting form: ${response.status} - ${text}`);
          });
        }
        return response.text(); 
      })
      .then(data => {
       
        alert("We appreciate you taking the time to share your feedback. It's valuable to us!");
  
    
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        const errorMessage = error.message.includes('error:') ? error.message.split(':')[1].trim() : error.message;
        alert(`Error: ${errorMessage}`);
      });
  }
  
  // Get the submit button element
  const submitButton = document.getElementById('FeedbackFormSubmit');
  
  // Add event listener to the submit button
  submitButton.addEventListener('click', handleFormSubmit);
  