const Podcast = require('../models/Podcast');
const IncomingForm = require('formidable').IncomingForm;
const FilesHandler = require('../util/FilesHandler');

module.exports = {
    async store(req, res) {

        const Form = new IncomingForm();
        const maxFileSize = Math.pow(1024, 8)
        Form.maxFileSize = maxFileSize;

        Form.parse(req, async (error, fields, { podcast }) => {

            const fileExtension = FilesHandler.getExtension(podcast.type);
            const oldPath = podcast.path;
            const newPath = `${process.cwd()}/uploads/podcasts/podcast-${Date.now()}.${fileExtension}`;
            const podcastName = podcast.name;

            const podcastAttrs = {
                podcast_name: podcastName,
                src: `http://localhost:3333/podcasts/podcast-${Date.now()}.${fileExtension}`,
            }

            if (error) {
                res.status(401).json({ error });
            }
            else {
                try {
                    FilesHandler.store(res, oldPath, newPath);

                    await Podcast.create(podcastAttrs);
                    res.status(201);
                } catch (error) {
                    res.status(400).json({ error });
                }
            }
        });
    },

    async index(req, res) {
        try {
            const podcasts = await Podcast.findAll();

            if(podcasts.length > 0){
                res.status(200).json({ podcasts });
            }
            else{
                res.status(400).json({ error: 'no podcasts' });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    async filter(req, res) {
        const { podcast_id } = req.query;

        const podcast = await Podcast.findByPk(podcast_id);

        try {
            if (!podcast) {
                res.status(404).json({ error: 'podcast not found' });
            }
            else {
                res.status(201).json({ podcast });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}