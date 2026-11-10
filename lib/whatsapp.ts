// Single source of truth for Schoolhelphub's WhatsApp number.
// wa.me needs the full international number: country code, no "+", no leading 0.
export const WHATSAPP_NUMBER = "2347043523556";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
