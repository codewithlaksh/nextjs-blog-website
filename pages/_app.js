import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('jquery/dist/jquery');
    import('bootstrap/dist/js/bootstrap.bundle');
  }, [])

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
