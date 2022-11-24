import Categories from "../components/Categories"
import Discounts from "../components/Discounts"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import Slider from "../components/Slider"

const Home = () => {
    return (
        <div>
            <Discounts />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
        </div>
    )
}

export default Home