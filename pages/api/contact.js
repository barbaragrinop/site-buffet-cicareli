require("dotenv").config();

const sgMail = require("@sendgrid/mail");

const { SG_API_KEY } = process.env;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  try {
    const msg = {
      to: "barbarapereira123@hotmail.com",
      from: "dev.barbarahellen@gmail.com",
      subject: "teste de email",
      html: `<p>OIE O EMAIL CHEGOU AMOOO<p>`,
    };

    await sgMail.send(msg);

    res.json({ success: true });
  } catch (err) {
    console.log("ERRO", err.response.body.errors);
  }
}
