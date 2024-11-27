import { useState } from "react";
import { Header } from "./components/Header";
import UploadButton from "./components/UploadButton";
import { VideoList } from "./components/VideoList";
import { VideoPlayer } from "./components/VideoPlayer";
import VideoUploadModal from "./components/VideoUploadModal";
import { VIDEOS } from "./helpers/video.helper";
import "./index.css";

function App() {
    const [videos, setVideos] = useState(VIDEOS);
    const [filteredResults, setFilteredResults] = useState(VIDEOS);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showUploadModal, setShowUploadModal] = useState(false);

    const filterResults = query => {
        const filteredVideos =
            videos.filter(video => video.title.toLowerCase().includes(query.toLowerCase()) || video.channel.toLowerCase().includes(query.toLowerCase())) || [];
        setFilteredResults(filteredVideos);
    };

    const handleUploadComplete = videoData => {
        const newVideo = {
            id: videos.length + 1,
            ...videoData,
            channel: user?.username || "Anonymous",
            views: "0",
            timestamp: "Just now"
        };
        setVideos([newVideo, ...videos]);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header onSearch={filterResults} />
            <main className="container mx-auto px-4 pt-20 pb-8">
                <UploadButton onClick={() => setShowUploadModal(true)} />
                <VideoList videos={filteredResults} setSelectedVideo={setSelectedVideo} />
            </main>
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
            {showUploadModal && <VideoUploadModal onClose={() => setShowUploadModal(false)} onUploadComplete={handleUploadComplete} />}
        </div>
    );
}

export default App;
