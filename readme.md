# Vue Course Project Trainning

## Requirements

You should have:

- docker: any
- Node: v14.18.0^

I highly recommend pnpm but you still can use npm or other node package manager.

- pnpm : v7.26.2 <a hef="https://pnpm.io/installation">Install Link</a>

## Getting started - Development

Create .env file and copy in both frontend and backend

backend
```
PORT=8000
JWT_SECRET=courseprojectsbysby
```

frontend
```
VITE_API_HOST = http://localhost:8000 
```

## Get Started

Most of our command already scripted in package.json you just run the following command

<h3><strong>For pnpm (Best Recommended)</strong></h3>

### Get start with backend

- copy same-data.json to data.json
```
cd backend/ 
cp sample-data.json data.json
```
- install node_module
```
pnpm install
```
- run backend project
```
pnpm start:dev
```

### Get start with frontend

- install node_module
```
cd frontend/ 
pnpm install
```
- run backend project
```
pnpm start:dev
```


## Hosting by containerize with docker 

- run the following command on the server
```
bash deploy.sh
```


