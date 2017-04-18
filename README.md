# Personal Web App

Check it out at: https://stark-anchorage-83903.herokuapp.com/

Make sure you've followed all instructions for [BaseWebApp](https://github.com/zsobin/BaseWebApp)

1) Add new app pages: Add pages called `about.ejs` and `projects.ejs` to [views/pages](https://github.com/zsobin/PersonalWebApp/tree/master/views/pages). These files can be empty for now, or you could add something like `<h1> Hello! </h1>` so you know it's rendering.

2) Add routing - modify your server-side code in `index.js` to support routing. [See code here](https://github.com/zsobin/PersonalWebApp/blob/master/index.js#L13-L23)

    ```
    app.get('/', function(request, response) {
      response.render('pages/index');
    });

    app.get('/about', function(request, response) {
      response.render('pages/about');
    });

    app.get('/projects', function(request, response) {
      response.render('pages/projects');
    });

    ```

2) Add a file to your partials called `navbar.ejs`: https://github.com/zsobin/PersonalWebApp/blob/master/views/partials/navbar.ejs

3) Add that navbar to all of your app pages ([index.ejs](https://github.com/zsobin/PersonalWebApp/blob/master/views/pages/index.ejs#L7-L9), [about.ejs](https://github.com/zsobin/PersonalWebApp/blob/master/views/pages/about.ejs#L7-L9), and [projects.ejs](https://github.com/zsobin/PersonalWebApp/blob/master/views/pages/projects.ejs#L7-L9)) so that people can navigate around your app:

    ```
      <header>
        <% include ../partials/navbar %>
      </header>
    ```
    
4) Copy all the CSS over to your `public/stylesheets/main.css` file so your pages look a little prettier! https://github.com/zsobin/PersonalWebApp/blob/master/public/stylesheets/main.css. You could also copy over the 

5) Make it your own!
    - Change images to your own
    - Add your own project descriptions and bio
    - Add more pages + routing
    - Style it to look prettier! Check out the components available through bootstrap [here](http://getbootstrap.com/components/).
 
