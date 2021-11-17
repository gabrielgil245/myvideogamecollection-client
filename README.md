# My Video Game Collection Client
## Project Description
This application is designed to allow users to create and organize their video game collection.

My Video Game Collection Web Server/Backend: https://github.com/gabrielgil245/myvideogamecollection-server

## Technologies Used
- Spring Boot
- Spring WebMVC
- Spring Data
- Postgres
- Lombok
- JUnit
- Mockito
- H2
- Postman
- JavaDocs

## Features
### Users can:
- Register.
- Login/Logout.
- Reset their password (using an email feature).
- Add Game Platforms.
  - Add/assign video games to a platform.
  - Assign a status to a game: Not Started, In Progress, On-Hold, Dropped, Finished, Completed
- View their own profile.
  - Including their consoles and games.
- View others’ profile.
  - Including their consoles and games.

Todo-List:
- Add JSON Web Tokens
- Modify their profile information.
- Search other people.
- Upload a profile picture (using AWS: S3).
- Add Email Encryption
- Deploy with Docker

## Getting Started
- git clone https://github.com/gabrielgil245/myvideogamecollection-client
- run npm install to retreive the node modules necessary for the angular project.
- run npm serve to run the web application locally in a development server.

## Usage
- Run the server application from the MyvideogamecollectionApplication class (the link is located at the top of this file).
- HTTP requests may be made to "http://localhost:9000" using the web platform.
