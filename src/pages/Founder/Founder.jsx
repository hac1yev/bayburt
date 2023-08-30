import React from 'react'
import './Founder.css'
import Banner from "../../components/Banner/Banner"
import founder from '../../assets/images/uzvluk/founder.png'

const Founder = () => {
  return (
    <>
        <Banner title='QURUCULARIMIZ' description='HAQQIMIZDA / QURUCULARIMIZ' />
        <div className="container founder-container">
            <img src={founder} alt="" className='img-fluid' />
            <p>Bir çox Bayburtlunun ortaq taleyi olan qürbət həyatı ilə bu illərdə tanış oldu. Türkiyənin bir çox yerində müxtəlif inşaat işlərində şagird, usta və səyahətçi kimi çalışdı. 1970-ci ildə daha uzaqlara, bizim diyarımızda acı qürbət olaraq müəyyən edilən Almaniyaya getdi. 1973-cü ildə Almaniyadan qəti geridönüş edərkən orada topladıqları ilə aldığı və ölkəsinə gətirdiyi qazıcı-yükləyici inşaat maşını ilə Ankarada inşaat işlərinə başladı. 1987-ci ilə qədər iki qardaşı ilə birlikdə “Kıyasi Şentürk və Ortakları” adı altında çalışmağa davam etdi. Kıyasi Şentürk, qardaşları və oğulları ilə Bayburt İnşaat şirkətini 1987-ci ilində qurdu. Bugünkü Bayburt Grupun əsasının qoyulduğu bu şirkət, Kənd Xidmətləri, Dövlət Su İşləri və Avtomobil Yolları kimi müxtəlif qurumların layihələrini bir podratçı olaraq uğurla tamamladı. Kıyasi Şentürk ömrü boyu Bayburt və Bayburtluya xidmət eşqi ilə yaşamışdır.Bu şəhərin gənclərinin universitetə getdiyini, vətənə və millətə xeyirli nəsillər kimi böyüməsini görmək onun üçün ən böyük xoşbəxtlik idi. Xüsusilə dəstək olduğu Quran kurslarından hafiz olaraq məzun olan gənclər onun gözlərində yaş, qəlb aləmində bir çiçəkdilər.Kıyasi Şentürk, Həsən Şentürk və əbədiyyətə qovuşan böyüklərimizin arzu və vəsiyyətlərini yerinə yetirmək, adlarını yaşatmaq, xidmət və yardım sevgisini davam etdirmək üçün qurduğumuz Bayburt Grup Fondu ilə hər ay minlərlə universitet tələbələrinə təqaüd veririk. Yenə onların adına etdirdiyimiz məscid, quran kursu və məktəblər ilə əziz xatirələrini yaşatmaq; ölkəmizə və xalqımıza töhfə vermək istəyirik. Bayburt Grup Ailəsi</p>
        </div>
    </>
  )
}

export default Founder