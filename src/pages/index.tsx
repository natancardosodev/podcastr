// import { useEffect } from "react";

export default function Home(props) {
  // SPA
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, []);

  return (
    <div>
      <h1>Index</h1>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  )
}

// SSG x SSR
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8
  }
}