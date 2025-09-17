import { Mail, Phone, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export function CVHeader() {
  return (
    <Card className="p-8 bg-gradient-to-r from-primary to-accent text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl font-bold mb-2 text-balance">Panos Timotheatos</h1>
          <p className="text-xl text-primary-foreground/90 font-medium">PRODUCT MANAGEMENT PROFESSIONAL</p>
        </div>

        <div className="space-y-2 text-primary-foreground/90">
        </div>
      </div>
    </Card>
  )
}
