import './App.css';
import { FiChevronRight } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <header className="hero-section w-full px-5 md:px-0 flex flex-row items-center h-60 bg-gray-500">
        <div className="w-full md:w-9/12 md:mx-auto flex flex-col items-start">
          <h1 className="heading-1 font-semibold text-white">Juniors make IT work.</h1>
          <p className="text-xs font-semibold leading-snug text-white">Hire and invest in highly skilled juniors now</p>
          <button className="btn-primary mt-5">Post Offer Now</button>
        </div>
      </header>
      <main className="w-full my-12 px-5 md:px-0">
        <section className="w-full md:w-9/12 md:mx-auto">
          <div className="flex flex-row flex-wrap justify-between items-center py-0 md:py-5">
            <h1 className="heading-2 font-extrabold text-gray-800">Newest Job Offers</h1>
            <a href="#" className="text-blue-500 font-bold text-xs flex flex-row items-center">View all job offers  <BsArrowRight className="ml-1 text-lg" /></a>
          </div>
          <section className="divide-y-2 md:divide-y-0 md:divide-x-2 divide-solid divide-gray-200 grid md:grid-cols-3 w-full">
            <article className="offer">
              <header>
                <div>
                  <h4 className="offer-title">Junior Java Developer</h4>
                  <p className="offer-subtext">PickSaas <span className="offer-subtext__location">Wrclaw, Polska</span></p>
                </div>
                <span className="font-normal text-xs">2 hours ago</span>
              </header>
              <div className="relative pr-7">
                <p className="font-normal text-xs">I am currently looking for a Java Developer. Project for Public Sector Location: Wroclaw (during the pandemic remote work)</p>
                <p className="font-normal text-xs">$ up to PLN 550 net / MD B2B</p>
                <button className="btn-primary absolute right-0 bottom-0 px-1 py-1">
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </article>
            <article className="offer">
              <header>
                <div>
                  <h4 className="offer-title">Junior Project Manager</h4>
                  <p className="offer-subtext">Fronkum <span className="offer-subtext__location">Lublin, Polska</span></p>
                </div>
                <span className="font-normal text-xs">3 hours ago</span>
              </header>
              <div className="relative pr-7">
                <p className="font-normal text-xs">Join us in the Lublin office to build innovative long-term projects.
                  Exciting international clients and partners at work environment focused on learning and growth awaits you</p>
                <button className="btn-primary absolute right-0 bottom-0 px-1 py-1">
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </article>
            <article className="offer">
              <header>
                <div>
                  <h4 className="offer-title">Junior Porject Manager</h4>
                  <p className="offer-subtext">Fronkum <span className="offer-subtext__location">Lublin, Polska</span></p>
                </div>
                <span className="font-normal text-xs">1 day ago</span>
              </header>
              <div className="relative pr-7">
                <p className="font-normal text-xs">I am currently looking for a Java Developer. Project for Public Sector Location: Wroclaw (during the pandemic remote work)</p>
                <p className="font-normal text-xs">$ up to PLN 550 net / MD B2B</p>
                <button className="btn-primary absolute right-0 bottom-0 px-1 py-1">
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </article>
          </section>

        </section>
      </main>
    </div>
  );
}

export default App;
