---
title: Local Bite
post_order: 100
date: "2015-05-06T23:46:37.121Z"
excerpt: "A platform that enables CSA farmers to sell directly to their customers online. The MVP was used with customers of a local farming cooperative."
blog: "projects"
subtitle: "web development"
tagline: "a <mission> to make local food <accessible> to everyone"
tags: ["Product development", "Software development", "UX/UI", "DevOps"]
overview_title: ["User Research", "<Prototyping.>", "UI Design.", "<App Development.>", "Deployment."]
overview: "I designed and developed Local Bite from an idea to a production-grade MVP used with a local farming cooperative. Local Bite is an e-commerce platform and marketplace that enables farmers to sell their produce online and manage order pickups."
colors: ["#fff7ff", "#fffbf1", "#630762"]
images: ["https://leroywan.s3.us-east-2.amazonaws.com/localbite__banner.png", "https://leroywan.s3.us-east-2.amazonaws.com/localbite__banner.png"]
---
## User Research & Rapid Prototyping
The prototypes you see below were all designed and developed within a day. 4 prototypes were created in total and tested with users during 5 different a 1-hour study to validate any assumptions that were made. The learnings made from the 20 different studies were compiled to develop the first version of Local Bite.

## Design
- I researched the pain points of our local farmers, created a business case, and formulated a long-term strategy to achieve Local Bite’s long term goals and mission. Read More

- Using Sketch, I built a design system with components (called Symbols in Sketch) that behave and look consistent throughout the entire application. The design system includes colour palettes, typography, and various styles for different application states. 

- Using Illustrator, Photoshop, and Sketch, I created 4 prototype designs throughout the course of 1 month. 

- I tested 4 uniquely different interactive prototypes with specific groups of users and used InVision to map out the application flow. Each prototype was tested throughout 5 different 1-hour long interviews to answer specific questions, validate our assumptions, and gauge user interest. A total of 20 users were interviewed and the learnings were applied to our MVP.

- To test the interest level, I designed a landing page to see how many people would sign up for my Beta program email list. ($60 CAD in Facebook ads for 11 beta user signups). Visit landing page

## Development
- Developed Local Bite’s landing page using Gatsby, a static site generator that is highly optimized for speed. Visit landing page

- Configured Webpack to bundle both server and client with support for SASS, CSS Modules, Typescript, Babel transpiler, hot module reloading, dev & production environment builds, and prerendering

- Created a React component library for inputs, buttons, modals…etc. Complex components were forked from Google’s Material-UI and other modules to shorten development time

- Developed the front-end of the application with React

- Designed and implemented a database using PostgreSQL

- Developed the back-end and implemented RESTful APIs, user verification & authentication, password hashing, and error logging (for production).

- Integrated 3rd-party software for text, email, and image uploads (Twilio, Sendgrid, S3)

- Containerize the application using Docker

- Set up the production environment: an NGINX reverse proxy running inside a container that points to the application port using Docker Compose; an SSL certificate is added to the domain name using Docker volumes

## Conclusion

From my interviews, I discovered that the best way to generate leads with the farming community is through phone or email. I hired 3 virtual assistants and we collected 1500 emails and Facebook pages that we would later contact regarding the launch of our app. Although we only reached out to 100 different farms, we earned 12 new users sign ups along with potential partnerships with various farmers’ markets. You can visit the application through the link below: