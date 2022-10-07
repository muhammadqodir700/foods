import React from 'react';
import TurayevA from "../assets/teachers/turaye-A.png"
import TurayevF from "../assets/teachers/turayev-F.png"
import Shayxova from "../assets/teachers/shayxova.png"
import Axmedove from "../assets/teachers/axmedova.png"
import Qurbonov from "../assets/teachers/qurbonov.png"
import Quchqorova from "../assets/teachers/quchqorova.png"
import SafarovK from "../assets/teachers/safarov.png"
import Rustamova from "../assets/teachers/rustamova.png"
import Shukurov from "../assets/teachers/shukurov.png"
import SafarovA from "../assets/teachers/safarov-A.png"
import Adizov from "../assets/teachers/adizov.png"
import Vasiatxanova from "../assets/teachers/vasiatxonova.png"
import Imamov from "../assets/teachers/imamov.png"
import Saidova from "../assets/teachers/saidova.png"

const Teachers = () => {

    const data = [

        {id:1,image:SafarovK,name:"Сафаров Каримжон Сафарович",about:"Россия Федерацияси озиқ-овқат миллий хавфсизлиги Академиясининг ҳақиқий аъзоси"},
        {id:1,image:Qurbonov,name:"Курбанов Бахтиёр Ибрагимович",about:"ЎзР ФА Ядро физикаси институти \"Экология ва биотехнологиялар\" лабораторияси мудири"},
        {id:1,image:Axmedove,name:"Ахмедова Заҳро Раҳматовна",about:"Ўзбекистон микробиология\n" +
                "жамияти раиси"},
        {id:1,image:Quchqorova,name:"Кучкарова Любовь\n" +
                "Салижановна",about:"Ўзбекистон Миллий университети, биология фанлари доктори, профессор"},
        {id:1,image:TurayevF,name:"Тўраев Феруз Фатхуллаевич",about:"Республика ихтисослаштирилган Эндокринология илмий -амалий тиббиёт Маркази директори"},
        {id:1,image:Shayxova,name:"Шайхова Гули Исламовна",about:"Соғлиқни сақлаш вазирлиги бош нутрициологи"},
        {id:1,image:Shukurov,name:"Шукуров Анвар\n" +
                "Нажмиддинович",about:"Тиббиёт фанлари номзоди"},

        {id:1,image:Rustamova,name:"Рустамова Мамлакат\n" +
                "Тўлабаевна",about:"Ўзбекистан врачлар Ассоциацияси Президиум аъзоси"},


        {id:1,image:Adizov,name:"Адизов Акрамжон\n" +
                "Жумабаевич",about:"Иқтисод фанлари номзоди"},


        {id:1,image:Imamov,name:"Имамов Санжарали Тўлқинович",about:"LTZ  корхонаси бош директори"},
        {id:1,image:SafarovA,name:"Сафаров Алишер\n" +
                "Каримджанович",about:"Ўзбекистон Миллий университети, биология фанлари доктори"},
        {id:1,image:Saidova,name:"Саидова Юлдуз Тухтаевна",about:"“Funksional  oziq-ovqatlar kombinati”   МЧЖ директори"},

    ];

    return (
        <div className="row teachers">
            {
                data?.map((item,index) => {
                    return <div key={index} className="col-lg-3 col-md-4 col-sm-6 cardTeachers">
                            <img src={item.image} alt=""/>
                            <div className="about">
                                <h3>{item.name}</h3>
                                <h4>{item.about}</h4>
                            </div>
                        </div>

                })
            }






        </div>
    );
};

export default Teachers;