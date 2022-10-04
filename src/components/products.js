import React, {useEffect,useRef} from 'react';
import stz from "../assets/images/Mask.png"
import yayratan from "../assets/images/funksional.png"
import pecheni from "../assets/images/newP.png"
import bugdoy from "../assets/images/bug'doy-non.png"
import kunjut from "../assets/images/kunjutli-non.png"
import bugdoyJavdar from "../assets/images/bug'doy-javdar.png"
import zogora from "../assets/images/zog'ora-non.png"
import ReactPlayer from 'react-player'
import video from "../assets/videos/video_2.mp4"
import languages from "../i-18/resources";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Products = () => {
    const { t } = useTranslation();
    const data = [
        {id:1,image:yayratan, name:t("pdName_1"),icon:stz,date:"Ts 309245313-001:2022",desc:t("desc_1")},
        {id:1,image:pecheni,name:t("pdName_2"),icon:stz,date:"Ts 309245313-003:2022",desc:t("desc_2")},
        {id:1,image:bugdoy,name:t("pdName_3"),icon:stz,date:"Ts 27160335-002:2019,MTR.008-2017",desc:t("desc_3")},
        {id:1,image:kunjut,name:t("pdName_4"),icon:stz,date:"Ts 27160335-002:2019,MTR.008-2017",desc:t("desc_4")},
        {id:1,image:bugdoyJavdar,name:t("pdName_5"),icon:stz,date:"Ts 27160335-002:2019,MTR.008-2017",desc:t("desc_5")},
        {id:1,image:zogora,name:t("pdName_6"),icon:stz,date:"Ts 27160335-002:2019,MTR.008-2017",desc:t("desc_6")},
    ];

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };



    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <div >

            <div className="container products">
                <div className="videoMain">
                    <video
                        style={{maxWidth: "100%", width: "800px", margin: "0 auto"}}
                        playsinline
                        loop
                         muted
                        // contr
                        // ols
                        alt="All the devices"
                        src={video}
                        ref={videoEl}
                    />
                </div>
            <h2 className="ours">{t("ourPd")}</h2>
            {
                data.map((item ,index ) => {
                   return <div key={index} className="row main">
                       <div className="col-lg-4 col-md-6col-12 image">
                           <img src={item.image} alt=""/>
                       </div>
                       <div className="col-lg-8 col-md-6  col-12">
                           <div className="description">
                               <h2>{item.name}</h2>
                               <div className="date">
                                   <img src={item.icon} alt=""/>
                                   <h4>{item.date}</h4>
                               </div>
                               <h5>{item.desc}</h5>

                           </div>
                       </div>

                   </div>
                })
            }
            </div>
        </div>
    );
};

export default Products;