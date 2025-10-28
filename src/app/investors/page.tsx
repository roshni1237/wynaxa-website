"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Users, Globe, Target } from 'lucide-react'

export default function Investors() {
  const investment = {
    round: 'Series A',
    amount: '£2.2M GBP',
    valuation: '£5.2M Pre-money',
    use: [
      'Product development and innovation',
      'Market expansion across UK and Europe',
      'Team growth and talent acquisition',
      'Marketing and community engagement'
    ]
  }

  const metrics = [
    { icon: <Users className="h-12 w-12" />, value: '87,000', label: 'Tested Orders So Far', color: 'wynaxa-purple' },
    { icon: <Globe className="h-12 w-12" />, value: '£1.4M', label: 'Tested Live Transactions', color: 'wynaxa-blue' },
    { icon: <TrendingUp className="h-12 w-12" />, value: '£1.2M', label: 'Invested Raised To-Date', color: 'wynaxa-green' },
    { icon: <Target className="h-12 w-12" />, value: '95%', label: 'Customer Satisfaction', color: 'wynaxa-orange' }
  ]

  const advantages = [
    { icon: '🎯', title: 'First-Mover Advantage', description: 'Pioneer in community-focused fintech combining payments sustainability and local impact' },
    { icon: '📈', title: 'Scalable Model', description: 'Platform approach enables rapid expansion across communities with minimal marginal costs' },
    { icon: '🌍', title: 'ESG Aligned', description: 'Strong environmental social and governance credentials attracting impact-focused investors' },
    { icon: '💡', title: 'Innovation Pipeline', description: 'Continuous development through Wynaxa Foundry ensuring long-term competitive advantage' }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Investment Opportunity</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Invest in the Future of Local Commerce</h1>
            <p className="text-xl text-muted-foreground mb-8">Join us in building technology that creates lasting value for communities worldwide</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investor-access">
                <Button size="lg" className="bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Access Full Pitch Deck<ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Schedule a Meeting</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Traction</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <div className={`text-${metric.color} mb-4 flex justify-center`}>{metric.icon}</div>
                  <div className="text-4xl font-bold mb-2">{metric.value}</div>
                  <p className="text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Why Wynaxa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="text-3xl mb-2">{advantage.icon}</div>
                  <CardTitle>{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-3xl">Current Investment Round</CardTitle>
                <CardDescription>Series A Funding Opportunity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Round</div>
                    <div className="text-2xl font-bold">{investment.round}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Raising</div>
                    <div className="text-2xl font-bold text-wynaxa-purple">{investment.amount}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Valuation</div>
                    <div className="text-2xl font-bold text-wynaxa-blue">{investment.valuation}</div>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Use of Funds</h3>
                  <ul className="space-y-2">
                    {investment.use.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-wynaxa-purple" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-xl text-muted-foreground mb-8">Access our complete investor materials and schedule a conversation with our team</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investor-access">
                <Button size="lg" className="bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Request Access to Pitch Deck<ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">Meet the Team</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
