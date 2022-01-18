<h1 align="left">Planet Party</h1>

<p align="center">
  <a href="https://planetparty.herokuapp.com/">
    <img src="https://media.giphy.com/media/VI2UC13hwWin1MIfmi/source.gif" alt="Spinning Earth with moon" width="200" height='auto'>
  </a>
    <p align="center">
    <br />
    <a href="https://planetparty.herokuapp.com/"><strong>Explore the app »</strong></a>
    <br />
    <br />
    </p>
  </p>

## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Functionality](#functionality)
* [User Feedback](#user-feedback)
* [Learning Goals](#learning-goals)
* [Future Iterations](#future-iterations)
* [Technologies Used](#technologies-used)
* [Contributors](#contributors)
* [Contact](#contact)


## About the Project

Planet Party is an application designed for kids to learn more about planets in our solar system. We implemented the Solar System OpenData API [(view documentation)](https://api.le-systeme-solaire.net/en/) to display each planet and relevant planet facts. Users have the ability to sort planets by different criteria and click on a planet to view more information. In the single planet view, a user can view different fun facts about the planet compared to Earth and input a weight on Earth to see how it would compare to that planet. We were given 8 days to complete this project while learning and implementing TypeScript from scratch. The project specs and rubic are from the Turing School of Software and Design and can be seen [here](https://frontend.turing.io/projects/module-3/stretch.html).

View the deployed site: [here](https://planetparty.herokuapp.com/)

## Installation

1. Fork this repository.
2. Clone it down to your local machine with `git clone <your SSH Key>`.
3. Navigate into this directory with `cd Planet-Party`.
4. Run `npm install` to compile the React application.
5. Run `npm start` to see the app running locally.
6. Run `<your text editor> .` to see the code in your text editor.
7. Run `npm run cypress` to open Cypress and see all the tests.


## Functionality
* [All Planets View](#all-planets-view)
* [Planet Info](#planet-info)
* [Responsive Design](#responsive-design)
* [Accessibility](#accessibility)
* [Error Handling](#error-handling)
* [Loading Screen](#loading-screen)

#### All Planets View
  - When a user visits the site they should be able to see all planets in the solar system, and sort planets by sort options.
<img src="https://media.giphy.com/media/IZ0Taem6JhG0VJYQQl/giphy.gif" width="1440">

#### Planet Info
  - When a user clicks on a planet they should see a single planet view with various fun facts about the planet.

<img src="https://media.giphy.com/media/zVXMeEDnLV1jW0zZ95/giphy.gif" width="1440">

#### Responsive Design
 - Responsiveness was a consideration while designing this application. Our application viewed from a mobile device:
 <img src="https://media.giphy.com/media/HWFo2llXGa7uugvvx6/giphy.gif" width="500" align="center">

#### Accessibility

We made accessibility a priority in our application. Planet Party recieved a 100% acecessibility audit from Chrome's Lighthouse tool. Also using the Wave extension, our application has zero errors and zero contrast errors.

#### Error Handling
To maintain a better user experience, we implemented dynamic error handling, so that a user will receive a unique error message based on the type of error.

#### Loading Screen
To create a more positive user experience, we implemented a loading message that will display while information is being retrieved from the API.


## User Feedback
For this project we sent our deployed app out to kids to test out the functionality and used their feedback to improve the user experience.
Here is some of the feedback we received from actual kids:
- "I love it! The only thing that is weird is when I click on a planet, it sends me to that page but as far down as the planet itself was on the homepage."
- "I think it needs like some changing maybe, it's like when you have 82 moons you can tell which one's identical and then you can put them together and like stick them together `more like a game`. The overall look was really, I liked it, really good. It's like the whole like earthy thing, it kept my attention, it looked really good. Just that one thing needs to be changed."
- "I 💙  it soooooooooo much! It's the best app/website ever! Love you! Bye 🌏 🪐"
- "This is fantastic. Isaac loved it so much. We had a lot of fun talking about how old we would be on different planets or how long a day is, and how much we would weigh on different plants. It was a lot of fun! ... Isaac really loved that feature `for how many pounds something weighs on earth`."


## Learning Goals

- To learn and implement TypeScript; types, interfaces, and understanding type errors.
- Create an accessible app that has a clean UI and simple UX.
- Create a multi-page UX using React Router.
- Testing User Stories using `Cypress`.
- Get real user feedback, and adjust our application based on feedback.

## Future Iterations

- Create some type of game with data we have, maybe matching mass to each planet.
- Add a new view to learn about space weather, incorporating NASA's [DONKI](https://ccmc.gsfc.nasa.gov/donki/) API.


## Technologies Used

- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![ReactRouter](https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465)
- ![TypeScript](https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)
- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Contributors
* [Katie B](https://github.com/knees4bees) - Application Creator
* [Alex Thompson](https://github.com/alexthompson207) - Application Creator
* [Connor Anderson-Larson](https://github.com/ConnorAndersonLarson) - Application Creator


## Contact

[<img src="https://img.shields.io/badge/LinkedIn-alex--thompson-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin]
[<img src="https://img.shields.io/badge/Github-AlexThompson207-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github]

[<img src="https://img.shields.io/badge/LinkedIn-Katie--B-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin2]
[<img src="https://img.shields.io/badge/Github-KatieB-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github2]

[<img src="https://img.shields.io/badge/LinkedIn-connor--andersonlarson-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin3]
[<img src="https://img.shields.io/badge/Github-ConnorAndersonLarson-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github3]


<!-- Personal Definitions  -->

[linkedin]: https://www.linkedin.com/in/alex-thompson-he-him/
[github]: https://github.com/alexthompson207
[linkedin2]: https://www.linkedin.com/in/katie-b-dev/
[github2]: https://github.com/knees4bees
[linkedin3]: https://www.linkedin.com/in/connor-anderson-larson/
[github3]: https://github.com/ConnorAndersonLarson
