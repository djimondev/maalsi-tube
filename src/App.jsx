import { useState } from "react";
import { Header } from "./components/Header";
import { VideoList } from "./components/VideoList";
import { VideoPlayer } from "./components/VideoPlayer";
import { VIDEOS } from "./helpers/video.helper";
import "./index.css";

function App() {
    const [filteredResults, setFilteredResults] = useState(VIDEOS);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const filterResults = query => {
        const filteredVideos =
            VIDEOS.filter(video => video.title.toLowerCase().includes(query.toLowerCase()) || video.channel.toLowerCase().includes(query.toLowerCase())) || [];
        setFilteredResults(filteredVideos);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header onSearch={filterResults} />
            <VideoList videos={filteredResults} setSelectedVideo={setSelectedVideo} />
            {selectedVideo && (
                <VideoPlayer
                    url={selectedVideo.url}
                    title={selectedVideo.title}
                    channel={selectedVideo.channel}
                    views={selectedVideo.views}
                    timestamp={selectedVideo.timestamp}
                    description={selectedVideo.description}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </div>
    );
}

export default App;
