export default ({ content, isHoverable }) => (
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
);
