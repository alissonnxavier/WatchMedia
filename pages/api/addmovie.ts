import prismadb from '@/libs/prismadb';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { title, description, videoUrl, thumbnailUrl, genre, duration } = req.body;

        const movie = await prismadb.movie.create({
            data: {
                title,
                description,
                videoUrl,
                thumbnailUrl,
                genre,
                duration
            }
        });

        return res.status(200).send(movie);
    }catch(error){
        return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
}