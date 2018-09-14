# Personal Web App

Check it out at: https://pacific-plateau-64936.herokuapp.com/

Make sure you've followed all instructions for [BaseWebApp](https://github.com/zsobin/BaseWebApp)

1) Add new app pages: Add pages called `about.ejs`, `projects.ejs`, `contact.ejs` to [html/pages](https://github.com/zsobin/PersonalWebApp/tree/master/project/html/pages). These files can be empty for now, or you could add something like `<h1> Hello! </h1>` so you know it's rendering.

2) Add routing - modify your server-side code in `project/start.js` to support routing. [See code here](https://github.com/zsobin/PersonalWebApp/blob/master/project/start.js#L13-L23)

*Since this updates the code that runs on the server, you need to restart your server to view the changes locally. You can do this by pressing control + c, and then then running `heroku local web` again. 

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

    app.get('/contact', function(request, response) {
      response.render('pages/contact');
    });

```

2) Add a file to your helpers called `navbar.ejs`: https://github.com/zsobin/PersonalWebApp/blob/master/project/html/helpers/navbar.ejs

3) Add that navbar to all of your app pages ([index.ejs](https://github.com/zsobin/PersonalWebApp/blob/master/project/html/pages/index.ejs#L7-L9), [about.ejs](https://github.com/zsobin/PersonalWebApp/blob/master/project/html/pages/about.ejs#L7-L9), [projects.ejs](https://github.com/zsobin/PersonalWebApp/blob/master/project/html/pages/projects.ejs#L7-L9)), and [contact.ejs](https://github.com/zsobin/PersonalWebApp/blob/master/project/html/pages/contact.ejs#L7-L9) so that people can navigate around your app:

```
  <header>
    <% include ../helpers/navbar %>
  </header>
```
    
4) Copy all the CSS over to your `project/css/main.css` file so your pages look a little prettier! https://github.com/zsobin/PersonalWebApp/blob/master/project/css/main.css. 

5) Make it your own!
    - Change images to your own
    - Add your own project descriptions and bio
    - Add more pages + routing
    - Style it to look prettier! Check out the components available through bootstrap [here](http://getbootstrap.com/components/).
 
