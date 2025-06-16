import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Zap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" size={24} />,
      title: "Email",
      value: "vigneshnarayanan2003@gmail.com",
      link: "mailto:vigneshnarayanan2003@gmail.com",
      gradient: "from-red-600 to-red-700"
    },
    {
      icon: <Phone className="text-white" size={24} />,
      title: "Phone",
      value: "+91 8825971764",
      link: "tel:+918825971764",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: "Location",
      value: "Chennai, India",
      link: "#",
      gradient: "from-red-700 to-red-800"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="text-white" size={24} />,
      name: "GitHub",
      url: "https://github.com/vignesh-244",
      gradient: "from-red-600 to-red-700"
    },
    {
      icon: <Linkedin className="text-white" size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/vignesh-s-322b531b0",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <Mail className="text-white" size={24} />,
      name: "Email",
      url: "mailto:vigneshnarayanan2003@gmail.com",
      gradient: "from-red-700 to-red-800"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full">
            <Mail className="text-red-400" size={20} />
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm font-montserrat">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-oswald font-black mb-6 text-white uppercase tracking-wider">
            CONTACT <span className="gradient-text-red">ME</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-montserrat">
            Let's 
            <span className="font-bold text-red-400"> collaborate</span> and 
            <span className="font-bold text-red-300"> create something amazing</span> together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover bg-gray-900/80 backdrop-blur-sm border border-red-500/20 shadow-xl hover:border-red-500/50 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-red-400" size={28} />
                <h3 className="text-2xl font-oswald font-bold text-white uppercase tracking-wide">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/90 font-montserrat font-semibold">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-black/50 border-red-500/30 text-white focus:border-red-500 focus:ring-red-500/20"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/90 font-montserrat font-semibold">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-black/50 border-red-500/30 text-white focus:border-red-500 focus:ring-red-500/20"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white/90 font-montserrat font-semibold">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-black/50 border-red-500/30 text-white focus:border-red-500 focus:ring-red-500/20"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/90 font-montserrat font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-black/50 border-red-500/30 text-white focus:border-red-500 focus:ring-red-500/20 min-h-[120px]"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-3 font-montserrat font-bold uppercase tracking-wider"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover bg-gray-900/80 backdrop-blur-sm border border-red-500/20 shadow-xl hover:border-red-500/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-br ${info.gradient} w-12 h-12 rounded-lg flex items-center justify-center shadow-lg`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-oswald font-bold text-white uppercase tracking-wide">
                          {info.title}
                        </h4>
                        <a 
                          href={info.link}
                          className="text-red-400 hover:text-red-300 transition-colors font-montserrat font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="card-hover bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 shadow-xl hover:border-red-500/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-oswald font-bold text-white uppercase tracking-wide mb-6">Connect With Me</h3>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-red-500/20 hover:border-red-500/40 hover:bg-red-500/5 transition-all duration-300 group"
                    >
                      <div className={`bg-gradient-to-br ${social.gradient} w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {social.icon}
                      </div>
                      <span className="text-white/90 font-montserrat font-semibold group-hover:text-red-400 transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-red-500 animate-pulse" size={24} />
            <span className="text-lg text-white/80 font-montserrat font-medium tracking-wider uppercase">Let's Build Something Great</span>
            <Zap className="text-red-500 animate-pulse" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
