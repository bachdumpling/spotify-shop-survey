import Link from "next/link";
import { motion as m } from "framer-motion";
import Image from "next/image";
import logo from ".././asset/asset/logo.png";

function demo() {
  return (
    <div className="bg-black w-screen h-screen grid justify-items-center">
      <div className="max-w-lg md:max-w-4xl mx-auto h-screen w-screen absolute overflow-hidden">
        <Link href="/">
          <Image
            className="mx-5 my-5 md:my-10 md:mx-10 w-20 md:w-28"
            src={logo}
            width="100"
            height="100"
          />
        </Link>
        <div className="bg-[#222222] h-3/6 md:h-3/4 text-white rounded-xl shadow shadow-gray-800 mx-5 md:mx-10 mt-40 md:mt-20">
          <div className=" py-3 pt-5 mx-10 space-y-2">
            <p className="font-bold text-center capitalize text-xl md:text-4xl">
              spotify shop demo
            </p>
            <p className="text-center text-xs md:text-base text-gray-300">
              View the demo full-screen and explore our shop feature
            </p>
          </div>
          <div className="grid place-content-center aspect-video pt-2 md:pb-0">
            <iframe
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqxCMtdK7IJOReyugbRKeGT%2FSpotify%3Fnode-id%3D169%253A2448%26starting-point-node-id%3D169%253A2448%26scaling%3Dscale-down"
              allowFullScreen
              className=" w-[300px] h-[200px] md:w-[700px] md:h-[500px] relative rounded-lg"
            >
              Loading ...
            </iframe>
          </div>
            <p className="text-xs text-center pt-2 text-gray-300 font-light md:invisible">Click on the white stripe to view in full screen</p>
          <Link href="/survey">
            <div className="flex justify-center mt-1 md:mt-5 h-16 items-center md:-translate-y-5">
              <m.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-28 md:w-32 h-10 md:h-12 flex items-center justify-center rounded-full bg-[#1DB954] shadow-lg cursor-pointer"
              >
                <p className="text-black text-sm md:text-lg font-bold capitalize">
                  survey
                </p>
              </m.div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default demo;
