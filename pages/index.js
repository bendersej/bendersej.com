//@flow
import React from "react";
import Link from "next/link";
import Head from "../components/Head";

export default () => {
   const handleChickEyeClick = () => {
      const audio = new Audio("/static/horse-neighing.mp3");
      return audio.play();
   };

   return (
      <div>
         <Head title="bendersej" />
         <div className="home">
            <div className="home__chick">
               <div className="home__chick-eye" onClick={handleChickEyeClick} />
            </div>
            <div>
               <h1>bendersej</h1>
               <div className="home__header">
                  <Link prefetch href="/about">
                     <a className="home__header-link">about</a>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};
