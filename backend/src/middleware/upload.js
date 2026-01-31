import multer from 'multer'
// these we have to learn 
const storage=  multer.memoryStorage()

export const upload = multer({
    storage
})