---
title: Dyson Supersonic
date: "2015-05-06T23:46:37.121Z"
blog: "projects"
subtitle: "web development"
tagline: "a <hairdryer> to bring prosperity this <chinese new year>"
tags: ["Design", "Development", "UX", "QA", "Integration"]
overview_title: ["a <multi-language>", "<micro-site> designed", "to showcase", "<luxury> to a", "<chinese> audience"]
overview: "Chinese New Year is the most important holiday for Chinese people, it's a holiday of family, food, and gifts. One of the main consumers of Dyson products is their Chinese audience, and thus, they created the limited Chinese New Year edition of their famous blade-less Supersonic hairdryer. We created a micro-site as a part of their campaign to drive traffic to their main website where customers can buy the product. As a $400 product, we needed to create a very simplistic and elegant site that demonstrates exactly why this product can command such a high price point. The micro-site's main objective is to showcase each feature and innovative qualities of this product while playing to the campaign's theme of Chinese New Year."
colors: ["#fff8e4", "#ffffff", "#cc0000"]
images: ["https://leroywan.s3.us-east-2.amazonaws.com/dyson__screen.png", "https://leroywan.s3.us-east-2.amazonaws.com/dyson__screen.png"]
---

# Approach
Dyson reached out to us after noticing a similar project that we have built for Panasonic. In this project, we were an extension of Dyson’s existing design team and we first approached this project by studying their target audience and asking a multitude of questions such as:

- What colours are present on Chinese New Year?
- How does the Chinese audience use the internet differently?
- How should we internationalize the site?
- How should we present each feature in the most intuitive, engaging way?

These questions allowed us to determine our target audience and provides us a general idea of how the site will feel. As with most of our projects, we first start the project by drafting a mockup to visualize the structure of the different pages, image locations, and context of the copy. Doing so allows us and Dyson to align early on in the process to make quick changes and decide on what features are priorities in the site.

## Challenge
The biggest challenge of this build was creating a way to show how each attachment of the product functions together — there really were a lot of attachments, take a look below:

By taking a look at the attachments alone, one would not be able to figure out how it works. Through a series of trial and errors coding different types of animations, we have concluded that the most elegant, simplistic solution is to present the attachment in a video format. Videos tend to improve user engagement when used sparingly which is a nice plus.

The only downside of this solution is that videos take up bandwidths of the user’s data plan which is not ideal, especially so when more than 90% of Chinese users surf the web on their mobile phones. Nevertheless, we moved on with the solution by fully optimizing the speed of the site through techniques such as lazy-loading, lazy-sizing, and caching assets using a CDN. The results of the optimizations allowed us to gain excellent speed as determined by Google’s speed tool.