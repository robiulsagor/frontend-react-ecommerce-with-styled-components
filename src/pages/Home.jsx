import Categories from "../components/Categories"
import Discounts from "../components/Discounts"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"

const Home = () => {
    return (
        <div>
            <Discounts />
            <Navbar />
            <Slider />
            <Categories />
        </div>
    )
}

export default Home