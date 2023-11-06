import img1 from '../../assets/medico.jpg'
import styled from 'styled-components'
import styles from './HomeBg.module.css'
import AccessButton from '../Navbar/AccessButton'


const HomeBg = () => {
    return  <div>
    <div className={styles.containerBg}> 
    <div className={styles.buttons}>
    <AccessButton text="Schedule appointment" path="/schedule-appointment" />
      <AccessButton text="Learn more about us" path="/about-us" />
        </div>
 
 </div>
    </div>
}


export default HomeBg;