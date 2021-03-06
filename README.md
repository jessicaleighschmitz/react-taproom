
# _<p align="center">React Taproom</p>_

#### _**<p align="center">By: Jessica Schmitz</p>**_

| Component Structure |
| :------------------ |
| ![component structure](src/assets/img/taproom-structure.jpg) |

#Description

Fermented is a digital tap list designed to let a user know what is on tap in a particular beer bar from any location. Built with React, Fermented practices managing state and making data dynamic.

## Notes

Unforeseen Issues

* adding fontawesome svg for social media icons
* I removed the router because it made more sense to have the routing take place in the (stateful) app component where i could more easily pass props to children
* I created the AddBeerForm and moved the button linking it to the admin page.
* I also made the stateful beer list populate in both the home page and on the admin list. Beers were not able to be added unless they AddBeerForm path came after the admin path.
* Attempted but could not get the newsTicker component to work. I left it in despite it not functioning so and instructor and I could discuss the issue.


## React vs. Angular

The difference between React and Angular thus far seems to be modularity. In react everything is in one function for that piece of code. In Angular each component has a few pages all tied together.

Before we start implementing Redux I think that passage of data in react and angular will be similar (done with call back functions), which I think Redux will change how we manage application and component state.

<p align="center">  
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
<a href="https://github.com/RichardLitt/standard-readme"><img src="https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square"></a>
</p>

## <span style="color:#74875d;">Description</span>



_This is a _

## <span style="color:#74875d;">Technologies Used</span>

* HTML
* React
* JSX
* Webpack, Eslint, babel
* React Hot Loader
* CSS Loader, CSS Style Loader, and JSX Loader


### <span style="color:#74875d;">License</span>

Copyright (c) 2018 ****_Jessica Schmitz_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
