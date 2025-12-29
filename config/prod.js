export default {
    dbURL: process.env.MONGO_URL || 'mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.ud6nstz.mongodb.net/?retryWrites=true&w=majority',
    dbName: process.env.DB_NAME || 'taskrail_db'
}
