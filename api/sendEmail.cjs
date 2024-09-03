const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const { to, subject, body } = req.body; // 从请求体中获取数据

  // 配置邮件发送服务
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465, // SMTP 端口，对于 Hostinger 通常是 587 或 465
    secure: false, // 对于 587 端口, secure 设为 false; 如果使用 465 端口, 设为 true
    auth: {
      user: 'sales@recyclemachine.net',
      pass: '912$$Qjw'
    }
  });

  // 配置邮件内容
  const mailOptions = {
    from: 'sales@recyclemachine.net', // 发件人地址
    to, // 收件人地址，从前端获取
    subject, // 邮件主题
    text: body // 邮件正文
  };

  // 发送邮件
  try {
    const result = await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully', result });
  } catch (error) {
    res.status(500).send({ message: 'Failed to send email', error });
  }
};