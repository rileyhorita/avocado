import "./Merch.css"
import Merchitem from './Merchitem'
import t1 from './images/t1.png'
import t2 from './images/t2.png'
import t3 from './images/t3.png'
import t4 from './images/t4.png'
import t5 from './images/t5.png'
import t6 from './images/t6.png'
import t7 from './images/t7.png'
import t8 from './images/t8.png'
import t9 from './images/t9.png'
import t10 from './images/t10.png'
import Icons from "../components/Icons"




export default function Merch() {
    return  (
       <div> 
            <h1 className="merch-title">Merch</h1>
            <div className= "merch-items">
                <div className= "upper">

                    <Merchitem 
                        img= {t1}
                    />
                    <Merchitem 
                        img= {t2}
                    />
                    <Merchitem 
                        img= {t3}
                    />
                    <Merchitem 
                        img= {t4}
                    />
                    <Merchitem 
                        img= {t5}
                    />
                  </div>
                
                <div className= "lower">

                    <Merchitem 
                        img= {t10}
                    />
                    <Merchitem 
                        img= {t7}
                    />
                    <Merchitem 
                        img= {t8}
                    />
                    <Merchitem 
                        img= {t9}
                    />
                    <Merchitem 
                        img= {t6}
                    />
                </div>
                   
            </div>
            <Icons />
       </div>
    )
}