import "../styles/globals.css";
import Image from "next/image";
import logo from ".././asset/asset/logo.png";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <div className="bg-black h-screen w-screen font-poppins"> */}
        <Component {...pageProps} />
      {/* </div> */}
    </div>
  );
}

export default MyApp;
