require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const githubData = {
  login: "Samyak137",
  id: 113549908,
  node_id: "U_kgDOBsSiVA",
  avatar_url: "https://avatars.githubusercontent.com/u/113549908?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Samyak137",
  html_url: "https://github.com/Samyak137",
  followers_url: "https://api.github.com/users/Samyak137/followers",
  following_url:
    "https://api.github.com/users/Samyak137/following{/other_user}",
  gists_url: "https://api.github.com/users/Samyak137/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Samyak137/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Samyak137/subscriptions",
  organizations_url: "https://api.github.com/users/Samyak137/orgs",
  repos_url: "https://api.github.com/users/Samyak137/repos",
  events_url: "https://api.github.com/users/Samyak137/events{/privacy}",
  received_events_url: "https://api.github.com/users/Samyak137/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Samyak Jain",
  company: null,
  blog: "",
  location: "Jabalpur",
  email: null,
  hireable: null,
  bio: "New to the world of technology , want to be a software developer and want to unify technology with space.",
  twitter_username: null,
  public_repos: 28,
  public_gists: 0,
  followers: 4,
  following: 4,
  created_at: "2022-09-14T18:29:43Z",
  updated_at: "2024-12-23T11:03:59Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Samyak Jain");
});

app.get("/login", (req, res) => {
  res.send("<h1> click here to login </h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
