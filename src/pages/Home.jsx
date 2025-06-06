import About from "../components/About"
import Banner from "../components/Banner"
import CompetitiveSkills from "../components/CompetitiveSkills"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Skills from "../components/Skills"


const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Projects />
      <CompetitiveSkills/>
      <Skills />
      <Education/>
      <Contact/>
    </div>
  )
}

export default Home