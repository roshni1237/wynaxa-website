"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   alert('Thank you for your message! We will get back to you soon.')
  //   setFormData({ name: '', email: '', subject: '', message: '' })
  // }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    if (data.success) {
      alert('Thank you! We will get back to you within 24-48 hours.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  } catch (error) {
    alert('Failed to send. Please try again.')
  }
}

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Contact Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-muted-foreground">Get in touch with our team to discuss how Wynaxa can help your community</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-2 border rounded-md">
                    <option value="">Select a topic</option>
                    <option value="investor">Investor Inquiry</option>
                    <option value="partner">Partnership</option>
                    <option value="career">Career Opportunity</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} className="w-full px-4 py-2 border rounded-md" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Send Message</Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-wynaxa-purple" />Dublin HQ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Dublin Ireland</p>
                  <a href="mailto:info@wynaxa.com" className="flex items-center gap-2 text-wynaxa-blue hover:underline mt-2">
                    <Mail className="h-4 w-4" />info@wynaxa.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5 text-wynaxa-green" />🇮🇳 Surat India</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Surat Gujarat India</p>
                  <a href="mailto:india@wynaxa.com" className="flex items-center gap-2 text-wynaxa-blue hover:underline mt-2">
                    <Mail className="h-4 w-4" />india@wynaxa.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="https://www.linkedin.com/company/wynaxa" className="flex items-center gap-2 text-wynaxa-blue hover:underline">
                    <Linkedin className="h-4 w-4" />LinkedIn
                  </a>
                  <a href="https://www.instagram.com/wynaxa_/" className="flex items-center gap-2 text-wynaxa-purple hover:underline">
                    <Instagram className="h-4 w-4" />Instagram
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
