// import * as React from 'react';
import Button from '@mui/material/Button';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Home() {

  const { data: session } = useSession()
  if (session) {
    // console.log(session.user.name.userID); 
    const uid = session.user.name.userID
    const router = useRouter();


 
    const sendProps1 = () => {
      router.push({
        pathname: '/post/post',
        query: { uid }
      })
    }
    const sendProps2 = () => {
      router.push({
        pathname: '/find/find',
        query: { uid }
      })
    }
    return (

      <div>

        <div className="head">
          <h1><span>Welcome to 2GETHER</span></h1>
          <br></br><br></br><br></br>
          <Button onClick={sendProps1}   ><p>POST</p></Button>
          <br></br><br></br>
          <Button onClick={sendProps2}   ><p>FIND</p></Button>
          {/* <h1><span>Go to Post</span></h1> */}

        </div>

      </div>
    )

  }
  return (

    <div>

      <div className="head">
        <h1><span>Welcome to 2GETHER</span></h1>
        <Button onClick={signIn} variant="outlined" color='primary' >LOGIN</Button>
        {/* <Button href={`/register`} variant="outlined" color='primary' >Register</Button> */}
        <br></br>
        <p class = "regis"><Link href="/register" >If you don't have account click here</Link></p>
        <h1><span>Please Login </span></h1>


      </div>

    </div>
  )
}






// SSR
// export async function getServerSideProps() {
//   try {
//     const res = await fetch(`${process.env.URL_ROOT}/api/post`);
//     if (res.ok) {
//       // console.log("okkk");
//       const posts = await res.json();
//       return {
//         props: { posts },
//       };
//     }
//     throw Error('server response not ok');
//   } catch (error) {
//     // console.log("error");
//     console.error(error);

//   }
// }