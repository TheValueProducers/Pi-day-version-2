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
    from: '"USC Office of Admission" <bvistechcommittee@gmail.com>', // Custom sender name
    to: 'vulehoangv@gmail.com', // Recipient's email
    subject: 'CONFIRMATION: Your USC application has been updated',
    text: 'CONFIRMATION: Your USC application has been updated',
    html: `
        

    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <img alt="University of Southern California" style="width:100%;max-height:100%" width="100%" src="https://ci3.googleusercontent.com/meips/ADKq_NaLO0D-IkjWviePEwDO9pe2xdyrsMUsWtpHJGli-HahJb4uwpD6j-g6TRKR8EoAD2O-SBTfNJjOF-b0gCN8AKO4kDCAoiGcma2b0i8wgFH9cYyCAhgpuk-F33OQ06prBC6VZuenZ4AWzsrfYN-5NCsnMrnNmXC-Sm8k310t13sNAIlljmNFbLIe9fFMoJ2MHXMg3x9ZBlBf7NhFY7q6ukEgGupciQ=s0-d-e1-ft" class="CToWUd" data-bit="iit">
        <h2 style="text-align: center; color: #990000;">UNDERGRADUATE ADMISSION</h2>
        
        <p style="font-size: 1rem">Dear Le Hoang,</p>
        
        <p style="font-size: 1rem">We are writing to inform you that the status of your application to the University of Southern California has been updated. Please log in to your USC Applicant Portal to view the latest updates regarding your admission process.</p>
        
        <div style="text-align: left; padding: 2rem 0 2rem 4rem;" style="font-size: 1rem">
            <a href="https://www.youtube.com/shorts/H0CPABTgqD8" style="margin: 2rem 0; background-color: #990000; color: #ffffff; padding: 15px 20px; text-decoration: none; font-weight: bold; border-radius: 5px;">Check Your Status</a>
            <p style="margin: 2rem 0;"><strong>Username:</strong> vulehoangv@gmail.com </p>
            <p style="margin: 2rem 0;"><strong>PIN:</strong> 563829574</p>
            <p style="margin: 2rem 0;"><strong>Link:</strong> <a href="https://www.youtube.com/shorts/H0CPABTgqD8">https://www.youtube.com/shorts/H0CPABTgqD8</a></p>

        </div>
        
        <p style="font-size: 1rem">If you have any questions or need further assistance, please do not hesitate to contact us at <a href="tel:2137401111" style="color: #990000;">(213) 740-1111</a> or visit <a href="https://ask.usc.edu" style="color: #990000;">ask.usc.edu</a>.</p>
        
        <p style="font-size: 1rem">We appreciate your patience during this process and wish you the best.</p>
        
        <p style="font-size: 1rem">Sincerely,</p>
        <p style="font-size: 1rem"><strong>Kirk Brennan</strong><br>Associate Dean<br>Director of Undergraduate Admission<br>University of Southern California</p>
        
       
        <p style="text-align: center; font-size: 12px; color: #666; margin-top: 20px;">University Park Campus | Los Angeles, CA 90089-0911 | 213-740-1111</p>
        <p style="text-align: center; font-size: 12px; color: #666;">©2022 University of Southern California</p>
        <div style="display: flex; justify-content: center;  background-color: #333; padding: 20px; border-radius: 5px; margin-top: 30px;">
            <img alt="img" style="margin: 0 0.5rem;display:block;line-height:0px;font-size:0px;border:0px" src="https://ci3.googleusercontent.com/meips/ADKq_NaQsX27P2duMm5Dx214tyIRg86eliFez9Bdf79fu3abc0FBdkJN3ppt54__xaZ3P_JMjNueDkvMdmCxezj-RVnLYWjiM1RXQx8LGQ=s0-d-e1-ft#http://admissions.usc.edu/EmailCampaign/social/fb.png" class="CToWUd" data-bit="iit">
            <img alt="img" style="margin: 0 0.5rem;display:block;line-height:0px;font-size:0px;border:0px" src="https://ci3.googleusercontent.com/meips/ADKq_NaRyd6eMkRZwqyf-2MMGevhTCwXgWluCQu0GocysqmKl6KeCL8tx9s24dQaKwMgNsfKha8C_TFaYbPb7ULMAUbk7OkI6GAK-IK8PGmGQPE7=s0-d-e1-ft#http://admissions.usc.edu/EmailCampaign/social/twitter.png" class="CToWUd" data-bit="iit">
            <img alt="img" style="margin: 0 0.5rem;display:block;line-height:0px;font-size:0px;border:0px" src="https://ci3.googleusercontent.com/meips/ADKq_NZ1SlhtVA_QOMietpTduObrlkwqbSRLcc6Nj6VYRT4m35aE31ulRYI2NLogimR_h69TeD0lz_MaEp6kVwMkLeWIebABSSmOCSCf4TlzhU4akQ8=s0-d-e1-ft#http://admissions.usc.edu/EmailCampaign/social/instagram.png" class="CToWUd" data-bit="iit">
            <img alt="img" style="margin: 0 0.5rem;display:block;line-height:0px;font-size:0px;border:0px" src="https://ci3.googleusercontent.com/meips/ADKq_Nb6cFYSX8v-sMpA1nloNj2WfE6mzlSek1Q5kFnP6pVqAXdibRltePLR4cXNkLDnhWpCsLctyJ0C90oaD491QqcM-0sfBxupdijJY9A2FnEgNNH6D1M=s0-d-e1-ft#http://admissions.usc.edu/EmailCampaign/social/youtube-icon.png" class="CToWUd" data-bit="iit">
        </div>
    </div>
</body>`,
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});