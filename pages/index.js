import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({exploreData,cardData}) {
  return (
    <>
      <Head>
        <title>hotel booking</title>
        <meta name="description" content="book your fav hotel from anywhere" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto p-x-8 sm:px-16'>
      <section className='pt-6 p-6 '>
      <h2 className='text-4xl font-semibold'> Explore Nearby</h2>

      <div className=' grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4'>

      {exploreData?.map(({img, location, distance}) => (
        <SmallCard
        key={img}
        image = {img}
        location = {location}
        distance={distance}
        />
      ))}
            
      </div>
      </section>
      <section>
      <h1 className='text-4xl font-semibold py-8 pl-6'>Live Anywhere</h1>

      <div className='pl-6  flex space-x-3 overflow-scroll scrollbar-hide p-3 '>
      
      {cardData?.map(({img,title})=>(
        
        <MediumCard 
        key={img}
        img={img} 
        title={title}/>
        ))}

        </div>
      </section>
      <LargeCard
      img="https://links.papareact.com/4cj" 
      title="The Greatest Outdoors"
      description="whishlists specially for you by us"
      buttonText="Get Inspired"
      />
      </main>

      <Footer/>

    </>
  )
}



export async function getStaticProps() {
    const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
        (res) => res.json()
    );

    const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
         (res) => res.json()
    );

  return {
    props:{
      exploreData,
      cardData,
    }
  }

}