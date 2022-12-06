function demo() {
  return (
    <div className="max-w-3xl mx-auto h-screen w-full flex overflow-hidden">
      <div className="bg-[#222222] w-full h-screen md:h-4/6 text-white rounded-xl shadow shadow-gray-800 md:mt-28 grid place-content-center px-10">
        <div className="">
          <p className="font-semibold text-center capitalize text-2xl md:text-4xl md:pb-4 pb-2">
            spotify shop demo
          </p>
          <p className="text-center text-xs md:text-sm text-gray-400">
            View the demo full-screen and explore our shop feature
          </p>
        </div>
        <div className="grid place-content-center mt-5 md:mt-7 aspect-video">
          <iframe
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqxCMtdK7IJOReyugbRKeGT%2FSpotify%3Fnode-id%3D169%253A2448%26starting-point-node-id%3D169%253A2448%26scaling%3Dscale-down"
            allowFullScreen
            className=" w-[300px] h-[200px] md:w-[700px] md:h-[450px] relative rounded-lg"
          ></iframe>
          
        </div>
      </div>
    </div>
  );
}

export default demo;
