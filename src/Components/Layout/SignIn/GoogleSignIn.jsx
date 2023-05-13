import React from "react";
import { GoogleLogin } from "@react-oauth/google";
// import { signInWithGoogle } from "../../../FireBase";

const GoogleSignIn = () => {
  //   const handleCallBackResponse = (response) => {
  //     console.log("Encoded JWT ID token " + response.credential);
  //   };

  //   useEffect(() => {
  //     // global Google
  //     google.accounts.id.initialize({
  //       client_id:
  //         "622466270419-b03q8ij091j3vos32vhaq7ngntf3qv83.apps.googleusercontent.com ",
  //       callback: handleCallBackResponse,
  //     });
  //     google.accounts.id.rendeButton(document.getElementById("signInDiv"), {
  //       theme: "outline",
  //       size: "large",
  //     });
  //   }, []);

  return (
    <>
      {/* <div id="signInDiv"></div> */}

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
};

export default GoogleSignIn;
