
function newMail(to: string, subject: string, body: string) {
    const mailOptions = {
        from: '"sendemail" <sendemail@sendemail.com>',
        to,
        subject,
        body,
    };
    console.log(mailOptions);
    return mailOptions;
}

export default newMail;