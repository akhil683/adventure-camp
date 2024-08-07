import config from "../config/config";
import { Client, Databases, Storage, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getData(collectionId, slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        collectionId,
        slug,
      );
    } catch (err) {
      console.log("Appwrite service:: getPost():: ", err);
    }
  }
  async getQueryData(collectionId, query) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        collectionId,
        query,
      );
    } catch (err) {
      console.log("Appwrite service:: getQueryData():: ", err);
    }
  }
  async getAllData(collectionId) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        collectionId,
      );
    } catch (err) {
      console.log("Appwrite service:: getAllData():: ", err);
    }
  }
  async createData(data, collectionId) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        collectionId,
        ID.unique(),
        data,
      );
    } catch (err) {
      console.log("Appwrite service:: createData():: ", err);
    }
  }
  async updateData(id, data, collectionId) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        collectionId,
        id,
        data,
      );
    } catch (err) {
      console.log("Appwrite service:: updatePost():: ", err);
    }
  }
  async deleteData($id, collectionId) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        collectionId,
        $id,
      );
      return true;
    } catch (err) {
      console.log("Appwrite service:: deleteData():: ", err);
    }
  }

  //STORAGE SERVICE
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (err) {
      console.log("Appwrite service:: uploadFile():: ", err);
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(config.appwriteBucketId, fileId);
    } catch (err) {
      console.log("Appwrite service:: deleteFile():: ", err);
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId).href;
  }
}

const service = new Service();
export default service;
