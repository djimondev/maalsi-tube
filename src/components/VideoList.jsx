import { VideoCard } from "./VideoCard";

export const VideoList = ({ videos }) => {
    return (
        <div className="max-w-4xl mx-auto mt-8">
            {videos.map(video => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};
