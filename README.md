# SRVL.github.io

At the start of this year, one of my resolutions was to learn new skills that might benefit my onward quest to switch careers. As I'd been studying web development at university, I decided to do a project showcasing some of the skills I was developing. 

As Valentine's day was rapidly approaching, and I'm a notoriously hopeless romantic, I figured, why not make a cute little website for my loved ones? 

That will be a piece of cake!

# How it came together

So I knew I wanted to make a website that flexed some of the JS and CSS skills I'd picked up through studying web technologies and decided to make a terminal-based website where my partners could enter commands. The output would be something cute and romantic, hopefully bringing a smile to the faces of my intended audience. A cursory internet scanning led me to the project page for [jQuery Terminal](https://terminal.jcubic.pl/) and its author, [Jakub T. Jankiewicz](https://jakub.jankiewicz.org/). jQuery terminal was an ideal fit for my needs, as it was made using a well-known library with plenty of support and was easier to grasp than JavaScript, from what I had read. 

I figured making a boot screen for the terminal might be rather nifty. I opted to make a simple progress bar using an interval that ticks over and increments a percentage before expanding the width of the progress bar. I also stumbled across [ASCII Morph](https://github.com/tholman/ascii-morph) by [Tim Holman](https://tholman.com/) and opted to utilise some of my own ASCII art alongside the stock art to add a little extra flavour to the page. After implementing the above, I implemented some CSS to add a subtle green glow for the extra authentic retro feel. 

The terminal itself was cobbled together by scanning the jQuery terminal documentation and using the basic layout gleaned from the homepage of [Ronnie Pyne](https://www.ronniepyne.com/)(One of the examples on the jQuery terminal project page)

A running tally was kept of every hidden command found, and after 5 had been located, a final command could be used to obtain a certificate of completion. 

![image](https://user-images.githubusercontent.com/55710846/229439067-74ae515c-99b8-4d90-bc06-cc64ccdd6831.png)
