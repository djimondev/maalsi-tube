import { VideoCard } from "./VideoCard";

export const VideoList = ({ videos, setSelectedVideo }) => {
    if (!videos.length) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-600">Pas de résultats trouvés</h2>
                <p className="text-gray-500 mt-2">Essayez de chercher un autre titre de vidéo</p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map(video => (
                <VideoCard key={video.id} video={video} onClick={() => setSelectedVideo(video)} />
            ))}
        </div>
    );
};
