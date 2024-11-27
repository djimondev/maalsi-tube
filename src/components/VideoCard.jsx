import React from "react";

export const VideoCard = ({ video, onClick }) => {
    const { title, thumbnail, channel, views, timestamp } = video;

    return (
        <div className="flex flex-col cursor-pointer group" onClick={onClick}>
            <div className="relative aspect-video rounded-xl overflow-hidden">
                <img src={thumbnail} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200" />
            </div>
            <div className="mt-3 px-1">
                <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{channel}</p>
                <div className="text-sm text-gray-600">
                    <span>{views} views</span>
                    <span className="mx-1">•</span>
                    <span>{timestamp}</span>
                </div>
            </div>
        </div>
    );
};
