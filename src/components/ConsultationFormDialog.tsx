import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { X, Send, Loader2 } from "lucide-react";
import { motion } from "motion/react";

interface ConsultationFormDialogProps {
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly source?: "project-details" | "contact";
  readonly projectTitle?: string;
}

interface FormData {
  fullName: string;
  contactType: "email" | "phone";
  contactValue: string;
  serviceChoice: string;
  description: string;
}

const serviceOptions = [
  "Full-Stack Development",
  "UI/UX Design",
  "Mobile App Development",
  "AI/ML Solutions",
  "E-commerce Platform",
  "Healthcare Management System",
  "Custom Software Development",
  "Other",
];

import { sendTelegramMessage, formatWithHeader } from "../services/telegram";

export default function ConsultationFormDialog({ open, onOpenChange, source = "project-details", projectTitle }: ConsultationFormDialogProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contactType: "email",
    contactValue: "",
    serviceChoice: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
  if (open) {
    // Disable body scroll when dialog is open
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return () => {
    document.body.style.overflow = 'unset';
  };
}, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const origin = source === "project-details" ? `Source: Project Details${projectTitle ? ` — ${projectTitle}` : ""}` : "Source: Contact Me Section";
      const body = `
👤 *Name:* ${formData.fullName}
📞 *Contact (${formData.contactType}):* ${formData.contactValue}
💼 *Service:* ${formData.serviceChoice}
📝 *Description:*
${formData.description}

_Submitted at ${new Date().toLocaleString()}_
      `.trim();

      await sendTelegramMessage(formatWithHeader("🆕 New Consultation Request", `${origin}\n\n${body}`));

      setSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: "",
          contactType: "email",
          contactValue: "",
          serviceChoice: "",
          description: "",
        });
        setSuccess(false);
        onOpenChange(false);
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-[90vw] sm:!max-w-[450px] md:!max-w-[480px] !max-h-[85vh] bg-[#1a1410] border-2 border-amber-500/30 p-0 !overflow-hidden flex flex-col z-[101]">
        <DialogTitle className="sr-only">Book a Free Consultation</DialogTitle>
        <DialogDescription className="sr-only">
          Fill out the form below to schedule a free consultation with our team
        </DialogDescription>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative flex flex-col max-h-full"
        >
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full border border-amber-500/50 hover:border-amber-400 transition-all duration-300"
          >
            <X className="w-4 h-4 text-amber-300" />
          </button>

          {/* Header - Fixed */}
          <div className="bg-gradient-to-br from-[#32221b] to-[#1a1410] border-b-2 border-amber-500/20 p-6 flex-shrink-0">
            <h2 className="text-amber-100 text-xl sm:text-2xl font-['Inter:Semi_Bold',sans-serif] font-semibold mb-2">
              Book a Free Consultation
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Let's discuss how we can help bring your project to life
            </p>
          </div>

          {/* Form - Scrollable */}
          <div className="overflow-y-auto overflow-x-hidden flex-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#352724] [&::-webkit-scrollbar-thumb]:bg-amber-500/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-amber-500/50">
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-amber-200 text-xs sm:text-sm font-['Inter:Medium',sans-serif] font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-[#352724] border-amber-500/30 py-2 text-amber-100 placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20 rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Contact Type Toggle */}
              <div className="space-y-2">
                <Label className="text-amber-200 text-xs sm:text-sm font-['Inter:Medium',sans-serif] font-medium">Contact Method *</Label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, contactType: "email", contactValue: "" })}
                    className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all duration-300 text-xs sm:text-sm font-['Inter:Medium',sans-serif] font-medium cursor-pointer ${
                      formData.contactType === "email"
                        ? "bg-[#352724] border-amber-500/30 text-gray-400 hover:border-amber-400/60 hover:shadow-[0_0_8px_rgba(251,191,36,0.15)]"
                        : "bg-amber-500/20 border-amber-500/30 hover:border-amber-400/60 text-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                    }`}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, contactType: "phone", contactValue: "" })}
                    className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all duration-300 text-xs sm:text-sm font-['Inter:Medium',sans-serif] font-medium cursor-pointer ${
                      formData.contactType === "phone"
                        ? "bg-[#352724] border-amber-500/30 text-gray-400 hover:border-amber-400/60 hover:shadow-[0_0_8px_rgba(251,191,36,0.15)]"
                        : "bg-amber-500/20 border-amber-500/30 hover:border-amber-400/60 text-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                    }`}
                  >
                    Phone
                  </button>
                </div>
              </div>

              {/* Contact Value */}
              <div className="space-y-2">
                <Label htmlFor="contactValue" className="text-amber-200 text-xs sm:text-sm font-['Inter:Medium',sans-serif] font-medium">
                  {formData.contactType === "email" ? "Email Address" : "Phone Number"} *
                </Label>
                <Input
                  id="contactValue"
                  type={formData.contactType === "email" ? "email" : "tel"}
                  required
                  value={formData.contactValue}
                  onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                  className="bg-[#352724] border-amber-500/30 py-2 text-amber-100 placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20 rounded-lg"
                  placeholder={
                    formData.contactType === "email" ? "your.email@example.com" : "0912345678"
                  }
                />
              </div>

              {/* Service Choice */}
              <div className="space-y-2">
                <Label htmlFor="serviceChoice" className="text-amber-200 text-xs sm:text-sm font-['Inter:Medium',sans-serif] font-medium">
                  Service Interest *
                </Label>
                <Select
                  value={formData.serviceChoice}
                  onValueChange={(value: string) => setFormData({ ...formData, serviceChoice: value })}
                  required
                >
                  <SelectTrigger className="bg-[#352724] border-amber-500/30 text-amber-100 focus:border-amber-400 focus:ring-amber-400/20 rounded-lg">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#352724] border-2 border-amber-500/40 rounded-lg shadow-2xl shadow-amber-500/20">
                    {serviceOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="text-amber-100 px-4 py-2 rounded-md my-0.5 mx-1 cursor-pointer hover:bg-amber-500/20 hover:text-amber-200 focus:bg-amber-500/20 focus:text-amber-200 transition-colors duration-200"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-amber-200 text-xs sm:text-sm font-['Inter:Medium',sans-serif] font-medium">
                  Project Description *
                </Label>
                <Textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-[#352724] border-amber-500/30 text-amber-100 placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20 min-h-[100px] max-h-[200px] resize-y rounded-lg"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-900/20 border border-red-500/40 rounded-lg">
                  <p className="text-red-400 text-xs sm:text-sm">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="p-3 bg-amber-500/10 border border-amber-400/40 rounded-lg">
                  <p className="text-amber-300 text-xs sm:text-sm">
                    ✓ Thank you! Your consultation request has been sent successfully.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || success}
                className="w-full mt-4 px-4 py-3 bg-transparent border-2 border-amber-400/60 rounded-xl text-amber-200 text-xs sm:text-sm font-['Inter:Medium',sans-serif] font-medium hover:bg-amber-500/10 hover:border-amber-300 transition-all duration-300 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                )}
                {!isSubmitting && success && "Sent Successfully!"}
                {!isSubmitting && !success && (
                  <>
                    <Send className="w-4 h-4" />
                    Send Consultation Request
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
