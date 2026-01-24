import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
const WhatsAppButton = () => {
  const phoneNumber = "7355248049";
  const message = encodeURIComponent(
    "Hello! I'm interested in your solar solutions.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link
      to={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-0 z-50 bg-success hover:bg-[hsl(142,76%,30%)] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110  hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <SocialIcon url="https://whatsapp.com" />
    </Link>
  );
};

export default WhatsAppButton;
