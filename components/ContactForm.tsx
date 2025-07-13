"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type ContactFormData = z.infer<typeof contactSchema>;
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-black-200 to-black-300 px-4 py-8 md:p-12 lg:p-8 rounded-lg md:rounded-3xl border border-white/10"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Send <span className="text-purple">Message</span>
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-white text-sm font-medium mb-2"
          >
            Full Name *
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-black-100 border border-white/20 rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-white text-sm font-medium mb-2"
          >
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-black-100 border border-white/20 rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-white text-sm font-medium mb-2"
          >
            Subject *
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            className="w-full px-4 py-3 bg-black-100 border border-white/20 rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors"
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-white text-sm font-medium mb-2"
          >
            Message *
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            className="w-full px-4 py-3 bg-black-100 border border-white/20 rounded-lg text-white placeholder-white-200 focus:outline-none focus:border-purple transition-colors resize-vertical"
            placeholder="Tell me about your project or inquiry..."
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        {/* Submit Button */}
        <div className="pt-4 text-center">
          <MagicButton
            title={isSubmitting ? "Sending..." : "Send Message"}
            icon={
              isSubmitting ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaPaperPlane />
              )
            }
            position="right"
            otherClasses="w-full gap-2"
            handleClick={() => {}} // Form submission handled by onSubmit
          />
        </div>
        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-400 text-center"
          >
            Thank you! Your message has been sent successfully. I&apos;ll get
            back to you soon.
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-400 text-center"
          >
            Sorry, there was an error sending your message. Please try again or
            contact me directly.
          </motion.div>
        )}
      </form>
</motion.div>
  );
};
export default ContactForm;
