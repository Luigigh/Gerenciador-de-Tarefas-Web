import { Navbar } from '../Components/navbar'
import { Hero } from '../Components/hero'
import { Features } from '../Components/features'
import { DashboardPreview } from '../Components/dashboard-preview'
import { Cta, Footer } from '../Components/cta'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <Cta />
      <Footer />
    </main>
  )
}
