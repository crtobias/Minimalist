import { Outlet } from "react-router-dom"
import { Nav } from "../../component"
import { Footer } from "../../component/footer"
import styles from "./main.module.css"

export const Main = () => {


  return (
    <div className={styles.module}>
      <Nav/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}