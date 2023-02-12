import { Fragment } from 'preact';

export function Footer() {
  return (
    <Fragment>
      <div>
        <p class="small-text">
          &copy; {new Date().getFullYear()} <a href="https://www.womble.xyz">wombat24455</a>
        </p>
      </div>
    </Fragment>
  )
}