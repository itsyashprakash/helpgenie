"use client"

import React from 'react';
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Users, Headphones, Zap, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { ConsultationModal } from "@/components/consultation-modal"
import { AboutDialog } from "@/components/about-dialog"
import { TermsDialog } from "@/components/terms-dialog"

export default function ITServicesLanding() {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isConsultationOpen, setIsConsultationOpen] = React.useState(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);
  const [isTermsOpen, setIsTermsOpen] = React.useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!form.current) return
    
    setLoading(true)
    setSubmitStatus('idle')

    const formData = new FormData(form.current)
    const currentDate = new Date()
    
    const templateParams = {
      // Template variables for the email
      name: `${formData.get('first_name')} ${formData.get('last_name')} \n ${formData.get('email')}`,
      email: formData.get('email'),
      company_name: formData.get('company') || 'Not provided',
      message: formData.get('message'),
      // Additional context for the support team
      service_type: 'General Inquiry',
      priority: 'Standard',
      source: 'Website Contact Form'
    }

    try {
      await emailjs.send(
        'service_291u1bk', // Your service ID
        'template_wv4ma1m', // Custom template ID
        templateParams,
        's-cu2PapL0TDxCaFc' // Your public key
      )
      
      setSubmitStatus('success')
      console.log(templateParams.email);
      form.current?.reset()
    } catch (error) {
      console.error('Failed to send message:', error)
      setSubmitStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">HelpGenie</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <button 
              onClick={() => setIsAboutOpen(true)}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  Professional Support Services in all kinds of Apps & Games
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Reliable Support
                  <span className="text-blue-600"> When You Need It</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Professional customer support services with flexible retainer plans.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="#pricing" className="inline-flex">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    View Pricing Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <ConsultationModal>
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Start Free Consultation
                  </Button>
                </ConsultationModal>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Our Support Services?
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
                We provide comprehensive support services designed to keep your business running smoothly.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">
                  Round-the-clock support with flexible hour packages to match your business needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Certified professionals with years of experience in customer support and technical solutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-600">
                  Quick resolution times with proactive monitoring and immediate issue escalation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Support Services
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
                Comprehensive support solutions tailored to your specific needs
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Application Support */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <CardTitle>Application Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Expert support for all your business applications, ensuring smooth operation and quick issue resolution.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Remote assistance for smooth application operation.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Efficiently resolves general usage queries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Enhances overall user satisfaction.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Technical Support */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <CardTitle>Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive technical assistance for all your infrastructure and system needs.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Hardware and software troubleshooting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Network and connectivity issues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>System maintenance and updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Player Support */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M12 22.08V12" />
                    </svg>
                  </div>
                  <CardTitle>Player Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Dedicated support for gaming platforms and player-related inquiries.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Helps with in-game issues, account problems, and general queries.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Identifies and reports bugs to your development team.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Provides empathetic support for community interactions.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
                Choose the retainer plan that fits your business needs. No hidden fees, no surprises.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Standard Plan */}
              <Card className="relative border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Standard Support</CardTitle>
                  <CardDescription className="text-lg">Perfect for small to medium businesses</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">$5</span>
                    <span className="text-gray-600">/hour</span>
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mt-2">
                    9 Hours/Day Coverage
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>9 hours daily support coverage</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Email and chat support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Basic troubleshooting</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Weekly KPI report</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Standard response time: 2-4 hours</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Contact Sales</Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative border-2 border-blue-500 hover:border-blue-600 transition-colors">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 hover:bg-blue-700">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">Premium Support</CardTitle>
                  <CardDescription className="text-lg">Ideal for growing businesses</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">$6</span>
                    <span className="text-gray-600">/hour</span>
                  </div>
                  <Badge className="w-fit mx-auto mt-2 bg-blue-600">12 Hours/Day Coverage</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>12 hours daily support coverage</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Priority email & chat support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Social Media Support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Advanced troubleshooting</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Daily KPI report</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Priority response time: 1-2 hours</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Need a custom solution?{" "}
                <Link href="#contact" className="text-blue-600 hover:underline">
                  Contact us
                </Link>{" "}
                for enterprise pricing.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                  Join hundreds of businesses that trust us with their customer support needs. Get started today with a free
                  consultation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <ConsultationModal>
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Start Free Consultation
                  </Button>
                </ConsultationModal>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
              <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
                Ready to discuss your support needs? Contact us today for a personalized consultation.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-gray-600">helpgenie.contact@gmail.com</p>
                  </div>
                </div>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-green-700 font-medium">Message sent successfully!</span>
                        </div>
                        <p className="text-green-600 text-sm mt-1">We'll get back to you within 24 hours.</p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                        <div className="flex items-center">
                          <span className="text-red-700 font-medium">Failed to send message</span>
                        </div>
                        <p className="text-red-600 text-sm mt-1">Please try again or contact us directly at helpgenie.contact@gmail.com</p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                        <Input id="first-name" name="first_name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                        <Input id="last-name" name="last_name" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company</label>
                      <Input id="company" name="company" placeholder="Your Company" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your customer support needs..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container px-4 md:px-6 py-8 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="font-bold">HelpGenie</span>
              </div>
              <p className="text-sm text-gray-600">
                Professional support services with flexible retainer plans for businesses of all sizes.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#services" className="hover:text-blue-600">
                    Application Support
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-blue-600">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-blue-600">
                    Player Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <button 
                    onClick={() => setIsAboutOpen(true)}
                    className="hover:text-blue-600 text-left w-full text-sm text-gray-600"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-blue-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {/* <li>
                  <Link href="#" className="hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li> */}
                <li>
                  <button 
                    onClick={() => setIsTermsOpen(true)}
                    className="hover:text-blue-600 text-left w-full text-sm text-gray-600"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} HelpGenie. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 s:mt-0">
              {/* <Link href="#" className="text-gray-400 hover:text-blue-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link> */}
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ConsultationModal>
        {null}
      </ConsultationModal>
      <AboutDialog 
        open={isAboutOpen} 
        onOpenChange={setIsAboutOpen} 
      />
      <TermsDialog
        open={isTermsOpen}
        onOpenChange={setIsTermsOpen}
      />
    </div>
  )
}