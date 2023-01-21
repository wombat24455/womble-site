import { Fragment } from 'preact';

export function Footer() {
  return (
    <Fragment>
      <div>
        <p class="small-text">
          &copy; {new Date().getFullYear()} wombat24455. All rights reserved.
        </p>
      </div>
    </Fragment>
  )
}