import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Programming & Development",
    skills: ["Python", "SQL", "React", "Node.js", "APIs", "MLOps"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["ChatPRD", "Lovable", "OpenAI Codex", "Vercel v0", "Cursor", "MCP servers"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["Azure", "Kubernetes", "Serverless", "CDNs", "Cloud Computing"],
  },
  {
    category: "Data & Analytics",
    skills: ["Power BI", "JavaScript libraries", "KPI tracking", "Data visualization"],
  },
  {
    category: "Product Management",
    skills: ["Jira", "Confluence", "Linear", "Miro", "Microsoft 365 Suite"],
  },
  {
    category: "Languages",
    skills: ["English (Full professional proficiency)", "Greek (Native)"],
  },
]

export function CVSkills() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">Skills & Competences</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-accent">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
