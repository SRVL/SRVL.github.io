var scanlines = $('.scanlines');
var tv = $('.tv');
function exit() {
    $('.tv').addClass('collapse');
    term.disable();
}

var commandText = function(text){
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}

var hiddenLetter = function(text){
  return "[[g;#FF69B4;]" + text + "]";
}

var App = {

  motd: function(ret){
      if (typeof ret === 'undefined') ret = false;
      var greetText = 
          "You are now connected to " + commandText('SRV OS') + " - VERSION 2.1.4 \n"+
          "\n" +
          "Please type " + commandText('menu') + " for a list of commands.\n" +
          "Note there are some " + commandText('hidden') + " commands you can find!\n";

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
      this.echo("|  " + commandText("about") + "              - About SRV OS");
      this.echo("|  " + commandText("ascii") + "              - All about ASCII art!");
      this.echo("|  " + commandText("attributes") + "         - Serval statistics");
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

  valentines: function(){
    window.open("./webpages/valentines.html"); 
},  

  ASCIItaka: function(){
    this.echo(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  ,,,,,,,,,. ( ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,            (%  ,,. &%//(       .,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,.            %/////#%///////#///////////% .,,.,.,.,,,,,,,,.,,,,..,,\n"+
    ",,,,,,.,,, %,,,*,,***,,,**,*%/////////%///////%////%(//(/         ,,,,,,,,,,,,,,\n"+
    ",,,,,,,,, **#,.(,,***,(///////////////////////////////%*,*****,,,,,# .,,,,,.,,,,\n"+
    ",,,, ,,, %*#....,*****,,%///////////////////////////////%*,******,*,,..,,,,.,,,,\n"+
    ",,,,,,., /,,,.....%**%/////////////#%&///#(#////////////////%(....,*/ ,,,,,,,,,,\n"+
    ",,,, ,,,. %*,/.*...&/////////////%,,*,,*/***,%/////////////%..//..*,% .,,  ,,,,,\n"+
    ",,,,,,,,,, %*,,%..(/////////////#***********,*,%//////////////...%,% .,,,,,,,,,,\n"+
    ",,,,.,,,,,,  %**%/////////////%,*****************%(/%////#%///#**,%%  .,,,,,,,,.\n"+
    "              /%%%#///////%/%**,,**************,*@@/*,**,*,***,**#//(           \n"+
    "           %////%%//#//%%%%*//////,*************//////*,*******,,*#/////%       \n"+
    "           %////%%*,*,**,,*///////,***********,,////////,,**,*,**#///%%         \n"+
    "            #////%********..,//&&/,***********,,/&&/,...******(*%//////.        \n"+
    "               %//%*#,,**,*,..,/*.***,,*,,,***,,.//..,,*******%////%#((#        \n"+
    "               %/////(/,,,*****,*,,,*%..@@/..%,,*,,,******,,%//////%            \n"+
    " ..,,,,,,,,,,, &///#/(///%%**,**,,*,*,,,@@@.,*****,,,**&@@////.%%#(%            \n"+
    ",,,,,,,,.,,,,,,   ,. #@**&/////#///###(%#%%%%#&((@//&/////%  ..,,,..,,.,,,,,,,,,\n"+
    ",,,,,,,  .,.  ,,,, @,** @**& ,/////%@((@@////////////@(%&    %#  ,,,,,,,,,.  ,,,\n"+
    ",,,,,,,,,,,,,,,,, @**.  **@**& (///////////********@&////(,%////%% .,,,,,,,,,,,,\n"+
    ",,,,,,,,,, ,,,,, (,,*  **#%%/#*&#**************&(****#.(& %/&(%  /* .,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,, ,&**,.  ***%&@  /****/,%//*///@,*,*%,**%% ,,.  ,. #,,*,,.  ,,,,,,,\n"+
    ",,,,,,,,,,,,,,,  @  ***%%%@ , &****,*&@&/@,****#*******(##(###/,,# ,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,   &%%@ ,,,, (##*/@@,.(*,**,/%#%*****%,*,*(%* ,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,. .,,,,,,,, *#(((%&@%**/%*(*//%#.  ,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
},

ASCIIbuck: function(){
    this.echo(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,,,,,,,,,,,*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,,,..&#&,,,,,. ///*..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,...,,,,,,,,&##& ,,&&%%%%%%%%%%%%&#,,,,*&,,,,,,,,,,,,,,.,,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,*,,,,,&####&@&&%%%%&&&%%%%%%%%%%& ,&%&,,,,,,,,,.&##&,,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,,*,&&&(%%%%%%%%%%%%%%%&%%%%%%%%&.%%&,,,,,,,###%##&,,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,, &#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&%&@%%%#,%#&///#&.,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,.&%%%%%%%%%%%%%%%%%%%%%%%%%&%%%%%%%%%%&&&&&#&////&&(,,,,,,,,,,,,\n"+
    ",,,,,,,,,,,,,,,,,.&&%%%%%%%%%%%%%%%%%%&%%%%%%%%%%%%%%%%&#%#%//%//&#(,*,,,,,.,,,,\n"+
    ",,,,,,,,,,,,,,,,,.,&&%%%%%%%%%%%%%&%%%%%%%%%%%%%%%%%%&&####//(#//##&,,,,,..,,,,,\n"+
    ",,,,,,,,,,,,,....&(%%%%%%%&&%%%%%%%%%%%%%%%%%%%%%%%%%%%&#&&/////&#&(...,,,,,,,,,\n"+
    ",,,,,,,,,,......&%%%%%%&%%%%%%%%%%%%%&%%%%&&&&&%%%%%&%%%&%&/%//&##&,.......,,,,,\n"+
    ",,,,,,,........&%%%%%&%%%%%%%%%%%&%%%%%%&&%%%&#&%&&%&%%%&&%(/&###& ...........,,\n"+
    ",,,,..........&(%%%%&%%%%%%%%%%%%%%%%&&&%%&#####&%&&%%%%%&/%###%%%&&,...........\n"+
    ",,............&%&&%&%%%%%&&&&####(((&&(((#######&%&%%%%%%&###&%%%%%%&...........\n"+
    "................&%%&%%%%%%%######((((((((#######&&&%%%%%&#&&&&%%%%&%%&&.........\n"+
    "...............%%%%&%%%%%&# @#%@((((((((((@#######.%%%%&###&%%%%%%%%&...........\n"+
    "..............&%&%%%%%%%&%((((((((((((((#((@@@@@,  &%%&####&%%%%%%%%%%/.........\n"+
    ".................&&%%%&%###(((((((###(((((((((.    *% &######&%%%%%%%%&.........\n"+
    "..................&%%&#&%%%####%&%%%%%#####(@@.. ,@@,####%&&&&%%%%%%%%&.........\n"+
    ".................. &%&##&@%%%%%%&@%&#######@@@ .@&%%%%%%%&&&&%%%%%%%&#..........\n"+
    "..................&%%%&##//####//#########@        %%%%%%%%%%%%%%%&*............\n"+
    "..................%%%%%&&##############@@   #&&%&%%%%%%%%%%%%%%%%%%.. ..........\n"+
    " .............../#%%%%%%&   .@@@@@@@ @@    &%%%%&%%%%%%%%%%%%%%%%%%%&...........\n"+
    ".    ...  ... .###%%%%%%%%&              #&%%%%%&&%%%&%%%%%%%%%%%%%%%& . . . . .\n"+
    "    .,  . .   ##((//(##%%##%%&@       &&%&%%%&%%%%%%%%%%%%%%%%%%%&%%%%@.   .   .\n"+
    ",. ,.,,.  ..  ./%((((((#(#####%&%%%%%%%%%%&%%%%%%%%%%%%&%%%%&%%%%%&&%&          \n"+
    "..,,.,.,......&(%%%%%%%((//####%%%%%%%%%%&(%%%%%%%%%%%%&/%&%%(&%%%&#. .. .,.,...\n"+
    ".,.,,..... ../(%%%&&&#%%%%%/##%#%%%%%%%%%%&&&@%%%%%%%%&/((####/(((((#.....,.,,,.\n"+
    ",.,,............#//((&#%%%*/###%%%%%%%%%%%%%%%%%%&&%&#((/////*****(((%.....*,,,.\n"+
    ",*,..........  #//**/*/((/##(#%%%%%%%%%%%%%%%%%&#&(((##((((/*///****((#... ... .")
},
  

  ascii: function(){
      this.echo();
      this.echo(hiddenLetter("ASCII") + " ar" +hiddenLetter("t") + " is " +hiddenLetter("a") + " form of digital art that uses the characters from the ASCII character set to create images.\n" + 
    "The simplicity of ASCII art makes it accessible to anyone with a computer.\n");
    this.echo(); 
    this.echo("Despite its " +hiddenLetter("b") + "asic appearance, ASCII art has the power to evo" +hiddenLetter("k") + "e emotions and convey ide" +hiddenLetter("a") + "s through its imaginative " + hiddenLetter("u") + "se of lines and symbols.\n" +
    "Its versatility has made it popular in various forms of digital media including social media platforms instant messaging, and even email signatures.\n");  
    this.echo();
    this.echo("The " +hiddenLetter("c") + "reativity of ASCII artists never fails to impress, as they continue to find new and innovative ways to push the boundaries of what can be achieved using only ASCII.\n" +
    "Whether it's a whimsical cartoon, a " +hiddenLetter("k") + "ind portrait, or a detailed landscape, ASCII art never fails to be a source of inspiration and awe.\n");
      this.echo();
  },

  nerdy: function(){
    this.echo("<3 <3 <3 <3 <3 <3")
    this.echo();
    this.echo("In binary code, the word " + commandText("love") + " is represented as " + commandText("01101100 01101111 01100101") + ". If you consider each " + commandText("1") + " to be a kiss and each " + commandText("0") + " to be a hug, you can see that the message behind " + commandText("love") + " is " + commandText("kiss-hug-kiss-kiss-hug-hug-kiss.") + " So in essence, every time someone says " + commandText("I love you") + " in binary code, they're actually saying " + commandText("I kiss-hug you.") + " Isn't that nerdy and romantic all at once?");
    this.echo();
    this.echo("<3 <3 <3 <3 <3 <3")
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
      this.echo("|  Product Name:   " + commandText('SRV OS'));
      this.echo("|  Version Number: " + hiddenLetter('2.1.4'));
      this.echo("|  Serial number:  " + commandText("sRtJDi3PFk7EAFKkZzWS"));
      this.echo();
      this.echo("|  History:\n" +   
      "SRV OS came about due to Skye wanting to learn more about " + hiddenLetter('nerdy') + " things and express their love for the people who inspire them every day.\n" +
      "At first, Skye was intimidated by the thought of learning something so complex, but they were determined to make something before " + hiddenLetter('valentines') +  " to show their love.\n" + 
      "Skye began browising forums and looking for ideas. Slowly but surely, they learned the basics of how to write simple Jquery stuff.\n");
  },

  attributes: function(){
      this.echo();
      this.echo("|  " + commandText('Physical'));
      this.echo();
      this.echo("|  " + commandText('Leggy') + "                  ##[[g;#00DE12;]#################################################]  ##");
      this.echo("|  " + commandText('Catellites') + "             ##[[g;#00DE12;]###############################################]    ##");
      this.echo("|  " + commandText('Booper') + "                 ##[[g;#5BD100;]############################################]       ##");
      this.echo("|  " + commandText('Pawbs') + "                  ##[[g;#5BD100;]############################################]       ##");
      this.echo("|  " + commandText('Clawbs') + "                 ##[[g;#99D100;]#########################################]          ##");
      this.echo("|  " + commandText('Floof Duster') + "           ##[[g;#B2D100;]#######################################]            ##");
      this.echo("|  " + commandText('Alertness') + "              ##[[g;#D1B900;]############################]                       ##");
      this.echo("|  " + commandText('Mow volume') + "             ##[[g;#D16200;]###########]                                        ##");
      this.echo();
      this.echo("|  " + commandText("Skills"));
      this.echo();
      this.echo("|  " + commandText('Mental Health') + "          ##[[g;#42D100;]###############################################]    ##");
      this.echo("|  " + commandText('Cooking') + "                ##[[g;#42D100;]###############################################]    ##");
      this.echo("|  " + commandText('Hugs') + "                   ##[[g;#5BD100;]#############################################]      ##");
      this.echo("|  " + commandText('Sassiness') + "              ##[[g;#99D100;]#########################################]          ##");
      this.echo("|  " + commandText('Music Snobbery') + "         ##[[g;#B2D100;]########################################]           ##");
      this.echo("|  " + commandText('Stremches') + "              ##[[g;#D1B900;]################################]                   ##");
      this.echo("|  " + commandText('Multi-tasking') + "          ##[[g;#D1B900;]############################]                       ##");
      this.echo();
      this.echo("|  " + commandText("Romance"));
      this.echo();
      this.echo("|  " + commandText('Smoochability') + "          ##[[g;#5BD100;]############################################]       ##");
      this.echo("|  " + commandText('Butt Quality') + "           ##[[g;#B2D100;]#######################################]            ##");
      this.echo("|  " + commandText('Massage Skills') + "         ##[[g;#B2D100;]#######################################]            ##");
      this.echo("|  " + commandText('Flexibility') + "            ##[[g;#B2D100;]#####################################]              ##");
      this.echo("|  " + commandText('Body Odour') + "             ##[[g;#D13F00;]#########]                                          ##");
      this.echo();
  },

  contact: function(){
      this.echo();
      this.echo("|  " + commandText("Telegram") + ":      http://t.me/amarimew");
      this.echo("|  " + commandText("Discord") +  ":       http://discordapp.com/users/327806928476438529");
      this.echo();
  },

    echo: function(text) {
        this.echo(text, {
           raw: true,
           finalize: function(div) {
              div.css({
                 "text-align": "center"
                });
            }
        });
    },

  credits: function(){
      this.echo();
      this.echo("|  Site built by " + commandText('Skye Wright'));
      this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl") +
      this.echo("|  Using " + commandText('Homepage Layout') + " by " + commandText('Ronnie Pyne') + ": https://github.com/perverse") +
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
      this.exec('attributes');
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