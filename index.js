require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData={
  "login": "shubham4653",
  "id": 70310043,
  "node_id": "MDQ6VXNlcjcwMzEwMDQz",
  "avatar_url": "https://avatars.githubusercontent.com/u/70310043?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shubham4653",
  "html_url": "https://github.com/shubham4653",
  "followers_url": "https://api.github.com/users/shubham4653/followers",
  "following_url": "https://api.github.com/users/shubham4653/following{/other_user}",
  "gists_url": "https://api.github.com/users/shubham4653/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shubham4653/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shubham4653/subscriptions",
  "organizations_url": "https://api.github.com/users/shubham4653/orgs",
  "repos_url": "https://api.github.com/users/shubham4653/repos",
  "events_url": "https://api.github.com/users/shubham4653/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shubham4653/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shubham Awari",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2020-08-27T05:33:57Z",
  "updated_at": "2025-07-23T17:36:36Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req,res)=>{
    res.send('Twitter')
})

app.get('/login',(req,res)=>{
    res.send('<h1> login page hai </h1>')
})

app.get('/youtube' , (req,res)=>{
    res.send('<h2>H2 heading me youtube</h2>');
})

app.get('/github' , (req,res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})