const fs = require('fs');

module.exports = {
    async store(res, oldPath, newPath) {
        await fs.rename(oldPath, newPath, (error) => {
            error ? res.status(401).json({ error }) : null;
        });
    },
    getExtension(fileType) {
        fileType = fileType.replace('audio/', '');
        fileType = fileType.replace('text/', '');
        fileType = fileType.replace('image/', '');
        fileType = fileType.replace('video/', '');
        fileType = fileType.replace('application/', '');

        return fileType;
    }
}