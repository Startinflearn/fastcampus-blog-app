import Footer from "component/Footer";
import Header from "component/Header";
import PostList from "component/PostList";
import Carousel from "component/Carousel";

export default function Home() {
    return (
        <div>
            <Header/>
            <Carousel/>
            <PostList/>
            <Footer/>
        </div>
    )
}