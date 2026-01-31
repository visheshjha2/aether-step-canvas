import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { to: '/about', label: 'About Us' },
      { to: '/services', label: 'Services' },
      { to: '/contact', label: 'Contact' },
    ],
    legal: [
      { to: '#', label: 'Privacy Policy' },
      { to: '#', label: 'Terms of Service' },
      { to: '#', label: 'Cookie Policy' },
    ],
    support: [
      { to: '#', label: 'FAQ' },
      { to: '#', label: 'Shipping' },
      { to: '#', label: 'Returns' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-aether-charcoal border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-semibold tracking-tight text-foreground">
                Aether<span className="text-accent">Step</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Pioneering the future of footwear through innovation, sustainability, 
              and uncompromising design excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-label mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aether Step. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with passion for performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
