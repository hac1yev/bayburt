import React from 'react';
import './History.css';
import { Link } from 'react-router-dom';

const History = () => {
  return (
    <div className="container">
        <div className='row justify-content-between leader-message-container'>
            <div className='col-lg-3 leader-message-first'>
                <h1>TARİHÇE</h1>
                <Link to='/' className='mybtn text-center'>VIEW OUR TEAM</Link>
            </div>
            <div className="leader-message-inner col-lg-8">
                <p>Kurucumuz rahmetli Kıyasi Şentürk, 1973 yılında kardeşleri ile birlikte ‘Kıyasi Şentürk ve Ortakları’ unvanı ile alt yapı, taahhüt ve inşaat işlerine başlamışlardır. Üstlendikleri işlerin başarıyla tamamlanması ve yeni işlerin alınması, zamanla taahhütlerindeki işlerin büyümesini ve 30.03.1987 tarihinde Bayburt İnşaat Nak. San. ve Tic. Ltd. Şti. unvanı ile yeni firmanın kurulmasını sağlamıştır.</p>
            </div>
            {/*  */}
            <div className="history-under-div row">
                <div className='col-lg-4 under-history'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <rect x="0.5" y="1" width="17" height="17" stroke="#2721F2"/>
                    <circle cx="9" cy="9.5" r="3" fill="#2721F2"/>
                    </svg><span>CANDID CONVICTION</span>
                </div>
                <div className='col-lg-4'>
                    <p>We’re relentless because we have to be. Entrepreneurs choose to partner with Drive because they want convicted investors who will push them to be great.</p>
                </div>
                <div className='col-lg-4'>
                    <p>Great founders don’t want cheerleaders or cheap platitudes. They want honesty about what works and what doesn’t. They want the best tools available for doing their life’s work.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default History;