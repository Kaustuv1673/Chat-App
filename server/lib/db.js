import mongoose from "mongoose";

// Function to connect to the mongodb database
export const connectDB = async () => {
    try {
        // Remove surrounding quotes if present in .env
        const rawUri = process.env.MONGODB_URI || ''
        const uri = rawUri.replace(/^['"]|['"]$/g, '')

        const dbName = 'chat-app2'
        const fullUri = uri.endsWith('/') ? `${uri}${dbName}` : `${uri}/${dbName}`

        // Listen for connected event
        mongoose.connection.on('connected', () => {
            console.log('Database connected')
        })

        // Provide explicit options and a server selection timeout
        await mongoose.connect(fullUri, { serverSelectionTimeoutMS: 10000 })
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message || error)
        // Exit process so the failure is visible instead of silently buffering
        process.exit(1)
    }
}