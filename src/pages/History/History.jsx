import React from 'react';
import Banner from '../../components/Banner/Banner';
import history_img from '../../assets/images/history-image.svg';
import './History.css';

const History = () => {
  return (
    <div>
        <Banner title={'TARİXÇƏ'} description={'HAQQIMIZDA/TARIXÇƏ'} />
        <div className='container'>
          <div className="row history-row">
            <div className="col-lg-7">
              <div className='history-content'>
                <p>
                  Öhdəliklərindəki işlərin uğurla tamamlanması və yeni işlərin alınması, zamanla öhdəliklərindəki 
                  işlərin böyüməsinə və 30.03.1987-ci il tarixində “Bayburt İnşaat Nak. San. ve Tic. Ltd. Şti.” 
                  adı ilə yeni şirkətin yaradılmasına gətirib çıxarmışdır.
                </p>
                <p>
                  Öhdəliklərindəki işlərin uğurla tamamlanması və yeni işlərin alınması, zamanla öhdəliklərindəki 
                  işlərin böyüməsinə və 30.03.1987-ci il tarixində “Bayburt İnşaat Nak. San. ve Tic. Ltd. Şti.” 
                  adı ilə yeni şirkətin yaradılmasına gətirib çıxarmışdır.
                </p>
                <p>
                  Yetərli maşın, vasitə və vəsait parkı, texniki və professional iş gücü heyəti ilə bu gün gəlinən 
                  nöqtədə sektorunun iddialı firmalarından biri olma qüruruna malikdir.
                </p>
                <p>
                  Bəndlər, avtomobil yolları, içməli su və suvarma kanalları, hovuz, dəmiryolları, tunel və bənzəri 
                  alt quruluş işləri ilə mənzil, inzibati və mülki binalar, ictimai təchiz, körpü, körpülü qovşaq 
                  və bənzəri üst quruluş işlərində 40 ildən çox müddətdir davam edən müvəffəqiyyətli fəaliyyətlərini 
                  maye yanacaq paylanması , sığorta və vasitəçilik xidmətləri, parnik, bərpa olunan enerji istehsalı, 
                  dağ-mədən, heyvandarlıq və heyvani qidaların istehsalı sahələrində davam etdirməkdədir. Fəaliyyətdə 
                  olduğu sektorlarda lider olma vizyonu və təşkilati imici ilə davamlı yeni markalar yaradaraq Türk 
                  iqtisadiyyatına fayda vermək missiyası ilə hərəkət edir.Qloballaşmaya paralel olaraq sürətli 
                  inkişaf və dəyişiklik göstərən Türkiyə və dünya iqtisadiyyatının ehtiyacının qarşılanmasında pay 
                  alacaq yeni sektorlarda həyata keçirdiyi investisiyalarla korporativ və sosial məsuliyyətin şüuru 
                  ilə böyüməyə davam edir. Ölkə iqtisadiyyatına fayda verən 20 fəal firması ilə əmin addımlarla 
                  yoluna davam edən Bayburt Grup sosial layihələri və ətraf mühit qanunvericiliklərinə uyğun yeni 
                  fəaliyyət sahələri ilə gələcək nəsillərə yol göstərəcək.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div className='history-image'>
                <img className='img-fluid' src={history_img} alt="history-image" />
              </div>
            </div>
          </div>
        </div>  
    </div>
  );
};

export default History;