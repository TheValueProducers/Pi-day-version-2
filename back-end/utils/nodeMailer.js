const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like Outlook or a custom SMTP server
    auth: {
        user: 'bvistechcommittee@gmail.com',
        pass: 'lwah awnh upgz qyiv' // Use an App Password instead of your email password
    }
});

// Email options
let mailOptions = {
    from: '"Harvard College Admissions" <bvistechcommittee@gmail.com>', // Official sender name
    to: 'dinhduygiangvo@gmail.com', // Recipient's email
    subject: '📩 Official Admission Decision – Harvard College Class of 2029',
    text: `Dear Duy,\n\nCongratulations! We are delighted to inform you that you have been admitted to Harvard College as a member of the Class of 2029. Please review the attached admission letter for details.\n\nWelcome to Harvard!\n\nBest,\nHarvard College Admissions Committee`,
    html: `
        <div style="
            background: url('https://news.harvard.edu/wp-content/uploads/2021/05/harvard-yard-1600x900.jpg');
            background-size: cover;
            background-position: center;
            padding: 40px;
            color: #000000;
            font-family: 'Georgia', serif;
            text-align: left;
        ">
            <div style="
                max-width: 600px;
                background: #ffffff;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin: auto;
            ">
                <img src="https://www.shorttermprograms.com/images/cache/600_by_314/uploads/institution-logos/harvard-university.png" style="width: 100%; height: auto;">
                
                <h1 style="color: #A51C30; text-align: center;">Harvard College</h1>
                <h2 style="text-align: center;">Office of Admissions and Financial Aid</h2>
                <hr style="border: 1px solid #A51C30;">
                
                <p style="font-size: 18px;">Dear <strong>Binh</strong>,</p>

                <p style="font-size: 16px; line-height: 1.6;">
                    It is with great pleasure that we inform you of your admission to <strong>Harvard College</strong> as a member of the <strong>Class of 2029</strong>. Your application was selected from an exceptionally talented pool of candidates, and we are thrilled to welcome you to our academic community.
                </p>

                <p style="font-size: 16px; line-height: 1.6;">
                    Harvard’s tradition of excellence in education, research, and innovation is built upon the dedication and intellect of students like you. We are confident that your contributions will enrich our diverse and dynamic community.
                </p>

                <p style="font-size: 16px; line-height: 1.6;">
                    Please carefully review your admission materials in the attachment. To confirm your enrollment, kindly submit your acceptance by <strong>May 1, 2025</strong>. Instructions for next steps, including housing and orientation, can be found in your admission package.
                </p>

                <p style="font-size: 16px; line-height: 1.6;">
                    We look forward to seeing you in Cambridge this fall. Once again, congratulations and welcome to <strong>Harvard!</strong>
                </p>

                <br>
                <p>Best Regards,</p>
                <img src = "https://static.vecteezy.com/system/resources/thumbnails/030/608/366/small_2x/fake-signature-word-vector.jpg" style = "height: 8vh; width: auto;">
                <p><strong>William R. Fitzsimmons</strong></p>
                <p>Dean of Admissions and Financial Aid</p>
                <p>Harvard College</p>
            </div>
        </div>   `
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

