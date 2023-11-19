# QuantumCure Secure Communication Channel

## Overview

Develop a secure communication channel that ensures end-to-end encryption for sensitive data transmission. The solution protects against eavesdropping, man-in-the-middle attacks, and other common network security threats. Consider usability and efficiency in addition to security measures. Create a prototype of the secure communication channel, integrating cryptographic protocols for encryption and key exchange. Demonstrate the effectiveness of the solution through performance metrics and conduct a simulated attack to showcase the resilience of the system.

## Idea/Approach

1. **User Connection Setup:** Ensure end-to-end security by establishing encrypted connections between users.
2. **Random Message Encryption:** Develop a technology that encrypts messages sent during chat sessions for increased security.
3. **Server-Side Encryption:** Implement a proprietary technique for server-side encryption, sending encrypted communications to all connected clients.
4. **Client-Side Decryption:** Enable client-side decryption upon receiving messages to guarantee that the information is only viewed by the designated recipient.
5. **Method Integration:** Integrate a proprietary encryption and decryption method that is quicker and more effective than the conventional DES algorithm.
6. **Performance Metrics:** Measure resource use and encryption/decryption speed to determine system efficiency.
7. **Simulated Attack Resilience:** Attempt simulated assaults to demonstrate the system's resilience and confirm its efficacy in fending off potential dangers in real-world situations.

## Objectives

- **Enhanced Security:** Provide a communication channel with strong end-to-end encryption to protect sensitive data from man-in-the-middle attacks, eavesdropping, and other common network dangers.
- **Optimized Usability:** Prioritize interfaces that are easy to use to guarantee accessibility, ensuring user-friendliness without sacrificing security for smooth communication experiences.
- **Efficiency Integration:** Reduce computational overhead and resource use, maximize system performance, and provide effective cryptographic protocols for encryption and key exchange.
- **Validate System's Resilience:** Showcase resilience through performance metrics and simulated assaults to confirm efficacy in real-world situations and validate the ability to withstand changing cybersecurity threats.

## Why Did We Select This Issue?

We selected this issue statement because, in today's linked world, protecting sensitive data transit is essential. In light of the growing risks of cyberattacks and eavesdropping, having a strong, encrypted communication route is crucial. Our technology contributes significantly to the protection of digital interactions by addressing security, usability, and efficiency.

## Tech Stack

- React for frontend
- Node.js and Socket.io for backend
- Encryption/Decryption using AES and Diffie-Hellman key exchange

## Live Website

Visit the [QuantumCure Chat App](https://quantumcure-chat-app.vercel.app/) to experience the secure communication channel.

## Run Locally

Clone the project

```bash
    git clone https://github.com/parthsali/Geekathon-1.0
```

Go to the project directory

```bash
    cd Geekathon-1.0
```

Install Server Dependencies

```bash
    cd client/
    npm install
```

Start the Client

```bash
    npm start
```

Back to main project directory

```bash
    cd ../
```

Install Server Dependencies

```bash
    cd server/
    npm install
```

Start the server

```bash
    npm run dev
```

## Team

- [1. Parth Sali](https://github.com/parthsali)
- [2. Gaurav Patil](https://github.com/gauravpatil-15)
- [3. Gaurav Sonwane](https://github.com/Gaur721)
- [4. Atharva Waghchoure](https://github.com/AtharvaWaghchoure)
