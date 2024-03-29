import Head from 'next/head'
import Header from './components/Header'
import Image from 'next/image'
import Searchinput from './components/Searchinput'
import Footer from './Footer'


// import nextConfig from '@/next.config'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      </Head>

        <main>
        <Header/>   
        <div className='flex flex-col items-center mt-48'>
          <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
          >
          </Image>
          <Searchinput/>
        </div>
            </main>

            <Footer/>

    </>
  )
}
