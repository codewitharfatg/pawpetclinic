function showMessage() {
        // Custom notification fallback instead of alert
        console.log("Welcome to Paw Pet Clinic!");
    }

    document.addEventListener("DOMContentLoaded", function() {
        let form = document.getElementById("appointmentForm");
        let dateInput = document.getElementById("date");

        // Set minimum date to today
        let today = new Date();
        let localDate = today.getFullYear() + "-" +
            String(today.getMonth() + 1).padStart(2, "0") + "-" +
            String(today.getDate()).padStart(2, "0");

        if (dateInput) {
            dateInput.min = localDate;
        }

        if (form) {
            form.addEventListener("submit", function(event) {
                event.preventDefault();

                let owner = document.getElementById("owner").value.trim();
                let pet = document.getElementById("pet").value.trim();
                let phone = document.getElementById("phone").value.trim();
                let service = document.getElementById("service").value;
                let date = dateInput.value;

                if (owner === "" || pet === "" || phone === "" || service === "" || date === "") {
                    showCustomMessage("Please fill all fields!");
                } else {
                    showCustomMessage("Appointment Booked Successfully!");
                    form.reset();
                    dateInput.min = localDate;
                }
            });
        }

        let loginForm = document.getElementById("loginForm");
        if (loginForm) {
            loginForm.addEventListener("submit", function(e) {
                e.preventDefault();

                let username = document.getElementById("username").value;
                let password = document.getElementById("password").value;

                if (username && password) {
                    document.getElementById("loginMessage").innerText =
                        "Login Successful! Welcome to Paw Pet Clinic, " + username + ".";

                    document.getElementById("loginLink").style.display = "none";
                    document.getElementById("logoutLink").style.display = "inline";

                    document.getElementById("loginForm").reset();
                }
            });
        }
    });

    function logoutUser() {
        let loginMsg = document.getElementById("loginMessage");
        if (loginMsg) {
            loginMsg.innerText = "You have logged out.";
        }

        document.getElementById("loginLink").style.display = "inline";
        document.getElementById("logoutLink").style.display = "none";
    }

    // Modal message display alternative to avoid window alert blocking
    function showCustomMessage(msg) {
        let existingBox = document.getElementById("customMsgBox");
        if (existingBox) existingBox.remove();

        let msgBox = document.createElement("div");
        msgBox.id = "customMsgBox";
        msgBox.style.position = "fixed";
        msgBox.style.top = "20px";
        msgBox.style.right = "20px";
        msgBox.style.backgroundColor = "#28765f";
        msgBox.style.color = "#ffffff";
        msgBox.style.padding = "15px 25px";
        msgBox.style.borderRadius = "8px";
        msgBox.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
        msgBox.style.zIndex = "9999";
        msgBox.style.fontWeight = "bold";
        msgBox.innerText = msg;

        document.body.appendChild(msgBox);

        setTimeout(function() {
            if (msgBox) msgBox.remove();
        }, 3000);
    }