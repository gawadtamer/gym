import { useTranslation } from "react-i18next";
import data from "../AllDate/Api.json";

function Sectionlayout() {  
  const { t } = useTranslation();
  const services = data.whyUs;

  return (
    <section className="us_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            {t('whyChooseUs.title')}
          </h2>
        </div>

        <div className="us_container ">
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-lg-3 col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={service.image} alt={t(service.titleKey)}/>
                  </div>
                  <div className="detail-box">
                    <h5>
                      {t(service.titleKey)}
                    </h5>
                    <p>
                      {t(service.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionlayout;
