/* eslint-disable consistent-return */
import nodemailer from "nodemailer";

export const mailer = async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "API Space Flight Sergio <no-reply@sfs.com>",
    to: "Developer <dev-email@example.com>",
    subject: "Erro durante sincronização de artigos",
    text: "Ocorreu um erro durante sincronização de artigos!",
    html: "<p><b>Olá Dev,</b> por favor verificar o erro que aconteceu durante sincronização automática dos artigos da API space flight.</p>",
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
