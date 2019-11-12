const User = require('../models/User');
const IncomingForm = require('formidable').IncomingForm;
const FilesHandler = require('../util/FilesHandler');

module.exports = {
    async store(req, res) {

        const Form = new IncomingForm();
        const maxFileSize = Math.pow(1024, 8);

        Form.maxFileSize = maxFileSize;

        Form.parse(req, async (error, fields, { userAvatar }) => {

            const { username, password, name } = fields;

            const fileExtension = FilesHandler.getExtension(userAvatar.type);
            const oldPath = userAvatar.path;
            const newPath = `${process.cwd()}/uploads/avatars/user-${Date.now()}.${fileExtension}`;

            const userAttrs = {
                username,
                password,
                name,
                avatar_src: `http://localhost:3333/avatars/user-${Date.now()}.${fileExtension}`,
            }

            if (error) {
                res.status(401).json({ error });
            }
            else {
                try {
                    const userExists = await User.findOne({
                        where: { username }
                    });

                    if (userExists) {
                        res.status(409).json({ error: 'username is taken' });
                    }
                    else {
                        FilesHandler.store(res, oldPath, newPath);
                        await User.create(userAttrs);
                    }
                } catch (error) {
                    res.status(400).json({ error });
                }
            }
        });
    },

    async filter(req, res) {
        const { user_id } = req.query;

        try {
            const user = await User.findOne({ where: { id: user_id } });

            user ? res.status(200).json({ user }) : res.status(404).json({ error: 'user not found' });
        } catch (error) {
            res.status(400).send(error);
        }
    }
}