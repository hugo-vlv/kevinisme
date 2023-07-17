import { App } from '@slack/bolt';
import { NextApiRequest, NextApiResponse } from 'next';
import NextConnectReceiver from '../../utils/NextConnectReceiver';

const receiver = new NextConnectReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET || 'invalid',
  processBeforeResponse: true,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver,
  developerMode: false,
});

app.event('message', async ({ event, say }) => {
  const text = (event as any).text;
  const subtype = (event as any).subtype;

  console.log('[INFO] - RECEIVED MESSAGE EVENT:');
  console.log(event);

  if (subtype === 'bot_message') {
    console.log('[INFO] - Detected message sent from bot, ignoring...');
    return;
  }

  await say({
    text: text || 'Hello world!',
  });
});

const router = receiver.start();

router.get('/api', (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    hello: "world",
  });
})

export default router.handler();