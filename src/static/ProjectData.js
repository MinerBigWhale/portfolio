export default {
  projectPageDescription:
    "I am very interested in getting into hands-on work apart from my regular lectures and routine, so I have posted most of the projects that I do. You can get complete access to all these projects, including the code and related files. For further details, feel free to contact me via social media.",
  ProjectTypes: {
    AllCategories: "All Categories",
    Hackathon: "Hackathon",
    University: "University",
    Business: "Business",
  },

  Projects: [
    {
      ID: 1,
      data: {
        Title: "Nozama Warrior Game Simulation",
        Category: "University",
        CardDescription: "2nd semester Project",
        ImageURL: require("../assets/images/Project/Nozama.jpg"),
        Year: "2017",
        "Tools Used": {
          Software: "Java",
        },
        ProjectIntro:
          "This is my 2nd semester project for the Principles of Object Oriented Programming module.",
        Description:
          "The objective of this project is to understand the Object Oriented Programming concept in Java and Understand the multi-thread and synchronization concept. Synchronization can lead to other problems like deadlock and starvation. We need to avoid those problems. Object Oriented Programming has four concept those are inheritance, abstraction, polymorphism, and encapsulation. In this project, each class should have high cohesion and low coupling.\n\nThe project description was given in the document section. The project objective was to create a command line interface game but I made command line interface and graphical user interface game. You can see the project in my GitHub.",
      },
    },
    {
      ID: 2,
      data: {
        Title: "Nano Processor Design",
        Category: "University",
        CardDescription: "2nd semester Project",
        ImageURL: require("../assets/images/Project/NanoPro.jpg"),
        Year: "2017",
        "Tools Used": {
          Software: "Xilinx ISE Design Suite",
          Hardware: "Digilent Basys 2 Spartan-3E FPGA Trainer Board",
        },
        ProjectIntro:
          "This is my 2nd semester project for the Principles of Object Oriented Programming module.",
        Description:
          "The objective of this project is to understand the Object Oriented Programming concept in Java and Understand the multi-thread and synchronization concept. Synchronization can lead to other problems like deadlock and starvation. We need to avoid those problems. Object Oriented Programming has four concept those are inheritance, abstraction, polymorphism, and encapsulation. In this project, each class should have high cohesion and low coupling.\n\nThe project description was given in the document section. The project objective was to create a command line interface game but I made command line interface and graphical user interface game. You can see the project in my GitHub.",
      },
    },
    {
      ID: 3,
      data: {
        Title: "Nursery Management System",
        Category: "University",
        CardDescription: "3rd semester Project",
        ImageURL: require("../assets/images/Project/Nursery.jpg"),
        Year: "2018",
        "Tools Used": {
          Software: "HTML, CSS, PHP, MySQL",
        },
        ProjectIntro:
          "This is my 3rd semester group project for the Object Oriented Software Development module.",
        Description:
          "In Sri Lanka, normally children 3-5 years old go to nursery. A nursery is the first step to study subjects and interact with others. In Nurseries, they keep records and do other activities that are manual. Therefore, we created a web application to make nursery-related tasks easy. We selected one nursery and went there to identify requirements and completed this project.\n\nWhen we analyzed the nursery structure, there were the main three roles: teachers, parents, and administrators. Students were also one roll in the nursery but as nursery kids are usually less capable of using the system, and were excluded; therefore, we made a login for the mentioned three main roles.",
      },
    },
    {
      ID: 4,
      data: {
        Title: "Supply Chain Management System",
        Category: "University",
        CardDescription: "4th semester Project",
        ImageURL: require("../assets/images/Project/SupplyChain.jpg"),
        Year: "2018",
        "Tools Used": {
          Software: "MySQL, Node.js",
        },
        ProjectIntro:
          "This is my 4th semester group project for the Database Systems module.",
        Description:
          "Supply chain management is a core part of many delivery companies. Nowadays people who study Transportation and logistics know the domain of the supply chain. Supply a product from the vendor to the customer is a process in supply chain management. To make the supply chain easy and worthy we computerized all the data rather than keeping data manually.\n\nAs a group, we designed a database using normalization concepts. We used MySQL to develop a database. MySQL is a relational database. The project was related to Database systems, but we used Node.js to connect the database and develop a front end for easy use.To Keep track of vehicle details and schedule time and other activities we studied the supply chain domain and completed the project.",
      },
    },
    {
      ID: 5,
      data: {
        Title: "Chatbot",
        Category: "University",
        CardDescription: "4th semester Project",
        ImageURL: require("../assets/images/Project/Chatbot.jpg"),
        Year: "2018",
        "Tools Used": {
          Software: "Node.js, Watson API",
        },
        ProjectIntro:
          "This is my 4th semester group project for the Programming skills II module.",
        Description:
          "The chatbot is an Artificial Intelligence conversation software. The user will message on one end and the machine will reply on the other end. Today, most of the companies use chatbots for their customer service, because they aren't able to handle the huge number of customers simultaneously with customer care agents. We can use the chatbot to answer questions.\n\nWatson is a powerful AI tool provided by IBM. We made a chatbot for answering the cricket questions. Cricket is gaining popularity. Most of the cricket fans want to know the history and rules in cricket. We trained the Watson API and plugged it into Node.js. People will like using the chatbot, rather than searching the whole internet.",
      },
    },
    {
      ID: 6,
      data: {
        Title: "E-Farming",
        Category: "Hackathon",
        CardDescription: "IoT Project",
        ImageURL: require("../assets/images/Project/EFarming.jpg"),
        Year: "2018",
        "Tools Used": {
          Software: "HTML5 & CSS, PHP, MySQL",
          Hardware: "Aurdino, Moister senser, pH sensor and GSM module",
        },
        ProjectIntro:
          "For this project, we were the participation in 4iR Hackathon.",
        Description:
          "Nowadays people run for their needs but food is the most important need. People like to eat but they hesitate to produce food. Agriculture is the only way to produce food. Nowadys youngsters are addicted to social media and they think doing agriculture is not a decent work. So we modernize Agriculture.\n\nWe used a moisture sensor and ph sensor to identify soil water level and fertilizer level. Normally if there is ammonia in soil then ph level in the soil is more than 7. We can identify the ph level and calculate the fertilizer level. Those sensors’ data are sent through the gsm module and there is an api call to Twilio which sends the data like a text message to the farmers. By using this product people won't have to go to their farm every day they can manage from their home.",
      },
    },
    {
      ID: 7,
      data: {
        Title: "Spell Me",
        Category: "Business",
        CardDescription: "Client Project",
        ImageURL: require("../assets/images/Project/spell Me.jpg"),
        Year: "2018",
        "Tools Used": {
          Software: "HUnity3D - game Engine using C# script",
          Environment: "From Unity Asset Store",
        },
        ProjectIntro:
          "For this project, we were the participation in Dialog Game Hunt",
        Description:
          "We participated in the Dialog GameHunt and got a chance to create an edutainment game for children. Today, children spend a lot of time playing games on smartphones, so we created a game that will improve their spelling, and took great care to make it an extraordinary app for learning words. We made the environment, game characters, and the game concept feel like a real game, so that the child will feel the addiction of the game and be willing to play.\n\nDuring gameplay, the player controls a small colored sphere that continuously moves along a platform. The player will swipe to the left and right on the screen in order to pick up the correct letters that make up the word that pops up on the top of the screen. Additionally, there will be randomly placed coins, which when taken, increase the player's points. Game development is in the final stages, and it can soon be downloaded from the Dialog Game store and given to your children. They will definitely love it!",
      },
    },
    {
      ID: 8,
      data: {
        Title: "Arthrocure",
        Category: "Hackathon",
        CardDescription: "Innovation",
        ImageURL: require("../assets/images/Project/Arthritis.jpg"),
        Year: "2018",
        "Tools Used": {
          Software: "Unity3D - game Engine using C# script",
          Hardware: "Kinect Sensor (from Xbox)",
        },
        ProjectIntro:
          "For this project, we were the winners of hackX 2018 Innovation Challenge, Asian Finalists in IEEE SS12 2018 innovation Challenge and finalists in YGC startup challenge.",
        Description:
          "Arthritis is a disease which is mistaken by many as just a knee joint pain. It is one of the most common diseases around the world which does not get much attention, but leads to dangerous conditions. The two important forms of Arthritis are Rheumatoid and OsteoArthritis.\n\nSo we, a team of four members, came up with a solution to this disease. If you have gone through the details of Arthritis, you would know that exercise is the best remedy for Arthritis. But since people find it hard to do exercise, we created a game where the patient has to stand in front of a kinect sensor and play a game, in order to earn coins/points for the game and proceed to the next level. We have created the game in such a way that the player needs to move their arms or legs as required by the exercise in order to progress.",
      },
    },
    {
      ID: 9,
      data: {
        Title: "Face Classification System",
        Category: "University",
        CardDescription: "5th semester Project",
        ImageURL: require("../assets/images/Project/Faceclassify.jpg"),
        Year: "2019",
        "Tools Used": {
          Software: "Android Studio",
        },
        ProjectIntro:
          "This is my 5th semester project for the Software Engineering Project module.",
        Description:
          "Face classification refers to classification of facial emotions. Emotional management is one of the highly expected skills in the industry. Humans are able to identify emotions of peers, but the machines are not capable of identifying the emotions by themselves. That’s why we need to train the machines using Machine learning.\n\nFortunately Microsoft Azure has Face API and Emotion API to classify the feelings. Microsoft trained with millions of images and created an API for users. Face API has a lot of other classifications like age, gender, etc. I used Face API and call the API using Android studio and developed the UI to take Images and send. I shared the above documents with the permission of my mentor.",
      },
    },
  ],
};
