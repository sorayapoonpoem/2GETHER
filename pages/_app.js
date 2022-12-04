
import "../styles/nav.css"
import '../styles/card.css'
import '../styles/profile.css'
import '../styles/btnSOS.css'
import '../styles/button.module.css'
import '../styles/title.css'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./components/navbar.js";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );


}

export default MyApp
