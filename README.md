# coolforums-chatbackend
CoolGuide Project

This repository is part of the CoolGuide project ecosystem, which includes multiple services and applications.

Related Repositories

[Forums Frontend]
(https://github.com/CoolSidOfficial/FORUMS)

[Forums Backend]
(https://github.com/CoolSidOfficial/forums-backend)

# CoolGuide Live Chat Socket.IO Server

This repository contains the **Socket.IO WebSocket server** used by the **CoolGuide Live Chat application**. The server provides real-time messaging capabilities between connected clients.

The service is containerized with **Docker**, published on **Docker Hub**, and deployed on **Microsoft Azure** with **Nginx** acting as a reverse proxy.

## Overview

The CoolGuide Live Chat server manages persistent WebSocket connections using Socket.IO. It allows users to join chat sessions, send messages, and receive updates instantly without refreshing the page.

The application runs inside a Docker container and is hosted on Azure for scalability and availability.

## Tech Stack

- Node.js  
- Socket.IO  
- Docker  
- Nginx  
- Microsoft Azure  

## Deployment

The server is built as a Docker image and pushed to Docker Hub. Azure pulls the image and runs it as a containerized service behind Nginx.

### Build Docker Image

```bash
docker build -t coolguide-livechat-server .


