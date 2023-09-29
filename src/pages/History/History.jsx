import React from 'react';
import Banner from '../../components/Banner/Banner';
import history_img from '../../assets/images/history-img.svg';
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
            <div className="col-lg-5 circle-col">
              <div id="circle">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="300px"
                  height="300px"
                  viewBox="0 0 300 300"
                  enableBackground="new 0 0 300 300"
                  xmlSpace="preserve"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d=" M 150, 150 m -135, 0 a 135,135 0 0,1 270,0 a 135,135 0 0,1 -270,0 "
                    />
                  </defs>
                  <circle cx="150" cy="100" r="120" fill="none" /> {/* Increased radius to 120 */}
                  <g>
                    <text fill="#000">
                      <textPath xlinkHref="#circlePath">
                        Mərhum qurucumuz Kıyasi Şentürk, 1973-cü ildə qardaşları ilə birlikdə 'Kıyasi Şentürk və Ortaqları'
                        adı ilə yeraltı infrastruktur, öhdəlik və inşaat işlərinə başlamışlardır.
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <img className='history-img' src={history_img} alt="history-img" />
            </div>
          </div>
        </div>  
    </div>
  );
};

export default History;