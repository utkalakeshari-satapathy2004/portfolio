import NavBar from '@/components/NavBar'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Experience from '@/sections/Experience'
import HeroPage from '@/sections/HeroPage'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroPage/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ChatBot/>
    </div>
  )
}

export default Home
