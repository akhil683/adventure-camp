const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteProductCollectionId: String(
    import.meta.env.VITE_APPWRITE_PRODUCT_COLLECTION_ID
  ),
  appwriteCartCollectionId: String(
    import.meta.env.VITE_APPWRITE_CART_COLLECTION_ID
  ),
  appwriteWishlistCollectionId: String(
    import.meta.env.VITE_APPWRITE_WISHLIST_COLLECTION_ID
  ),
  appwriteAdventureCollectionId: String(
    import.meta.env.VITE_APPWRITE_ADVENTURES_COLLECTION_ID
  ),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
export default config;
