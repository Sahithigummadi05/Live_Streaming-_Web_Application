#  Live Streaming & Real-Time Chat Application

A scalable and interactive live streaming platform built with the **MERN stack**, featuring **Google OAuth authentication**, **RTMP-based video streaming** using **OBS**, and **real-time chat** via **Socket.IO**. The application is deployed on **AWS** and supports dynamic **channel subscription** features.

---

##  Key Features

-  **User Authentication**  
  Secure login and registration using **Google OAuth 2.0**.

-  **Live Video Streaming**  
  Streamers broadcast live using **OBS** and an integrated **RTMP server**.

-  **Real-Time Chat**  
  Live viewers can send and receive messages instantly via **Socket.IO**.

-  **Subscribe / Unsubscribe to Channels**  
  Users can follow their favorite streamers and get notified about new streams.

-  **Cloud Deployment**  
  Fully hosted on **AWS (EC2, S3, Route 53)** for scalability and reliability.

---

##  Tech Stack

| **Component**        | **Technology**                           |
|----------------------|-------------------------------------------|
| **Frontend**         | React.js, Tailwind CSS                   |
| **Backend**          | Node.js, Express.js                      |
| **Database**         | MongoDB (Mongoose)                       |
| **Authentication**   | Google OAuth 2.0                         |
| **Streaming**        | RTMP Server (Node-Media-Server) + OBS    |
| **Real-Time Chat**   | Socket.IO                                |
| **Deployment**       | AWS EC2, S3, Route 53                    |
