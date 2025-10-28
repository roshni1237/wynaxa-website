import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export default function Ecosystem() {
  const products = [
    {
      id: 'pay',
      name: 'Wynaxa Pay',
      icon: '🟣',
      color: 'wynaxa-purple',
      tagline: 'Payment processing that keeps money where it matters — in your community',
      description: 'A revolutionary e-money payment platform that reinvests part of every transaction fee back into the local economy. Designed to reduce payment costs for merchants, provide faster settlements, and create measurable community impact — all while maintaining full regulatory compliance and financial transparency.',
      features: ['0.2–2% transaction fees', '25% of fees reinvested locally', 'Real-time settlements', 'Multi-currency and multi-wallet support', 'FCA-regulated and fully segregated customer accounts']
    },
    {
      id: 'one',
      name: 'Wynaxa One',
      icon: '🔵',
      color: 'wynaxa-blue',
      tagline: 'All your hospitality tools — unified in one powerful platform',
      description: 'A complete business suite for the hospitality industry. Reservation and event bookings, Click & Collect, Takeaway, Point of Sale, customer analytics, and business intelligence — all connected, all on one subscription, and one transparent transaction cost. Built to simplify operations, boost profitability, and help independent venues thrive.',
      features: ['Reservation, event, and table bookings', 'Click & Collect and Takeaway management', 'Integrated Point of Sale (POS)', 'Customer analytics & business intelligence', 'One platform. One login. One transaction cost.']
    },
    {
      id: 'eco',
      name: 'Wynaxa Eco',
      icon: '🟢',
      color: 'wynaxa-green',
      tagline: 'Sustainable commerce and impact tracking for a greener future',
      description: 'Empower your business to operate sustainably with built-in tools for carbon tracking, sustainability reporting, and access to an exclusive marketplace for eco-friendly products. WYNAXA ECO helps hospitality businesses reduce their footprint while increasing transparency, compliance, and customer trust.',
      features: ['Carbon footprint tracking', 'Sustainability metrics & reporting', 'Green certifications & compliance', 'Eco-commerce marketplace for sustainable supplies']
    },
    {
      id: 'foundry',
      name: 'Wynaxa Foundry',
      icon: '🟠',
      color: 'wynaxa-orange',
      tagline: 'Innovation for a better tomorrow, built together',
      description: 'Wynaxa Foundry is our in-house innovation lab — where new ideas meet real-world impact. We collaborate with local businesses, technologists, and community leaders to design, test, and scale digital solutions that help both people and places thrive.',
      features: ['Custom Development', 'Pilot Programs', 'Community Collaboration', 'Innovation Partnerships']
    }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">The Wynaxa Ecosystem</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Four products one connected mission</h1>
            <p className="text-xl text-muted-foreground">Built to empower local economies through technology</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-20">
          {products.map((product, index) => (
            <div key={product.id} id={product.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div>
                <div className="text-6xl mb-6">{product.icon}</div>
                <h2 className={`text-4xl font-bold mb-4 text-${product.color}`}>{product.name}</h2>
                <p className="text-xl text-muted-foreground mb-6">{product.tagline}</p>
                <p className="text-lg mb-8">{product.description}</p>
                <div className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full bg-${product.color}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button className={`bg-${product.color}`}>Learn More</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">Request Demo</Button>
                  </Link>
                </div>
              </div>
              <Card className="hover-lift">
                <CardContent className="p-12">
                  <div className={`w-full h-64 rounded-lg bg-gradient-to-br from-${product.color}/20 to-${product.color}/5`} />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">Join hundreds of businesses already using Wynaxa to transform their communities</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Get Started<ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/investors">
                <Button size="lg" variant="outline">Investment Opportunities</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
