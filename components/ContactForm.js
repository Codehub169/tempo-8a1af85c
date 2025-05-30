'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, MessageSquare, Send, AlertTriangle, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State for form submission status
  const [status, setStatus] = useState({ type: '', message: '' }); // type: 'loading', 'success', 'error'
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message || 'Message sent successfully! We\'ll be in touch.' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    }
    setIsLoading(false);
  };

  // Input field base style
  const inputBaseStyle = "w-full px-4 py-3 rounded-soft border bg-neutral-bg text-text-dark placeholder-text-light focus:outline-none focus:ring-2 focus:ring-hueneu-accent focus:border-hueneu-accent transition-all duration-300 ease-in-out font-sans";
  const iconStyle = "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-hueneu-primary";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-xl p-8 md:p-10 bg-white rounded-softer shadow-interactive mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <User className={iconStyle} />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className={`${inputBaseStyle} pl-10`}
            aria-label="Your Name"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <Mail className={iconStyle} />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className={`${inputBaseStyle} pl-10`}
            aria-label="Your Email"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <MessageSquare className={`${iconStyle} top-6`} /> {/* Adjusted top for textarea icon */}
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Story (or just a hello!)"
            rows={5}
            required
            className={`${inputBaseStyle} pl-10 resize-none`}
            aria-label="Your Message"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center px-6 py-3.5 bg-hueneu-accent text-white font-heading font-semibold rounded-soft hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-hueneu-accent focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 ease-in-out shadow-subtle hover:shadow-md transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isLoading ? (
              <>
                <motion.div 
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2 animate-spin"
                  aria-label="Loading"
                />
                Sending...
              </>
            ) : (
              <>
                Let's design your story
                <Send className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Status Message */}
      <AnimatePresence>
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`mt-6 p-4 rounded-soft text-sm text-center flex items-center justify-center ${status.type === 'success' ? 'bg-green-100 text-green-700' : status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}
            role="alert"
          >
            {status.type === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
            {status.type === 'error' && <AlertTriangle className="w-5 h-5 mr-2" />}
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm;
