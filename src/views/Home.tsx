import TopBar from "../layouts/TopBar";
import Frapper from '../assets/frapper.svg?react';
import TopBarText from "../components/TopBarText";
import { textTopBarDurationEffect } from "../configs/TopBarConfig";
import Container from "../layouts/Container";
import Header from "../layouts/Header";
import HeaderText from "../components/HeaderText";
import HeaderImage from "../components/HeaderImage";

function Home() {
    return (
        <Container>
            <TopBar 
                topBarIcon={<Frapper className="w-10 h-10" />} 
                topBarElement={<TopBarText text="jayson.sh" 
                duration={textTopBarDurationEffect} />} 
            />
            <Header 
                leftElement={<HeaderText />}
                rightElement={<HeaderImage />}
            />
        </Container>
    );
}

export default Home;