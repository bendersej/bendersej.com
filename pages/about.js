//@flow
import React from "react";
import Link from "next/link";
import Head from "next/head";
import { BACKGROUND, EDUCATION, MISC } from "../lib/constants";

const Tile = ({ content, key }) => (
   <a className="tile" href={content.href} target="_blank" key={key}>
      <img src={content.img} />
      <div className="tile__content">
         <p>{content.title}</p>
         <p>{content.duration}</p>
         <div>
            {content.skills &&
               content.skills.map((skill, idx) => (
                  <span className="tile__tag" key={idx}>
                     {skill}
                  </span>
               ))}
         </div>
      </div>
   </a>
);

export default props => (
   <div>
      <Head>
         <title>About</title>
      </Head>
      <div>
         <h3>background</h3>
         {BACKGROUND.map((experience, idx) => (
            <Tile key={idx} content={experience} />
         ))}
         <h3>education</h3>
         {EDUCATION.map((education, idx) => (
            <Tile key={idx} content={education} />
         ))}
         <h3>skills & interests</h3>
         {MISC.map((misc, idx) => (
            <ul key={idx}>
               {misc.items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
         ))}
      </div>
   </div>
);
