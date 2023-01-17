import sgMail from '@sendgrid/mail'

// sgMail.setApiKey(process.env.SG_API_KEY!)

export default async(req, res) => {
  if(req.method === "POST" && process.env.SG_API_KEY) {
  sgMail.setApiKey(process.env.SG_API_KEY)

    const {nome, email, mensagem} = req.body
    const msg = {
      to: "barbarapereira123@hotmail.com", 
      from: "babi.silva1163@gmail.com",
      subject: "doido né ", 
      text: `Email => ${email}`, 
      html: `<strong>${mensagem}</strong>`
    }

    try  {
      await sgMail.send(msg)
      res.status(200).json({ success: true})
    } catch(erro) {
      res.status(400).json({ success: false})
    }
  }
}