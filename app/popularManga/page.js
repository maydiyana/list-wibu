import Header from "../components/AnimeList/Header"
import AnimeList from "../components/AnimeList"
import MangaList from "../components/AnimeList/mangaList"

export default async function Home() {

const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga`)
   const topAnime = await response.json()

  return (
    <section>
      <Header title="Most Popular" linkTitle="See All" linkHref="/popular" /> 
      <MangaList api={topAnime} />
    </section>
      
    
  )
}
