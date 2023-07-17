import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { challenge } = req.query;

        res.status(200).send(challenge);
    }
    else {
        res.status(405).end();
    }
}