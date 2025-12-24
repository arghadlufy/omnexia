"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
} from "@hugeicons/core-free-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Solution", href: "#solution" },
    { label: "Customers", href: "#customers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Help", href: "#help" },
    { label: "About", href: "#about" },
  ],
  solution: [
    { label: "Startup", href: "#startup" },
    { label: "Freelancers", href: "#freelancers" },
    { label: "Organizations", href: "#organizations" },
    { label: "Students", href: "#students" },
    { label: "Collaboration", href: "#collaboration" },
    { label: "Design", href: "#design" },
    { label: "Management", href: "#management" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Press", href: "#press" },
    { label: "Contact", href: "#contact" },
    { label: "Help", href: "#help" },
  ],
  legal: [
    { label: "Licence", href: "#licence" },
    { label: "Privacy", href: "#privacy" },
    { label: "Cookies", href: "#cookies" },
    { label: "Security", href: "#security" },
  ],
};

const socialLinks = [
  { icon: TwitterIcon, href: "https://twitter.com/omnexia", label: "Twitter" },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/company/omnexia",
    label: "LinkedIn",
  },
  {
    icon: FacebookIcon,
    href: "https://facebook.com/omnexia",
    label: "Facebook",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/omnexia",
    label: "Instagram",
  },
  { icon: TiktokIcon, href: "https://tiktok.com/@omnexia", label: "TikTok" },
];

export function FooterSection() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section - Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-border">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <HugeiconsIcon icon={social.icon} className="size-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Main Navigation and Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pt-8 pb-8">
          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Solution</h3>
            <ul className="space-y-3">
              {footerLinks.solution.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <form className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-muted/50 border-border"
                />
                <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90">
                  Submit
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Don&apos;t miss any update!
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright and Language Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Omnexia, All rights reserved
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Select defaultValue="english">
              <SelectTrigger className="w-[120px] bg-muted/50 border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
