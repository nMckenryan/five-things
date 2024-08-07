## Five Things, a bulletpoint review site.

> A Simple way to review the things you like without writing a big fancy essay.
> Movies, Games, Wine, Books, Combo Meals at your local fast food restaurant, Ex-girlfriends, Webcam monitors, Beans, Accountants in ulladulla.

This was built with the T3 Stack project bootstrapped with create-t3-app with:

- React (Next.js)
- MUI Component Library
- Drizzle
- Vercel
- Postgres (via Vercel)
- Clerk Authentication
- Sentry Error Detection
- PostHog Analytics

The main purpose of this project is to get my head around Nextjs as well as the Vercel ecosystem, and to explore a tech stack to get projects up and running

![desktop screen](https://github.com/nMckenryan/five-things/blob/main/public/images/fiveThingsScreenshotDesktop.PNG?raw=true)

![mobile screen](https://github.com/nMckenryan/five-things/blob/main/public/images/fiveThingsScreenshotMobile.PNG?raw=true)

### NOTES:

- Based off this T3 Stack tutorial from TheoT3 https://www.youtube.com/watch?v=d5x0JCZbAJs
- Vercel/Postgres was real easy to use
- Drizzle was a nice experience.
- Clerk was a simple set up, no problems
- For some reason, this project doesn't like it when i use yarn to add packages so i had to use npm.
- Readme checkbox system was a good simple way to keep track of features.
- Ran into a lot of difficulties getting used to NextJS (lack of state in server app made modals difficult)
- Use tailwind for on the fly changes, just makes things way easier.
- Sentry is probably overkill for this kind of app
- Will be better to implement Debugging earlier, for whatever reason it didn't work the first time.
- I felt there was a little bit of lag, but idk if it was just in development environment.

### TODO:

- [x] Basic Setup and Deployment
- [x] DEPLOY to Vercel
- [x] Draft UI with MUI
- [x] Generate five things insertion window ui
- [x] Plug in mock Data to the ui
- [x] Set up VercelPostgres DB
- [x] Configure postgresDB function to use real data
- [x] Set up Parallel routes
- [x] Crud functions:
      -- [x] Add 5 things
      -- [x] Edit 5 things
      -- [x] Delete 5 things
      -- [x] Add 5 things
      -- [x] Edit 5 things
      -- [x] Delete 5 things
- [x] Attach DB to UI
- [x] Add authentication
- [x] show other user's 5 things
- [x] toast confirmation on server actions
- [x] Get Delete Button Working properly
- [x] Implement Analytics
- [x] Deletion - get routing working properly (not routing to defunct page, not refreshing on delete.)
- [x] Refactor Toast modals
- [x] Test longer inputs
- [x] Clean up DB for finalisation, screenshots.

BUG FIXES/CLEANUP

- [x] Fixed up footer
- [x] patch up UI for crud functions
- [x] display usernames properly
- [x] clean up edit modal
- [x] fix mobile view
- [x] Fix background height
- [x] reload page on update/create
- [x] fix background dimming
- [x] Fix Confirmation dialog when update/create
- [x] Clean up site for screenshots
- [x] Fix delete confirmation dialog overlapping or being obscured by parent modal
- [x] Fix Conditional rendering of edit/delete buttons, allowing only author to do so
- [x] Fix parallel routing trying to go to unknown page after deletion.
- [x] Fix modal not closing after deletion
- [x] clean up actions/queries
- [x] Clean up Readme
- [] Clear Data on insert page when done

FUTURE FEATURES

- [] rig up up/downvotes - complex, will need to refactor user history
- [] About Page
- [] Profile Page to just view the selected user's posts
