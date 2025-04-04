import Header from "./header/Header";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import Statistics from "./statistics/Statistics";
import Actions from "./actions/Actions";
import Footer from "./footer/Footer";
import { useHashScrollOnMount } from "../../hooks/useHashScrollOnMount";

const Main = () => {
    useHashScrollOnMount();

    return (
        <main>
            <Header />
            <Hero />
            <Features />
            <Statistics />
            <Actions />
            <Footer />
        </main>
    );
};

export default Main;
