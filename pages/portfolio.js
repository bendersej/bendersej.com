//@flow
import React from "react";
import Link from "next/link";
import Head from "../components/Head";
import { PORTFOLIO } from "../lib/constants";

export default props => (
   <div>
      <Head />
      <div className="portfolio">
         <div className="portfolio__container">
            {PORTFOLIO.map((item, idx) => {
               return (
                  <a
                     className="portfolio__item"
                     key={idx}
                     href={item.href}
                     target="_blank"
                  >
                     <img src={item.img} alt="" />
                     <div className="portfolio__item-content">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                     </div>
                  </a>
               );
            })}
         </div>
      </div>
   </div>
);
