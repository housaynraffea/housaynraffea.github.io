import Navbar from '@/common/components/navbar/navbar';
import '@/common/styles/index.css';
import '@/common/styles/home.css';

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="homeProjectsContainer">
                <div className="homeProjectsHeaderContainer">
                    <h1>PROJECTS</h1>
                </div>
                <div className="homeProjectsItemsContainer">
                    <div className="homeProjectsItemContainer">
                        <a href='https://github.com/housaynraffea/booktalk'>
                            <div id="left" className="homeProjectsItemThumbnailContainer"><img src="/assets/booktalk-icon.svg"/></div>
                            <div id="right" className="homeProjectsItemInfoContainer">
                                <div className="homeProjectsItemInfoHeaderContainer"><h3>BookTalk (W.I.P.)</h3></div>
                                <div className="homeProjectsItemInfoDescriptionContainer">
                                    <p>A university project I am currently developing. A 'social network' for book enthusiasts where people can review books, and show everyone their favourite book. It also tracks & gives you personal recommendations based on your reviews and shows what's popular for everyone at a given date. (Mainly inspired by letterboxd)</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="homeProjectsItemContainer">
                        <a href='https://github.com/facetype/ReverseKahoot'>
                            <div id="left" className="homeProjectsItemInfoContainer">
                                <div className="homeProjectsItemInfoHeaderContainer"><h3>BlindedFlutter (Working name)</h3></div>
                                <div className="homeProjectsItemInfoDescriptionContainer">
                                    <p>Another university project. BlindedFlutter is a Game-Learning System (something akin to Kahoot & Quizlet). Players join a quiz, betting on options for answers they don't know the question for. It's essentially a guessing & betting game with a focus on learning something new. For this project, I'm mainly working as a frontend developer with a team. </p>
                                </div>
                            </div>
                            <div id="right" className="homeProjectsItemThumbnailContainer"><img src="/assets/blindedflutter-icon.svg"/></div>
                        </a>
                    </div>

                    <div className="homeProjectsItemContainer">
                        <a href='https://github.com/housaynraffea/TomaToro'>
                            <div id="left" className="homeProjectsItemThumbnailContainer"><img src="/assets/tomatoro-icon.svg"/></div>
                            <div id="right" className="homeProjectsItemInfoContainer">
                                <div className="homeProjectsItemInfoHeaderContainer"><h3>TomaToro</h3></div>
                                <div className="homeProjectsItemInfoDescriptionContainer">
                                    <p>Another university project I made. This project is as simple as any known pomodoro app, but with a lot of customization. Things you can customize include: The background color for study & break-states, whether you want to auto-start the next study or break, whether the notification should show a progress bar or not.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <h3>...AND MORE TO COME!</h3>
                <p>(I am planning to expand this page as much as I can. Future projects are definetly coming. Look out for those!)</p>
            </div>
        </div>
    );
}

export default Home;
