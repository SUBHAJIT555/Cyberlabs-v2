/**
 * Mail API endpoint (mail.php). Used by newsletter, contact, request-callback, and callback-modal forms.
 */
export const MAIL_API_URL = `${import.meta.env.VITE_API_URL ?? ""}/submit.php`;
