//@flow
import React from 'react';
import Link from 'next/link'
import Head from 'next/head';

export default () => {

  const handleChickEyeClick = () => {
    const audio = new Audio('/static/horse-neighing.mp3');
    return audio.play();
  }

  return (
    <div>
      <Head>
        <title>bendersej</title>
      </Head>
      <div className="main">
        <div className="chick">
          <div className="chick__eye" onClick={handleChickEyeClick}/>
        </div>
        <div>
          <h1>bendersej</h1>
          <p>> about</p>
        </div>
      </div>
      <style jsx>{`
			.main {
        display: flex;
        height: 100vh;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }

      h1 {
        color: black;
        font-family: 'Inconsolata', monospace;
        font-weight: 400;
        font-size: 80px;
        margin: 50px 0 0 0;
        cursor: pointer;

        &:hover {
          color: red;
        }
      }

      .chick {
        position: relative;
        width: 450px;
        height: 450px;
        background-image: url('/static/img/chick.svg');
      }
      
      .chick__eye {
        position: absolute;
        cursor: pointer;
        top: 90px;
        left: 130px;
        width: 18px;
        height: 18px;
        border-radius: 100%;
        background: black;
        animation: squeeze 2s infinite;
      }

      @keyframes squeeze {
        90% {
          transform: none;
          animation-timing-function: ease-in;
        }
        93% {
          transform: translateY(3px) scaleY(0.8)
        }
        100% {
          animation-timing-function: ease-out;
        }
      }
    `}</style>
    </div>
  );

}