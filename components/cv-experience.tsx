import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Head of Digital / CTO",
    company: "M. Timotheatos & partners",
    period: "Nov 2024 - today",
    achievements: [
      "Delivered several software development projects",
      "Built and maintained the corporate website",
      "Managed the social media presence and tracked KPIs",
    ],
  },
  {
    title: "Technical Product Manager - Media",
    company: "Sitecore",
    period: "May 2024 - October 2024",
    achievements: [
      "Delivered AI features on asset analysis (e.g. photos, videos) and categorization which delighted our enterprise customers (e.g. Nestlé Global)",
      "Led the expansion to China across all Sitecore products with local CDNs and serverless",
      "Revamped the API documentation",
    ],
  },
  {
    title: "Technical Product Manager - Cloud Infrastructure",
    company: "Sitecore",
    period: "April 2022 - May 2024",
    achievements: [
      "Delivered an AI-powered assistant that leveraged Azure data and assisted in optimizing Compute costs by 15%",
      "Drove the modernisation of Cloud Infrastructure with industry best practices which improved performance and reduced Kubernetes costs by 30%",
      "Led and coordinated company-wide initiatives impacting 30+ Sitecore systems",
    ],
  },
  {
    title: "Requirements Analyst (Product) | API Integrations & MLOps",
    company: "Persado",
    period: "Aug 2018 - Dec 2021",
    achievements: [
      "Collaborated closely with Data Science and Data Engineering on AI/ML experiments and evaluated results",
      "Led the discovery and implementation of several API integrations for Persado's AI-generated content",
      "Aided Persado growth through expanding to 10+ new platforms and channels (e.g. mobile push notifications)",
      "Positioned integrations as a key differentiator in pre-sales engagements, contributing to enterprise deal wins",
    ],
  },
  {
    title: "Junior Requirements Analyst (Product) | Integrations",
    company: "Persado",
    period: "Aug 2016 - Jul 2018",
    achievements: [
      "Assisted in product discovery through KPI tracking, platform research and tool experimentation",
      "Responsible for L2 Product Support and integrations documentation",
    ],
  },
]

export function CVExperience() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className={`${exp.highlight ? "border-accent shadow-md" : ""}`}>
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-lg text-primary">{exp.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {exp.period}
                </Badge>
              </div>
              <p className="text-accent font-semibold">{exp.company}</p>
              {exp.company === "Sitecore" && (
                <p className="text-sm text-muted-foreground italic">
                  Sitecore is a leading provider in digital experience (DXP) software. It delivers a composable SaaS
                  platform leveraged by some of the world's largest brands.
                </p>
              )}
              {exp.company === "Persado" && (
                <p className="text-sm text-muted-foreground italic">
                  Persado has been awarded the 2024 award of the Best AI & Machine Learning Tech Firm by Acquisition
                  International.
                </p>
              )}
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground">
                    <span className="text-accent mt-1.5 text-xs">•</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
