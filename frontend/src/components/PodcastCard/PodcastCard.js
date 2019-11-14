import React from 'react';

const PodcastCard = ({ id, podcastName, src, createdAt }) => {

    const showId = ( ) => console.log({ id });

    return (
        <div onClick={showId}>
            <h3>{podcastName}</h3>
            <audio src={src} controls />
            <span>{createdAt}</span>
        </div>
    )
}

export default PodcastCard;