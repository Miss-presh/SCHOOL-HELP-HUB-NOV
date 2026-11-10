import { whatsappLink } from "@/lib/whatsapp";
export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi Schoolhelphub, I'd like to find out more about tutoring for my child.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-14 h-14 rounded-full shadow-xl shadow-[#25D366]/35 hover:scale-110 flex items-center justify-center transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.557-5.338 11.902-11.892 11.902-2.004-.001-3.973-.51-5.713-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.889-2.858-5.441 0-9.867 4.371-9.871 9.743-.001 1.933.507 3.821 1.474 5.485L1.922 22.18l4.725-1.026z" />
      </svg>
    </a>
  );
}
