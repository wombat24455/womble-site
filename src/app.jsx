import './app.css';
import { Footer } from './fragments/footer';
import { Intro } from './fragments/main/intro';
import { Navbar } from './fragments/navbar';

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
