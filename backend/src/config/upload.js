const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,"..","..",'uploads'),
        filename: (req,file,cb) => {
            let ext = path.extname(file.originalname);
            let name = path.basename(file.originalname,ext);
           cb(null,`${name}-${Date.now()}${ext}`)
        }

    })
}