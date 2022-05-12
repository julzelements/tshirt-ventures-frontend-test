# TShirt Ventures tech exercise

Hey! Congrats on the interview progress! This is a quick intro to the next stage.

You will be pairing with some of our engineers for about 45-60mins.
Together, we will work on a very simple login form.

This is not a test to see how much syntax you know. If you get stuck, ask us for help. If you forget a built-in javascript function, just google it. Heck, we do that every day right?

We are focusing on two things:
Can you collaborate?
Can you code?

You can demonstrate good collaboration by:

- Sharing your thoughts and thinking the problem out aloud.
- Asking clarifying questions to make sure you are building the correct thing.
- Being humble and cooperative.

You can demonstrate good coding ability by:

- Knowing your way around your IDE and your tools.
- Debugging and fixing your code as you go.
- Breaking the problem into small solvable chunks.
- Writing tests if necessary.

Let's go into this together with an open mind. A good interview is like a frank exchange of ideas, we can both learn something from each other. This is a great opportunity for you to see what it's like to work with us too! There aren't many things that get built here without some collaboration. 😀

# Setup
1. clone this repo
2. `yarn install`
3. `yarn test`
4. All the tests should run green. Congrats! lets go.

# Task Introduction

We built a really simple login form. Then we got stuck. Can you help us make it better?

To give you the best opportunity to showcase your skills we would like YOU TO CHOOSE what you work on. Pick an area you are most comfortable in.

The tasks are (in no particular order):
### Refactor from class to function
All of our components usually follow the functional convention.Can you refactor the `Login.tsx` from a class syntax to the functional syntax? An example of a functional syntax can be seen with `Invoice.tsx`.
### Styling with Tailwind
It's kinda bare bones, hey? Let's make it pretty. Using [tailwind](https://tailwindcss.com/), can you match the [wireframe](./src/wireframe.png)? Don't worry about being pixel perfect, but obvious margins and centering is expected. Tailwind has already been installed and configured, just start adding the classes.
### Validate those fields
At the moment there is no validation? How would you approach this? We would like two rules enforced:
  * No username can have any special characters in it. There is a handy function in [./utils](./src/utils/validators.ts)
  * No password can be less than 10 characters.

### No tests? Detestable!
We don't have many tests yet. Check the [__tests__](./src/__tests__/) folder and see what is there. What should we add? 

* If you have implemented some validation behaviour, can you test it?
 * What about testing the submit function? You may need to mock some things.

 We have [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) configured and ready to go.