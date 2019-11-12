const Comment = require('../models/Comment');
const Podcast = require('../models/Podcast');

module.exports = {
    async store(req, res) {

        const { podcast_id } = req.params;
        const { comment, authorName, authorAvatar } = req.body;

        const podcast = await Podcast.findByPk(podcast_id);

        const podcastAttrs = {
            podcast_id,
            comment, 
            author_name: authorName, 
            author_avatar: authorAvatar,
        }

        try {
            if (!podcast) {
                res.status(400).json({ error: 'podcast not found' });
            }
            else {
                await Comment.create(podcastAttrs);
                res.status(200).json(podcastAttrs);
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    async filter(req, res) {
        
        const { podcast_id } = req.query;

        try {
            const podcast = await Podcast.findByPk(podcast_id);

            if(!podcast){
                res.status(400).json({ error: 'podcast not found' });
            }
            else{
                const podcastComments = await Comment.findAll({
                    where: { podcast_id }
                });
        
                res.status(200).json({ podcastComments });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}