import {v2 as Cloudinary} from 'cloudinary';

Cloudinary.config({
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

})


export async function POST(request: Request){
  const { publicId } = await request.json();
  const optionalProps: Record<string, string> = {};
  const results = await Cloudinary.api.delete_resources([publicId]);
  Response.json({
    data: results
  })
}