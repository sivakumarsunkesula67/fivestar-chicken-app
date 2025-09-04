require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

function sendOrderEmail(order) {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Order: ${order.orderId}`,
    html: `
      <h2>New Order Received</h2>
      <b>Order ID:</b> ${order.orderId}<br/>
      <b>Status:</b> ${order.status}<br/>
      <b>Name:</b> ${order.customer.name}<br/>
      <b>Phone:</b> ${order.customer.phone}<br/>
      <b>Items:</b>
      <ul>
        ${order.items.map(item =>
          `<li>${item.name} x ${item.quantity}</li>`).join("")}
      </ul>
    `
  };
  return transporter.sendMail(mailOptions);
}

module.exports = sendOrderEmail;