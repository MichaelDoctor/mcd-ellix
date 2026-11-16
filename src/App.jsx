import { useReveal } from './hooks.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Values from './components/Values.jsx'
import Story from './components/Story.jsx'
import Offerings from './components/Offerings.jsx'
import Benefits from './components/Benefits.jsx'
import Signature from './components/Signature.jsx'
import Manifesto from './components/Manifesto.jsx'
import BookCall from './components/BookCall.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Values />
        <Story />
        <Offerings />
        <Benefits />
        <Signature />
        <Manifesto />
        <BookCall />
        <Contact />
      </main>
    </>
  )
}
