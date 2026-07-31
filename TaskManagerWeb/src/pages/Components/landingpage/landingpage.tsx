import LandingNavbar from '../landingpage/LandingNavbar'
import LandingHero from '../landingpage/LandingHero'
import LandingFeatures from '../landingpage/LandingFeatures'
import LandingHowItWorks from '../landingpage/LandingHowItWorks'
import LandingKanbanShowcase from '../landingpage/LandingKanbanShowcase'
import LandingAbout from '../landingpage/LandingAbout'
import LandingCTA from '../landingpage/LandingCTA'
import LandingFooter from '../landingpage/LandingFooter'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <LandingNavbar />
      <LandingHero />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingKanbanShowcase />
      <LandingAbout />
      <LandingCTA />
      <LandingFooter />
    </main>
  )
}
