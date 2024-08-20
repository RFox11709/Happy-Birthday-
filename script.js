document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS
    emailjs.init("JURXlnQr4uc8icHVa"); // Replace with your EmailJS user ID

    const button = document.getElementById('continue-btn');
    const title = document.getElementById('title');
    const nextSection = document.getElementById('next-section');
    const sendMessageButton = document.getElementById('send-message');
    const userMessageInput = document.getElementById('user-message');

    button.addEventListener('click', function() {
        title.style.transition = "opacity 1s";
        button.style.transition = "opacity 1s";
        title.style.opacity = 0;
        button.style.opacity = 0;

        setTimeout(function() {
            title.style.display = 'none';
            button.style.display = 'none';
            nextSection.classList.remove('hidden');
        }, 1000);
    });

    sendMessageButton.addEventListener('click', function() {
        const message = userMessageInput.value;

        if (message.trim() === "") {
            alert("Please type a message before sending.");
            return;
        }

        const templateParams = {
            to_email: "herocraft11709@gmail.com", // Replace with your Gmail address
            message: message
        };

        emailjs.send("service_gmail", "template_wiger", templateParams)
            .then(function(response) {
                alert("Message sent successfully!");
                userMessageInput.value = ""; // Clear input field
            }, function(error) {
                alert("Failed to send message. Please try again.");
            });
    });
});
