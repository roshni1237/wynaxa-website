"use client"

import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, Globe, Sprout, Sparkles, Zap, Target, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useEffect, useState } from 'react'

export default function Home() {
  const [stats, setStats] = useState({
    businesses: 0,
    communities: 0,
    funds: 0,
    carbon: 0
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const targetStats = {
      businesses: 500,
      communities: 50,
      funds: 2000000,
      carbon: 150000
    }

    const duration = 2500
    const steps = 80
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = Math.min(currentStep / steps, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setStats({
        businesses: Math.floor(targetStats.businesses * easeOut),
        communities: Math.floor(targetStats.communities * easeOut),
        funds: Math.floor(targetStats.funds * easeOut),
        carbon: Math.floor(targetStats.carbon * easeOut)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `£${(num / 1000000).toFixed(1)}M`
    }
    return num.toLocaleString()
  }

  const ecosystemCards = [
    {
      id: 'pay',
      icon: '🟣',
      title: 'Wynaxa Pay',
      description: 'Payment processing that keeps money in your community',
      color: 'purple',
      features: ['0.5% fees', '70% local reinvestment', 'Real-time settlements']
    },
    {
      id: 'one',
      icon: '🔵',
      title: 'Wynaxa One',
      description: 'All-in-one business management platform',
      color: 'blue',
      features: ['Integrated POS', 'Inventory management', 'Customer analytics']
    },
    {
      id: 'eco',
      icon: '🟢',
      title: 'Wynaxa Eco',
      description: 'Sustainable commerce and impact tracking',
      color: 'green',
      features: ['Carbon tracking', 'Sustainability metrics', 'Impact reporting']
    },
    {
      id: 'foundry',
      icon: '🟠',
      title: 'Wynaxa Foundry',
      description: 'Innovation lab for community-driven solutions',
      color: 'orange',
      features: ['Custom development', 'Community collaboration', 'Pilot programs']
    }
  ]

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Real-time processing and instant settlements for seamless transactions'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Locally Focused',
      description: 'Keep money circulating in your community, building local wealth'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Impact Driven',
      description: 'Every product we build creates measurable, positive change.'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Future Ready',
      description: 'Built on cutting-edge technology for sustainable growth'
    }
  ]

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-wynaxa-purple/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-wynaxa-blue/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-wynaxa-green/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10 container-padding">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 text-sm sm:text-base px-4 py-2 bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue shadow-lg">
              <Sparkles className="mr-2 h-4 w-4" />
              Building the Future of Local Commerce
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="gradient-text">The Future,</span>
              <br />
              <span className="gradient-text">Connected Locally</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Empowering communities through technology that redefines how we connect, pay, and grow together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link href="/ecosystem" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue hover:shadow-2xl text-base sm:text-lg px-8 py-6 sm:px-10 sm:py-7">
                  Explore Our World
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </Link>
              <Link href="/investor-access" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full text-base sm:text-lg px-8 py-6 sm:px-10 sm:py-7 border-2">
                  Investor Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - NEW */}
      <section className="section-padding bg-white dark:bg-background">
        <div className="container container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group border-2 hover:border-wynaxa-purple/50 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="pt-8 text-center">
                  <div className="text-wynaxa-purple mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Preview - Enhanced */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-wynaxa-blue to-wynaxa-green">Four Connected Products</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              The Wynaxa Ecosystem
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete suite of tools designed to empower local economies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {ecosystemCards.map((card, index) => (
              <Link key={card.id} href={`/ecosystem#${card.id}`}>
                <Card className={`group cursor-pointer border-2 hover:border-wynaxa-${card.color}/50 bg-gradient-to-br from-background to-wynaxa-${card.color}/5 h-full`}>
                  <CardHeader className="space-y-4">
                    <div className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                    <div>
                      <CardTitle className={`text-wynaxa-${card.color} text-xl sm:text-2xl mb-2`}>{card.title}</CardTitle>
                      <CardDescription className="text-base">{card.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className={`h-1.5 w-1.5 rounded-full bg-wynaxa-${card.color}`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/ecosystem">
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-8 py-6 border-2">
                Explore the Full Ecosystem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats - Enhanced */}
      <section className="section-padding bg-gradient-to-r from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Impact — Just the Beginning</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">Our technology is built to make every transaction count. As we launch, our impact goals are clear — and we'll share the data as it grows.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="border-2 bg-gradient-to-br from-background to-wynaxa-purple/10 hover:shadow-2xl transition-all duration-500">
              <CardContent className="pt-8 text-center">
                <Users className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-wynaxa-purple" />
                <div className="text-2xl sm:text-3xl font-bold mb-2 text-wynaxa-purple">500+</div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">On track to empower independent businesses</p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-background to-wynaxa-blue/10 hover:shadow-2xl transition-all duration-500">
              <CardContent className="pt-8 text-center">
                <Globe className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-wynaxa-blue" />
                <div className="text-2xl sm:text-3xl font-bold mb-2 text-wynaxa-blue">50+</div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">Building connections across local communities</p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-background to-wynaxa-green/10 hover:shadow-2xl transition-all duration-500">
              <CardContent className="pt-8 text-center">
                <TrendingUp className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-wynaxa-green" />
                <div className="text-2xl sm:text-3xl font-bold mb-2 text-wynaxa-green">Millions</div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">Aiming to reinvest into local economies</p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-background to-wynaxa-orange/10 hover:shadow-2xl transition-all duration-500">
              <CardContent className="pt-8 text-center">
                <Sprout className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-wynaxa-orange" />
                <div className="text-2xl sm:text-3xl font-bold mb-2 text-wynaxa-orange">Committed</div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">To reducing carbon impact across our network</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Block - Enhanced */}
      <section className="section-padding bg-gradient-to-br from-wynaxa-purple/5 via-background to-wynaxa-blue/5">
        <div className="container container-padding">
          <div className="max-w-4xl mx-auto text-center glass p-8 sm:p-12 lg:p-16 rounded-3xl">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              <span className="gradient-text">
                "Technology should bring people closer, not drive them apart. We build tools for local connection, not corporate extraction."
              </span>
            </blockquote>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Our mission is to empower communities through technology that creates real value for local economies
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="section-padding">
        <div className="container container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <Card className="group hover-lift border-2 bg-gradient-to-br from-wynaxa-purple/10 to-wynaxa-blue/10">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl">Invest in the Future</CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  Join us in building the next generation of community-focused technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/investors">
                  <Button size="lg" className="w-full bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue hover:shadow-2xl text-base sm:text-lg py-6">
                    Learn About Investment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover-lift border-2 bg-gradient-to-br from-wynaxa-green/10 to-wynaxa-orange/10">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl">Partner with Us</CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  Collaborate to create sustainable impact in your community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/products">
                  <Button size="lg" className="w-full border-2 text-base sm:text-lg py-6" variant="outline">
                    Explore Partnerships
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
