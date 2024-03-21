// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); 
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbykWrlip38B4Q1oHuQJ7bESjlD5U-ujxFovUH32C9_q5xsYZ4T6fJKgyNZylTD-bu8LFQ/exec'; 
    const form = document.forms['DetailsForm'];
  
    
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
       
        alert("Awesome! Thanks for submitting your form. We've got it, and we'll be reaching out to you shortly. Stay tuned!");
  
    
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        const errorMessage = error.message.includes('error:') ? error.message.split(':')[1].trim() : error.message;
        alert(`Error: ${errorMessage}`);
      });
  }
  
  // Get the submit button element
  const submitButton = document.getElementById('submit');
  
  // Add event listener to the submit button
  submitButton.addEventListener('click', handleFormSubmit);
  