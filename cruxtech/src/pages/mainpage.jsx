import { Navbar } from "../components/navbar";
import { Display } from "../components/display";
import { Services_Scroll } from "../components/service_scroll";
import { Services_Page } from "./servicespage";
export function MainPage() {
    return(
        <>
        <div className="main_section">
            <div class="dark_bg"></div>
            <Navbar />
            <Display />
            <Services_Scroll /> 
        </div>
        <div>
            <Services_Page />
        </div>
        </>
    )
}