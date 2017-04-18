# DemoWebApp

Check it out at: https://ancient-forest-87393.herokuapp.com/

Make sure you've followed all instructions for [BaseWebApp](https://github.com/zsobin/BaseWebApp)

1) Add routing - modify your server-side code in `index.js` to support routing. Make sure you also add an `about.ejs` and a `projects.ejs` to your views. [See code here](https://github.com/zsobin/PersonalWebApp/blob/master/index.js#L13-L23)

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

