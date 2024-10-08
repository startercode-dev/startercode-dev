'use server';

// import { connectMongoDB } from '@/lib/mongodb';
// import Forms from '@/models/form';
import sgMail from '@sendgrid/mail';
import { generateNewLeadEmailTemplate } from '@/email-templates/newLeadEmailTemplate';
import { generateEmailTemplateToSubmitter } from '@/email-templates/newLeadEmailToSubmitterTemplate';
import { generateEmailToSubmitterSbLanding } from '@/email-templates/emailToSubmitterSbLanding';
import { generateEmailToCompanySbLanding } from '@/email-templates/emailToCompanySbLanding';
import { generateEmailToCompanyFLP } from '@/email-templates/emailToCompanyFLP';
import { generateEmailToSubmitterFLP } from '@/email-templates/emailToSubmitterFLP';

let sgApiKey: string;
if (process.env.SENDGRID_API) {
    sgApiKey = process.env.SENDGRID_API;
} else {
    throw new Error('SendGrid environment variable is not set');
}

export async function submitForm(prevState: any, formData: any) {
    const fullName = formData?.get('full-name');
    const email = formData?.get('email');
    const phoneNumber = formData?.get('phone-number');
    const budget = formData?.get('budget');
    const message = formData?.get('message');

    const firstName = formData.get('firstName');

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const phoneRegex =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/; // 1231231231 or 123-123-1231 is valid phone number

    if (!fullName || fullName.trim() === '') {
        return { success: false, msg: 'Name is required' };
    }
    if (!email || email.trim() === '' || !emailRegex.test(email)) {
        return { success: false, msg: 'Email is not valid' };
    }
    if (
        !phoneNumber ||
        phoneNumber.toString().trim() === '' ||
        !phoneRegex.test(phoneNumber)
    ) {
        return { success: false, msg: 'Phone is not valid' };
    }
    if (!budget || budget.trim() === '') {
        return { success: false, msg: 'Budget is required' };
    }
    if (!message || typeof message !== 'string' || message.trim() === '') {
        return { success: false, msg: 'Message is required' };
    }

    // email data to company
    const formDataToCompany = new FormData();
    formDataToCompany.append('email', email);
    formDataToCompany.append(
        'html',
        generateNewLeadEmailTemplate({
            fullName,
            email,
            phoneNumber,
            budget,
            message,
        }),
    );
    formDataToCompany.append('subject', `NEW CLIENT REQUEST: ${fullName}`);

    // email data to user
    const formDataToUser = new FormData();
    formDataToUser.append('email', email);
    formDataToUser.append(
        'html',
        generateEmailTemplateToSubmitter({ fullName }),
    );
    formDataToUser.append('subject', "We've received your request");

    sgMail.setApiKey(sgApiKey);

    try {
        const emails: any = [
            {
                // to: email, // for testing,
                to: process.env.COMPANY_EMAIL_ADDRESS || '', // <-- use this in production
                from: process.env.NO_REPLY_EMAIL || '',
                subject: formDataToCompany.get('subject') || 'Subject',
                text: 'Email to company',
                html:
                    formDataToCompany.get('html') ||
                    '<strong>startercode email</strong>',
            },
            {
                to: formDataToUser.get('email'),
                from: process.env.FROM_EMAIL_ADDRESS || '', // Update this email using the email on verified sender
                subject: formDataToUser.get('subject') || 'Subject',
                text: 'Email to user',
                html:
                    formDataToUser.get('html') ||
                    '<strong>startercode email</strong>',
            },
        ];

        await sgMail.send(emails);
        return {
            success: true,
            msg: 'Email sent successfully',
        };
    } catch (error: any) {
        console.error(error.response.body);
        return {
            success: false,
            msg: 'Failed to send, please try again',
        };
    }
}

