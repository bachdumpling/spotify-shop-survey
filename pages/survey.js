import Image from "next/image";
import Link from "next/link";
import logo from ".././asset/asset/logo.png";
import { motion as m } from "framer-motion";

function survey() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black w-screen h-screen grid justify-items-center"
    >
      <div className="max-w-lg md:max-w-4xl mx-auto h-screen w-screen absolute overflow-hidden">
        <Link href="/">
          <Image
            className="mx-5 my-5 md:my-10 md:mx-10 w-20 md:w-28"
            src={logo}
            width="100"
            height="100"
          />
        </Link>
        <div className="bg-[#222222] h-5/6 md:h-5/6 text-white rounded-xl shadow shadow-gray-800 md:mx-10 mt-2 md:mt-10 overflow-x-hidden overflow-y-visible flex justify-center">
          {/* <SurveyComponent /> */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfNJWlwkKNDMHbYCEbDa8eBlcsNH1UxYbBDoyz2p6l2FcrpBg/viewform?embedded=true"
            allowFullScreen
            className="w-full md:w-[800px] h-full pt-5 pb-5 scrollbar-hide rounded-md shadow-lg"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </m.div>
  );
}

export default survey;
