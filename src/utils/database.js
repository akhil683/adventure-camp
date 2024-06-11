import config from "../config/config";
import { Client, Databases, Storage, Query, ID} from "appwrite";

export class Service {

   client = new Client()
   databases;
   bucket; 

   constructor() {
      this.client
         .setEndpoint(config.appwriteUrl)
         .setProject(config.appwriteProjectId)

      this.databases = new Databases(this.client)
      this.bucket = new Storage(this.client)
   }

   async getData(slug) {
      try {
         return await this.databases.getDocument(
            config.appwriteDatabaseId, 
            config.appwriteCollectionId, 
            slug
         )
      } catch (err) {
         console.log("Appwrite service:: getPost():: ", err)
      }
   }

   async getAllData(collectionId) {
      try {
         return await this.databases.listDocuments(
            config.appwriteDatabaseId, 
            collectionId,
         )
      } catch (err) {
         console.log("Appwrite service:: getPosts():: ", err)
      }
   }
   async createData({ title, slug, content, featuredImage, status, userId}) {
      try {
         return await this.databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
            {
               title, content, featuredImage, status, userId
            }
         )
      } catch (err) {
         console.log("Appwrite service:: createPost():: ", err)
      }
   }
   async updateData(slug, { title, content, featuredImage, status, userId }) {
      try {
         return await this.databases.updateDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
            {
               title, content, featuredImage, status
            }
         )
      } catch (err) {
         console.log("Appwrite service:: updatePost():: ", err)
      }
   }
   async deleteData(slug) {
      try {
         await this.databases.deleteDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
         )
         return true
      } catch (err) {
         console.log("Appwrite service:: deletePost():: ", err)
      }
   }

   //STORAGE SERVICE
   async uploadFile(file) {
      try {
         return await this.bucket.createFile(
            config.appwriteBucketId,
            ID.unique(),
            file
         )
      } catch (err) {
         console.log("Appwrite service:: uploadFile():: ", err)
      }
   }
   async deleteFile(fileId) {
      try {
         return await this.bucket.deleteFile(
            config.appwriteBucketId,
            fileId
         )
      } catch (err) {
         console.log("Appwrite service:: deleteFile():: ", err)
      }
   }
   getFilePreview(fileId) {
      return this.bucket.getFilePreview(
         config.appwriteBucketId,
         fileId,
      ).href
   }
}

const service = new Service()
export default service;