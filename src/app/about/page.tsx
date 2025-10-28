import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const timeline = [
    { year: '2022', event: 'Founded in Bristol', description: 'Wynaxa was born from a vision to transform local commerce' },
    { year: '2025', event: 'Ireland HQ Established', description: 'Expanded operations with our European headquarters' },
    { year: '2026', event: 'India Branch Opening', description: 'Launching operations in India to serve the Asia-Pacific region' },
    { year: '2024+', event: 'Global Expansion', description: 'Scaling to 100+ communities and expanding internationally' }
  ]

  const values = [
    { title: 'Inspired', description: 'We believe in the power of innovation to create positive change' },
    { title: 'Trusted', description: 'Building transparent, reliable technology that communities can depend on' },
    { title: 'Futuristic', description: 'Always looking ahead to anticipate tomorrow needs' },
    { title: 'Hopeful', description: 'Optimistic about technology potential to unite communities' },
    { title: 'Community-Led', description: 'Putting local voices at the center of everything we build' }
  ]

  const team = [
    { 
      name: 'Christian Shanahan', 
      title: 'Founder & CEO', 
      bio: 'Visionary leader with a passion for community-driven technology', 
      linkedin: 'https://www.linkedin.com/in/christianshanahan',
      photo: '/images/team/christian-shanahan.png'
    },
    { 
      name: 'Roshni Patel', 
      title: 'Chief Technology Officer', 
      bio: 'Technology innovator focused on scalable, sustainable solutions', 
      linkedin: 'https://www.linkedin.com/in/roshnipatelb',
      photo: '/images/team/roshni-patel.jpg'
    },
    { 
      name: 'Mike Todd', 
      title: 'Head of Wynaxa Pay', 
      bio: 'Fintech expert revolutionizing local payment systems', 
      linkedin: '#',
      photo: null
    }
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">About Wynaxa</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">We are not just building products we are shaping a movement</h1>
            <p className="text-xl text-muted-foreground">Wynaxa exists to empower communities through technology that creates real lasting value</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="text-3xl font-bold text-wynaxa-purple mb-2">{item.year}</div>
                  <CardTitle>{item.event}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-6">To create technology that empowers local communities, strengthens economies, and builds a more connected sustainable future.</p>
              <p className="text-lg text-muted-foreground">We believe that the best solutions come from the communities they serve. That is why we build tools that put power back in local hands.</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Values</h2>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  {member.photo ? (
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image 
                        src={member.photo} 
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-wynaxa-purple to-wynaxa-blue" />
                  )}
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-wynaxa-purple">{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  {member.linkedin && member.linkedin !== '#' ? (
                    <a 
                      href={member.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-wynaxa-blue hover:underline"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      <Linkedin className="inline mr-2 h-4 w-4" />
                      LinkedIn
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">We are always looking for talented individuals who share our vision</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg" className="bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">View Open Positions<ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}