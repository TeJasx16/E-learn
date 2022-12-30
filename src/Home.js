import React from "react";
import { Carousel } from "react-responsive-carousel";
import im1 from "./images/im1.jpg";
import im2 from "./images/im2.avif";
import im3 from "./images/im3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <>
    <Mycr/>

      <div  className="border-4  p-4 m-4">
        <h1 className="text-xl font-mono md:text-3xl p-4 m-4 underline text-center">
          Learn With Us
        </h1>


        <div className="flex  flex-col m-2 text-justify p-2 ">


          <div className="flex md:flex-row flex-col justify-center items-center my-4 md:mb-20 ">
            <h2 className=" bg-orange-400 outline-none rounded-full border-orange-300 border-4 p-4 text-center font-medium">HTML5</h2>
            <p className="mx-1 md:mx-14 md:my-1 my-7 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              sapiente! Nulla iste at et impedit, eius necessitatibus quasi
              libero sapiente vero consequuntur quod nisi provident
              reprehenderit. At minima ipsam voluptatem!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum suscipit quaerat quibusdam dolores, voluptas totam alias incidunt, unde aliquam dolorem, enim neque perspiciatis eveniet commodi ea laboriosam ullam est!
            </p>
          </div>
          <div className="flex md:flex-row-reverse flex-col justify-center items-center my-4 md:mb-20 ">
            <h2 className=" bg-blue-500 border-blue-400 rounded-full border-4 p-4 text-center font-medium">CSS3</h2>
            <p className="mx-1 md:mx-14 md:my-1 my-7 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              sapiente! Nulla iste at et impedit, eius necessitatibus quasi
              libero sapiente vero consequuntur quod nisi provident
              reprehenderit. At minima ipsam voluptatem!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum suscipit quaerat quibusdam dolores, voluptas totam alias incidunt, unde aliquam dolorem, enim neque perspiciatis eveniet commodi ea laboriosam ullam est!
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center my-4 ">
            <h2 className=" bg-yellow-400 border-yellow-300 rounded-full border-4 p-4 text-center font-medium">JAVASCRIPT</h2>
            <p className="mx-1 md:mx-14 md:my-1 my-7 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              sapiente! Nulla iste at et impedit, eius necessitatibus quasi
              libero sapiente vero consequuntur quod nisi provident
              reprehenderit. At minima ipsam voluptatem!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum suscipit quaerat quibusdam dolores, voluptas totam alias incidunt, unde aliquam dolorem, enim neque perspiciatis eveniet commodi ea laboriosam ullam est!
            </p>
          </div>
          
          
        </div>
      </div>
    </>
  );
};

export const Mycr = () =>(
  <Carousel
  autoPlay
  infiniteLoop
  interval={2000}
  showArrows={false}
  showThumbs={false}
  showStatus={false}
>
  <div>
    <img
      className="w-full md:h-[100vh] h-[60vh] md:blur-sm opacity-90  "
      src={im1}
      alt="im1"
    />
  </div>
  <div>
    <img
      className="w-full md:h-[100vh] h-[50vh] md:blur-sm opacity-90  "
      src={im2}
      alt="im2"
    />
  </div>
  <div>
    <img
      className="w-full md:h-[100vh] h-[50vh] md:blur-sm opacity-90  "
      src={im3}
      alt="im2"
    />
  </div>
</Carousel>
)
export default Home;
