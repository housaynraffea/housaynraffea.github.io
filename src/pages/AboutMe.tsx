import Navbar from '@/common/components/navbar/navbar';
import '@/common/styles/index.css';
import '@/common/styles/about-me.css';

function AboutMe() {
    return (
        <div>
            <Navbar/>
            <div className="aboutMeContainer">
                <div className="aboutMeHeaderContainer">
                    <h1>ABOUT ME</h1>
                </div>

                <div className="aboutMeInfoContainer">
                    <div className="aboutMeTextContainer">
                        <div className="aboutMeInfoSubContainer">
                            <p>Hello, my name is Housayn Raffea! I am 21 years old (born in 2005).</p>
                            <p>I used to develop games as a hobby (I still try to), and I decided to study Software Development at USN to learn more about, and participate in the process of developing various software/websites</p>
                            
                        </div>

                        <div className="aboutMeHobbySubContainer">
                            <p>My hobbies include:
                            <br/>- Playing games
                            <br/>- Design (UX, UI, Covers, Logos, anything that has to do with visual design)
                            <br/>- Reading books
                            <br/>- Drawing/Animating
                            <br/>- Composing music (I'm a newbie)</p>
                        </div>

                        <div className="aboutMeHardwareSubContainer">
                            <p>For my hardware, I use:
                            <br/>- A Samsung Notebook 4 (Windows 11): This is the laptop I use for work/studies.
                            <br/>- A Lenovo IdeaPad Slim3 (Fedora 44): This is the laptop I use for my personal projects & to play games. 
                            <br/>- For the window manager, I use Niri (A scrollable-tiling window manager). 
                            <br/>- For the status bar, I use Noctalia v5.
                            </p>
                        </div>
                        
                        <p>This website was made with React + Vite and TypeScript. All of my GitHub projects will live here, on this website. If you click on the Icon to the left in the Navigation Bar, you'll find clickable items which lead to said projects.</p>
                    </div>
                    
                    <div className="aboutMePictureContainer">
                        <p>(a picture of me)</p>
                        <img src="/assets/Media.jpg" width="600px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
