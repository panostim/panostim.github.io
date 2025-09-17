import { CVHeader } from "@/components/cv-header"
import { CVExperience } from "@/components/cv-experience"
import { CVEducation } from "@/components/cv-education"
import { CVSkills } from "@/components/cv-skills"
import { CVCertifications } from "@/components/cv-certifications"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-8 print:p-6">
        <CVHeader />

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-accent pb-2">Professional Summary</h2>
            <p className="text-foreground leading-relaxed">
              Product leader with 8+ years of experience specializing
              in complex B2B software. Strong expertise in AI, MLOps, APIs and Cloud Infrastructure, creating
              products that unlock growth and customer value.
            </p>
          </section>

          <CVExperience />
          <CVEducation />
          <CVSkills />
          <CVCertifications />

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-accent pb-2">Interests</h2>
            <div className="space-y-2 text-foreground">
              <p>• Latest trends on AI & software development</p>
              <p>• Product Management Topics (e.g. Lenny's newsletter, Product Coalition, Product Talk and SVPG)</p>
            </div>
          </section>
        </div>

        <footer className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
          <p className="mt-2 text-sm">References available upon request</p>
        </footer>
      </div>
    </div>
  )
}
