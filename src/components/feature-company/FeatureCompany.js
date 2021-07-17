import './FeatureCompany.css';
import { FiBriefcase } from 'react-icons/fi'

function FeatureCompany({ company }) {
  const { name } = company;
  return (
    <li className="feature-company__item">
      <div className="feature-company__item--icon">
        <FiBriefcase className="text-lg" />
      </div>
      <p className="feature-company__item--title">{name}</p>
    </li>
  )
}

export default FeatureCompany;