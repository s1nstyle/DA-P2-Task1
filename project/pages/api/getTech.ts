import type { NextApiRequest, NextApiResponse } from 'next'
import { ResponseFuncs } from '../../utils/types';
import clientPromise from '../../lib/mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
    const client = await clientPromise;
    const db = client.db("test");

    switch(method) {
        case 'GET':
            try {
                const techStackUsed = await db
                    .collection("tech")
                    .find({})
                    .toArray()
                res.status(200).json({techStack: techStackUsed})
            } catch (err) {
                res.status(400).json( {techStack: []})
            }
    }
}