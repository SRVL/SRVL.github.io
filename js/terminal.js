var commandText = function(text){
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}

var hiddenLetter = function(text){
  return "[[u;inherit;]" + text + "]";
}

var App = {

  motd: function(ret){
      if (typeof ret === 'undefined') ret = false;
      var greetText = 
          "You are now connected to " + commandText('SRV OS') + " - VERSION 2.1.4 \n"+
          "\n" +
          "Please type " + commandText('menu') + " for a list of commands.\n" +
          "Note there are some " + commandText('hidden') + " commands you need to find.\n";

      if (!ret) {
          this.echo("\n" + greetText);
      } else {
          return greetText;
      }
  },

  menu: function(){
      this.echo();
      this.echo("|  " + commandText("motd") + "               - Display Message of the Day");
      this.echo();
      this.echo("|  " + commandText("about") + "              - Summary of me");
      this.echo("|  " + commandText("projects") + "           - Some recent projects of mine");
      this.echo("|  " + commandText("skills") + "             - What I can do");
      this.echo("|  " + commandText("awards") + "             - Awards and features for my work");
      this.echo();
      this.echo("|  " + commandText("github") + "             - Das github");
      this.echo("|  " + commandText("linkedin") + "           - How I connect for work things");
      this.echo("|  " + commandText("facebook") + "           - My personal social area");
      this.echo("|  " + commandText("twitter") + "            - When 140 characters is enough");
      this.echo();
      this.echo("|  " + commandText("contact") + "            - Contact me")
      this.echo("|  " + commandText("credits") + "            - Credits for this website");
      this.echo();
      this.echo("|  " + commandText("all") + "                - Run all commands");
      this.echo();
  },

  github: function(){
      this.echo();
      this.echo("|  http://www.github.com/perverse");
      this.echo();
  },

  facebook: function(){
      this.echo();
      this.echo("|  http://www.facebook.com/perverse");
      this.echo();
  },

  linkedin: function(){
      this.echo();
      this.echo("|  https://www.linkedin.com/profile/view?id=298500285");
      this.echo();
  },

  twitter: function(){
      this.echo();
      this.echo("|  http://www.twitter.com/perverse_8P");
      this.echo();
  },

  about: function(){
      this.echo();
      this.echo("|  Name:         " + commandText('Ronnie Pyne'));
      this.echo("|  DOB:          25/11/1985");
      this.echo("|  Location:     " + commandText('Surry Hills, NSW'));
      this.echo();
      this.echo("|  Vocation:     I am a Full Stack Web Developer (primarily " + commandText('PHP') + ", " + commandText('Node.js') + ") and DevOps (Linux, AWS) specialist.");
      this.echo("|                I have been coding in a commercial environment for " + commandText('over 12 years.'));
      this.echo("|                My main weapons of choice on the front end are " + commandText('Angular.js') + " and " + commandText('jQuery.'));
      this.echo();
      this.echo("|  Employment:   I am currently " + commandText("freelancing") + " in the " + commandText("Sydney, NSW") + " area, but am always open to interesting opporunities of all kinds. Get in touch if you'd like to discuss a proposal!");
      this.echo();
  },

  projects: function(){
      this.echo();
      this.echo("|  " + commandText('Lendlease Digital Signage DSP/CMS') + "    https://goo.gl/aZgIrW                          // Lead Developer");
      this.echo("|  " + commandText('SimplyAskIt') + "                          http://www.simplyaskit.com.au                  // Backend Developer");
      this.echo("|  " + commandText('Audi - Land of Quattro') + "               http://www.holler.com.au/work/audi-loq         // Backend Lead");
      this.echo("|  " + commandText('Heineken - Open Your City') + "            http://www.holler.com.au/work/open-your-city   // Backend Lead");
      this.echo("|  " + commandText('Betta Electrical') + "                     http://www.betta.com.au                        // Backend Developer");
      this.echo("|  " + commandText('Baptist World Aid Australia') + "          http://www.baptistworldaid.org.au              // Backend Lead");
      this.echo();
  },

  skills: function(){
      this.echo();
      this.echo("|  " + commandText('Languages'));
      this.echo();
      this.echo("|  " + commandText('PHP') + "                    ##[[g;#00DE12;]#################################################]  ##");
      this.echo("|  " + commandText('Linux') + "                  ##[[g;#42D100;]###############################################]    ##");
      this.echo("|  " + commandText('Node.js') + "                ##[[g;#5BD100;]############################################]       ##");
      this.echo("|  " + commandText('Javascript') + "             ##[[g;#5BD100;]############################################]       ##");
      this.echo("|  " + commandText('CSS') + "                    ##[[g;#99D100;]#########################################]          ##");
      this.echo("|  " + commandText('HTML5') + "                  ##[[g;#B2D100;]#######################################]            ##");
      this.echo("|  " + commandText('MongoDB') + "                ##[[g;#D1B900;]############################]                       ##");
      this.echo("|  " + commandText('.NET MVC (C#)') + "          ##[[g;#D16200;]###########]                                        ##");
      this.echo();
      this.echo("|  " + commandText("Frameworks and CMS"));
      this.echo();
      this.echo("|  " + commandText('Laravel') + "                ##[[g;#42D100;]###############################################]    ##");
      this.echo("|  " + commandText('AngularJS') + "              ##[[g;#42D100;]###############################################]    ##");
      this.echo("|  " + commandText('Silverstripe') + "           ##[[g;#5BD100;]#############################################]      ##");
      this.echo("|  " + commandText('Sails.js') + "               ##[[g;#99D100;]#########################################]          ##");
      this.echo("|  " + commandText('Express') + "                ##[[g;#B2D100;]########################################]           ##");
      this.echo("|  " + commandText('Symfony') + "                ##[[g;#D1B900;]################################]                   ##");
      this.echo("|  " + commandText('Zend Framework') + "         ##[[g;#D1B900;]############################]                       ##");
      this.echo();
      this.echo("|  " + commandText("Other"));
      this.echo();
      this.echo("|  " + commandText('AWS') + "                    ##[[g;#5BD100;]############################################]       ##");
      this.echo("|  " + commandText('Grunt/Gulp') + "             ##[[g;#B2D100;]#######################################]            ##");
      this.echo("|  " + commandText('Virtualbox') + "             ##[[g;#B2D100;]#######################################]            ##");
      this.echo("|  " + commandText('Docker') + "                 ##[[g;#B2D100;]#####################################]              ##");
      this.echo("|  " + commandText('Vagrant') + "                ##[[g;#D13F00;]#########]                                          ##");
      this.echo();
  },

  contact: function(){
      this.echo();
      this.echo("|  " + commandText("Email") + ":         ronniepyne@gmail.com");
      this.echo("|  " + commandText("LinkedIn") + ":      http://www.linkedin.com/profile/view?id=298500285");
      this.echo();
  },

  credits: function(){
      this.echo();
      this.echo("|  Site built by " + commandText('Ronnie Pyne'));
      this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
      this.echo();
  },

  awards: function(){
      this.echo();
      this.echo("|  " + commandText('FWA Site of the Day') + ", 24th September 2013   | Audi - Land of Quattro                http://www.thefwa.com/site/audi-australia-land-of-quattro");
      this.echo("|  " + commandText('Google Sandbox') + "                             | Audi - Land of Quattro                http://www.thinkwithgoogle.com/campaigns/audi-australia-land-of-quattro.html");
      this.echo();
  },

  all: function(){
      this.clear();
      this.exec('motd');
      this.exec('about');
      this.exec('projects');
      this.exec('skills');
      this.exec('awards');
      this.exec('github');
      this.exec('linkedin');
      this.exec('facebook');
      this.exec('twitter');
      this.exec('contact');
      this.exec('credits');
  },

  ls: function(){
      this.exec('menu');
  }
}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = "https://sjwright.net";
  } else {
      $('body').terminal(App, {
          greetings: function(cb){
              cb(App.motd(true));
          },

          onBlur: function() {
              // prevent loosing focus
              return false;
          },
          completion: true,
          checkArity: false
      });
  }
});