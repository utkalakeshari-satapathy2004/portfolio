import NavBar from '@/components/NavBar'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Experience from '@/pages/Experience'
import HeroPage from '@/pages/HeroPage'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'
import Footer from '@/components/Footer'

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
    </div>
  )
}

export default Home
