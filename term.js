// terminal.js
$(document).ready(function() {
    $("#terminal").terminal(function(command) {
      // Process the command here
      terminal.echo("You entered: " + command);
    }, {
      greetings: "hi",
      prompt: "> "
    });
  });
  