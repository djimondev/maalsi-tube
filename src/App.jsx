import { Header } from "./components/Header";
import { VideoList } from "./components/VideoList";
import { VIDEOS } from "./helpers/video.helper";
import "./index.css";
function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <VideoList videos={VIDEOS} />
        </div>
    );
}

export default App;
