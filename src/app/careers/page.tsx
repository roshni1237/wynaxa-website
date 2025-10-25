import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react'

export default function Careers() {
  const jobs = [
    { title: 'Senior Full-Stack Engineer', department: 'Engineering', location: 'Dublin / Remote', type: 'Full-time' },
    { title: 'Product Manager', department: 'Product', location: 'Dublin', type: 'Full-time' },
    { title: 'Community Success Manager', department: 'Operations', location: 'UK / Remote', type: 'Full-time' },
    { title: 'Marketing Lead', department: 'Marketing', location: 'Remote', type: 'Full-time' },
    { title: 'Data Analyst', department: 'Data', location: 'Dublin', type: 'Full-time' },
    { title: 'Business Development Representative', department: 'Sales', location: 'UK', type: 'Full-time' }
  ]

  const benefits = [
    'Competitive salary and equity',
    'Flexible remote work',
    'Health insurance',
    'Professional development budget',
    'Unlimited PTO',
    'Quarterly team offsites'
  ]

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-br from-wynaxa-purple/10 via-wynaxa-blue/10 to-wynaxa-green/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Careers at Wynaxa</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Build the Future with Us</h1>
            <p className="text-xl text-muted-foreground">Join our mission to empower communities through technology</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="flex flex-wrap gap-4 mt-2">
                        <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.type}</span>
                      </CardDescription>
                    </div>
                    <Link href="/contact">
                      <Button>Apply Now</Button>
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Why Join Wynaxa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="font-semibold">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Don't See a Perfect Fit?</h2>
            <p className="text-xl text-muted-foreground mb-8">We're always looking for talented individuals. Send us your CV and tell us how you'd like to contribute.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue">Get in Touch<ArrowRight className="ml-2 h-5 w-5" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
