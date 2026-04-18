import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Body() {
    const { t } = useTranslation();
    const slideIndices = [0, 1, 2, 3, 4];

    return (
        <div className="hero_area">
            {/* slider section */}
            <section className=" slider_section position-relative">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {slideIndices.map((index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="container">
                                    <div className="col-lg-10 col-md-11 mx-auto">
                                        <div className="detail-box">
                                            <div>
                                                <h3 className="hero-subtitle">{t('hero.fitness')}</h3>

                                                    <h2 className="hero-title">{t('hero.training')}</h2>

                                                    <h1 className="hero-brand"><span>{t('hero.title')}</span></h1>

                                                    <p className="hero-desc">{t('hero.desc')}</p>

                                                    <div className="hero-buttons">
                                                        <Link to="/contact" className="btn-primary">
                                                            {t('hero.contactUs')}
                                                        </Link>

                                                        <a href="#video" className="btn-outline">
                                                            WATCH VIDEO
                                                        </a>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ol className="carousel-indicators">
                        {slideIndices.map((index) => (
                            <li 
                                key={index}
                                data-target="#carouselExampleIndicators" 
                                data-slide-to={index} 
                                className={index === 0 ? "active" : ""}
                            ></li>
                        ))}
                    </ol>
                </div>
            </section>
            {/* // <!-- end slider section --> */}
        </div>
    );
}

export default Body;
