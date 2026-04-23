import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import AcademicAffairsUpdate from './emails/OAA-march.tsx';

// 1. Configure the Office 365 connection 
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // Must be false for port 587 (STARTTLS)
  auth: {
    user: 'binula.illukpitiya@belmont.edu',
    pass: 'Froggy123#', // <-- Seriously, use a new one!
  },
});

// 2. The Async Function
async function sendEmail() {
  try {
    // -> FIX: Move the render function inside this async block <-
    const htmlString = await render(AcademicAffairsUpdate());

    // 3. Send the email
    const info = await transporter.sendMail({
      from: '"Office of Academic Affairs" <binula.illukpitiya@belmont.edu>',
      to: 'binula.illukpitiya@belmont.edu', 
      subject: 'Academic Affairs Update',
      html: htmlString,
    });
    
    console.log('Success! Email sent via Belmont SMTP. Message ID:', info.messageId);
  } catch (error) {
    console.error('Error sending via Belmont SMTP:', error);
  }
}

// 4. Execute
sendEmail();