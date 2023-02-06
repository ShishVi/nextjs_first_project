import './styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return <>
  <h1>Поиск Фильмов</h1>
    <Component {...pageProps} />
    </>
}