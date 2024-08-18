

const Conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),

    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    appwriteDatabaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default Conf

// this approch is used instead of using import.meta.env every time
