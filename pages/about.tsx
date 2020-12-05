import React from 'react';
import { Head } from '../components/Head';
import { Tile } from '../components/Tile';
import { Header } from '../components/Header';
import { BACKGROUND, EDUCATION, MISC, CONTACT, CURRENT_TITLE } from '../lib/constants';

export default () => (
  <React.Fragment>
    <Head title="bendersej – about" url="https://bendersej.com/about" description={CURRENT_TITLE} />
    <div className="about">
      <Header title={CURRENT_TITLE} name="Benjamin André-Micolon" contact={CONTACT} />
      <h3 className="about__header">background</h3>
      {BACKGROUND.map((experience, idx) => (
        <Tile key={idx} content={experience} isHoverable />
      ))}
      <h3 className="about__header">education</h3>
      {EDUCATION.map((education, idx) => (
        <Tile key={idx} content={education} />
      ))}
      <h3 className="about__header">skills & interests</h3>
      <section className="about__skills">
        {MISC.map((misc, idx) => (
          <ul key={idx} className="about__skills-block">
            <li>{misc.title}</li>
            {misc.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ))}
      </section>

      <button onClick={() => window.print()} className="about__print-btn">
        Print or Save as PDF
      </button>
    </div>
    <style jsx>
      {`
        .about {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px;
        }

        .about__header {
          width: 100%;
          font-size: 26px;
          color: #484848;
          text-transform: uppercase;
          margin: 40px 0 0;
          font-weight: 400;
          letter-spacing: 2px;
        }

        .about__skills {
          display: inline-grid;
          grid-template-columns: 1fr 1fr;
          padding-left: 180px;
          box-sizing: border-box;
          margin-top: 20px;
          grid-gap: 20px;
          width: 100%;
        }

        .about__skills-block {
          list-style: none;
          padding: 0;
          margin: 0;
          color: #737373;
          font-size: 18px;
          line-height: 1.6;
          font-weight: 300;

          > li:first-child {
            font-size: 22px;
            color: initial;
            font-weight: 400;
          }
        }

        .about__print-btn {
          margin: 60px auto 0 0;
          border-radius: 3px;
          padding: 5px 10px;
          background: transparent;
          outline: none;
          color: #737373;
          font-size: 13px;
          border: 1px solid #efefef;
          cursor: pointer;

          &:hover {
            border-color: #2b98db;
          }
        }

        @media screen and (max-width: 768px) {
          .about__skills {
            padding: 0;
          }

          .about__print-btn {
            display: none;
          }
        }
        @media print {
          .about__header {
            margin: 28px 0 0;
          }
          .about__print-btn {
            display: none;
          }
        }
      `}
    </style>
  </React.Fragment>
);
