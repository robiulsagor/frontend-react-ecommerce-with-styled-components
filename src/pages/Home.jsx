import Categories from "../components/Categories"
import Discounts from "../components/Discounts"
import Navbar from "../components/Navbar"
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
        </div>
    )
}

export default Home