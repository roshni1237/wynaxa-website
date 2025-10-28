"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Building, Landmark, Users, Zap, X } from 'lucide-react'

export default function Products() {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null)

  const partnerships = [
    {
      id: 'councils',
      icon: <Building className="h-12 w-12" />,
      title: 'For Councils',
      description: 'Partner with us to drive local economic development and community engagement',
      fullContent: {
        heading: 'Drive Local Prosperity with Wynaxa',
        description: 'Unlock new pathways for economic development and civic engagement in your municipality. Our comprehensive ecosystem can provide digital tools to boost local commerce, streamline community services, and foster stronger resident participation. Partner with us to create a more vibrant, connected, and resilient local economy powered by Wynaxa.',
        cta: 'Ready to transform your community? Contact us to explore a Council Partnership today.'
      }
    },
    {
      id: 'financial',
      icon: <Landmark className="h-12 w-12" />,
      title: 'For Financial Institutions',
      description: 'Integrate our technology to enhance your community banking offerings',
      fullContent: {
        heading: 'Elevate Your Community Banking Experience',
        description: 'Stay competitive and deepen customer loyalty by seamlessly integrating Wynaxa\'s innovative technology. Enhance your local banking offerings with cutting-edge tools that empower small businesses and residents, reinforcing your role as a true community partner. Integrate with our ecosystem to deliver the future of local finance.',
        cta: 'Let\'s enhance your service portfolio. Reach out now to discuss Financial Institution integration.'
      }
    },
    {
      id: 'community',
      icon: <Users className="h-12 w-12" />,
      title: 'For Community Groups',
      description: 'Leverage our platform to strengthen local networks and businesses',
      fullContent: {
        heading: 'Strengthen Your Network and Local Impact',
        description: 'Amplify your mission and connect your members with the resources they need to thrive. By leveraging the Wynaxa platform, your group can create a more powerful, interactive network that supports local businesses, drives collaboration, and strengthens the fabric of your community.',
        cta: 'Ready to empower your network? Get in touch to start a Community Group collaboration.'
      }
    },
    {
      id: 'tech',
      icon: <Zap className="h-12 w-12" />,
      title: 'For Technology Partners',
      description: 'Build on our ecosystem to create innovative community solutions',
      fullContent: {
        heading: 'Build the Future of Community Solutions with Wynaxa',
        description: 'Tap into the power of our PAY, ONE, ECO, and FOUNDRY ecosystem. Integrate your technology, leverage our APIs, and co-create innovative, scalable solutions that address pressing community needs. Become a strategic technology partner and help us build the next generation of local digital infrastructure.',
        cta: 'Have a great idea for our ecosystem? Contact us to join our Technology Partner program.'
      }
    }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Product Partnerships</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Build the Future Together</h1>
            <p className="text-xl text-muted-foreground">Partner with Wynaxa to create lasting impact in your community</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner) => (
              <Card key={partner.id} className="hover-lift">
                <CardHeader>
                  <div className="text-wynaxa-purple mb-4">{partner.icon}</div>
                  <CardTitle>{partner.title}</CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => setSelectedPartner(partner.id)}>Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Start a Conversation</h2>
            <p className="text-xl text-muted-foreground mb-8">Let's discuss how we can work together to strengthen your community</p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Contact Our Team<ArrowRight className="ml-2 h-5 w-5" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div>
                <CardTitle className="text-3xl">{partnerships.find(p => p.id === selectedPartner)?.fullContent.heading}</CardTitle>
              </div>
              <button onClick={() => setSelectedPartner(null)} className="p-2 hover:bg-muted rounded-lg">
                <X className="h-6 w-6" />
              </button>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {partnerships.find(p => p.id === selectedPartner)?.fullContent.description}
              </p>
              <div className="border-t pt-6">
                <p className="text-base mb-4 font-medium">
                  {partnerships.find(p => p.id === selectedPartner)?.fullContent.cta}
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue" onClick={() => setSelectedPartner(null)}>
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
