import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    title: "Applied Software Engineering Specialization",
    provider: "IBM",
    description: "Built AI-powered applications",
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    provider: "IBM",
  },
  {
    title: "Advanced Product Management: Leadership and Communication",
    provider: "Udemy",
  },
  {
    title: "Introduction to UX Design",
    provider: "Georgia Institute of Technology",
  },
  {
    title: "Innovation & Entrepreneurship course",
    provider: "Technical University of Turin, Italy",
  },
  {
    title: "Professional Scrum Product Owner (PSPO) Certification",
    provider: "Scrum.org",
  },
]

export function CVCertifications() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">
        Certifications & Professional Development
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary leading-tight">{cert.title}</CardTitle>
              <Badge variant="outline" className="w-fit text-xs">
                {cert.provider}
              </Badge>
            </CardHeader>
            {cert.description && (
              <CardContent>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
