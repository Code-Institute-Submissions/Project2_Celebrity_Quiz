# Celebrity Quiz

![GitHub last commit](https://img.shields.io/github/last-commit/cwallacebailey/Project_2_Celebrity_Quiz)
![Github top language](https://img.shields.io/github/languages/top/cwallacebailey/Project_2_Celebrity_Quiz)


The celebrity quiz is designed to be fully interactive, utilsing event listeners to create a image flip function which reveals a portion of a celebrity with each click. Each click then reduces the number of points which can be won in that particular round. The built in object, Math allows random selection/ order of questions with sound effects used to make the quiz engaging. It is designed to be responsive on multiple devices with a focus on simple, linear navigation. I chose this project mainly as a demonstration of the flexibility and range that Javascript allows. The main aim of the project is to be a stimulating and engaging quiz. 

![Responsive Mockup](assets/readme_images/responsive.png)

Please see the final project [here](https://cwallacebailey.github.io/Project_2_Celebrity_Quiz/).

## Contents

* [User Experience](#user-experience)
    * [Design](#design)
    * [Colours](#colours)
    * [Type Face](#type-face)
* [Features](#features)
    * [Existing Features](#existing-features)
        * [Home Page](#home-page)
        * [Quiz Page](#quiz-page)
        * [Quiz End Page](#quiz-end-page)
        * [Features to Implement](#features-left-to-implement)
* [Testing](#testing)
    * [Validation of Code](#validation-of-code)
    * [Site Testing](#site-testing)
    * [Lighthouse](#lighthouse)
    * [Solved Bugs](#solved-bugs)
* [Deployment](#deployment)

# Goals and Target Audience

The main aim of this quiz is to be fun and engaging, testing the knoweldge of the user in being able to recognise celebrities off small portions of their face. Celebrity quizes have proven to have a wide audience with the buzzfeed craze and constant updates on news sites about celebrities and their lives. People are facinated with them. This quiz is therefore designed to have a wide reach and be appealing to new users with 38 potential questions but also to repeat users as the array of questions and images is set up to be easily updated, changed or added to making new questions easy to place into the quiz and the removal of old questions just as simple.

Aside from attracting and engaging a wide audience the project goal is really to display the abilities Javascript allows you to offer to a site. This project utilises for loops, event listeners, push(), splice(), Math.random(), updating inner HTML, local storage and nested ifs / functions as well as many other items to create an engaging quiz. 

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

#### array

The question array has been linked to the images with a 'name' attribute making the images associated with the questions easy to find if they were to be deleted. 

## Features left to Implement

Key improvements 

* It would be good to have a leaderboard rather than a highscores list allowing the user to see how they performed vs other users of the quiz. 

Extra questions should be added to keep the quiz interesting and allow multiple play throughs without seeing the same celeb. Around 100 questions would probably offer a significantly improved user experience over the existing 25 questions. 

[return to contents](<#contents>)

# Testing

## Validation of Code

The Celebrity Quiz has been extensively tested. The code has been run through the [W3C html Validator](https://validator.w3.org/) and [W3C CSS validator](https://jigsaw.w3.org/css-validator/) with no errors. All pages returned the image below: 

![celebrity quiz w3validator html](assets/readme_images/html-validator.png)

The CSS code returned the response below: 

![celebrity quiz w3validator CSS](assets/readme_images/css-validator.png)

The exception is the quiz-end.html page which received two warnings for empty headings however, these are filled by the javascript running upon the page opening. If Javascript is not working the noscript would run telling the user this. As a result these warnings can be disregarded. 

![celebrity quiz html warnings](assets/readme_images/html-warning.png)

[JS Validator](https://jshint.com/) was used to ensure there were no syntax errors or missing semi colons in the Javascript code. There were no erroris in the code but there were 43 warnings which all related to "let", 'const', template literals and arrow function syntax only being available in ES6 or "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (randomNumber, pointsToWin, points)".

The metrics read that: 

There are 20 functions in this file.

Function with the largest signature take 2 arguments, while the median is 0.

Largest function has 22 statements in it, while the median is 5.5.

The most complex function has a cyclomatic complexity value of 9 while the median is 2.

[return to contents](<#contents>)

## Site Testing
---

The below references "all features are functional". This accounts for the following: 

## Across all pages

* headings, buttons, images and fonts are responsive to screen size. 
* The favicon displays correctly 

## index.html

* Username field does not allow the user to access the quiz without entering a username over 2 characters with none of the characters being spaces. Once clicked with a username over 2 characters the user is taken to the quiz page (quiz-page.html) and the username is stored on local storage to be diplayed at the quiz-end page

* The highscores button takes you to the highscores page (highscores.html)

* Instructions button can be clicked to reveal instructions on how to play the game and once clicked the instructions button disapears. If these instructions are themselves clicked they disapear and the instructions button re-appears.

## Quiz Page

* The score correctly adds the points available to win each round
* The "points to win" reduces with each successive section of the celebrity image clicked excluding the first click which is free. This allows the user to score either 20, 10, 5 or 2 points. Points are not reduced if the same section of the image is clicked twice. 
* The progress bar fills up with each successive answer selected and after 5 questions are answered the bar appears full. On starting the quiz the bar appears empty. The progress bar disapears entiely on screen sizes with a width below 550 pixels 
* clicking each section of the "click to reveal" image reveals another section of the celebrity image to a maxmimum of four. The celebrity image is revealed in the correct order i.e. eyes do not appear below the nose or chin. 
* Hovering over the answers causes them to increase in size and produce a shadow. When selected if the answer if correct it appears green, if incorrect it appears red. If the sound is enabled a correct answer gives applause, if incorrect a sad horn noise is played. 
* "Click for Instructions" can be clicked to reveal instructions on how to play the game and once clicked the instructions button disapears. If these instructions are themselves clicked they disapear and the instructions button re-appears.
* On loading the image of a speaker shows that sound is muted and sound will not play regardless of the user getting a correct or incorrect answer. If clicked the image changes to a speaker producing sound and answers selected will produce one of two sounds mentioned above. 
* Once five answers have been given the user is taken to the quiz end page (quiz-end.html)

## Quiz End

* The users entered username is displayed and they are congratulated on finishing. The score is given and if they score more than 80 they see the message "Wow, you really know your celebs". If they score between 79 and 30 they see the message "Not bad. You recognised someone..." and anything below 30 "It's ok, celebs are not your thing"

* The home button takes the user to the home page
* play again takes the user to the quiz-page (quiz-page.html) and their username remains the same. 
* The highscores button takes the user to the highscores tab "highscores.html"

## Highscores tab

* The home button takes you to the home page (index.html)
* Highscores can be viewed at anypoint but if the user has not played through the quiz at least once the "play again" button is not visible. 
* Once clicked the "click to see" button on the highscores page disapears and if the user has played through the quiz at least once a scoreboard is produced. If the user has played through more than once the scores are in order of largest to smallest with largest being at the top. A maximum of 5 top scores can be shown. 

[return to contents](<#contents>)

## Browser Testing 

### Laptop Computer

* Chrome
    * Thoroughly tested and all features are functional

* Mozilla Firefox
    * Thoroughly tested and all features are functional

* Microsoft Edge
    * Thoroughly tested and all features are functional

* Internet Explorer
    * Internet explorer does not support the JS script and the click to enter button cannot be clicked so the quiz is unavailable on this browser. However, as this has been replaced with Microsoft Edge which does support all features of the quiz this should not be an issue. 

[return to contents](<#contents>)

### Mobile Phone

* Chrome
    * Thoroughly tested and all features are functional

* Mozilla Firefox
    * Thoroughly tested and all features are functional

The site responsiveness was tested and found to be suitable on the following devices: 

* Galaxy S5
* Pixel 2 XL
* Iphone 5 SE
* Iphone 6/7/8
* Iphone 6/7/8 Plus
* Iphone X
* iPad
* iPad Pro

[return to contents](<#contents>)

## Lighthouse

The site was tested using DevTools Lighthouse feature. Results below: 

Desktop Site: 

![celebrity quiz lighthouse-desktop](assets/readme_images/lighthouse_desktop.png)

Mobile site: 


![celebrity quiz lighthouse-desktop](assets/readme_images/lighthouse_mobile.png)

Best practices could be improved for both by switching 7 items from HTTP/1.1 to HTTP/2. As the score was 93 which is considered good I left the code as is. 

## Solved Bugs

1. Username
    * A username over two charachters is required to play the quiz. However spaces were originally considered a charachter and so a username could just be spaces or a single letter and space etc. to solve this I found the below on stack overflow could be used with an IF statement to check the length of the username entered excluding spaces. 
    <br>
    <br>
    "username.replace(/ /g, '')"

    * When the quiz has been completed the users score is added to local storage. Upon clicking "click to see" button on the highscores page the function highScores is run which adds the score to the highscores array and creates an ordered list. It was found that if the user visited the home page and then went back to the highscores list the score would be added twice. If they went back to the homepage again and then returned to the highscores page again the score would be added a third time. Essentially the score was being re-added each time the highScores function was called and it was called every time the "click to see" button was used. To remove this issue the score is only added if over 0 and once the function highScore is called the local storage was cleared using the code below: 
    <br>
    <br>
    localStorage.clear()
    <br>
    <br>
    This produced a username issue as the username was stored on local storage and so if the user used the "play again" instead of going through the home page and re-entering the username the username would be cleared. This meant that upon completing the quiz a second time the message to the user would read "null, your final score id:". To prevent this the localStorage.clear() was changed to remove only the users score on localStorage using the code below: 
    <br>
    <br>
    localStorage.removeItem('score')
    <br>
    <br>

    * If the user went from index.html to the highscore page using the highscores button the option to play again was there which meant the user could play through the quiz without setting a username. To fix this issue upon loading the highscores page playAgain() function is called. This checks to see if the highScores array is equal to or greater than one which is used as an indicator for wether or not the quiz has been played through at least once. If the array length is zero it is taken that the quiz has not been played through and the "play again" button's diplay is set to none preventing the user being able to use this option. 

        [return to contents](<#contents>)

2. Celebrity Image

* Once the quiz-page (quiz-page.html) is loaded the celebrity image is 'hidden' with another image that says "click to flip" visible. Once a section has been clicked the function reducePointsToWin() is called which essentially halves the available points to win (note the first section being revealed does not call reducePointsToWin() and is 'free'). However, if the same section of the image was clicked multiple times the function reducePointsToWin() would keep being called which meant you could reduce the points to win to well below 1 point. To prevent this from happening a new function called preventDoubleClick(event) was created which checks how many times the section of the image has been clicked and if it is greater than 1 the function reducePointsToWin() is not called. This increased the cyclomatic complexity of the code due to the increased number of if statements however it is necessary for the game to function as intended. 

* The celebrity image displayed is actually an image split into four equal sized images of 400px width by 100px height stacked on top of each other to create a full image (easily understood looking at the image below). When first loaded the images appeared as below which does not look good at all. This was fixed through research on stack overflow where I found that the gap below each image is actually to allow the portion of font that goes below the line space to exist. For example lower case 'g' has a portion of the letter below the line the rest of the text sits on. By reducing font size to 0 this gap was no longer required and the images stacked neatly. The actual code used was "font-size: 0;" in the CSS style sheet. 

![celebrity quiz bug2b](assets/readme_images/bug2b.png)

[return to contents](<#contents>)

3. Quiz Answers

* When the user selected an answer a timeout function is called before the new questions is loaded. It was possible for the user to use the window of time provided by the timeout function to click more than once on the correct answer to keep getting the points to win over and over again thus pushing their points way over the total possible. To prevent this the number of times the user has clicked on the answer is counted with the variable 'qclicks' which increases by one for each click. The answer is only checked and points won if the variable qclicks is equal to 1. Once the function loadQuestion() is run the qclicks is reset to 0.

* The quiz answers are generated and an event listener applied to them so they can be clicked and the answer checked. The event listener used was originally inside the loadquestion() function which meant each time the function was called the event listener would increase in the number of times it was generated. So, clicking the first time would produce a single event, clicking the second time would generate two events and this continued and grew with each successive click. To fix this I had to use the tutoring service provided by code instiute and found from their advice that I needed to move the event listener to outside of the function it was in to prevent the loop issue. 

    [return to contents](<#contents>)

4. Favicon

* Once the site was deployed the favicon chosen no longer worked, instead a 404 error was received. To fix this I had to use stack overflow and found that the code below needed to be added to the head element of my HTML code.
<br>
<br>
"link rel="shortcut icon" href="favicon.ico""

    [return to contents](<#contents>)

5. Highscore

* When the user finishes the quiz they can view their highscore. If they have completed the quiz more than once they would see a list of their highscores up to a maximum of 5. There were multiple bugs in the development of this process: 

    * When first deployed the system of creating the highscores board did not work on Chrome because the users score was being pushed into the array (highScores) on local storage as an integer and arrays one local storage only accepts strings. As a result the score has to be pushed as a string through the change below where "score" is the score of the users current round:  

            highScores.push(score);

            had to become:

            highScores.push(JSON.parse(score));

            "JSON.parse" passes the variable as a string. 

    * As stated above the array on local storage which held highscores (highScores) was an array of strings. This needed to be sorted highest to lowest in order to make sense as a highscores list but also to only show the users top 5 scores. This did not work as intended as the highscores list could not simply be ordered using highScores.sort(). Instead the array had to first be converted to a list of numbers using the code below: 

        highScores = highScores.map(Number)

        Next the array was ordered using the code below: 

        highScores.sort(function(a, b){return a - b})

        which produced a list which actually ran from lowest to highest. Finally the .reverse() function was used to reverse the order of the list from highest to lowest: 

        highScores.sort(function(a, b){return a - b}).reverse()

    [return to contents](<#contents>)

## unsolved bugs

* On one occassion when the image was clicked it did not flip but no error was given in the console and I repeatedly tested the site and never saw this again. As a result I have had to beleive this is a one off random occurrence as I cannot make it happen again. 
       
# Deployment

## Steps for Deployment

The following steps can be followed to deploy this project on Github pages:
 
  1. In the GitHub repository, navigate to the Settings tab 
  2. From the source section drop-down menu, select the main Branch
  3. Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

![how to deploy repository](assets/readme_images/deployment.PNG)

[return to contents](<#contents>)

## Steps to Clone the Repository

To clone the repository in order to be able to make changes to the project without effecting the original repository please follow the steps below: 

1. Open Github and locate the repository you wish to copy
2. Above the list of files click "code"
3. To clone the repository using HTTPS, under "clone with HTTPS", click the copy icon. 
[return to contents](<#contents>)

![How to clone](assets/readme_images/clone.png)

4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory
6. Type git clone and then paste the URL you copied earlier
7. Press enter to create your local clone

[return to contents](<#contents>)

# Credits

## Content

### Javascript

* The concept of the flipping of an image was taken from the youtube tutorial available [here](https://www.youtube.com/watch?v=lhNdUVh3qCc&t=115s) starting at 1:55 though the actual code used is not the same. 

* The concept of the progress bar seen on the quiz page was taken from [here](https://www.w3schools.com/howto/howto_js_progressbar.asp) though once again the code is different the idea of having a div with a width of 0% within another div element was taken from the link above. 

* I used the following [link](https://blog.logrocket.com/localstorage-javascript-complete-guide/) to learn about the use of local storage. It is a complete guide to local storage. 

### CSS

* On the CSS styling sheet I first set a general rule across all sheets that font size is 62.5% (see line 2 of style.css). This makes 1 rem equal to 10px instead of 16 which is easier to work with. I took that idea from stack overflow, the link is available [here](https://stackoverflow.com/questions/47923397/css-fonts-rem-trick-62-5-or-6-25)

* I had not worked with flexbox before but wanted to employ it for this project in order to become familiar with it. Although available as part of the code institute course I used the site (link [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)) to learn how it worked and could be utilised for this project. 

### Other

* The icons used were taken from [font awesome](https://fontawesome.com/).
* I converted an emoji of a trophy into the favicon.

## Media

* The applause noise when a user gets an answer correct was taken from [here](https://mixkit.co/free-sound-effects/clap/)
* The sad horn noise when a user gets an answer wrong was taken from [here](https://mixkit.co/free-sound-effects/sad/)

### Images from Wikimedia Commons

All images below are from Wikimedia Commons. The follow this [license](https://creativecommons.org/licenses/by/3.0/deed.en). All images have been resized to 400px by 400px with cropping where required to create a square required for the game. 

[Beyonce](https://commons.wikimedia.org/wiki/File:Beyonc%C3%A9_Knowles_2009.jpg)

[Christian Bale](https://commons.wikimedia.org/wiki/File:MJK_35690_Christian_Bale_(Vice,_Berlinale_2019).jpg)

[Elija Wood](https://commons.wikimedia.org/wiki/File:Elijah_Wood_(36103089852)_(cropped).jpg)

[Lea Seydoux](https://commons.wikimedia.org/wiki/File:L%C3%A9a_Seydoux_Cannes_2013.jpg)

[Nichola Cage](https://commons.wikimedia.org/wiki/File:Nicolas_Cage_66%C3%A8me_Festival_de_Venise.jpg)

[Brad Pitt](https://commons.wikimedia.org/wiki/File:Brad_Pitt_in_2014_(cropped).jpg)

[Jo Brand](https://commons.wikimedia.org/wiki/File:Jo_Brand_at_The_Great_Big_Walk_2017_(cropped).jpg)

[Wesley Snipes](https://commons.wikimedia.org/wiki/File:Wesley_Snipes_(41969097750)_(cropped).jpg)

[Chris Rock](https://commons.wikimedia.org/wiki/File:Chris_Rock_2014.jpg)

[Courtney Cox](https://commons.wikimedia.org/wiki/File:Courteney_Cox.jpg)

[David Schwimmer](https://commons.wikimedia.org/wiki/File:David_Schwimmer.jpg)

[Halle Berry](https://commons.wikimedia.org/wiki/File:Halle_Berry_10.jpg)

[Jay Z](https://commons.wikimedia.org/wiki/File:Jay-Z-02-mika.jpg)

[Matthew Perry](https://commons.wikimedia.org/wiki/File:Matthew_Perry_2013.jpg)

[Michelle Obama](https://commons.wikimedia.org/wiki/File:Michelle_Obama_by_Gage_Skidmore.jpg)

[Orlando Bloom](https://commons.wikimedia.org/wiki/File:Orlando_Bloom_10.jpg)

[Buzz Aldrin](https://commons.wikimedia.org/wiki/File:Buzz_Aldrin_by_Gage_Skidmore_3.jpg)

[Dwayne Johnson](https://commons.wikimedia.org/wiki/File:Intercontinental_Champion_THE_ROCK.jpg)

[Emelia clarke](https://commons.wikimedia.org/wiki/File:Emilia_Clarke_by_Gage_Skidmore_2_(cropped).jpg)

[George Michael](https://commons.wikimedia.org/wiki/File:George_Michael_at_Antwerp_(BRAVO).jpg)

[Gwendoline Christie](https://commons.wikimedia.org/wiki/File:Gwendoline_Christie_en_London_Film_%26_ComicCon,_2012.png)

[Harry Kane](https://commons.wikimedia.org/wiki/File:Harry_Kane_2018.jpg)

[Jackie Chan](https://commons.wikimedia.org/wiki/File:Jackie_Chan_by_Gage_Skidmore.jpg)

[Josh Brolin](https://commons.wikimedia.org/wiki/File:Josh_Brolin_by_Gage_Skidmore.jpg)

[Mark Zuckerberg](https://commons.wikimedia.org/wiki/File:Mark_Zuckerberg_(7985186041).jpg)

[Mike Tyson](https://commons.wikimedia.org/wiki/File:Mike_Tyson_2011.jpg)

[Aubameyang](https://commons.wikimedia.org/wiki/File:1_Pierre-Emerick_Aubameyang_(cropped).jpg)

[Ringo Starr](https://commons.wikimedia.org/wiki/File:Ringo_Starr_and_all_his_band_(8469748653).jpg)

[Stan Lee](https://commons.wikimedia.org/wiki/File:Stan_Lee_2014_Phoenix_Comicon_(cropped).jpg)

[Tommy Lee Jones](https://commons.wikimedia.org/wiki/File:Tommy_Lee_Jones_2017.jpg)

[Vin Diesel](https://commons.wikimedia.org/wiki/File:Vin_Diesel_XXX_Return_of_Xander_Cage_premiere.png)

### Images from Other sources

All images below from Flickr follow this [license](https://creativecommons.org/licenses/by/2.0/). All images have been resized to 400px by 400px with cropping where required to create a square required for the game. 

[Danny Trejo](https://www.flickr.com/photos/deneyterrio/438628394)

[Mahershala Ali](https://www.flickr.com/photos/disneyabc/33143438905)

[Viggo Mortensen](https://www.flickr.com/photos/nathancongleton/15244783986)

[Will Smith](https://www.flickr.com/photos/walmartcorporate/5793543057)

All images below from Wikipedia follow the license below the link. All images have been resized to 400px by 400px with cropping where required to create a square required for the game. 

[Donald Sutherland](https://www.wikiwand.com/en/Donald_Sutherland)

https://creativecommons.org/licenses/by-sa/3.0/

[Eddie Murphy](https://simple.wikipedia.org/wiki/Eddie_Murphy#/media/File:Eddie_Murphy_by_David_Shankbone.jpg)

https://creativecommons.org/licenses/by/2.0/

[Joaquin Phoenix](https://en.wikipedia.org/wiki/Joaquin_Phoenix#/media/File:Joaquin_Phoenix_in_2018.jpg)

https://creativecommons.org/licenses/by-sa/3.0/


I would like to take this time to thank my Mentor, Precious Liege for his help throughout this project. 
