// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Link from 'next/link';
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';

// import Stack from '@mui/material/Stack';

import { useSession } from "next-auth/react";


import Typography from '@mui/material/Typography';
import { borderRadius } from '@mui/system';



// import Stack from '@mui/material/Stack';


import { useState, useEffect } from 'react';


export default function Post({ posts }) {
  const [pid, setPid] = useState([]);
  const { data: session } = useSession()


  useEffect(() => {
    setPid(...posts);
  }, [])


  if (session) {

    console.log(pid);
    console.log(pid.postID);

    const Accept = async () => {
      await fetch('http://localhost:3000/api/accept/accept', {
        method: "POST",
        body: JSON.stringify({ "postID": pid.postID }),
        headers: { "Content-Type": "application/json" }
      }).then(response => {
        if (response.ok) {
          alert("Accept Success")
        } throw Error('Server error!');
      });
    }


    return (
      <>
        <center>

          <div>


            <section class="wrapper">
              <div class="top">Travel details</div>
              <div class="bottom" aria-hidden="true">Travel details</div>
            </section>

            {
              <div class="containerpf">
                <div class="content-wrapper">

                  <div class="child">
                    <div class="container">
                      <div class="badge" ></div>
                    </div>
                  </div>

                  <div class="child">
                    <div id="card">

                   


                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                              <Card sx={{ border: '4px solid #2e88c7', borderRadius: '10px' }} >

                                <CardContent>
                                  <div key={pid.postID}>

                                    <Typography gutterBottom variant="h5" component="div">
                                      Chauffeur : {pid.name}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                      Title : {pid.title}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                      Seat Count : {pid.seat}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                      Car Type : {pid.cartype}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">Price : {pid.price} Baht</Typography>
                                  </div>
                                </CardContent>
                                <CardActions className='ACPro'>
                                  <Button href={`/find/find`} variant="outlined" background-color="primary" >Back</Button>&nbsp;&nbsp;

                                  <Button onClick={() => Accept(pid)} href={`/managebook/${pid.postID}`} variant="outlined" color="success" >Accept</Button>
                                </CardActions>
                              </Card>

                            </div>


                  



                    </div>
                  </div>


                </div>
              </div>

              // posts.map((post) => {

              //   // setPid(post.postID)
              //   return (
              //     <div style={{ display: 'flex', justifyContent: 'center' }}>
              //       <Card sx={{ border: '4px solid #2e88c7' }} >

              //         <CardContent>
              //           <div key={post.postID}>

              //             <Typography gutterBottom variant="h5" component="div">
              //               Chauffeur : {post.name}
              //             </Typography>
              //             <Typography variant="body2" color="text.secondary">
              //               Title : {post.title}
              //             </Typography>
              //             <Typography variant="body2" color="text.secondary">
              //               Seat Count : {post.seat}
              //             </Typography>
              //             <Typography variant="body2" color="text.secondary">
              //               Car Type : {post.cartype}
              //             </Typography>
              //             <Typography variant="body2" color="text.secondary">Price : {post.price} Baht</Typography>
              //           </div>
              //         </CardContent>
              //       </Card>


              //     </div>
              //   )

              // })

            }

            {/* <Link href={`/`}>Back</Link> */}



          </div>


        </center>


      </>
    )
  }
}

// SSR
export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(`${process.env.URL_ROOT}/api/find/${query.id}`);
    if (res.ok) {
      const posts = await res.json();
      return {
        props: { posts },
      };
    }
    throw Error('server response not ok');
  } catch (error) {
    console.error(error);
  }
}


