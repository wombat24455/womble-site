import { Fragment } from 'preact';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient()

export function Intro() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
    </Fragment>
  )
}

function MainPage() {
  const { isLoading, error, data } = useQuery('userData', () =>
    fetch('https://api.github.com/users/wombat24455').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...';
  if (error) return `An error has occurred: ${error.message}`;

  return (
    <main>
      <div>
        <a href={data.html_url} target="_blank">
          <img src={data.avatar_url} class="profile-image" alt="Github profile picture" />
        </a>
      </div>

      <h1>Womble</h1>
      <h2>Developer / Designer / Tinkerer</h2>
      <div>
        <p>
          {data.bio}
        </p>
        <p class="small-text">(the text is very wobbly at the moment, will fix that in future builds)</p>
      </div>
    </main>
  )
}