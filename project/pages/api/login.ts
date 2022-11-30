// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from "../../lib/dbConnect";
import clientPromise from '../../lib/mongodb';
import { ResponseFuncs } from '../../utils/types';
import User from "../../models/User";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  
  // await connect();

  switch (method) {
    case 'POST':
      // try {
      //   const createdUser = await User.create(req.body);           
      //   res.status(200).json({ success: true, new_user: createdUser });
      // } catch (error) {
      //     res.status(400).json( {success: false});
      // }
      try {
        if ("invalidAttempt" in req.body) {
          const client = await clientPromise;
          const db = client.db("test");

          const addUser = await db
            .collection("users")
            .insertOne({password: req.body['password']})
          if (addUser['acknowledged']) {
            res.status(200).json({loginStatus: true})
          } else {
            res.status(200).json({loginStatus: false})
          }
          
        } else {
          const client = await clientPromise;
          const db = client.db("test");
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
