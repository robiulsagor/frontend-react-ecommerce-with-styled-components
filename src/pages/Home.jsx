import { useContext } from "react"
import { DiscountContext } from "../App"
import Categories from "../components/Categories"
import Discounts from "../components/Discounts"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import Slider from "../components/Slider"


const Home = () => {
    const discount = useContext(DiscountContext)

    return (
        <div>
            {discount[0] && <Discounts />}
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home