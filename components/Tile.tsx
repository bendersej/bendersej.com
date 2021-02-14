import * as React from 'react';

interface Props {
  content: {
    title: string;
    duration: string;
    skills?: string[];
    img: string;
    href: string;
  };
  isHoverable?: boolean;
}

export const Tile: React.FunctionComponent<Props> = ({ content, isHoverable }) => (
  <React.Fragment>
    <a
      className={isHoverable ? 'tile tile--hoverable' : 'tile'}
      href={content.href}
      target="_blank"
      rel="noopener">
      <div className="tile__img-container">
        <img src={content.img} />
      </div>

      <div className="tile__content">
        <h4>{content.title}</h4>
        <p>{content.duration}</p>
        <div className="tile__tag-container">
          {content.skills &&
            content.skills.map((skill, idx) => (
              <span className="tile__tag" key={idx}>
                {skill}
              </span>
            ))}
        </div>
      </div>
    </a>
    <style jsx>{`
      .tile {
        position: relative;
        display: flex;
        align-items: center;
        margin: 16px 0;
        width: 100%;
        box-sizing: border-box;

        h4 {
          position: relative;
          display: inline-block;
          font-weight: normal;
          font-size: 22px;
          margin: 0 0 5px 0;
        }

        p {
          margin-bottom: 5px;
          color: #484848;
        }

        &:hover {
          h4 {
            text-decoration: underline;
          }
        }

        &--hoverable {
          h4 {
            &::before,
            &::after {
              opacity: 0;
              transition: transform 0.3s, opacity 0.2s;
            }

            &::before {
              position: absolute;
              left: 0;
              content: '[';
              transform: translateX(0px);
            }

            &::after {
              position: absolute;
              right: 0;
              content: ']';
              transform: translateX(0px);
            }
          }
          &:hover {
            .tile__tag {
              background: hsl(245deg, 100%, 60%);
              border-color: hsl(245deg, 100%, 60%);
              color: white;
            }
            h4 {
              text-decoration: none;
              &::before {
                opacity: 1;
                transform: translateX(-15px);
              }

              &::after {
                opacity: 1;
                transform: translateX(15px);
              }
            }
          }
        }
      }

      .tile__img-container {
        height: 40px;
        min-width: 150px;
        margin-right: 30px;
        display: flex;
        justify-content: center;
        > img {
          height: 100%;
          width: auto;
        }
      }

      .tile__tag-container {
        display: flex;
        flex-wrap: wrap;
        margin-left: -5px;
      }

      .tile__tag {
        border: 1px solid #d6d5d5;
        border-radius: 2px;
        padding: 3px 5px;
        font-size: 14px;
        margin: 5px;
        color: #737373;
        transition: 0.15s ease-in;
      }

      @media screen and (max-width: 768px) {
        .tile__img-container {
          display: none;
        }

        .tile__tag {
          font-size: 16px;
        }
      }
    `}</style>
  </React.Fragment>
);
