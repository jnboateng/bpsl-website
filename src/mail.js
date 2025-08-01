const nodemailer = require("nodemailer");

// Configure your email service
const transporter = nodemailer.createTransporter({
  service: "Gmail", // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Professional email template generator
function generateEmailTemplate(formData, formType) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Determine subject and header based on form type
  const formConfig = {
    enquiry: {
      subject: "New Customer Enquiry - Action Required",
      header: "Customer Enquiry Submission",
      priority: "Normal"
    },
    loan: {
      subject: "New Loan Application - Review Required",
      header: "Loan Application Submission",
      priority: "High"
    },
    account: {
      subject: "New Account Opening Request - Processing Required",
      header: "Account Opening Request",
      priority: "High"
    },
    default: {
      subject: "New Contact Form Submission",
      header: "Contact Form Submission",
      priority: "Normal"
    }
  };

  const config = formConfig[formType] || formConfig.default;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${config.subject}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8f9fa;
          margin: 0;
          padding: 20px;
        }
        .email-container {
          max-width: 800px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 300;
          letter-spacing: 1px;
        }
        .header .subtitle {
          margin: 8px 0 0 0;
          opacity: 0.9;
          font-size: 14px;
        }
        .content {
          padding: 40px;
        }
        .priority-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 20px;
          ${config.priority === 'High' 
            ? 'background-color: #ffebee; color: #c62828; border: 1px solid #ffcdd2;'
            : 'background-color: #e8f5e8; color: #2e7d32; border: 1px solid #c8e6c9;'
          }
        }
        .section {
          margin-bottom: 35px;
        }
        .section-title {
          color: #1e3c72;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e9ecef;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }
        .info-item {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 6px;
          border-left: 4px solid #2a5298;
        }
        .info-label {
          font-weight: 600;
          color: #495057;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .info-value {
          color: #212529;
          font-size: 15px;
          word-wrap: break-word;
        }
        .description-box {
          background-color: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          padding: 20px;
          margin-top: 15px;
        }
        .footer {
          background-color: #f8f9fa;
          padding: 25px 40px;
          text-align: center;
          border-top: 1px solid #dee2e6;
        }
        .footer-text {
          color: #6c757d;
          font-size: 13px;
          margin-bottom: 10px;
        }
        .company-info {
          color: #1e3c72;
          font-weight: 600;
          font-size: 14px;
        }
        .timestamp {
          background-color: #e9ecef;
          padding: 10px 15px;
          border-radius: 4px;
          font-size: 12px;
          color: #495057;
          text-align: center;
          margin-bottom: 20px;
        }
        @media (max-width: 600px) {
          .content {
            padding: 20px;
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>${config.header}</h1>
          <div class="subtitle">Best Point Savings and Loans</div>
        </div>
        
        <div class="content">
          <div class="priority-badge">${config.priority} Priority</div>
          
          <div class="timestamp">
            <strong>Received:</strong> ${currentDate}
          </div>

          <div class="section">
            <div class="section-title">📋 Customer Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${formData.name || 'Not provided'}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone Number</div>
                <div class="info-value">${formData.phone || 'Not provided'}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email Address</div>
                <div class="info-value">${formData.email || 'Not provided'}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Date of Birth</div>
                <div class="info-value">${formData.dob || 'Not provided'}</div>
              </div>
            </div>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Address</div>
                <div class="info-value">${formData.address || 'Not provided'}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Preferred Branch</div>
                <div class="info-value">${formData.location || 'Not specified'}</div>
              </div>
            </div>
          </div>

          ${formType === "enquiry" ? `
          <div class="section">
            <div class="section-title">💬 Customer Enquiry</div>
            <div class="description-box">
              ${formData.description || 'No additional details provided'}
            </div>
          </div>
          ` : ''}

          ${formType === "account" ? `
          <div class="section">
            <div class="section-title">🏦 Account Opening Details</div>
            <div class="info-item">
              <div class="info-label">Requested Account Type</div>
              <div class="info-value">${formData.accountType || 'Not specified'}</div>
            </div>
          </div>
          ` : ''}

          ${formType === "loan" ? `
          <div class="section">
            <div class="section-title">💰 Loan Application Details</div>
            <div class="info-item">
              <div class="info-label">Loan Purpose</div>
              <div class="info-value">${formData.loanPurpose || 'Not specified'}</div>
            </div>
          </div>
          ` : ''}

          <div class="section">
            <div class="section-title">⚡ Next Steps</div>
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 6px; padding: 15px;">
              <ul style="margin: 0; padding-left: 20px; color: #856404;">
                <li>Review customer information for completeness</li>
                <li>Contact customer within 24 hours for follow-up</li>
                <li>Update CRM system with submission details</li>
                ${formType === 'loan' ? '<li>Schedule appointment for loan consultation</li>' : ''}
                ${formType === 'account' ? '<li>Prepare account opening documentation</li>' : ''}
              </ul>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="footer-text">
            This is an automated notification from your website contact form.
          </div>
          <div class="company-info">
            Best Point Savings and Loans Limited<br>
            Customer Service Excellence
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Enhanced function for contact form submissions
async function sendContactForm(formData, formType) {
  try {
    // Input validation
    if (!formData || !formData.name || !formData.email) {
      return {
        success: false,
        message: "Required fields (name, email) are missing."
      };
    }

    // Determine subject based on form type
    const subjects = {
      enquiry: "New Customer Enquiry - Action Required",
      loan: "New Loan Application - Review Required", 
      account: "New Account Opening Request - Processing Required"
    };

    const subject = subjects[formType] || "New Contact Form Submission";
    
    // Generate professional email template
    const emailBody = generateEmailTemplate(formData, formType);

    // Send email
    const mailOptions = {
      from: `"Best Point Website" <${process.env.EMAIL_USER}>`,
      to: "joekay0976@bestpointgh.com",
      subject: subject,
      html: emailBody,
      priority: formType === 'loan' || formType === 'account' ? 'high' : 'normal',
      headers: {
        'X-Form-Type': formType,
        'X-Customer-Email': formData.email,
        'X-Submission-Time': new Date().toISOString()
      }
    };

    await transporter.sendMail(mailOptions);

    return { 
      success: true, 
      message: "Your submission has been received successfully. We will contact you within 24 hours." 
    };

  } catch (error) {
    console.error("Error sending contact form:", error);
    
    return {
      success: false,
      message: "We're experiencing technical difficulties. Please try again later or contact us directly."
    };
  }
}

// Optional: Send confirmation email to customer
async function sendCustomerConfirmation(formData, formType) {
  try {
    const subjects = {
      enquiry: "Thank you for your enquiry - Best Point Savings and Loans",
      loan: "Loan Application Received - Best Point Savings and Loans",
      account: "Account Opening Request Received - Best Point Savings and Loans"
    };

    const confirmationBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1e3c72; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .footer { padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Contacting Us</h2>
          </div>
          <div class="content">
            <p>Dear ${formData.name},</p>
            <p>We have successfully received your ${formType} submission and appreciate your interest in Best Point Savings and Loans.</p>
            <p><strong>What happens next:</strong></p>
            <ul>
              <li>Our team will review your submission within 24 hours</li>
              <li>We will contact you at ${formData.phone || formData.email} to discuss your requirements</li>
              <li>We'll provide you with detailed information about our services</li>
            </ul>
            <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
            <p>Best regards,<br>The Best Point Team</p>
          </div>
          <div class="footer">
            <p>Best Point Savings and Loans Limited | www.bestpointgh.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Best Point Savings and Loans" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: subjects[formType] || "Thank you for contacting us",
      html: confirmationBody
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending customer confirmation:", error);
    return { success: false };
  }
}

module.exports = {
  sendContactForm,
  sendCustomerConfirmation
};