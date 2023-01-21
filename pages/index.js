import Head from 'next/head'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import About from '../components/About'
import Header from '../components/Header'
import Tokenomics from '../components/Tokenomics'
import Features from '../components/Features'
import Roadmap from '../components/Roadmap'
import Teams from '../components/Teams'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <main className='relative'>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* Same as */}
        <ToastContainer />


        <Header></Header>
        <About></About>
        <Tokenomics></Tokenomics>
        <Roadmap></Roadmap>

        <Features></Features>

        <Teams></Teams>
        {/* <Faq></Faq> */}

      </main>

      <Footer></Footer>
    </div >
  )
}