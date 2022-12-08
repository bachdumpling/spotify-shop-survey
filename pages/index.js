import Head from "next/head";
import logo from ".././asset/asset/logo.png";
import { motion as m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-black w-screen h-screen grid justify-items-center"
    >
      <Head>
        <title>Spotify Shop Survey</title>
        <meta name="spotify shop" content="survey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-lg md:max-w-4xl mx-auto h-screen w-screen absolute overflow-hidden">
        <Link href="/">
          <Image
            className="mx-5 my-5 md:my-10 md:mx-10 w-20 md:w-28"
            src={logo}
            width="100"
            height="100"
          />
        </Link>
        {/* Welcome page */}
        <div className="bg-[#222222] h-2/6 md:h-2/6 text-white rounded-xl shadow shadow-gray-800 mx-5 md:mx-10 mt-48 md:mt-48">
          {/* Page title */}
          <p className="font-bold text-center capitalize text-xl md:text-4xl pt-10 pb-5 md:py-10">
            welcome to spotify shop
          </p>

          <div className="px-5 md:px-20 pt-2 md:pt-0 text-xs md:text-base text-center font-light text-gray-300">
            <p>
              You have been invited to explore the demo of our new feature:
              Spotify Shop. Please complete a short survey after to help improve
              our product
            </p>
          </div>

          {/* Demo button */}
          <div className="flex justify-center pt-10 md:pt-16 h-16 items-center">
            <Link href="/demo">
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-40 md:w-44 h-10 md:h-12 flex items-center justify-center rounded-full bg-[#1DB954] shadow-lg cursor-pointer"
              >
                <p className="text-black text-sm md:text-lg font-bold capitalize">
                  View the demo
                </p>
              </m.div>
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  );
}
