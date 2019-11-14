import React, { useEffect, useState } from 'react';
import Api from '../../services/Api';
import PodcastCard from '../PodcastCard/PodcastCard';

const Podcasts = () => {

    const [podcasts, setPodcasts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchData('');
    }, []);

    const fetchData = async (search) => {
        const data = await Api.getPodcasts(search);
        setPodcasts(data);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <React.Fragment >
            <input type='text' onChange={handleChange} value={search} />
            <button onClick={() => fetchData(search)}>SEARCH</button>
            {
                podcasts
                    ? podcasts.map(podcast => <PodcastCard key={podcasts.id}
                        id={podcast.id}
                        podcastName={podcast.podcast_name}
                        src={podcast.src}
                        createdAt={podcast.createdAt}
                    />)
                    : <h3>Loading Podcasts...</h3>
            }
        </React.Fragment >
    );
}

export default Podcasts;