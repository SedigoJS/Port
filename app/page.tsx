import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectsGrid from '@/app/projects/page'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/white_bg.png')] bg-cover bg-no-repeat dark:bg-none dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}