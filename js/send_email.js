(function() {
emailjs.init("user_8gJqvQsN5pKwEZCZpGg3j");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_blt3n1h', 'template_ertv74l', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('inviata');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
