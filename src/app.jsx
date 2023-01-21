import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  const avatar = 'https://github.com/wombat24455.png?size=100';
  const bio = '';

  return (
    <>
      <div>
        <a href="https://github.com/wombat24455" target="_blank">
          <img src={avatar} class="profile-image" alt="Github profile picture" />
        </a>
        {/*
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
        */}
      </div>
      <h1>Womble</h1>
      <p>
         {bio}
         {/*coming soon*/}
      </p>
      {/* 
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      */}
      {/* 
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      */}
    </>
  )
}
