// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb';
import { ResponseFuncs } from '../../utils/types';
import User from "../../models/User";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  const client = await clientPromise;
  const db = client.db("test");

  switch (method) {
    case 'POST':
      try {
        if ("invalidAttempt" in req.body) {
          const addUser = await db
            .collection("users")
            .insertOne({password: req.body['password']})
          if (addUser['acknowledged']) {
            res.status(200).json({loginStatus: true})
          } else {
            res.status(200).json({loginStatus: false})
          }
        } else {
          const passwords = await db
            .collection("users")
            .find(req.body)
            .toArray();
          if (passwords !== null) {
            if (passwords.length !== 0) {
              res.status(200).json({loginStatus: true})
            } else {
              res.status(200).json({loginStatus: false})
            }
          } else {
            res.status(200).json({loginStatus: false})
          }
        }
       

      } catch (error) {
        res.status(400).json( {loginStatus: false})
      }
  }
}
