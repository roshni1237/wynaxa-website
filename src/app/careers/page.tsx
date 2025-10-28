"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin, Clock, Briefcase, X } from 'lucide-react'

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)

  const jobs = [
    {
      id: 'head-marketing',
      title: 'Head of Marketing',
      department: 'Marketing',
      location: 'Dublin (Hybrid)',
      type: 'Full-time',
      details: {
        overview: 'The Head of Marketing will be responsible for defining and executing Wynaxa\'s global marketing strategy, focusing on driving awareness, generating high-quality leads, and positioning our PAY, ONE, ECO, and FOUNDRY ecosystem as the leading solution for community growth. This role requires a blend of strategic planning and hands-on execution across digital marketing, content, and brand building.',
        responsibilities: [
          'Strategy & Brand: Develop and own the go-to-market strategy for all four pillars of the ecosystem. Manage and grow the Wynaxa brand identity and voice.',
          'Lead Generation: Design and implement data-driven B2B lead generation campaigns targeting Councils and Financial Institutions.',
          'Content & Digital: Oversee all content production (case studies, white papers, blog posts) and manage digital channels (SEO, SEM, social media).',
          'Partner Support: Create marketing collateral and pitch decks to enable the Sales and Partnerships team.'
        ],
        requirements: [
          '5+ years of B2B marketing experience, preferably in FinTech, PropTech, or community-focused technology.',
          'Proven success in building and scaling lead generation programs.',
          'Strong understanding of the public sector (Councils) and financial services landscape.'
        ]
      }
    },
    {
      id: 'head-sales',
      title: 'Head of Sales/Partnerships',
      department: 'Sales',
      location: 'Dublin (Hybrid)',
      type: 'Full-time',
      details: {
        overview: 'The Head of Sales/Partnerships will be the primary revenue driver, responsible for building and managing the sales pipeline and securing strategic partnerships across all four target segments: Councils, Financial Institutions, Community Groups, and Technology Partners. This role is critical for securing major contracts and adoption of the ecosystem.',
        responsibilities: [
          'Revenue Growth: Develop and implement a sales strategy to achieve aggressive revenue targets, focusing on high-value contracts with Councils and FIs.',
          'Partnership Management: Identify, qualify, negotiate, and close key strategic partnerships (Financial & Technology) that enhance the value of the Wynaxa ecosystem.',
          'Pipeline Management: Establish a robust CRM process and reporting structure for forecasting and pipeline health.',
          'Team Building: Recruit and mentor a future sales team as the company scales.'
        ],
        requirements: [
          '7+ years of B2B sales experience with a track record of closing complex, large-scale technology or platform deals.',
          'Demonstrable experience selling to either government/public sector clients or financial institutions.',
          'Exceptional negotiation and presentation skills.'
        ]
      }
    },
    {
      id: 'head-product',
      title: 'Head of Product',
      department: 'Product',
      location: 'Dublin (Hybrid)',
      type: 'Full-time',
      details: {
        overview: 'The Head of Product will serve as the strategic bridge between the business vision (CEO) and the technical architecture (CTO). This role is responsible for the full product lifecycle, ensuring the PAY, ONE, ECO, and FOUNDRY pillars evolve into market-leading, integrated solutions that solve real-world community and business problems.',
        responsibilities: [
          'Vision & Roadmap: Define the long-term product vision and maintain a clear, prioritised roadmap aligned with company strategy and investment goals.',
          'Discovery: Conduct market research, competitive analysis, and gather user feedback from Councils, FIs, and Community Groups to inform product development.',
          'Feature Definition: Work closely with the CTO and development team to translate market needs into detailed product requirements (epics, user stories).',
          'Metrics: Define and track key product success metrics (KPIs) like adoption, usage, and retention across the platform.'
        ],
        requirements: [
          '5+ years of product management experience, ideally in a platform, ecosystem, or multi-product environment.',
          'Proven ability to work with remote development teams and define clear, actionable specifications.',
          'Experience with Agile methodologies.'
        ]
      }
    },
    {
      id: 'community-success',
      title: 'Community Success Manager',
      department: 'Operations',
      location: 'UK (Remote)',
      type: 'Full-time',
      details: {
        overview: 'The Community Success Manager is the dedicated interface for our non-commercial partners, namely Community Groups and users of the ECO and ONE pillars. This role focuses on ensuring successful onboarding, high platform engagement, and maximizing the positive impact of Wynaxa within local communities, ultimately driving viral growth.',
        responsibilities: [
          'Onboarding & Support: Manage the onboarding process for new Community Group partners, ensuring rapid time-to-value and platform proficiency.',
          'Engagement & Retention: Proactively engage with existing groups and users to promote new features, gather feedback, and address support issues.',
          'Advocacy: Turn successful partners into advocates through case studies, testimonials, and local success stories.',
          'Local Strategy: Work with Sales/Marketing to identify local champions and opportunities for hyper-local expansion.'
        ],
        requirements: [
          '3+ years of experience in Community Management, Account Management, or Customer Success, ideally within a software or platform company.',
          'Exceptional empathy, communication, and relationship-building skills.',
          'Familiarity with the UK third sector/charity landscape is a strong plus.'
        ]
      }
    }
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
            {jobs.map((job) => (
              <Card key={job.id} className="hover-lift">
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
                    <Button onClick={() => setSelectedJob(job.id)}>View Details</Button>
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

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div>
                <CardTitle className="text-3xl">{jobs.find(j => j.id === selectedJob)?.title}</CardTitle>
                <CardDescription className="mt-2">
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{jobs.find(j => j.id === selectedJob)?.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{jobs.find(j => j.id === selectedJob)?.location}</span>
                  </div>
                </CardDescription>
              </div>
              <button onClick={() => setSelectedJob(null)} className="p-2 hover:bg-muted rounded-lg">
                <X className="h-6 w-6" />
              </button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">About the Role</h3>
                <p className="text-muted-foreground">{jobs.find(j => j.id === selectedJob)?.details.overview}</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {jobs.find(j => j.id === selectedJob)?.details.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-wynaxa-purple font-bold mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {jobs.find(j => j.id === selectedJob)?.details.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-wynaxa-blue font-bold mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground mb-4">Interested in this opportunity?</p>
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-wynaxa-purple to-wynaxa-blue w-full" onClick={() => setSelectedJob(null)}>
                    Apply via Email
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
