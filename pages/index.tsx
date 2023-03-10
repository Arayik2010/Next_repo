import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from './Navbar/Navbar'
import { log } from 'console'
import FetchData from '@/components/FetchData/FetchData'
import { Data } from '@/Types/Common'




export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const allPostsData = await response.json()
  console.log(allPostsData)
  return {
    props: {
      allPostsData,
    }
  };
}





export default function Home({ allPostsData }:Data) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className="title">
            <Navigation />
          </h1>

          <FetchData allPostsData={allPostsData} />


        </div>
      </main>
    </>
  )
}
