import {useRef} from 'react';
import panel1 from '../media/panel1.png';
import panel2 from '../media/panel2.png';
import panel3 from '../media/panel1.jpg';
import panel4 from '../media/panel2.jpg';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

export default function Introduction(){
  const ref= useRef();
  return(
       <Parallax pages={4} ref={ref} style={{ marginTop:'120em',}}>   
         <ParallaxLayer 
            speed={1}
            onClick={()=>ref.current.scrollTo(3)}
            factor={2}
            style={{
              backgroundImage:`url(${panel1})`,
              backgroundSize:'100%',
            }}/>
           
         <ParallaxLayer offset={1} speed={0.5} factor={5} style={{
            backgroundImage:`url(${panel2})`,
            backgroundSize:'100%',
          }}/>
          
          <ParallaxLayer offset={2} speed={0.5} style={{
            backgroundImage:`url(${panel3})`, backgroundSize:'100%',
          }}/>

          <ParallaxLayer offset={3} speed={0.5} onClick={()=>ref.current.scrollTo(0) } style={{
        
            backgroundImage:`url(${panel4})`, backgroundSize:'100%',
          }}/>          
     </Parallax>        
    
  )
}
