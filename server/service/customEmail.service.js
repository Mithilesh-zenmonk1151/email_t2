const nodemailer = require("nodemailer");
const ejs = require("ejs");
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});
exports.customMailService = async (payload) => {
  try {
    const { email, subject, mailTemplate } = payload.body;
    console.log("Resquest.body",payload.body);
    // const mailTemplateString = mailTemplate;
    // const templateData = {};
    // console.log("mailTemplateString",mailTemplateString);
    // ejs.render(mailTemplateString, templateData, async (err, data) => {
      // if (err) {
      //   console.error("EJS Render Error:", err);
      //   throw new Error("Error rendering email template");
      // }
      const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        html: mailTemplate,
      };
      console.log("MailOptions",mailOptions);
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Email Send Error:", error);
          throw new Error("Error sending email");
        }
        console.log("Message sent: %s", info.messageId);
      });
    // });
  } catch (error) {
    console.error("Custom Mail Service Error:", error);
    throw error;
  }
};
