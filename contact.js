document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    fetch('https://SCRIPT aa jayegi idhar, procedure likha thaa kahin but I did not get it fully/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});
