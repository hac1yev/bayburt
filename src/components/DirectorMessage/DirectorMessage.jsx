import React from 'react';
import './DirectorMessage.css';

const DirectorMessage = () => {
  return (
    <div className="container">
        <div className='row justify-content-between leader-message-container'>
            <div className='col-lg-3 leader-message-first'>
                <h1>RƏHBƏRİN MESAJI</h1>
                <button className='mybtn'>VIEW OUR STORY</button>
            </div>
            <div className="leader-message-inner col-lg-8">
                <p>Həyatımızın ilk pəncərəsinin açıldığı "ailə" müəssisəsini ayaqda üstə saxlayan sağlam    prinsiplər, ənənələr, gündəlik davranışlar, müəssisənin uzun müddətli var olmasını təmin edirlər. Bir müəssisə, yaşayan bir orqanizm olaraq təsvir edilərkən, onun, eynilə insanlar kimi emosional və ictimai həyata sahib olaraq və daha çox çalışaraq, səy göstərərək, fiziki, mənəvi, zehni və ictimai zəkasını inkişaf etdirməsi gözlənilir.</p>
                <b>Abdurrahman Şentürk <br /> İdarə Heyəti Rəhbəri</b>
            </div>
        </div>
    </div>
  );
};

export default DirectorMessage;