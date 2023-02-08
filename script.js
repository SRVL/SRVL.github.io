var delay = 50;
var animation = false;
var intro = 'Welcome to Serv OS V2.14';
var term = $('body').terminal({
    hello: function(name) {
        this.echo('Hello, ' + name + '. Welcome to the Serv OS Command Line.');
    },

    add: function(num1, num2) {
      this.echo(parseInt(num1) + parseInt(num2));
    },

    bye: function() {
        this.echo('So long');
      },

  }, {
    greetings: intro,
  });
