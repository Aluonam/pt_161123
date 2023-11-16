import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import SwitchCapitalLetter from '@/components/SwitchCapitalLetter'
import PasswordForm from '@/components/PasswordForm'
import ModalCounter from '@/components/Modalcounter'
import Counter from '@/components/Counter'
import DeleteLetter from '@/components/DeleteLetter'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
       <SwitchCapitalLetter></SwitchCapitalLetter>
       <br></br>
       <PasswordForm></PasswordForm>
       <br></br>
       <Counter></Counter>
       <br></br>
       <DeleteLetter></DeleteLetter>
      </main>
    </>
  )
}
