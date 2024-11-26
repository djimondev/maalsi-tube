import { VideoCard } from "./VideoCard";

export const VideoList = ({ videos }) => {
    if (!videos.length) {
        return (
            <div className="mx-auto max-w-xl pt-32">
                <div className="max-w-xl bg-blue-400 p-4 rounded-md">
                    <p>Il n'y a pas de vidéos à afficher</p>
                </div>
            </div>
        );
    }
    return (
        <div className="max-w-4xl mx-auto mt-8">
            {videos.map(video => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};
