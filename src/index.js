const nodemailer = require('nodemailer');

/**
 * Send email using provided SMTP configuration and mail data
 * @param {Object} smtpConfig - SMTP configuration object
 * @param {string} smtpConfig.host - SMTP host
 * @param {number} smtpConfig.port - SMTP port
 * @param {boolean} smtpConfig.secure - Use SSL/TLS
 * @param {string} smtpConfig.user - SMTP username
 * @param {string} smtpConfig.pass - SMTP password
 * @param {Object} mailData - Email data object
 * @param {string} mailData.from - Sender email address
 * @param {string|string[]} mailData.to - Recipient email address(es)
 * @param {string} mailData.subject - Email subject
 * @param {string} mailData.text - Plain text message
 * @param {string} [mailData.html] - HTML message (optional)
 * @param {Array} [mailData.attachments] - Array of attachment objects (optional)
 * @returns {Promise} - Resolves with info about sent mail
 */
async function sendMail(smtpConfig, mailData) {
    // Validate required fields
    if (!smtpConfig || !mailData) {
        throw new Error('SMTP config and mail data are required');
    }

    const requiredSmtpFields = ['host', 'port', 'user', 'pass'];
    const requiredMailFields = ['from', 'to', 'subject', 'text'];

    requiredSmtpFields.forEach(field => {
        if (!smtpConfig[field]) {
            throw new Error(`Missing required SMTP field: ${field}`);
        }
    });

    requiredMailFields.forEach(field => {
        if (!mailData[field]) {
            throw new Error(`Missing required mail field: ${field}`);
        }
    });

    try {
        // Create transporter with SMTP configuration
        const transporter = nodemailer.createTransport({
            host: smtpConfig.host,
            port: smtpConfig.port,
            secure: smtpConfig.secure || false,
            auth: {
                user: smtpConfig.user,
                pass: smtpConfig.pass
            }
        });

        // Verify SMTP connection
        await transporter.verify();

        // Prepare mail options
        const mailOptions = {
            from: mailData.from,
            to: mailData.to,
            subject: mailData.subject,
            text: mailData.text,
            html: mailData.html,
            attachments: mailData.attachments
        };

        // Send mail
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        throw new Error(`Failed to send email: ${error.message}`);
    }
}

module.exports = { sendMail };