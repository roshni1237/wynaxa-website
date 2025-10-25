import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Building, Landmark, Users, Zap } from 'lucide-react'

export default function Products() {
  const partnerships = [
    { icon: <Building className="h-12 w-12" />, title: 'For Councils', description: 'Partner with us to drive local economic development and community engagement' },
    { icon: <Landmark className="h-12 w-12" />, title: 'For Financial Institutions', description: 'Integrate our technology to enhance your community banking offerings' },
    { icon: <Users className="h-12 w-12" />, title: 'For Community Groups', description: 'Leverage our platform to strengthen local networks and businesses' },
    { icon: <Zap className="h-12 w-12" />, title: 'For Technology Partners', description: 'Build on our ecosystem to create innovative community solutions' }
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
            {partnerships.map((partner, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="text-wynaxa-purple mb-4">{partner.icon}</div>
                  <CardTitle>{partner.title}</CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contact">
                    <Button className="w-full">Learn More</Button>
                  </Link>
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
    </div>
  )
}
