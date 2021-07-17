import PropTypes from "prop-types";
import './RecentOfferCard.css';
import { FiChevronRight } from 'react-icons/fi'

function RecentOfferCard({ offer }) {
  const { title, company, location, info, networth, timeago } = offer;
  return (
    <article className="offer">
      <header>
        <div>
          <h4 className="offer-title">{title}</h4>
          <p className="offer-subtext">{company} <span className="offer-subtext__location">{location}</span></p>
        </div>
        <span className="font-normal text-xs">{timeago}</span>
      </header>
      <div className="relative pr-7">
        <p className="font-normal text-xs">{info}</p>
        <p className="font-normal text-xs">{networth}</p>
        <button className="btn-primary absolute right-0 bottom-0 px-1 py-1">
          <FiChevronRight className="text-lg" />
        </button>
      </div>
    </article>
  )
}

RecentOfferCard.propTypes = {
  offer: PropTypes.object.isRequired
}

export default RecentOfferCard;
