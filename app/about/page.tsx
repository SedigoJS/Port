import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutContent from './AboutContent'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}