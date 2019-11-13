# Goal
This website was created as an attempt to create an SPA with most of the niceties expected in developement while limiting the number of abstractions intoduced. This meant refraining from the use of overarching frameworks such as react, vue, angular. ESPECIALLY Angular.

### Required Features
2. Build system that will allow for fast developement. (inclusion of dev server, watcher, source maps, etc.)
3. Build system that will perform tasks needed for production. (selective inclusion, minification, bundling, etc.)
1. Build system that will allow for the use of ECMAScript 2015+ features in development.
3. Design system that follows "atomic" principles and provides reusable utilitiy classes to style content.
4. Abstraction which allows for the use of html templates. (Native html templating is almost not feasable for SPAs)
5. Abstraction which allows for the creation of "components" to help organize code and maintain flexibility.

# Architectural Decisions
To accomplish the goal listed above the follow tools / technologies were selected.

### Webpack
The use of webpack as a bundling tool helped achieve my goal in the following ways.

- 
