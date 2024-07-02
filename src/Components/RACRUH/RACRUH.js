import Partners from "./Partners";
import { useLocation } from "react-router-dom";
import {useEffect} from "react";
import About from "./About";
import TimeLine from "./TimeLine";
import ExecutiveBoard from "./ExecutiveBoard";
import DirectorBoard from "./DirectorBoard";


export default function RACRUH() {

    let location = useLocation();

    useEffect(() => {
        if (location.hash === '#partners') {
            const element = document.getElementById('partners');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div>
            <About/>
            <TimeLine/>
            <div id='partners'>
                <Partners/>
                <ExecutiveBoard/>
                <DirectorBoard/>
            </div>

        </div>

    )
}
