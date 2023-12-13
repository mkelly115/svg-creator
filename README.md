# SVG-CREATOR  [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

The purpose of this project was to create a command line function that would use inquirer to pose prompts to the user for a logo that will be created for them. The user will be restricted to 3 characters that will fit within a triangle, square, or circle. Both the text and shape will have individual colors picked by the user. A file with the users image will be created and they will have a test html file to view it.

## Usage

When the user types 'node index.js' into the command line, a series of prompts will be presented. The user will be asked what characters they wish to enter, followed by the color of the text. The user will then pick a shape from a list of square, circle, and triangle. Finally the user will choose which color will encompass the shape they have picked. Once they submit the final question, a console log will state that "Generated logo.svg". A new file called logo.svg will be added to the project, which can then be accessed via the shapes.html file for the user to see the finished product.

## Installation

Simply type NPM i into the command line to install all associated dependencies.

## Conclusion

In conclusion, I found that the that one of the most challenging portions of this assignment for me was where to begin. I followed the file structure given by instructors, but I was initially overwhelmed with the prospect of making an image generate. I first used inquirer to pose the prompts and from there decided I could work through the remainder of the project step by step. I first did research and found the best way to apply the users shape was via switch and cases. This allowed me to easily swap the different shapes functions based on user input. I then had to do a great deal of research on how SVG images are made. I learned the actual coding of them is quite simple, but what can be tough is the tweaking needed to get the images generated in line with project expectations. I would say the tweaking of the image itself was the most time consuming aspect of this project for me. I initially used a few add-ons to limit characters and pick colors, but after discussion with my teachers, decided to go with various validation methods to not only make things cleaner, but to challenge myself and expand my knowledge. Overall I would consider this a project that on first look seemed daunting, but once broken down into individual pieces was much simpler than I had believed.

# Screencastify

https://drive.google.com/file/d/1Czl8AsPuhs39_FCX8GaMk_oLNocI1voj/view

# Licensing

MPL 2.0
