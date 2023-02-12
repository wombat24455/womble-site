import './app.css';
import { Footer } from './fragments/footer';
import { Intro } from './fragments/main/intro';
import { Navbar } from './fragments/navbar';
//import { Projects } from './fragments/projects/projects';
//import { Background } from './fragments/background';

/* Figure out Preact Portals */

export function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <Footer />
    </>
  )
}
