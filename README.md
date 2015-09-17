# AngularJS Intermediate Workshop 2015

Welcome to the 2015 AngularJS Intermediate Workshop. Today we'll be learning to work with directives and API services. This repository contains a very simple version of TodoMVC with arguably a lot of UI/UX issues. The AngularJS code could also use some love. Today's mission will be to improve this experience using your knowledge of API services and directives.


## Requirements

1. Node/NPM:
  ```
  brew install node
  ```
2. Bower:
  ```
  npm install -g bower
  ```

## Getting Started
Fork this project into your own account then pull it down to your computer. Once complete, run `bower install`. Now you're ready to run the server and development. Run the server using `gulp serve`.

## Project Requirements
**Goal**: Write a directive to replace the todo list items.

1. I should see a list of items (not inputs).
2. When I click on an item, I should be able to edit it.
  1. My changes shouldn't save until I press the "ENTER" key.
  2. If I hit "ESC", my changes should revert to the old value.
3. I should be able to check an item as complete.
  1. The item should be striked through.
4. I should be able to delete the item.
5. There should be a way to expand a task to see its description.
