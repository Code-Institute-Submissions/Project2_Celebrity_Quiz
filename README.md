# Celebrity Quiz

![GitHub last commit](https://img.shields.io/github/last-commit/cwallacebailey/Project_2_Celebrity_Quiz)
![Github top language](https://img.shields.io/github/languages/top/cwallacebailey/Project_2_Celebrity_Quiz)


The celebrity quiz is designed to be fully interactive, utilsing event listeners to create a image flip function which reveals a portion of a celebrity with each click. Each click then reduces the number of points which can be won in that particular round. the built in object, Math allows random question selection and order and sound effects are used to make the quiz engaging. It is designed to be responsive on multiple devices with a focus on simple, linear navigation. I chose this project mainly as a demonstration of the flexibility and range that Javascript allows.

![Responsive Mockup](assets/readme_images/responsive.png)

Please see the final project [here](https://cwallacebailey.github.io/Project_2_Celebrity_Quiz/).

# User Experience

The overall aim for this project was to build an interactive and engaging quiz which could be enjoyed by anyone with no overall target audience other than celebrity fans. This target demographic is wide reaching and diverse and the quiz is designed so that questions can easily be added to expand the quiz. This enables it to remain interesting to both new and return users.  

## Design
---
### Colours

The color scheme is uniform throughout the quiz using hex #234E70 for the blue background with hex #FBF8BE yellow/ cream for the font color. Finally a complimentary navy was chosen for the quiz buttons (hex #0c1a25)

![Color Scheme](assets/readme_images/colors.png)

The background colour does not distract from the main features of the quiz and the font colour is easily read as it nicely contrasts with the background. 

[return to contents](<#contents>)

### Type Face
Throughout the site Roboto Slab has been used. It's an easy to read, neat font which doesn't distract from the overall appearance of the site.

In case Roboto Slab isn't supported in the browser sans serif is available as a backup. As with Roboto this is an easy to read font which is widely accessible on browsers so should always be available making it an ideal backup font.    

[return to contents](<#contents>)

## Features
---
### Existing Features

#### Home Page

* Heading and Username
    * The opening page immediately welcomes the user and lets them know the premise of the site, a celebrity quiz. 
    * The site automatically focuses on the username text box preventing the user from having to click into the box. This makes the site easier to use and removes a potentially annoying step for the user. 

![index page](assets/readme_images/index_opening.png)

* If the user does not enter a username or their username is two characters or less when they click the "enter quiz button an alert will appear asking for a username over two characters
    
![index page](assets/readme_images/short_username_example.png)

* The username is then stored locally to be displayed on the final page of the quiz, congratulating the user on finishing. This adds value as it adds a personal touch to the congratulations at the end of the quiz. A friendly vibe along with a fun quiz will invite further visits.

![final page](assets/readme_images/finalpage.png)

[return to contents](<#contents>)

* Button Hovering
    * When the cursor hovers over a button is increases in size by 3% and gains a slight shadow effect over 300 milliseconds. This adds value with an extra level of interactivity for the user. 

![Button Hover1](assets/readme_images/button-hover1.png) ![Button Hover2](assets/readme_images/button-hover2.png)

[return to contents](<#contents>)

* Instructions
    * The instructions button on the index page is easily visible and as a button the user should intuitively know to click the button to get access to the information
    * Once clicked the instructions button disapears and a box with informative guide as to how the quiz works is revealed. This box can be clicked for the instructions button to reappear. This keeps the index page neat and simple. 

![instructions1](assets/readme_images/instructions1.png)  ![instructions2](assets/readme_images/instructions2.png)

[return to contents](<#contents>)

#### Quiz Page

* The top row of the quiz opening page keeps a uniform, clear title available for the user to see. This is followed by their current score, the points available to win in that round and the progress bar
    * The points to win reduces with each part of the celebrity image that is revealed. 40 is available with no clues, the user risks getting 0 if they guess at the stage. 20 points are available with a single section of the celebs face available to see, 10 points for two sections and so on.
    * The progress bar indicates how many questions are available before the end of the quiz by filling up with each question answered. 

![quiz page top row](assets/readme_images/top-row.png)

* The central section of the quiz
    * Initially the user is presented with a selection of four answers and no celebrity image. The image quickly lets the user know what to do and looks nice on opening the quiz page. Once the user clicks an area of the image that portion of the celebrity image is revealed

The below shows before the user clicks

![quiz main section](assets/readme_images/quiz-section.png)

The below shows after a single click

![quiz main section with one section revealed](assets/readme_images/quiz-section1.png)

The user is then able to either guess who the image is of or click another section of the image to reveal more of the celebrity. 

If they guess who is shown correctly the image flashes green and if the user has sound allowed they will hear applause, the points available will be added to the total score and a new question will be loaded. If incorrect the answer they selected will flash red and a sad horn noise will be heard if they have sound allowed, they will score 0 for that round. This adds value to the user with positive affirmation if they get the answer correct. The trumpet is slightly humerous if they get the wrong answer so they will not feel too bad about it. 

The celebrity images are pulled out of an array at random so the user cannot play through the quiz a second time and know the answers without clicking to reveal the celebrity image. In addition only 5 of a total of 10 questions are asked each time the user takes the quiz which means the user is unlikely to ever experience the same questions in the same order. 

![quiz main section correct answer](assets/readme_images/quiz-section2.png)

* Bottom section of the quiz page. This section contains two features:
    * The first is the instuctions again if the user did not check on the first page or forgets how the game works. When clicked the text disapears and is replaced by a box with instructions in. If this box is clicked it disapears and is replaced with the original text.
    * The second feature allows the user to toggle sound effects on or off and adds value to the user if they want to listen to music or other sounds while playing the quiz without the quiz noises playing. 

The below shows the section when neither feature has been clicked
![bottom section of quiz page 1](assets/readme_images/quiz-bottom1.png)

The below shows the section when both features have been clicked
![bottom section of quiz page 2](assets/readme_images/quiz-bottom2.png)

[return to contents](<#contents>)

#### Quiz End Page

* Once the user has completed the quiz they are brought to the end of quiz page. Here the user is congratulated on finishing, their username is displayed along with their score and a comment under the score which is dependant on the score iteself. Over 100 it says "Wow, you really know your celebs", between 99 and 50 points it says "Not bad. You recognised someone..." ad under 50 it says "It's ok, celebs are not your thing". This adds value to the user with positive affirmation, using their name to make them feel welcome and then letting them know their score. 

![final page](assets/readme_images/finalpage.png)

From here the user can play again, go to the home page or check their highscores. 

#### Highscores Page

The highscores of the user are presented here, the below image shows only one as it has only been played through once. If played successive times more scores would appear up to a maximum of 5. Once the user has played through more than 5 times only the top 5 scores would be shown as the high scores array uses a splice to remove the lowest scores until only 5 high scores remain.

![Highscores page](assets/readme_images/highscores.png)

Highscores can only be seen once the quiz has been played through once and if user accesses this page before having played through the game the "play again" button is not visible. This prevents them being able to play the game without first inputting a username through the index.html page. 

[return to contents](<#contents>)