import Head from 'next/head'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import About from '../components/About'
import Header from '../components/Header'
import Tokenomics from '../components/Tokenomics'
import Features from '../components/Features'
import Roadmap from '../components/Roadmap'
import Teams from '../components/Teams'
import Faqs from '../components/Faqs'
import Highlights from '../components/Highlights'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solderse - Innovation meets your inspiration</title>
        <meta name="title" content="Solderse" />
        <meta name="description" content="World's first launchpad which costs 0 to launch your next generation cryptocurrency" />
        <meta name="keywords" content="blockchain,cryptocurrency,launchpad,solderse,sale,presale,smart token" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Solderse" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main className='relative bg-indigo-50'>
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
        <ToastContainer />
        <Header></Header>
        <About></About>
        <Features></Features>
        <Tokenomics></Tokenomics>
        <Roadmap></Roadmap>
        <Teams></Teams>
        <Highlights></Highlights>
        <Faqs></Faqs>
        <Footer></Footer>
      </main >

    </div >
  )
}