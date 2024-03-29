function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            contactForm.name.value = ""
            contactForm.emailaddress.value = ""
            contactForm.projectsummary.value = ""
        }, function(error) {
            console.log('FAILED...', error);
        });
    return false;
}