import { Fragment } from 'preact';

export function Navbar() {
  return (
    <Fragment>
      <div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </Fragment>
  )
}