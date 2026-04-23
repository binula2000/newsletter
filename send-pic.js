import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import AcademicAffairsUpdate from './emails/update.tsx';
// If using Node.js path module helps locate the file reliably:
import path from 'path';

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: 'binula.illukpitiya@belmont.edu',
    pass: 'Froggy123#', // Please change this immediately if it's a real password!
  },
});

async function sendEmail() {
  try {
    const htmlString = await render(AcademicAffairsUpdate({ isEmail: true }));

    // ... inside your sendEmail function ...

    const info = await transporter.sendMail({
      from: '"Office of Academic Affairs" <binula.illukpitiya@belmont.edu>',
      // to: 'lannie.smith@belmont.edu, thailese.hamby@belmont.edu, hope.terhaar@belmont.edu, mark.beard@belmont.edu, holly.randa@belmont.edu, brandy.fentress@belmont.edu, toccara.houston@belmont.edu, lauren.gray@belmont.edu, amy.bethke@belmont.edu, darius.booth@belmont.edu, jamie.wiesmueller@belmont.edu, vincent.wilson@belmont.edu, jamaine.davis@belmont.edu',
      to: 'misti.meeks@belmont.edu',
      subject: 'DRAFT 2: Academic Affairs Spring Update',
      html: htmlString,
      attachments: [
        {
          filename: 'thomasffrist_seal.png',
          // 👇 Update this line right here! 👇
          path: path.join(process.cwd(), 'emails', 'static', 'thomasffrist_seal.png'),
          cid: 'belmont-seal'
        },
        {
          filename: 'dr-stephens-thumbnail.jpg',
          path: path.join(process.cwd(), 'emails', 'static', 'dr-stephens-thumbnail.jpg'),
          cid: 'dr-stephens-thumbnail'
        }
      ]
    });

    console.log('Success! Email sent via Belmont SMTP. Message ID:', info.messageId);
  } catch (error) {
    console.error('Error sending via Belmont SMTP:', error);
  }
}

sendEmail();