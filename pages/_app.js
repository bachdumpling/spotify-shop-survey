import "../styles/globals.css";
import Image from 'next/image'
import logo from '.././asset/asset/logo.png';


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black h-screen w-screen font-poppins">
      <div className="max-w-3xl mx-auto translate-y-14">
        <Image src={logo} width="100" height="100"/>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
