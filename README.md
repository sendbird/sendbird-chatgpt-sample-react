# Sendbird ChatGPT Sample for React
This is an example of [Sendbird ChatGPT Bot](https://sendbird.com/docs/chat/v3/platform-api/bot/bot-overview#1-overview) for React, implemented using [Sendbird UIKit](https://docs.sendbird.com/docs/uikit/v3/react/overview).
<p>
Sendbird ChatGPT Bot is a GPT3-powered bot that's built on top of Sendbird's existing bots.
It can provide your users with highly engaging and natural conversational experience.
It's integrated natively inside Sendbird so that you don't have to worry about developing and deploying OpenAI services separately.
</p>


## Requirements
The minimum requirements for this sample are:
* NodeJS v16 or later
* NPM 8 or later
* Yarn(?) / PNPM maybe also supported

## Getting Started
1. Create your Sendbird application on [the dashboard](https://dashboard.sendbird.com/auth/signup).
2. [Register the ChatGPT bot](https://sendbird.com/developer/tutorials/chatgpt-integration-build-a-chatgpt-powered-chatbot-part-1) in your Sendbird application.
3. In this example, we're connected to a test Sendbird application and pre-defined bots.
To connect to your own application, you need to replace the `VITE_APP_ID` in .env file with your own application ID.
See `.env.example` for more details.
4. You can set userId and nickname in `src/consts.ts` file.
5. Install dependencies and run the sample app.
```bash
npm install
npm run dev
```

For more information, see [our documentation](https://sendbird.com/docs/chat/v3/platform-api/bot/bot-overview#1-overview) and [our tutorial](https://sendbird.com/developer/tutorials/chatgpt-integration-build-a-chatgpt-powered-chatbot-part-1).

## To deploy to gh-pages(For Sendbird Devs)

(to do: Move to github actions)

1. Delete remote gh-pages branch in remote and local
2. `npm run build`
!important: Make sure you have the `base` in `vite.config.ts` set to
 `sendbird-supportchat-sample-react` (this is the name of the repo)
 before building the project.
3. `git checkout -b gh-pages`
4. `git add dist -f`
5. `git commit -m "release: notes"`
6. `git subtree push --prefix dist origin gh-pages`

> TLDR: Build the project and push the dist folder to gh-pages branch
