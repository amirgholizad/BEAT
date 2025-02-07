# Project Title

BEAT: AI-Powered Financial Monitoring Dashboard.

## Overview

BEAT is a website for Ecnophysicists and Financial Markets enthusiasts that provides various computational services to users.

### Problem

Econophysics is an interdisciplinary field between physics, computer science and finance. There are some helpful resources related to this subject such as [Econophysix](https://www.econophysix.com/). Other websites such as [Tradingview](https://www.tradingview.com/) provide computational services to traders and financial analysts. We plan to build a website that provides open source JS libraries for technical indicators and science based strategies. These libraries will provide the opportunity for JS programmers to build and test their trading strategies in real time. Considering that JS has a larger community than PineScript (Tradingview's scripting language), it will target a larger group of users. Other services of BEAT includes AI-powered anlytics on market news and user created strategies. This project is a tribute to the community of brilliant people who built and has been developing the field of Econophysics.

### User Profile

- Traders / Econophysicists:
  - looking for a JS based indicator or strategy.
  - looking for AI-based analysis of a certain asset or portfolio.
  - build, test, and publish their indicators and strategies.

### Features

- As a user, I want to be able to find web friendly indicators that I can use in my analysis.
- As a user, I want to be able to find the resources / links related to the field of Econophysics.
- As a user, I want to be able to share ideas, indicators, strategies, and published articles.

- As a user, I want to be able to create an account to manage my dashboard.
- As a user, I want to be able to login to my account to manage my dashboard.

- As a logged in user, I want to be able to watch and analyse real-time financial charts.
- As a logged in user, I want to be able to create / update my indicators.
- As a logged in user, I want to be able to see portfolios.
- As a logged in user, I want to be able to see other scientists works.

## Implementation

### Tech Stack

- React
- TypeScript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

### APIs

- Tradingview Chart API
- A news API **(not found yet!)**

### Sitemap

- Home page
- List of indicators
- Dashboard
- Portfolio
- Register / Login

### Mockups

- **NOT READY!**

#### Home page

![]()

#### List of indicators

![]()

#### Dashboard

![]()

#### Portfolio

![]()

#### Register / Login

![]()

### Data

![]()

### Endpoints

**GET /**
**POST /**
**DELETE /**

---

# UPDATED UNTIL HERE!!!!!!!!!!!!

Parameters:

- longitude: User-provided location as a number
- latitude: User-provided location as a number
- token (optional): JWT used to add "visited" boolean

Response:

```
[
    {
        "id": 1,
        "name": "Quantum Coffee",
        "distance": 0.25,
        "averageRating": 4.5,
        "visited": true
    },
    ...
]
```

**GET /cafes/:id**

- Get café by id, with an optional "userRating" if the user is logged in or not

Parameters:

- id: Café id as number
- token (optional): JWT used to add user rating

Response:

```
{
    "id": 1,
    "name": "Quantum Coffee",
    "distance": 0.25,
    "averageRating": 4.5,
    "userRating": 5
}
```

**POST /cafes/:id/rating**

- Logged in user can add their rating of a café

Parameters:

- id: Café id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

Response:

```
{
    "id": 1,
    "name": "Quantum Coffee",
    "distance": 0.25,
    "averageRating": 4.5,
    "userRating": 5
}
```

**PUT /cafes/:id/rating**

- Logged in user can update their rating of a café

Parameters:

- id: Café id
- token: JWT of the logged in user
- rating: Number Rating out of 5 in 0.5 increments

Response:

```
{
    "id": 1,
    "name": "Quantum Coffee",
    "distance": 0.25,
    "averageRating": 4.5,
    "userRating": 5
}
```

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Gather 15 sample café geolocations in two different cities

- Create seeds with sample café data

- Deploy client and server projects so all commits will be reflected in production

- Feature: List cafés from a given location

  - Implement list cafés page including location form
  - Store given location in sessionStorage
  - Create GET /cafes endpoint

- Feature: View café

  - Implement view café page
  - Create GET /cafes/:id

- Feature: Rate café

  - Add form input to view café page
  - Create POST /ratings
  - States for add & update ratings

- Feature: Home page

- Feature: Create account

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Integrate Google Places / Maps
  - View more details about a café
  - Visual radius functionality
- Forgot password functionality
- Ability to add a café
- Elite status badging for users and cafés: Gamify user ratings
- Expand rating system
  - Coffee
  - Ambiance
  - Staff
- Expanded user information: full name, favorite café
- Unit and Integration Tests
