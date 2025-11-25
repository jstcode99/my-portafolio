import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types/contact';
import { emailJSConfig } from '../config/emailjs';

export class EmailService {
  static async sendContactEmail(formData: ContactFormData): Promise<boolean> {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'jstorres0211@gmail.com',
      };

      console.log(templateParams);
      

      const result = await emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        templateParams,
        emailJSConfig.publicKey
      );

      console.log(result);
      

      return result.status === 200;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}