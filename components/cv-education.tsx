import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    degree: "MSc International Management",
    institution: "University of Bath, UK",
    grade: "Merit",
    year: "2015",
    thesis:
      "Collaborative research project with the management consultancy BMT Hi-Q Sigma on their knowledge management practices.",
  },
  {
    degree: "MEng in Production Engineering & Management",
    institution: "Technical University of Crete",
    grade: "GPA 70%",
    year: "2013",
  },
]

export function CVEducation() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">Education</h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-lg text-primary">{edu.degree}</CardTitle>
                <Badge variant="outline">{edu.year}</Badge>
              </div>
              <p className="text-accent font-semibold">{edu.institution}</p>
              <p className="text-muted-foreground">{edu.grade}</p>
            </CardHeader>
            {edu.thesis && (
              <CardContent>
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Thesis:</span> {edu.thesis}
                </p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
