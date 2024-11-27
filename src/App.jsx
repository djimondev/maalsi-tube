import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import UploadButton from "./components/UploadButton";
import { VideoList } from "./components/VideoList";
import { VideoPlayer } from "./components/VideoPlayer";
import VideoUploadModal from "./components/VideoUploadModal";
import "./index.css";
import { createVideo, getVideos } from "./services/video-api";

function App() {
    const [videos, setVideos] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showUploadModal, setShowUploadModal] = useState(false);

    useEffect(() => {
        getVideos().then(data => {
            setVideos(data);
            setFilteredResults(data);
        });
    }, []);

    const filterResults = query => {
        const filteredVideos =
            videos.filter(video => video.title.toLowerCase().includes(query.toLowerCase()) || video.channel.toLowerCase().includes(query.toLowerCase())) || [];
        setFilteredResults(filteredVideos);
    };

    const handleUploadComplete = videoData => {
        createVideo(videoData).then(data => {
            setVideos(prevVideos => [...prevVideos, data]);
            setFilteredResults(prevVideos => [...prevVideos, data]);
        });
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
                    title={`${selectedVideo.id} - ${selectedVideo.title}`}
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
