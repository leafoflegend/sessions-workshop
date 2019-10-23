## Sessions Workshop
![Cookies](https://media1.giphy.com/media/BWoUbBTz1yuhW05Sgp/giphy.gif)

### Goal
The goal of this workshop is to step into a small application, and implement cookie/session authentication. I have tried to remove everything that isn't directly related to sessions out of your hands. Webpack is setup. The front end is already making the request when you hit **Login**. Its even dumping the results of errors or successes onto the redux store! **Your goal is to focus solely on the following four tasks (with some optional stretches):** 

1. The login form should only go to `/user` if a user submits a **username and password that exists on a user in the database.**
2. You should build out the **seed side of `syncAndSeed` and the rest of the `User` model.**
3. The `/user` page **should not be accessible if the browser does not have a cookie of a logged in user. Further, the `/user` page should display information about the user - like how many times they've vistied the site.**
4. The user should be able to logout from the `/user` page.

### Stretch Goals

4. People should be able to **sign up on the front end.**
5. If a user is already logged in when they visit the site, they should be immediately brought to the `/user` route.

### Advice

**Files of interest:**
1. `/src/db/models/User.js`
2. `/src/db/index.js`
3. `/src/client/Router.js`
4. `/src/index.js`

**You really should not need to touch the other files. That doesn't mean you shouldn't read some of the ones that might help you better understand the flow. Put a `console.log` in the reducer if you want to look there, and you can add `logs` to the express routes if that helps you there.**

**Secondly, I've added `TODO` comments to areas of interest. If you search this repo, you will run into the areas I think you need to interact with.**

If for some reason you need to make additional `POST` calls to the server from the client, I've made a utility function called `postFetch`.

[You should absolutely take a look at Eric's videos if you feel lost on some of the core topics!](https://learn.fullstackacademy.com/workshop/5d8d5346387ac9000401ab2b/content/5d8d5354ea7ac60004199d8b/text)

Its worth note that **I've already installed `express-session`, but have not used it at all... Its up to you if you want to use it, but I HIGHLY RECOMMEND IT.**

### Getting Started
1. `npm i`
2. `npm run create:database`
- I made this as a helper, if it doesnt work, create a database however it is you do that with the name `sessions-workshop`.
3. `npm run start:dev`
- It may just be me, but it looks like nodemon has been having issues shutting down and not closing ports... I built a bit of stuff around trying to make sure you guys don't run into that, but if it happens, general debug steps are:
  - `lsof -i :3000`
  - Using that ${PID number}: `kill ${PID}`
  - If that doesn't work for some reason, `ps aux | grep node`
  - Look for the process that is using a file from this directory and now again `kill ${that PID}`
