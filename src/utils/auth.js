import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
   client = new Client()
   account;

   constructor() {
      this.client
         .setEndpoint(config.appwriteUrl)
         .setProject(config.appwriteProjectId)
      this.account = new Account(this.client)
   }

   async createAccount({ email, password, name }) {
      try {
         const userAccount = await this.account.create(ID.unique(), email, password, name)
         if (userAccount) {
            return this.login({email, password})
         }
      } catch (err) {
         console.log("Appwrite service:: createAccount() ::", err)
      } 
   }
   async login({ email, password }) {
      try {
         return await this.account.createEmailPasswordSession(email, password)
      } catch (err) {
         alert("Appwrite service:: login() :: ", err )
      }
   }
   async getCurrentUser() {
      try {
         return await this.account.get()
      } catch (err) {
         console.log("Appwrite service:: getCurrentUser():: ", err)
      }
   }
   async logout() {
      try {
         await this.account.deleteSessions()
      } catch (err) {
         console.log("Appwrive service:: logout() ::", err)
      }
   }
}

const authService = new AuthService()

export default authService;