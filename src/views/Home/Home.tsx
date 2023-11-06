
import HomeBg from "../../components/HomeBg/HomeBg";
import Navbar from "../../components/Navbar/Navbar";
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.containerHome}>
       <div className={styles.navbar}> <Navbar></Navbar></div>
      <HomeBg></HomeBg>
     

   
    </div>
    )
}

export default Home;