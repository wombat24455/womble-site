import { Fragment } from 'preact';

export function Intro() {
  const avatar = 'https://github.com/wombat24455.png?size=100';
  const bio = 'bio stuff goes here';

  return (
    <Fragment>
      <div>
        <a href="https://github.com/wombat24455" target="_blank">
          <img src={avatar} class="profile-image" alt="Github profile picture" />
        </a>
      </div>
      <h1>Womble</h1>
      <p>
         {bio}
      </p>
    </Fragment>
  )
}