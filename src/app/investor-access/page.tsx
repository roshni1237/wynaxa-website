"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Lock, FileText, TrendingUp, Users } from 'lucide-react'

export default function InvestorAccess() {
  const [accessGranted, setAccessGranted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', linkedin: '' })

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setAccessGranted(true)
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/investor-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (data.success) {
        setAccessGranted(true)
      }
    } catch (error) {
      alert('Failed to submit request. Please try again.')
    }
  }

  if (!accessGranted) {
    return (
      <div className="flex flex-col">
        <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <Lock className="h-12 w-12 mx-auto mb-4 text-wynaxa-purple" />
                  <CardTitle className="text-3xl">Investor Access</CardTitle>
                  <CardDescription>Request access to our complete investor materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input type="text" required value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                      <input type="url" value={formData.linkedin} onChange={(e) => setFormData({...formData, linkedin: e.target.value})} className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" required className="mt-1" />
                      <label className="text-sm text-muted-foreground">I acknowledge that I will receive confidential information and agree to maintain its confidentiality</label>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Request Access</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Investor Portal</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Wynaxa Investor Access</h1>
            <p className="text-xl text-muted-foreground">Your gateway to comprehensive investment materials</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <FileText className="h-12 w-12 text-wynaxa-purple mb-4" />
                <CardTitle>Pitch Deck</CardTitle>
                <CardDescription>Complete investor presentation with financials and roadmap</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact">
                  <Button className="w-full">Download PDF</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-wynaxa-blue mb-4" />
                <CardTitle>Financial Projections</CardTitle>
                <CardDescription>Detailed 5-year financial model and assumptions</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact">
                  <Button className="w-full">View Financials</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Users className="h-12 w-12 text-wynaxa-green mb-4" />
                <CardTitle>Team Bios</CardTitle>
                <CardDescription>Background on our leadership and advisory board</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/about">
                  <Button className="w-full">Meet the Team</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Lock className="h-12 w-12 text-wynaxa-orange mb-4" />
                <CardTitle>Data Room</CardTitle>
                <CardDescription>Legal documents, contracts, and due diligence materials</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact">
                  <Button className="w-full">Access Data Room</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
