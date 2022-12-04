import * as React from 'react';


import Typography from '@mui/material/Typography';

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

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

      <div>

        <center>

          <section class="wrapper">
            <div class="top">Book Success</div>
            <div class="bottom" aria-hidden="true">Book Success</div>
          </section>

          <div class="frame">

            <div class="form">
              <div id="card">



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
                  <Typography variant="h6" color="text.secondary">
                    Price : {pid.price} Baht
                  </Typography>




                </div>




              </div>

            </div>


          </div>


          <div >
            <button className="btnsos">
              <h2 >SOS</h2>
            </button>
          </div>

        </center>



      </div>





    )
  }

}
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


