import { useState } from "react";
import { Header } from "./components/Header";
import { VideoList } from "./components/VideoList";
import { VIDEOS } from "./helpers/video.helper";
import "./index.css";
function App() {
    const [filteredResults, setFilteredResults] = useState(VIDEOS);

    const filterResults = query => {
        const filteredVideos = VIDEOS.filter(video => video.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredResults(filteredVideos);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header onSearch={filterResults} />
            <VideoList videos={filteredResults} />
        </div>
    );
}

export default App;
