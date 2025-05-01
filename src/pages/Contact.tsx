import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from 'lucide-react';
import FloatingObjects from '@/components/animations/FloatingObjects';
import AnimatedBackdrop from '@/components/animations/AnimatedBackdrop';
import { useToast } from "@/components/ui/use-toast";

const submitContactToGoogleSheets = async (data, webhookUrl) => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.ok;
  } catch (error) {
    console.error('Submission error:', error);
    return false;
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    contact: '',
    message: '',
  });

  const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzz_9nYMxFr2ghHkVyYf2SRhhqBhN4Kxtjyqd1L4ZY_XFUKOmr1JqMLCI_ivlGm8HRMhA/exec";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const contactData = { ...formData, date: new Date().toISOString() };

    const success = await submitContactToGoogleSheets(contactData, GOOGLE_SHEETS_WEBHOOK_URL);

    console.log('====================================');
    console.log(success);
    console.log('====================================');

    if (success) {
      toast({
        title: "Message sent",
        description: "Thank you for your message. We will get back to you soon!",
        duration: 3000,
      });
      setFormData({ name: '', email: '', subject: '', message: '', contact: '' });
    } else {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <AnimatedBackdrop 
          imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
          className="absolute inset-0"
        />
        <FloatingObjects count={10} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Contact</span> Us
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Have questions or ready to start your project? Reach out to our team today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-tech flex items-center justify-center text-white mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">techtrixtechnologies25@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-tech flex items-center justify-center text-white mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        Saravanampatti<br />
                        Coimbatore, 641035<br />
                        Tamil Nadu
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                        <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help you?" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact" className="text-sm font-medium">contact</label>
                      <Input id="contact" value={formData.contact} onChange={handleChange} placeholder="+91 9876543210" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your project..." rows={5} required />
                    </div>
                    <Button type="submit" className="btn-gradient text-white w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="aspect-[16/9] bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.5351626570123!2d76.99840587485834!3d11.08091558909959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582c3f6170b1%3A0xa967bc5b5a03d161!2sSaravanampatti%2C%20Coimbatore%2C%20Tamil%20Nadu%20641035%2C%20India!5e0!3m2!1sen!2sin!4v1714489609371!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Tech Trix Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
