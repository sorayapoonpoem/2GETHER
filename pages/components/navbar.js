import * as React from 'react';
import Button from '@mui/material/Button';
// import { signOut } from "next-auth/react"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Navbar() {
  const { data: session } = useSession()
  if (session) {
    return (
        <>
       <nav >
        <ul id="menu">
          <li><a href="/">Home</a></li>
          
          <li><a href="/find/find">Find</a></li>
          <li><a href="/post/post">Post</a></li>
          {/* <li><a  onClick={signOut}>Posst</a></li> */}
          {/* <li><a href="/post/post" onClick={sendProps} >Post</a></li> */}
          <li><a href="/history">History</a></li>
          <li><a href="/"  onClick={signOut}>Logout</a></li>
          {/* <Button variant="danger" onClick={signOut} href={`/`}>Logout</Button> */}
        </ul>
      </nav>
        </>
    );
  }
  return (
    <>
   <nav >
    <ul id="menu">
      <li><a href="/">Home</a></li>
      
      <li><a href="/find/find">Find</a></li>
      {/* <li><a  onClick={signOut}>Posst</a></li> */}
      {/* <li><a href="/post/post" onClick={sendProps} >Post</a></li> */}
      <li><a href="#"  onClick={signIn}>Login</a></li>
     
    </ul>
  </nav>
    </>
);
}