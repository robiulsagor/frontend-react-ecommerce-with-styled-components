import { useContext } from "react"
import { DiscountContext } from "../App"
import Categories from "../components/Categories"
import Discounts from "../components/Discounts"
import Footer from "../components/Footer"
import MobileNavbar from "../components/MobileNavbar"
import NavTemplate from "../components/NavTemplate"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import Slider from "../components/Slider"
import { NavigationContext } from "../contextAPI/NavContext"


const Home = () => {
    const discount = useContext(DiscountContext)
    const { showNav, setShowNav } = useContext(NavigationContext)

    return (
        <div>
            {/* {discount[0] && <Discounts />} */}
            <NavTemplate />
            <MobileNavbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home