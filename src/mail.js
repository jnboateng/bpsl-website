const nodemailer = require("nodemailer");

// Configure your email service
const transporter = nodemailer.createTransport({
  service: "Gmail", // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// New function for contact form submissions
async function sendContactForm(formData, formType) {
  try {
    // Determine subject based on form type
    let subject;
    switch (formType) {
      case "enquiry":
        subject = "New Customer Enquiry";
        break;
      case "loan":
        subject = "New Loan Request";
        break;
      case "account":
        subject = "New Account Opening Request";
        break;
      default:
        subject = "New Contact Form Submission";
    }

    // Format the email body
    const formattedBody = `
      <h2>${subject}</h2>
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Address:</strong> ${formData.address}</p>
      <p><strong>Date of Birth:</strong> ${formData.dob}</p>
      <p><strong>Nearest Branch:</strong> ${formData.location}</p>
      
      ${
        formType === "enquiry"
          ? `
        <h3>Enquiry Details:</h3>
        <p>${formData.description}</p>
      `
          : ""
      }
      
      ${
        formType === "account"
          ? `
        <h3>Account Details:</h3>
        <p><strong>Account Type:</strong> ${formData.accountType}</p>
      `
          : ""
      }
      
      ${
        formType === "loan"
          ? `
        <h3>Loan Details:</h3>
        <p><strong>Loan Purpose:</strong> ${formData.loanPurpose}</p>
      `
          : ""
      }
      
      <p><em>This message was sent from the Best Point contact form.</em></p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "joekay0976@gmail.com", // Your recipient email
      subject: subject,
      html: formattedBody,
    });

    return { success: true, message: "Form submitted successfully!" };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return {
      success: false,
      message: "Failed to submit form. Please try again.",
    };
  }
}

module.exports = {
  sendContactForm,
};
