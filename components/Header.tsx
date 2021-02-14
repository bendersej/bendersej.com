import * as React from 'react';
import { SocialLink } from './SocialLink';

interface Props {
  name: string;
  title: string;
  contact: {
    label: string;
    href: string;
    type: 'linkedin' | 'medium' | 'dribbble' | 'email' | 'twitter';
  }[];
}

export const Header: React.FunctionComponent<Props> = (props) => (
  <React.Fragment>
    <div className="header">
      <div className="header__picture">
        <img src="/img/ben.png" className="picture" alt="Profile picture" />
      </div>
      <div className="header__info">
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
        <ul className="header__contact-list">
          {props.contact.map((contact, idx) => (
            <SocialLink type={contact.type} label={contact.label} href={contact.href} key={idx} />
          ))}
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        .header {
          display: flex;
          width: 100%;
        }

        .header__info {
          h1 {
            font-size: 40px;
          }

          h2 {
            font-size: 28px;
            color: #484848;
            font-weight: 400;
            margin-top: 10px;
          }
        }

        .header__picture {
          position: relative;
          max-width: 160px;
          margin-right: 20px;

          > img {
            width: 100%;
          }

          &::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 0;
            background-image: url('/img/chick_picture.png');
            background-size: 100%;
            width: 50px;
            height: 50px;
            transition: 0.3s ease-in;
            opacity: 0;
          }

          &:hover {
            &::after {
              opacity: 1;
            }
          }
        }

        .header__contact-list {
          padding: 0;
          margin: 12px 0 0 0;
          list-style: none;
          display: flex;
        }

        @media screen and (max-width: 768px) {
          .header {
            flex-direction: column;
          }

          .header__picture {
            margin: 0 auto 30px auto;
            padding: 30px;
            border-radius: 3px;
            background: #fafafa;
            max-width: 250px;
          }
        }
        @media print {
          .header__contact-list {
            display: block;
          }
        }
      `}
    </style>
  </React.Fragment>
);
