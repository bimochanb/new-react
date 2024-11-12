import Navbar from "../components/navbar"
import HomeAbout from "../modules/home-about"
import HomeClients from "../modules/home-clients"
import HomeContact from "../modules/home-contact"
import HomeHero from "../modules/home-hero"
import HomePortfolio from "../modules/home-portfolio"
import HomeServices from "../modules/home-services"
import HomeTeam from "../modules/home-team"


const Home = () => {
  return (
    <>
    <Navbar/>
      <HomeHero/>
      <HomeServices/>
      <HomePortfolio/>
      <HomeAbout/>
      <HomeTeam/>
      <HomeClients/>
      <HomeContact />
    </>
  )
}

export default Home
