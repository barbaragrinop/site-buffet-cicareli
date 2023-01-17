import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

// async function sendEmail(req, res) {
//   try {
//     if (process.env.SG_API_KEY) {
//       sendgrid.setApiKey(process.env.SG_API_KEY);
//       const result = await sendgrid.send({
//         to: "barbarapereira123@hotmail.com", // Your email where you'll receive emails
//         from: "babi.silva1163@gmail.com", // your website email address here
//         subject: `${req.body.subject}`,
//         html: `<div>You've got a mail</div>`,
//       }).catch(error => {
//         return res.status(error.statusCode || 500).json({ error: error.response.body });
//       });
//       return res.status(200).json({ data: result });
//     } else {
//       // @ts-ignore
//       throw new Error({ statusCode: 500, message: 'Chave não está na .env!' })
//     }
//   } catch (error) {
//     if (error.response) {
//       return res.status(error.statusCode || 500).json({ error: error.response.body });
//     }
//     return res.status(error.statusCode || 500).json({ error });
//   }
// }

type Data = {
  success: boolean
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const {nome, email, mensagem} = req.body
    const msg = {
      to: 'babi.silva1163@gmail.com', // Change to your recipient 
      from: 'barbarapereira123@hotmail.com', // Change to your verified sender
      subject: 'FOI MESMO????',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    } 

    try {
      await sgMail.send(msg)
      res.status(200).json({success: true})
    } catch (error) {
      res.status(500).json({success: false})
    }
  }
}
