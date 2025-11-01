import * as React from 'react';

import { Medium, Dribbble, Twitter, LinkedIn, Email } from './Icons';

const getIcon = (type: string) => {
  const iconMap: Record<string, React.ReactElement> = {
    medium: <Medium />,
    dribbble: <Dribbble />,
    twitter: <Twitter />,
    linkedin: <LinkedIn />,
    email: <Email />,
  };
  return iconMap[type];
};

interface Props {
  label: string;
  type: 'medium' | 'dribbble' | 'twitter' | 'linkedin' | 'email';
  href: string;
}

export const SocialLink: React.FunctionComponent<Props> = (props) => {
  return (
    <React.Fragment>
      <li className="contact__link tooltip" aria-label={props.label}>
        <a
          className={`contact__icon contact__icon--${props.type}`}
          href={props.type === 'email' ? `mailto:${props.href}` : props.href}
          target="_blank"
          rel="noopener"
          aria-label={props.label}>
          {getIcon(props.type)}
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
        }

        .contact__icon.contact__icon--medium {
          &:hover {
            path:first-of-type {
              fill: #333;
            }
          }
        }

        .contact__icon.contact__icon--twitter {
          &:hover {
            fill: #55acee;
          }
        }

        .contact__icon.contact__icon--email {
          path:first-of-type {
            fill: transparent;
          }
          &:hover {
            path:first-of-type {
              fill: #ec5f5f;
            }
          }
        }

        .contact__icon.contact__icon--linkedin {
          &:hover {
            fill: #4875b4;
          }
        }

        .contact__icon.contact__icon--dribbble {
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
