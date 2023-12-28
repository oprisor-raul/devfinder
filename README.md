# Frontend Mentor - GitHub user search app

https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6

## The challenge

Your challenge is to build out this GitHub user search app using the [GitHub users API](https://docs.github.com/en/rest/reference/users#get-a-user) and get it looking as close to the design as possible.

## Stack Utilized in the Project
This project was primarily developed as an initiation into the intricate world of React. It provided a comprehensive overview features, such as the useContext and useEffect hooks. A cornerstone of this project was the organization of the codebase, with an emphasis on creating compact, reusable components to ensure efficiency and maintainability
[![React][React-Programming-Language]][React-url]

## Screenshots
![Desktop Dark Mode Screenshot](https://github.com/oprisor-raul/devfinder/blob/main/screenshots/desktop-dark.png)

![Desktop Light Mode Screenshot](https://github.com/oprisor-raul/devfinder/blob/main/screenshots/desktop-light.png)

![Mobile Dark Mode Screenshot](https://github.com/oprisor-raul/devfinder/blob/main/screenshots/mobile-dark.png)

![Mobile Light Mode Screenshot](https://github.com/oprisor-raul/devfinder/blob/main/screenshots/mobile-light.png)

![Tablet Dark Mode Error Screenshot](https://github.com/oprisor-raul/devfinder/blob/main/screenshots/tablet-dark-error.png)

![Tablet Light Mode Screenshot](https://github.com/oprisor-raul/devfinder/blob/main/screenshots/tablet-light.png)


### Goal
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

### Expected behaviour

- On first load, show the profile information for oprisor-raul.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

[React-Programming-Language]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

