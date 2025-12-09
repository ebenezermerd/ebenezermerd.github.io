import { useState } from "react";
import { Send } from "lucide-react";
import { sendTelegramMessage, formatWithHeader } from "../services/telegram";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const origin = "Source: Contact Me Section";
      const body = `
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📝 *Subject:* ${formData.subject}
💬 *Message:*
${formData.message}

_Submitted at ${new Date().toLocaleString()}_
      `.trim();

      await sendTelegramMessage(formatWithHeader("📩 New Contact Message", `${origin}\n\n${body}`));
      setSent(true);
      setTimeout(() => setSent(false), 2500);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title - left aligned like other sections */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 
            className="bg-clip-text bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] text-[rgba(0,0,0,0)] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight lg:tracking-[-1.2px] font-['Inter:Semi_Bold',sans-serif] font-semibold uppercase leading-tight mb-2"
            style={{ 
              WebkitTextFillColor: "transparent", 
              backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 788 72\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.4 3.6 -39.4 3.6 394 36)\\'><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.031525\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.06305\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.1261\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.21958\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.31305\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.65\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.725\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.9\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.95\\'/><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
            }}
          >
            CONTACT ME
          </h2>
          
          {/* Subtitle */}
          <p className="text-amber-100 text-xs sm:text-sm md:text-base font-['Inter:Medium',sans-serif] font-medium">
            Let's connect and create something amazing together
          </p>
        </div>

        {/* Contact content card */}
        <div 
          className="relative bg-black border border-amber-500/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12"
          style={{
            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Floating glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Left Side - Contact Information - All Centered */}
            <div className="flex flex-col justify-center text-center">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 sm:mb-12 md:mb-16">
                For more inquiries, please contact me using one of the following methods or fill out the contact form. I will get back to you as soon as possible.
              </p>

              {/* Contact Details - Simple text only - All Centered */}
              <div className="space-y-8 sm:space-y-10">
                {/* Address */}
                <div className="text-center">
                  <h4 className="text-white text-base sm:text-lg md:text-xl font-['Inter:Semi_Bold',sans-serif] font-semibold mb-2">
                    Address
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Addis Ababa, Ethiopia
                  </p>
                </div>

                {/* Email */}
                <div className="text-center">
                  <h4 className="text-white text-base sm:text-lg md:text-xl font-['Inter:Semi_Bold',sans-serif] font-semibold mb-2">
                    Email
                  </h4>
                  <a 
                    href="mailto:ebenezermerd@gmail.com"
                    className="text-gray-400 hover:text-amber-300 text-sm sm:text-base transition-colors duration-300"
                  >
                    ebenezermerd@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="text-center">
                  <h4 className="text-white text-base sm:text-lg md:text-xl font-['Inter:Semi_Bold',sans-serif] font-semibold mb-2">
                    Phone
                  </h4>
                  <a 
                    href="tel:+251976034635"
                    className="text-gray-400 hover:text-amber-300 text-sm sm:text-base transition-colors duration-300"
                  >
                    +251 976 034 635
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border-b border-gray-700 hover:border-gray-600 focus:border-amber-500 text-gray-300 placeholder-gray-600 text-sm sm:text-base py-3 sm:py-4 px-0 outline-none transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent border-b border-gray-700 hover:border-gray-600 focus:border-amber-500 text-gray-300 placeholder-gray-600 text-sm sm:text-base py-3 sm:py-4 px-0 outline-none transition-all duration-300"
                  />
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-transparent border-b border-gray-700 hover:border-gray-600 focus:border-amber-500 text-gray-300 placeholder-gray-600 text-sm sm:text-base py-3 sm:py-4 px-0 outline-none transition-all duration-300"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-700 hover:border-gray-600 focus:border-amber-500 text-gray-300 placeholder-gray-600 text-sm sm:text-base py-3 sm:py-4 px-0 outline-none resize-none transition-all duration-300"
                  />
                </div>

                {/* Error / Success */}
                {error && (
                  <div className="p-3 bg-red-900/20 border border-red-500/40 rounded-lg">
                    <p className="text-red-400 text-xs sm:text-sm">{error}</p>
                  </div>
                )}
                {sent && (
                  <div className="p-3 bg-amber-500/10 border border-amber-400/40 rounded-lg">
                    <p className="text-amber-300 text-xs sm:text-sm">✓ Thank you! Your message has been sent.</p>
                  </div>
                )}

                {/* Submit Button - Same as Curated Works filter buttons */}
                <div className="flex justify-center lg:justify-end pt-4 sm:pt-6">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-black rounded-xl text-[10px] sm:text-xs md:text-sm font-['Inter:Semi_Bold',sans-serif] font-semibold uppercase tracking-wider shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "SENDING..." : sent ? "SENT" : "SEND MESSAGE"}
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Inner border glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.05)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}