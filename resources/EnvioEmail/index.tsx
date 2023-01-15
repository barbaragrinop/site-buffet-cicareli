import { render } from "@react-email/render"
import nodemailer from "nodemailer"
import Email from "./email"

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "63baff46d4afcd",
      pass: "2fef2e98f951ed"
    }
})

const emailHTML = render(<Email url="https://www.youtube.com/watch?v=mdiIQG5oBGk" />)

const options = {
    from: "barbarapereira123@hotmail.com", 
    to: "babi.silva1163@gmail.com", 
    subject: "Novidades pra sua conta."
}


transporter.sendMail((options)).then(() => console.log("Email enviado"))