export async function submitSBlanding(prevState: any, formData: any) {
    const email = formData.get('email');
    const firstName = formData.get('firstName');
    const fullUrl = formData.get('fullUrl');
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!firstName || firstName.trim() === '') {
        return { success: false, field: 'name', msg: 'Name is required' };
    }
    if (!email || email.trim() === '' || !emailRegex.test(email)) {
        return { success: false, field: 'email', msg: 'Email is not valid' };
    }

    // email data to company
    const formDataToCompany = new FormData();
    formDataToCompany.append('email', email);
    formDataToCompany.append(
        'html',
        generateEmailToCompanySbLanding({
            firstName,
            email,
            fullUrl,
        }),
    );
    formDataToCompany.append('subject', `NEW CLIENT REQUEST: ${firstName}`);

    // email data to user
    const formDataToUser = new FormData();
    formDataToUser.append('email', email);
    formDataToUser.append(
        'html',
        generateEmailToSubmitterSbLanding({ firstName }),
    );
    formDataToUser.append('subject', "We've received your request");

    sgMail.setApiKey(sgApiKey);
    try {
        const emails: any = [
            {
                // to: email, // for testing,
                to: process.env.COMPANY_EMAIL_ADDRESS || '', // <-- use this in production
                from: process.env.NO_REPLY_EMAIL || '',
                subject: formDataToCompany.get('subject') || 'Subject',
                text: 'Email to company',
                html:
                    formDataToCompany.get('html') ||
                    '<strong>startercode email</strong>',
            },
            {
                to: formDataToUser.get('email'),
                from:
                    {
                        email: process.env.FROM_EMAIL_ADDRESS,
                        name: 'Startercode Sales',
                    } || '', // Update this email using the email on verified sender
                subject: formDataToUser.get('subject') || 'Subject',
                text: 'Email to user',
                html:
                    formDataToUser.get('html') ||
                    '<strong>startercode email</strong>',
            },
        ];

        await sgMail.send(emails);

        return {
            success: true,
            msg: null,
        };
    } catch (error: any) {
        console.error(error.response.body);
        return {
            success: false,
            msg: 'Failed to send, please try again',
        };
    }
}


export async function submitFLP(prevState: any, formData: any) {
    const email = formData.get('email');
    const firstName = formData.get('firstName');
    const description = formData.get('description');
    const fullUrl = formData.get('fullUrl');
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!firstName || firstName.trim() === '') {
        return { success: false, field: 'name', msg: 'Name is required' };
    }
    if (!email || email.trim() === '' || !emailRegex.test(email)) {
        return { success: false, field: 'email', msg: 'Email is not valid' };
    }

    if (description) {
        if (description.trim() === '') {
            return {
                success: false,
                field: 'description',
                msg: 'Description is required',
            };
        }
    }

    // email data to company
    const formDataToCompany = new FormData();
    formDataToCompany.append('email', email);
    formDataToCompany.append(
        'html',
        generateEmailToCompanyFLP({
            firstName,
            email,
            fullUrl,
            description,
        }),
    );
    formDataToCompany.append('subject', `NEW CLIENT REQUEST: ${firstName}`);

    // email data to user
    const formDataToUser = new FormData();
    formDataToUser.append('email', email);
    formDataToUser.append('html', generateEmailToSubmitterFLP({ firstName }));
    formDataToUser.append('subject', "We've received your request");

    sgMail.setApiKey(sgApiKey);
    try {
        const emails: any = [
            {
                // to: email, // for testing,
                to: process.env.COMPANY_EMAIL_ADDRESS || '', // <-- use this in production
                from: process.env.NO_REPLY_EMAIL || '',
                subject: formDataToCompany.get('subject') || 'Subject',
                text: 'Email to company',
                html:
                    formDataToCompany.get('html') ||
                    '<strong>startercode email</strong>',
            },
            {
                to: formDataToUser.get('email'),
                from:
                    {
                        email: process.env.FROM_EMAIL_ADDRESS,
                        name: 'Startercode Sales',
                    } || '', // Update this email using the email on verified sender
                subject: formDataToUser.get('subject') || 'Subject',
                text: 'Email to user',
                html:
                    formDataToUser.get('html') ||
                    '<strong>startercode email</strong>',
            },
        ];

        await sgMail.send(emails);

        return {
            success: true,
            msg: null,
        };
    } catch (error: any) {
        console.error(error.response.body);
        return {
            success: false,
            msg: 'Failed to send, please try again',
        };
    }
}
