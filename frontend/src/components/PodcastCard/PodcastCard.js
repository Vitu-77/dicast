import React, { useState, useEffect } from 'react';
import DateHandler from '../../helpers/DateHandler';

import { Audio } from './Style.css';

import AudioPlayer from "react-h5-audio-player";

const PodcastCard = ({ id, podcastName, src, createdAt }) => {

    const currentDate = new Date(Date.now());
    const podcastDate = new Date(`${createdAt}`);

    const [podcastAge, setPodcastAge] = useState(Number);
    const formatedDate = DateHandler.formatDate(createdAt);

    useEffect(() => {
        const differenceBetweenDates = Math.abs(podcastDate - currentDate);
        const daysBetweenDates = Math.ceil(differenceBetweenDates / (1000 * 60 * 60 * 24));

        setPodcastAge(daysBetweenDates);
    }, [currentDate])

    return (
        <div>
            <h3>{podcastName}</h3>
            <AudioPlayer src={src} controls />

            {podcastAge <= 2 ? (
                <time>NOVO</time>
            ) : (podcastAge > 2 && podcastAge <= 9 ? (
                <time>{podcastAge} {podcastAge > 1 ? 'dias atrás' : 'dia atrás'}</time>
            ) : <time>{formatedDate}</time>)}
        </div>
    )
}

export default PodcastCard;