// 将原来的 require 语句改为 import
import nodemailer from 'nodemailer';

// 其余代码保持不变
export default async (req, res) => {
  const { to, subject, body } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 587,
    secure: false,
    auth: {
      user: 'sales@recyclemachine.net',
      pass: '912$$Qjw'
    }
  });

  const mailOptions = {
    from: 'sales@recyclemachine.net',
    to,
    subject,
    text: body
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully', result });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email', error });
  }
};