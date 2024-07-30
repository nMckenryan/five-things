## Five Things, a bulletpoint review site.

> A Fine way to review the things you like (or don't) without writing a big fancy essay. Movies, Games, Books, Combo Meals at your local fast food restaurant, Ex-girlfriends, webcam monitors, beans, accountants in ulladulla. the world is your burrito.

This was built with the T3 Stack project bootstrapped with create-t3-app with:

- React (Next.js)
- MUI Component Library
- Drizzle
- Vercel
- Postgres (via Vercel)
- Clerk Authentication
- Sentry Error Detection
- PostHog Analytics

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
- [] Implement Analytics

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
- [] Fix modal not closing after deletion
- [x] clean up actions/queries
- [] Clean up Readme

  TO DO LATER:

- [] rig up up/downvotes - complex, will need to refactor user history
- [] Uniform CRUD operation methods
- [] Profile Page to just view the selected user's posts

WHAT WENT WELL:

- Vercel/Postgres was real easy to use
- Drizzle was a nice experience.
- Clerk was a simple set up, no problems.

WHAT TO DO BETTER NEXT TIME:

- Ran into a lot of difficulties getting used to NextJS (lack of state in server app made modals difficult)
- Use tailwind for on the fly changes .
- Sentry is probably overkill for this kind of app
