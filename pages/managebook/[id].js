import * as React from 'react';


import Typography from '@mui/material/Typography';

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";


export default function Post({ posts }) {
  const [pid, setPid] = useState([]);
  const { data: session } = useSession()

  {/* <script src="https://smtpjs.com/v3/smtp.js"></script> */ }
  // Script send email
  var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

  const [data, setData] = useState();

  const getdata = async () => {
    // console.log("getdata");
    const uid = session?.user?.name?.userID
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_ROOT}/api/sos/sos?userID=${uid}`);
      if (res.ok) {
        const user = await res.json();
        setData(user)
      }
      throw Error('server response not ok');
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getdata();
  }, [session?.user])

  useEffect(() => {
    setPid(...posts);
  }, [])


  if (session) {
    // console.log(data[0].emergency_email); 
    // const contact = data[0].emergency_email
    // const id = data[0].id
    // const name = data[0].name
    // console.log(contact);


    const send_sos = () => {
      data.map((detail) => {
        // console.log(detail.emergency_email);
      alert("Send SOS Success")
      Email.send({
        SecureToken: "7d5c8092-1a70-402d-bfcf-913f61b98380",
        To: detail.emergency_email,
        From: '6231302007@lamduan.mfu.ac.th',
        Subject: "Emergency SOS Message from" + detail.name,
        Body: "Emergency SOS message services from 2Gether. You are receiving this message because " + detail.name + " listed you as an emergency contact."
      }).then(
        message => alert(message),

      );
    })
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
            <button className="btnsos" onClick={send_sos} >
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


