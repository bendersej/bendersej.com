import Medium from '../public/img/medium.svg';
import Dribbble from '../public/img/dribbble.svg';
import Twitter from '../public/img/twitter.svg';
import LinkedIn from '../public/img/linkedin.svg';
import Email from '../public/img/email.svg';

import React from 'react';

const iconOf = {
  medium: <Medium />,
  dribbble: <Dribbble />,
  twitter: <Twitter />,
  linkedin: <LinkedIn />,
  email: <Email />,
};

export default (props) => {
  return (
    <React.Fragment>
      <li className="contact__link tooltip" aria-label={props.label}>
        <a
          className={`contact__icon contact__icon--${props.type}`}
          href={props.type === 'email' ? `mailto:${props.href}` : props.href}
          target="_blank"
          rel="noopener"
          aria-label={props.label}>
          {iconOf[props.type]}
          <span>{props.href}</span>
        </a>
      </li>
      <style jsx global>{`
        .contact__link {
          display: flex;
          align-items: center;
          margin-right: 20px;
        }

        .contact__icon {
          display: flex;

          > svg {
            width: 30px;
            height: 30px;
          }

          > span {
            display: none;
          }

          &--medium {
            &:hover {
              path:first-of-type {
                fill: #333;
              }
            }
          }

          &--twitter {
            &:hover {
              fill: #55acee;
            }
          }

          &--email {
            path:first-of-type {
              fill: transparent;
            }
            &:hover {
              path:first-of-type {
                fill: #ec5f5f;
              }
            }
          }

          &--linkedin {
            &:hover {
              fill: #4875b4;
            }
          }

          &--dribbble {
            circle {
              fill: transparent;
            }
            &:hover {
              circle {
                fill: #ea4c89;
              }
              path {
                fill: #c32361;
              }
            }
          }
        }

        @media print {
          .contact__link {
            padding: 5px 0;
            span {
              margin-left: 10px;
              display: block;
            }

            svg {
              width: 20px;
              height: 20px;
            }
          }

          .contact__icon {
            align-items: center;
          }
        }
      `}</style>
    </React.Fragment>
  );
};
