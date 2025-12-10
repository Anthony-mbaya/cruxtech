import { Navbar } from "../components/navbar";
import { Display } from "../components/display";
export function MainPage() {
    return(
        <div className="main_section">
            <div class="dark_bg"></div>
            <Navbar />
            <Display />
        </div>
    )
}