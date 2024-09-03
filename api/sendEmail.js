import nodemailer from 'nodemailer';

export default async (req, res) => {
  try {
    // 确保解析请求体数据
    const { to, subject, body } = req.body || {};  // 使用默认值防止 undefined 解构

    if (!to || !subject || !body) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // 配置 nodemailer
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

    const result = await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully', result });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email', error: error.toString() });
  }
};