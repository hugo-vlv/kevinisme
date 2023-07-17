import type { NextApiRequest, NextApiResponse } from 'next'

const EVENT_TYPES = {
    URL_VERIFICATION: 'url_verification',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { type, token, challenge } = req.body;

        switch (type) {
            case (EVENT_TYPES.URL_VERIFICATION): {
                res.status(200).send(challenge);
                break;
            }
            default: break;
        }
    }
    else {
        res.status(405).end();
    }
}