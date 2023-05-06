import type { NextPage } from "next";
//
import HomePage from "@modules/Home";

const Home: NextPage = () => {
    return (
        <>
            <div className="__home container">
                <HomePage />
            </div>
        </>
    );
};

export default Home;
