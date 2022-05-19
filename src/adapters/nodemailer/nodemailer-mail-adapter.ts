import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5b63cd7c7a48ee",
      pass: "17c179635e6c47"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail ({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gustavo Sato <gustavosato79@gmail.com>',
            subject,
            html: body
        })
    }
}