import React from 'react'
import './Mission.css'
import mission from '../../assets/images/missiya.svg'
import viziyon from '../../assets/images/viziyon.svg'
import deyer from '../../assets/images/deyer.svg'
import Banner from '../Banner/Banner'

const Mission = () => {
  return (
<>
<Banner title={'MİSYON VƏ VİZYON'} description={'HAQQIMIZDA / MİSYON VƏ VİZYON'} />
<div className='container'>
        <div className="row mission-vision">
            <div className="col-lg-3 mission-vision-1">
                <img src={mission} alt="" />
                <h1>MİSSİYA</h1>
                <p>Bütün fəaliyyət sahələrində; yenilikçi, keyfiyyətli, etibarlı xidmət ve həllər təqdim etmək, qlobal hədəflərinə marka tanınırlığını artdıraraq və xalqına qürur verərək çatmaq.</p>
            </div>
            <div className="col-lg-3 mission-vision-1">
                <img src={viziyon} alt="" />
                <h1>VİZYON</h1>
                <p>Qlobal bazarda davamlı böyüməsini qoruyan, rəqabət gücü ilə seçilən, strateji tərəfdaş kimi etibar edilən, ətraf mühitə və insanlara həssas olan dünyanın aparıcı unikal şirkətlərindən biri olmaq.</p>
            </div>
            <div className="col-lg-3 mission-vision-1">
                <img src={deyer} alt="" />
                <h1>DƏYƏRLƏR</h1>
                <p>Sevgi və Hörmət Şeffaflık və Dürüstlük Keyfiyyət Etibarlılıq Yenilikçilik və Orjinallıq Əxlaq və Məsuliyyət Davamlılıq</p>
            </div>
        </div>
    </div>
</>
  )
}

export default Mission