// import Link from "next/link";

// import Link from 'next/link';
import Button from '@mui/material/Button';
import { useSession } from "next-auth/react"
import { useState, useEffect } from 'react';

export default function Home({ posts }) {
  const { data: session } = useSession()
  const [data, setData] = useState([]);
  
  const getdata = async () => {
    console.log("getdata");
    const uid = session?.user?.name?.userID
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_ROOT}/api/history/history?userID=${uid}`);
      if (res.ok) {
        const posts = await res.json();
        setData(posts)
      }
      throw Error('server response not ok');
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getdata();
  }, [session?.user])

  if (session) {
  
  
    

    return (
      <>
        <center>

          <div>
           
            <section class="wrapper">
  <div class="top">History</div>
  <div class="bottom" aria-hidden="true">History</div>
</section>
            {
              !data ? 'loading' : data.map((post) => {

                return (
                  <div key={post.postID}>
                    <br></br>
                    <Button variant="outlined" href={`/history/${post.postID}`} color='primary'>   {post.title}</Button>
                    {/* <p>{post.price} baht</p> */}
                  </div>

                )
              })
            }
          </div>

        </center>

      </>
    );
  }
}


