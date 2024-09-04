import nodemailer from 'nodemailer';

export default async (req, res) => {
  try {
    // 从请求体中获取客户填写的信息
    const { subject, body } = req.body || {};  // 使用默认值防止 undefined 解构

    if (!subject || !body) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // 配置 nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'sales@recyclemachine.net',
        pass: '912$$Qjw'
      }
    });

    // 配置邮件选项
    const mailOptions = {
      from: 'sales@recyclemachine.net',  // 发送者邮箱
      to: 'cavon@recyclemachine.net',  // 你的邮箱，硬编码为你自己的邮箱地址
      subject,  // 邮件主题
      text: body  // 邮件正文
    };

    // 发送邮件
    const result = await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully', result });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email', error: error.toString() });
  }
};