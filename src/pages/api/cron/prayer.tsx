import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // TODO: check db for an existing prayer entry, and if a prayer message was sent for that day
    // If true, ignore and return

    // If false, create a new prayer, add it to the database, send it to the channel
    res.status(200).end('All good!');
}