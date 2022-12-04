// import Link from "next/link";

// import Link from 'next/link';
import Button from '@mui/material/Button';
import { useSession } from "next-auth/react"

export default function Home({ posts }) {
  const { data: session } = useSession()
  const myFunction = () => {
    alert("Please Login");
  }
  if (session) {


    return (
      <>
        <center>

          <div>
            {/* Login */}
           
            <section class="wrapper">
  <div class="top">All Post</div>
  <div class="bottom" aria-hidden="true">All Post</div>
</section>
            {
              posts.map((post) => {

                return (
                  <div key={post.postID}>
                    <br></br>
                    <Button variant="outlined" href={`/find/${post.postID}`} color='primary'>   {post.title}</Button>
                    {/* <p>{post.price} baht</p> */}
                  </div>

                )
              })
            }
          </div>

        </center>

      </>
    );
  } return (
    <>
      <center>

        <div>
          <h1 style={{ color: 'white' }}>All Post</h1>
          {
            posts.map((post) => {

              return (
                <div key={post.postID}>
                  <br></br>
                  <Button variant="outlined" onClick={myFunction} color='primary'>   {post.title}</Button>
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


// SSR
export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.URL_ROOT}/api/find/find`);
    if (res.ok) {
      // console.log(res);
      const posts = await res.json();
      // console.log('ok1');
      return {
        props: { posts },
      };
    }
    throw Error('server response not ok');
  } catch (error) {
    // console.log('not ok2');
    console.error(error);
    // console.log('not ok3');
    return {
      props: null
    };
  }
}