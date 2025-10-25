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
      tagline: 'Payment processing that keeps money in your community',
      description: 'Revolutionary payment platform that reinvests transaction fees back into local economies.',
      features: ['0.5% transaction fee', '70% reinvested locally', 'Real-time settlements', 'Multi-currency support']
    },
    {
      id: 'one',
      name: 'Wynaxa One',
      icon: '🔵',
      color: 'wynaxa-blue',
      tagline: 'All-in-one business management platform',
      description: 'Complete business suite combining payments, inventory, CRM, and analytics in one powerful platform.',
      features: ['Integrated POS system', 'Inventory management', 'Customer analytics', 'Business intelligence']
    },
    {
      id: 'eco',
      name: 'Wynaxa Eco',
      icon: '🟢',
      color: 'wynaxa-green',
      tagline: 'Sustainable commerce and impact tracking',
      description: 'Track and amplify your environmental impact while building a more sustainable business.',
      features: ['Carbon footprint tracking', 'Sustainability metrics', 'Green certifications', 'Impact reporting']
    },
    {
      id: 'foundry',
      name: 'Wynaxa Foundry',
      icon: '🟠',
      color: 'wynaxa-orange',
      tagline: 'Innovation lab for community-driven solutions',
      description: 'Co-create custom solutions tailored to your community specific needs and challenges.',
      features: ['Custom development', 'Community collaboration', 'Pilot programs', 'Innovation partnerships']
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
