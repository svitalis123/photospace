import {v2 as Cloudinary} from 'cloudinary';

Cloudinary.config({
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

})

import MediaGallery from "@/components/gallery/MediaGallery";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';



export default async function Home() {
  const {resources} = await Cloudinary.api?.resources_by_tag(String(process.env.NEXT_PUBLIC_CLOUDINARY_TAG_NAME));
 
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <MediaGallery resources = {resources} tag = {String(process.env.NEXT_PUBLIC_CLOUDINARY_TAG_NAME)} />
      <Footer />
    </main>
  );
}
