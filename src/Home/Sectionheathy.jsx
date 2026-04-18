import { useTranslation } from "react-i18next";

function Body() {
    const { t } = useTranslation();
    return (
        <div >
             <section className="heathy_section layout_padding">
    <div className="container">

      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="detail-box">
            <h2>
              {t('healthySection.title')}
            </h2>
            <p>
              {t('healthySection.desc')}
            </p>
            <div className="btn-box">
              <a href="">
                {t('healthySection.readMore')}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
        </div>
    );
}   
export default Body;