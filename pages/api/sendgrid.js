import sendgrid from "@sendgrid/mail";

if(process.env.SG_API_KEY)
  sendgrid.setApiKey(process.env.SG_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "barbarapereira123@hotmail.com", // Your email where you'll receive emails
      from: "babi.silva1163@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;