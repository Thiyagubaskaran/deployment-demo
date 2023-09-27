// components/Contact.js

import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="4"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

// document.addEventListener("DOMContentLoaded", function () {
//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const messageInput = document.getElementById("message");

//   const submitForm = () => {
//     const name = nameInput.value;
//     const email = emailInput.value;
//     const message = messageInput.value;
//     console.log("Please", name, email, message);

//     // Rest of the code...
//   };
//   // Attach event listener to form submit button or form element
// });

// const submitForm = () => {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   const formData = {
//     name,
//     email,
//     message,
//   };
//   console.log(formData);
//   fetch("/api/contact", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.message); // Success message from the server
//       // Handle any further actions or display success message to the user
//     })
//     .catch((error) => {
//       console.error("Error submitting form:", error);
//       // Handle error and display error message to the user
//     });
// };
// const submitForm = () => {
//   const formData = {
//     name,
//     email,
//     message,
//   };
// };
export default Contact;
