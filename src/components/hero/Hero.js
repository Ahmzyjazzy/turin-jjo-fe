import './Hero.css';

function Hero() {
  return (
    <header className="hero-section">
      <div className="hero-section__content">
        <h1 className="heading-1 hero-section__content--title">Juniors make IT work.</h1>
        <p className="hero-section__content--info">Hire and invest in highly skilled juniors now</p>
        <button className="btn-primary mt-5">Post Offer Now</button>
      </div>
    </header>
  )
}

export default Hero;