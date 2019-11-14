const Podcast = require('../models/Podcast');
const IncomingForm = require('formidable').IncomingForm;
const FilesHandler = require('../../helpers/FilesHandler');
const Op = require('sequelize').Op;

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

            res.json({ podcasts });

            if (podcasts.length > 0) {
                res.status(200).json({ podcasts });
            }
            else {
                res.status(200).json({ error: 'no podcasts' });
            }
        } catch (error) {
            res.status(200).json({ error });
        }
    },

    async filter(req, res) {
        try {
            const { search } = req.query;
            const podcasts = await Podcast.findAll({
                where: { 
                    podcast_name: { 
                        [Op.like]: `%${search}%` 
                    } 
                }
            });

            if (!podcasts) {
                res.status(200).json({ error: 'no podcasts' });
            }
            else {
                res.status(200).json({ podcasts });
            }
        } catch (error) {
            res.status(200).json({ error });
        }
    }
}