# Get the Sample API Up and Running

## Install Dependencies

`cd backend`

`npm install`

## Run API locally

`npm start`

The Express JS API should serve *Hello, World!* at http://localhost:3000/api

## API Health

On your local workstation, navigate to http://localhost:3000/api/health .

You should receive a http response code of 200 with a message of "application is super healthy!"

Utilize this response when building your readiness and liveness probes.