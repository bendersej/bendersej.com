import React from 'react';
import Link from 'next/link';
import { Head } from '../components/Head';

const Home = () => {
  const handleChickEyeClick = () => {
    return new Audio('/horse-neighing.mp3').play();
  };

  return (
    <React.Fragment>
      <Head title="bendersej" url="https://bendersej.com" description="Benjamin André-Micolon" />
      <div className="home">
        <div className="home__chick">
          <div className="home__chick-eye" onClick={handleChickEyeClick} />
        </div>
        <div>
          <h1 className="home__header">bendersej</h1>
          <Link href="/about">
            <a className="home__link">The only link on this page</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .home {
          display: flex;
          height: 100vh;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }

        .home__chick {
          position: relative;
          width: 450px;
          height: 450px;
          background-image: url('/img/chick.svg');
          background-repeat: no-repeat;
          background-position: center center;
        }

        .home__chick-eye {
          position: absolute;
          cursor: pointer;
          top: 90px;
          left: 130px;
          width: 18px;
          height: 18px;
          border-radius: 100%;
          background: black;
          animation: squeeze 1.4s infinite;
        }

        .home__header {
          margin: 20px 0 10px 0;
          font-size: 60px;
          text-align: center;
        }

        .home__link {
          position: relative;
          padding-left: 25px;
          font-size: 18px;
        }

        .home__link::before {
          position: absolute;
          transition: 0.2s linear;
          left: 0;
          top: 1px;
          content: '>';
        }

        .home__link:hover {
          font-weight: bold;
          transition-delay: 0.25s;
        }

        .home__link:hover::before {
          transform: translateX(10px);
          font-weight: normal;
        }

        @keyframes squeeze {
          90% {
            transform: none;
            animation-timing-function: ease-in;
          }
          93% {
            transform: translateY(3px) scaleY(0.8);
          }
          100% {
            animation-timing-function: ease-out;
          }
        }

        @media screen and (max-width: 768px) {
          .home__chick {
            width: 350px;
            height: 350px;
          }

          .home__chick-eye {
            top: 70px;
            left: 100px;
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Home;
