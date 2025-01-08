import Header from '@/components/Header'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main>
        <ContactForm />
      </main>
    </div>
  )
}

