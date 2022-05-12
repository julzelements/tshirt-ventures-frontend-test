# Introduction

We built a really simple login form. Then we got stuck. Can you help us make it better? We have identified a few possible improvements

To give you the best opportunity to showcase your skills we would like YOU TO CHOOSE what you work on. Pick an area you are most comfortable in.

Remember to communicate clearly and explain your decisions. We are not looking for clever tricks. Just good collaboration

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

If you have implemented some validation behaviour, can you test it?
What about testing the submit function?

 We have [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) configured and ready to go.