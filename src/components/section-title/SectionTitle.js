import './SectionTitle.css';

function SectionTitle(props) {
  return (
    <div className="section-title__container">
      <h1 className="heading-2 section-title__container--text">{props.title}</h1>
      {props.hasMore && <>
        {props.render(props.title)}
      </>
      }
    </div>
  )
}

export default SectionTitle;