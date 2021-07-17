
import { useContext } from 'react';
import './App.css';
import { BsArrowRight } from 'react-icons/bs'
import { DataContext } from './contexts/DataContext';
import Hero from './components/hero/Hero';
import FeatureCompany from './components/feature-company/FeatureCompany';
import RecentOfferCard from './components/recent-offer-card/RecentOfferCard';
import SectionTitle from './components/section-title/SectionTitle';

function App() {

  const { recentOffersList, featuredCompaniesList } = useContext(DataContext)

  return (
    <div className="App">
      <Hero />
      <main className="w-full px-5 md:px-0 py-8">
        <section className="w-full md:w-9/12 my-12 md:mx-auto">
          <SectionTitle
            title='Newest Job Offers'
            hasMore={recentOffersList && recentOffersList.length > 3}
            moreText='View all job offers'
            render={(title) => {
              return (
                <a href="/" className="text-blue-500 font-bold text-xs flex flex-row items-center hover:text-blue-600">
                  {title} <BsArrowRight className="ml-1 text-lg" />
                </a>
              )
            }}
          />
          <section className="divide-y-2 md:divide-y-0 md:divide-x-2 divide-solid divide-gray-200 grid md:grid-cols-3 w-full">
            {recentOffersList && recentOffersList.map(offer => <RecentOfferCard offer={offer} key={offer.id} />)}
          </section>
        </section>
        <section className="w-full md:w-9/12 md:mx-auto">
          <SectionTitle
            title='Featured Companies'
            hasMore={featuredCompaniesList && featuredCompaniesList.length > 9}
            moreText='View all companies'
            render={(title) => {
              return (
                <a href="/" className="text-blue-500 font-bold text-xs flex flex-row items-center hover:text-blue-600">
                  {title} <BsArrowRight className="ml-1 text-lg" />
                </a>
              )
            }}
          />
          <ul className="grid grid-rows-3 grid-cols-3 md:grid-rows-1 md:grid-cols-9 gap-2">
            {featuredCompaniesList && featuredCompaniesList.map(company => <FeatureCompany company={company} key={company.id} />)}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;