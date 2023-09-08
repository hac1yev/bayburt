import React from 'react'
import './Activity.css'
import insaat from '../../assets/images/activity/insaat.svg'
import enerji from '../../assets/images/activity/enerji.svg'
import heyvandarlq from '../../assets/images/activity/heyvandarliq.svg'
import istixana from '../../assets/images/activity/istixana.svg'
import it from '../../assets/images/activity/it.svg'
import kend from '../../assets/images/activity/kend.svg'
import sigorta from '../../assets/images/activity/sigorta.svg'
import xidmet from '../../assets/images/activity/xidmet.svg'
import yanacaq from '../../assets/images/activity/yanacaq.svg'
import Banner from '../../components/Banner/Banner';

const Activity = () => {
  return (
    <>
    <Banner title='FƏALİYYƏT SAHƏLƏRİ' description='ƏSAS SƏHİFƏ / FƏALİYYƏT SAHƏLƏRİ' />
        <div className='container activity-cont'>
        <div className="row activity-row">
            <div className="col-lg-4 activity-card">
                <div className="activity-inner">
                    <img src={insaat} alt="" />
                </div>
                <h1>İNŞAAT</h1>
                <p>Bayburt Grup AŞ Podratçılıq, yanacaq satışı və istismarı, siğorta və vasitəçilik xidmətləri, məsləhətçilik, daxili və xarici ticarət, neft və neft məhsullarının...</p>
            </div>

            <div className="col-lg-4 activity-card">
                <div className="activity-inner">
                    <img src={enerji} alt="" />
                </div>
                <h1>ENERJİ</h1>
                <p>Dünya və ölkəmizin getdikcə artan enerji ehtiyacının qarşılanmasına aid Beynəlxalq və regional tədqiqatların qiymətləndirilməsi....</p>
            </div>

            <div className="col-lg-4 activity-card">
                <div className="activity-inner">
                    <img src={istixana} alt="" />
                </div>
                <h1>İSTİXANA</h1>
                <p>Ölkəmizin sahib olduğu misilsiz iqlim və su ehtiyatları üstünlüklərinə son istehsal texnologiyalarını tətbiq edərək beynəlxalq standartlardakı məhsul...</p>
            </div>

            <div className="col-lg-4 activity-card">
                <div className="activity-inner">
                    <img src={heyvandarlq} alt="" />
                </div>
                <h1>HEYVANDARLIQ</h1>
                <p>İzmir Dikili’ də yerləşən müəssisəmiz 980000 m2 ərazidə yaradılmışdır. Ümumi tutumu 2400 sağım inək olan sığınacaqlarımıza…</p>
            </div>

            <div className="col-lg-4 activity-card">
                <div className="activity-inner">
                    <img src={sigorta} alt="" />
                </div>
                <h1>SIĞORTA</h1>
                <p>2000-ci ildə qrupumuzun quruşuluna paralel olaraq qurulan firma, Ray sığorta və Ankara Sığorta ‘A’ qrupu ajentliklərinə sahibdir.</p>
            </div>

            <div className="col-lg-4 activity-card">
                <div className="activity-inner">
                    <img src={yanacaq} alt="" />
                </div>
                <h1>MAYE YANACAQ PAYLAMA</h1>
                <p>2000-ci ildə qrupumuzun quruşuluna paralel olaraq qurulan firma, Ray sığorta və Ankara Sığorta ‘A’ qrupu ajentliklərinə sahibdir.</p>
            </div>

            <div className="col-lg-4 activity-card">
                <div className="activity-inner">
                    <img src={xidmet} alt="" />
                </div>
                <h1>XİDMƏT</h1>
                <p>Anadoluda anadan olmuş, böyümüş, amma sonra hamımız kimi anadan olduğu yer deyil də, yaşamağa razı olduğu yer deyərək böyük şəhərlərdə yaşamış…</p>
            </div>

            <div className="col-lg-4 activity-card">
                <div className="activity-inner">
                    <img src={kend} alt="" />
                </div>
                <h1>KƏND TƏSƏRRÜFATI</h1>
                <p>Anadoluda anadan olmuş, böyümüş, amma sonra hamımız kimi anadan olduğu yer deyil də, yaşamağa razı olduğu yer deyərək böyük şəhərlərdə yaşamış…</p>
            </div>

            <div className="col-lg-4 activity-card">
                <div className="activity-inner">
                    <img src={it} alt="" />
                </div>
                <h1>İNFORMASİYA TEXNOLOGİYALARI</h1>
                <p>Anadoluda anadan olmuş, böyümüş, amma sonra hamımız kimi anadan olduğu yer deyil də, yaşamağa razı olduğu yer deyərək böyük şəhərlərdə yaşamış…</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Activity