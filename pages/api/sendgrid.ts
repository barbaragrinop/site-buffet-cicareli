import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type Data = {
  success: boolean;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const { nome, email, mensagem } = req.body;
    const msg = {
      to: email, // Change to your recipient
      from: "barbarapereira123@hotmail.com", // Change to your verified sender
      subject: mensagem,
      text: mensagem,
      html: `<strong>${nome}</strong>`,
    };

    try {
      await sgMail
        .send(msg)
        .then(() => console.log("send mail success"))
        .catch(console.log);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false });
      console.log(error);
    }
  }
};
