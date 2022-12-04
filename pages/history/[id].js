
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { useSession } from "next-auth/react";
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

export default function Post({ posts }) {
  const [pid, setPid] = useState([]);
  const { data: session } = useSession()


  useEffect(() => {
    setPid(...posts);
  }, [])

  
  if (session) {
 
    console.log(pid);
    console.log(pid.postID);
   

   
    return (
      <>
        <center>

          <div>
        
            
            <section class="wrapper">
  <div class="top">Travel details</div>
  <div class="bottom" aria-hidden="true">Travel details</div>
</section>
                
                
           
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{ border: '4px solid #2e88c7' }} >

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
                                    <Typography variant="h6" color="text.secondary">Status : {pid.status}</Typography>
                          
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                
                
         
            {/* <Link href={`/`}>Back</Link> */}
            <br></br>
            <Button href={`/history`} variant="contained" color='primary'>Back</Button>
      
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

