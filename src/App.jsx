import { Header } from "./components/Header";
import { VIDEOS } from "./helpers/video.helper";
import "./index.css";
function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            {VIDEOS.map(video => (
                <div key={video.id} className="max-w-4xl mx-auto mt-8">
                    <div className="flex flex-col md:flex-row bg-white shadow-sm rounded-lg overflow-hidden">
                        <div className="md:w-2/5">
                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 md:w-3/5">
                            <h2 className="text-lg font-semibold text-gray-800">{video.title}</h2>
                            <p className="text-sm text-gray-600 mt-1">by {video.channel}</p>
                            <p className="text-sm text-gray-600 mt-2">
                                {video.views} views &bull; {new Date(video.timestamp).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-600 mt-2">{video.description}</p>
                            <a href={video.url} target="_blank" rel="noreferrer" className="text-sm text-blue-600 mt-4 hover:underline">
                                Watch Video
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;
