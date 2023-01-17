import sendgrid from "@sendgrid/mail";

async function sendEmail(req, res) {
  try {
    if (process.env.SG_API_KEY) {
      sendgrid.setApiKey(process.env.SG_API_KEY);
      const result = await sendgrid.send({
        to: "barbarapereira123@hotmail.com", // Your email where you'll receive emails
        from: "babi.silva1163@gmail.com", // your website email address here
        subject: `${req.body.subject}`,
        html: `<div>You've got a mail</div>`,
      });
      return res.status(200).json({ data: result });
    } else {
      // @ts-ignore
      throw new Error({ statusCode: 500, message: 'Chave não está na .env!' })
    }
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error });
  }
}

export default sendEmail;