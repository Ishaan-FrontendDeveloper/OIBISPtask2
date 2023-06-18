import './Header.css';
import miuraPortrait from '../media/miura.png';
export default function Header(){
  return (
  <header><img src={miuraPortrait} alt='miura'/><h1>Kentaro Miura</h1>  <h4>July 11,1966 - May 6,2021</h4><div className='shortNote'>A Japanese Mangaka, unrivaled in both his artistic detail and storytelling skills, most famous for his work 'Berserk' which has been influential from modern anime to video games. </div> <hr/> </header>
  )
}
