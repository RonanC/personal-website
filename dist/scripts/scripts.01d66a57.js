"use strict";angular.module("personalWebsiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/tweets",{templateUrl:"views/tweets.html",controller:"TweetsCtrl",controllerAs:"tweets"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/portfolio",{templateUrl:"views/portfolio.html",controller:"PortfolioCtrl",controllerAs:"portfolio"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl",controllerAs:"projects"}).when("/webdev",{templateUrl:"views/webdev.html",controller:"WebdevCtrl",controllerAs:"webdev"}).when("/gmitcat-priv-pol",{templateUrl:"views/gmitcat-priv-pol.html",controller:"GmitcatPrivPolCtrl",controllerAs:"gmitcatPrivPol"}).otherwise({redirectTo:"/"})}]),angular.module("personalWebsiteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("TweetsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("PortfolioCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("ProjectsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("WebdevCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("GmitcatPrivPolCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").run(["$templateCache",function(a){a.put("views/about.html","<p>About me</p>"),a.put("views/contact.html",'<div class="jumbotron"> </div>'),a.put("views/gmitcat-priv-pol.html",'<div class="privpol"> <div class="jumbotron"> <h1>GMIT Catering Privacy Policy</h1> </div> <div class="panel"> <article> <section> <h1>Personal info</h1> <p>We collect your Full Name, Email Address, Phone Number, Student G Number and Password through the signup form. This information is needed to verify you before making orders. It may also be used for spreading any information such as deals or events via text or email.</p> <h3>Children</h3> <p>This app is open for use by all ages.</p> <p>There is no nudity, violance or profanity within the application.</p> <p>Orders are placed through prepaid credit so no access to actual money is involved.</p> </section> <section> <h1>How we collect info</h1> <p>We collect the information needed through the signup form on the initial application page.</p> <h3>Tracking technologies</h3> <p>There is no tracking technologies within the application.</p> </section> <section> <h1>How we use your info</h1> <p>We use your information in order to verify that you are indeed you.</p> <p>We use your information for sending out information related to deals or events via text or email.</p> </section> <section> <h1>When we share your info</h1> <p>We will never share your information with third parties.</p> <h3>Our Partners</h3> <p>We have no partners. GMIT Catering is the whole holder of any and all information collected from you.</p> <h3>Legal process</h3> <p>If you wish to know what information about yourself that we have, then you can make a request to cateringco@gmit.ie</p> </section> <section> <h1>How we store your info</h1> <p>We store your information in a MySQL database.</p> <h3>Where your info lives</h3> <p>Your information is in a server hosted by a third party.</p> <h3>How long we keep your info</h3> <p>We may keep your information indefinitely. Altough we usually wipe the database each year.</p> </section> <section> <h1>About</h1> <p>The GMIT Catering application is about helping customers pre-order their food, allowing them to skip queues.</p> <p> It also helps us the GMIT Catering Company gain greater brand awareness and a way to reach out to our customers.</p> <h3>Your choices</h3> <p>We only collect the data we need and we use it in a way that benefits you, the user.</p> <h3>Changes</h3> <p>If there are any changes to the privacy policy, an email will be sent to all users.</p> <h3>Contact us</h3> <p>If you have any questions feel free to send us an email at cateringco@gmit.ie</p> </section> </article> </div> </div>'),a.put("views/main.html",'<div class="med-card"> <div class="jumbotron sm-card" id="header"> <h1>Ronan Connolly</h1> <br> <p class="lead"> <img src="images/me_round.6dc4c2ae.png" alt="I\'m Ronan" id="profile_image" class="img-responsive center-block img-circle"> <br> <br> Software Developer | Web Designer | Polymath </p> <!--<p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p>--> </div> <br><br> <div class="jumbotron sm-card"> <p>Hello! I\'m Ronan. <br> I created this website as an aggregator for my many online profiles, presences and personalities.</p> <br> <p>I\'m currently studying/working in the West of Ireland (Galway).</p> </div> <br> <br> <div class="panel panel-default sm-card"> <div class="panel-heading">A brief synopsis </div> <ul class="list-group"> <li class="list-group-item">I grew up in Leitrim/Sligo.</li> <li class="list-group-item">I moved to Galway.</li> <li class="list-group-item">I cycle a lot, for fun and function.</li> <li class="list-group-item">I really like mexican and Italian food, burritos are my kryptonite.</li> <li class="list-group-item">I studied business for two years.</li> <li class="list-group-item">I worked for a year as an assistant manager.</li> <li class="list-group-item">I am a recent GMIT software development graduate (84% GPA).</li> <li class="list-group-item">I work at IBM developing security web applications in Node & Angular.</li> <li class="list-group-item">I always take on too many projects.</li> <li class="list-group-item">I tweet a lot, more for myself then others.</li> <li class="list-group-item">I have a love for a broad range of things.</li> </ul> </div> <br><br> <div class="row"> <a href="https://ie.linkedin.com/in/ronanconnolly/" target="_blank"> <div class="col-xs-7"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-linkedin-square"></i>&emsp;LinkedIn</h3></div> <div class="panel-body"> All work, education, certificates and recommendations can be found here. </div> </div> </div> </a> <a href="https://github.com/ronanc" target="_blank"> <div class="col-xs-5"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-github"></i>&emsp;GitHub</h3></div> <div class="panel-body"> All my software projects are up here, I\'m a very active user. <br> <br> If you\'re wondering what skills I have then have a gander through my repositories page. </div> </div> </div> </a> </div> <div class="row"> <a href="https://twitter.com/RonanDConnolly" target="_blank"> <div class="col-xs-5"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-twitter"></i>&emsp;Twitter</h3></div> <div class="panel-body"> If you ever want to know what I\'m up to, then check this out. </div> </div> </div> </a> <a href="https://roncontech.wordpress.com/" target="_blank"> <div class="col-xs-7"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-pencil-square-o"></i>&emsp;Blog</h3></div> <div class="panel-body"> I write the occasional blog post every few months. </div> </div> </div> </a> </div> <div class="row"> <a href="http://instagram.com/ronnyconn" target="_blank"> <div class="col-xs-7"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-instagram"></i>&emsp;Instagram</h3></div> <div class="panel-body"> I spam my account with photos a few times a year. </div> </div> </div> </a> <a href="https://www.flickr.com/photos/128928518@N02/albums" target="_blank"> <div class="col-xs-5"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-flickr"></i>&emsp;Flickr</h3></div> <div class="panel-body"> Events and trips abroad in full quality. </div> </div> </div> </a> </div> <div class="row"> <a href="http://pastebin.com/u/jaxter91#" target="_blank"> <div class="col-xs-5"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-trash"></i>&emsp;PasteBin</h3></div> <div class="panel-body"> Code snippets, when github is just a bit too much. </div> </div> </div> </a> <a href="http://stackoverflow.com/users/2052295/ronanc" target="_blank"> <div class="col-xs-7"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-stack-overflow"></i>&emsp;StackOverflow</h3></div> <div class="panel-body"> I\'m more of a viewer then an active participant but I do have a few questions asked. </div> </div> </div> </a> </div> <br> <a href="mailto:hi@ronanconnolly.ie" target="_blank"> <button type="button" class="btn btn-default btn-lg col-xs-12"> <span aria-hidden="true"></span> Email Me <!--class="glyphicon glyphicon-email"--> </button> </a> <br> <br> <br> <br> </div>'),a.put("views/portfolio.html",'<!-- \nTo Add:\n- Python Anagram Solver (flask)\n- AI Game (path finding, fuzzy logic, game dynamics)\n --> <div class="med-card" id="portfolio"> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">GMIT Catering App</h3><small>April 2016</small></div> <div class="panel-body"> <ul> <li>Ionic</li> <li>JavaScript</li> <li>AngularJS</li> <li>Design</li> <li>iOS</li> <li>Android</li> <li>Push Notification</li> </ul> <br> <br> <p> For my final year project me and a fellow class mate created a food ordering system for our college ( <a href="http://www.gmit.ie" target="_blank">GMIT</a>). </p> <p> I had to learn many new languages and frameworks including Javascript, Angular and Ionic; as well as brush up on my HTML/CSS skills. </p> <p>I created the front end Ionic application. It\'s published on the <a href="https://play.google.com/store/apps/details?id=ie.gmit.gmitcatering2015&hl=en" target="_blank">Android</a> and <a href="https://itunes.apple.com/ie/app/gmit-catering/id1054850061?mt=8" target="_blank">iOS</a> store</p> <p> My colleague created the backend in PHP with ZendFramework 2. </p> <img src="images/portfolio/gmit-catering-ss.33f0ef20.jpeg" class="img-responsive center-block" alt="GMIT Catering Screen Shot" width="250em"> <br> <a href="https://play.google.com/store/apps/details?id=ie.gmit.gmitcatering2015&hl=en" target="_blank">Android</a> <br> <a href="https://itunes.apple.com/ie/app/gmit-catering/id1054850061?mt=8" target="_blank">iOS</a> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">GMIT Hackathon</h3> <small>November 2013, 2014, 2015</small></div> <div class="panel-body"> <!-- <small>Leadership, Communication, Organisation, Marketing, Promotion</small> --> <ul> <li>Leadership</li> <li>Communication</li> <li>Organisation</li> <li>Marketing</li> <li>Promotion</li> </ul> <br> <br> <p> I organised a hackathon for our college (<a href="http://gmithackathon.xyz/" target="_blank">GMIT Hackathon</a>) three years in a row. <br> I secured sponsorship from Microsoft, HP, Papa Johns, GMIT, Innovation Hubs and Bank of Ireland. </p> <p> Collaborated with numorous people including volunteers, web designers, company officials, lecturers, facilities staff and employees in the IT sector. </p> <img src="images/portfolio/gmit-hackathon.03058122.jpg" class="img-responsive center-block" alt="GMIT Catering Screen Shot" width="250em"> <br> <a target="_blank" href="http://www.gmit.ie/gmit-student-hackathon">College Press release</a> <br> <a target="_blank" href="https://flic.kr/s/aHsk6pP1oJ">Photo Gallery</a> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Allsop App</h3> <small>February 2016</small></div> <div class="panel-body"> <ul> <li>Ionic</li> <li>PouchDB</li> <li>CouchDB</li> <li>Cloudant</li> <li>ExpressJS</li> <li>NodeJS</li> <li>AngularJS</li> <li>Bootstrap</li> <li>User Auth</li> <li>Push</li> </ul> <br> <br> <p> A push notification enabled mobile application which displays information about the company and displays a real time list of up coming auctions. <br> A backend web app that allows employees to send push notifications and add/remove auctionss. </p> <p> I created the front end with Ionic and published the app on the android and ios stores. <br> I created the backend with Angular, Yeoman, PouchDB/CouchDB and Heroku. </p> <p> I collaborated with two others on this project. </p> <br> <h3>Mobile App:</h3> <img src="images/portfolio/allsop.a96b1987.jpg" class="img-responsive center-block" alt="Allsop App Screen Shot" width="250em"> <br> <h3>Web App:</h3> <img src="images/portfolio/allsop_admin_portal.da77000d.png" class="img-responsive center-block" alt="Allsop App Screen Shot" width="550em"> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Gesture Controlled Robot</h3> <small>April 2016</small></div> <div class="panel-body"> <ul> <li>C</li> <li>Arduino</li> <li>Johnny-Five</li> <li>Electronics</li> <li>Myo-Armband</li> </ul> <br> <br> <p> I created an Arduino robot with the Johnny-Five JS framework that is controlled via the Myo armband via gestures. </p> <br> <p> Below I am testing out the motors with a Zoetrope project. </p> <!--<div class="embed-responsive embed-responsive-16by9 col-xs-12 text-center">--> <div class="embed-responsive embed-responsive-16by9 col-xs-12 text-center"> <iframe width="560" height="315" src="https://www.youtube.com/embed/EMrSyQx4wYo" frameborder="0" allowfullscreen></iframe> </div> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Personal Website</h3> <small>February 2016</small></div> <div class="panel-body"> <ul> <li>ExpressJS</li> <li>AngularJS</li> <li>NodeJS</li> <li>Yeoman</li> <li>Grunt</li> <li>Bootstrap</li> <li>Heroku</li> </ul> <br> <br> <p> "This" very website you are on right now! <br> I created this website as an aggrator for all my projects and other websites. <br> Deployed to Heroku. <br> </p> <!-- <img src="images/portfolio/dodgy-spike-ss.19e922e5.jpg" class="img-responsive center-block" alt="Dodgy Spike Screen Shot" width="250em"> --> <br> <a target="_blank" href="https://github.com/RonanC/personal-website">Source Code</a>. </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Prison Escape</h3> <small>December 2015</small></div> <div class="panel-body"> <ul> <li>Unity</li> <li>C#</li> <li>Digital Art</li> <li>Heroku</li> </ul> <br> <br> <p> A Unity 2D Game that I created in C#. <br> I created all the image assets myself. <br> </p> <img src="https://github.com/RonanC/PrisonEscapeUnity/raw/master/Misc/Menu.png" class="img-responsive center-block" alt="Prison Escape Screen Shot" width="450em"> <br> <a target="_blank" href="https://prisonescapehost.herokuapp.com/">Web App</a> <br> <a target="_blank" href="https://github.com/RonanC/PrisonEscapeUnity">Source Code</a> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Customer Insights</h3> <small>December 2015</small></div> <div class="panel-body"> <ul> <li>MongoDB</li> <li>ExpressJS</li> <li>AngularJS</li> <li>NodeJS</li> <li>Data Analysis</li> <li>Heroku</li> <li>Digital Ocean</li> </ul> <br> <br> <p> Myself and a fellow classmate went up to the AIB headquarters in Dublin for the <a target="_blank" href="https://www.aibdatahack.com/">AIB DataHack</a> competition, where we were to either create a mobile/web app or analyse big data. <br> We decided to do both. <br> </p> <img src="https://camo.githubusercontent.com/678723d872b383876a61ef9e3d14fae13136e231/68747470733a2f2f7777772e6969666c772e636f6d2f66696c65732f6173736574732f7072656c6f67696e2f696e7369676874616e616c797369732f696d616765732f4e657773616e64496e7369676874735f6865616465725f62616e6e65722e6a706567" class="img-responsive center-block" alt="Old Analysis Image" width="450em"> <br> <a target="_blank" href="http://customer-insights.herokuapp.com/">Web App</a> <br> <a target="_blank" href="https://github.com/RonanC/customer-insights">Source Code (Front End)</a> <br> <a target="_blank" href="https://github.com/JohnMalmsteen/aib-datathon">Source Code (Back End)</a> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Encryption Program</h3> <small>December 2015</small></div> <div class="panel-body"> <ul> <li>Java</li> <li>RMI</li> <li>Tomcat</li> <li>Cryptography</li> <li>Bootstrap</li> </ul> <br> <br> <p> A Java Tomcat Web Server that connects via RMI to an encryption program that encrypts and decrypts data using the Vigenère Cipher. <br> I created all aspects of this project. I used bootstrap for styling. <br> Deployed to Digital Ocean. <br> </p> <img src="https://github.com/RonanC/RMIEncryption/raw/master/misc-resources/cipher-header.jpg" class="img-responsive center-block" alt="Encryption Image" width="450em"> <br> <!-- <a target="_blank" href="http://46.101.85.159:8080/CipherWebApp/index.jsp">Web App</a> --> <a target="_blank" href="https://github.com/RonanC/RMIEncryption">Source Code (Java Encryption Program)</a> <br> <a target="_blank" href="https://github.com/RonanC/RmiCipherWebApp">Source Code (Web Server/App)</a> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Dodgy Spike</h3> <small>April 2015</small></div> <div class="panel-body"> <ul> <li>Unity</li> <li>C#</li> <li>Digital Art</li> <li>Android</li> </ul> <br> <br> <p> A Unity 2D Game that I created in C# and published to the <a target="_blank" href="https://play.google.com/store/apps/details?id=com.Roncon.DodgySpike&hl=en">Android</a> and <a target="_blank" href="https://www.microsoft.com/en-us/store/apps/dodgy-spike/9nblgggzllwk">Windows Phone</a> store. <br> </p> <img src="images/portfolio/dodgy-spike-ss.19e922e5.jpg" class="img-responsive center-block" alt="Dodgy Spike Screen Shot" width="250em"> <br> <a target="_blank" href="https://github.com/RonanC/PrisonEscapeUnity">Source Code</a> </div> </div> </div> </div> </div>'),a.put("views/projects.html",'<div class="project"> <div class="panel panel-default"> <a href="http://www.webdevstarterpack.xyz/" target="_blank"> <div class="panel-heading"> <h3 class="panel-title">&emsp;Web Dev Starter Pack</h3> </div> </a> <div class="panel-body"> <p> I created this website as a place to unify my web development learning experience. </p> <p> Listed are my recommendations for various languages, books, frameworks, tips, magazines and people. </p> <img src="images/projects/webdevst.00c2602d.jpg" class="img-responsive center-block" alt="Web Dev Starter Pack Image" width="350em"> </div> </div> </div>'),a.put("views/tweets.html",'<div id="twitter"> <a class="twitter-timeline" href="https://twitter.com/RonanDConnolly" data-widget-id="704019751241125893">Tweets by @RonanDConnolly</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script> </div>'),a.put("views/webdev.html",'<!-- Load custom Bootstrap template --><!--     <link rel="stylesheet" href="https://bootswatch.com/readable/bootstrap.min.css"> --> <div class="project"> <div class="jumbotron specialjum"> <h1>Web Dev Starter Pack</h1> <br> <p>Web development, it\'s all about that JavaScript. <br> <br> Once learned you can go onto frameworks like the ones involved with the MEAN stack. <br> Then you learn some tools like Git and how to use services like Heroku. <br> At this stage you check out reading material and find frameworks that help you do what you need to do. <br> <br> There is always something new and cool waiting around the corner. <br> <br> <small style="color:grey">For complete beginners, just check out the items with stars beside them.</small></p> <br> <!-- bootstrap columns --> <div class="row"> <div class="col-md-3 display"> <h4>Favourite Code:</h4> <ul> <li>Web Dev</li> <li>Java</li> <li>Python</li> <li>C</li> </ul> </div> <div class="col-md-6"> <img src="images/projects/webdevst.00c2602d.jpg" class="img-rounded img-responsive" alt="Designer Work Desk"> </div> <div class="col-md-3"> <h4>Favourite Areas:</h4> <ul> <li>IoT</li> <li>AI</li> <li>Apps</li> <li>Cloud</li> </ul> </div> </div> <br> <br> <h2>Resources</h2> <h3>Tutorial sites:</h3> <p><a href="https://scotch.io">Scotch.io</a><small> nice short tutorials</small><img src="images/webdev/starO.d64810af.png" alt="star"></p> <p><a href="https://www.codeschool.com/">Code School</a><small> expensive but top quality video courses</small> <img src="images/webdev/starO.d64810af.png" alt="star"></p> <p><a href="https://www.codecademy.com/learn">Code Academy</a><small> free interactive courses</small></p> <p><a href="https://www.thenewboston.com/">The New Boston</a><small> video cast tutorials, the guy is very funny</small></p> <br> <h3>Articles</h3> <p><a href="https://www.smashingmagazine.com">Smashing Magazine</a><small> consistent quality material</small> <img src="images/webdev/starO.d64810af.png" alt="star"></p> <p><a href="http://thenextweb.com/">The Next Web</a><small> international technology news, business & culture</small> <br> <br> <h3>People</h3> </p><p><a href="http://chriscoyier.net/">Chris Coyier</a><small> huge influence in web dev design</small></p> <p><a href="http://www.paulirish.com/">Paul Irish</a><small> big influence in web dev code (part of the chrome team)</small></p> <p><a href="http://johnpapa.net/">John Papa</a><small> microsoft evangelist who has contributed to the angular/javascript and VSCode projects</small></p> <br> <h3>Books</h3> <p><a href="http://eloquentjavascript.net/" target="_blank">Eloquent JavaScript</a><small> the best place to learn JS</small> <img src="images/webdev/starO.d64810af.png" alt="star"></p> <p><a href="https://www.manning.com/books/getting-mean-with-mongo-express-angular-and-node" target="_blank">Getting Mean</a><small> covers all aspects of the MEAN stack</small></p> <br> <h3>Editors</h3> <p>Editors are usually either on the Text Editor or the IDE side of the spectrum. <br> Text editors are super fast, keyboard centric and work alongside the commandline well.</p> <p>IDE\'s are cumbersome, more language specific and rely on wizards. However they have great auto-completion, debugging and refactoring.</p> <br> <p>Both Text Editors and IDEs are great, you need to decide which you prefer, usually you will switch between both depending. </p> <br> <p><a href="https://code.visualstudio.com/">Visual Studio Code</a> <small style="color:grey">new</small> <img src="images/webdev/starO.d64810af.png" alt="star"></p> <p>This editor is in between a text editor and an IDE; it is more close to a text editor. <br> This is due to the fact that it incorporates debugging, auto-completion and refactoring.</p> <br> <p><a href="http://www.sublimetext.com/">Sublime</a></p> <p>Sublime Text is a sophisticated text editor for code, markup and prose. <br> You\'ll love the slick user interface, extraordinary features and amazing performance.</p> <br> <p><a href="https://www.jetbrains.com/webstorm/">WebStorm</a></p> <p>Fully fledged IDE with debugging and auto-completion.</p> <br> <p><a href="https://atom.io/">Atom</a> <small style="color:grey">new</small></p> <p>Github created this lovely editor. <br>Make sure to install packages within it to get the best experience.</p> <br> <p><a href="http://brackets.io/">Brackets</a> <small style="color:grey">new</small></p> <p>Brackets is a lightweight, yet powerful, modern text editor.</p> <br> <br> <h3>Other</h3> <p><a href="http://getbootstrap.com/">Bootstrap</a><small> easy css styling and responsiveness</small></p> <p><a href="https://bootswatch.com/">Bootstrap Themes</a><small> right click on download button & copy link</small></p> <p><a href="http://ionicframework.com/">Ionic</a><small> cross platform mobile apps</small><img src="images/webdev/starO.d64810af.png" alt="star"></p> <p><a href="http://electron.atom.io/">Electron</a><small> cross platform desktop apps</small></p> <p><a href="http://stackoverflow.com/">Stack Overflow</a><small> Q&A forum</small></p> <p><a href="http://www.w3schools.com/">W3 Schools</a><small> code snippets and tutorials for everything web dev</small></p> <p><a href="https://education.github.com/pack">Github Student Pack</a><small> a bunch of free services</small> <img src="images/webdev/starO.d64810af.png" alt="star"></p> <p><a href="https://www.namecheap.com/">Namecheap</a><small> inexpensive, quick and easy domain registration</small> <img src="images/webdev/starO.d64810af.png" alt="star"></p> <br> <br> <h2>Information</h2> <h3><a href="https://git-scm.com/">Git</a></h3> <p>Git is a program you install. It allows you to save checkpoints as you code. <br> This allows you to view the progress of a project and also \'roll\' back to previous points in time in case errors occur <br> You can also \'push\' your code up to a server like \'<a href="https://github.com">Github</a>\' for safe keeping and so that others in the team can contribute. <br> Alternatively you can push to a web server service like Heroku which will automatically deploy you application. <br> <br> When you install git on windows it installs \'git-bash\', which is a mini bash shell for windows. <br> Make sure to use this git-bash shell for all your web dev activities.</p> <br> <h3><a href="https://dashboard.heroku.com/">Heroku</a></h3> <p>Is a cloud Platform-as-a-Service (PaaS) that uses git to deploy web apps. <br> It auto detects what kind of project you are pushing(uploading) to it.</p> <br> <h3><a href="http://www.linuxmint.com/">Linux Mint</a></h3> <p>The best version of Linux in my opinion (for a beginner) is Linux Mint Cinnamon. <br> It was founded in Galway, it is based on Ubuntu (Ubuntu is based on Debian). <br> The whole french Government use it.</p> <br> <h3>Linux Advantages over Windows</h3> <p> <ul> <li>Linux uses a Bash shell</li> <li>Git is pre-installed</li> <li>You can install Node via \'sudo apt-get install nodejs\' rather then from an online installed</li> <li>Most web dev tools are designed for unix based systems (Linux, OSX) first, so it works better</li> </ul> </p> <br> <br> <h2><a href="http://mean.io/#!/">MEAN Stack</a></h2> <p> A full stack of web development technologies that allows for one language, JavaScript, to be used throughout. </p> <br> <h3><a href="https://www.mongodb.org/">MongoDB</a></h3> <p> JSON Database. <br> Mongoose can be used if you need schemas. </p> <br> <h3><a href="http://expressjs.com/">Express</a></h3> <p> Web development framework. <br> Helps set up simple tasks quickly. <br> Rest APIs are really easy to create. </p> <br> <h3><a href="https://angularjs.org/">AngularJS</a></h3> <p>A front end MVC style web app. <br> It\'s now the first choice for front end JavaScript web apps. <br> Before frameworks like angular were around JQuery was the main choice. <br> Google are the main backers of this project, but for Angular Version 2 Microsoft is joining in.</p> <br> <h3><a href="https://nodejs.org/en/">Node</a></h3> <p>A web development platform. <br> It\'s super fast, built on the Google V8 Engine (built for Chrome). <br> <br> <a href="https://www.npmjs.com/">NPM</a> (Node Package Manager) comes with Node. With NPM you can install Node packages from the command line with ease. <br> For example this will install express in the current folder (for the current project):</p> <pre>> npm install express</pre> <br> <br> <h2>Cool Stuff</h2> <h3><a href="http://johnny-five.io/">Johnny Five</a></h3> <p>A JavaScript wrapper for hardware like Arduino.</p> <br> <br> <a href="https://github.com/RonanC#disqus_thread" class="btn btn-primary btn-lg">My Github <i class="icon ion-social-github"></i></a> </div> <!--         <div class="tweet">\n            <a href="https://twitter.com/share" class="twitter-share-button" {count} data-url="http://www.webdevstarterpack.xyz/" data-text="Web Dev Starter Pack:"\n            data-via="RonanDConnolly" data-size="large" data-hashtags="webdev">Tweet</a>\n            <script>\n                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');\n            </script>\n\n\n            <a href="https://twitter.com/RonanDConnolly" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @RonanDConnolly</a>\n            <script>\n'+"                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');\n            </script>\n        </div> --> <br> <br> <br> <br> <!-- Discus comments  --> <div id=\"disqus_thread\"></div> <script>/**\n          * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.\n          * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables\n          */\n          /*\n          var disqus_config = function () {\n          this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable\n          this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\n        };\n        */\n        (function() { // DON'T EDIT BELOW THIS LINE\n        var d = document, s = d.createElement('script');\n\n        s.src = '//webdevstarterpack.disqus.com/embed.js';\n\n        s.setAttribute('data-timestamp', +new Date());\n        (d.head || d.body).appendChild(s);\n      })();</script> <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\" rel=\"nofollow\">comments powered by Disqus.</a></noscript> </div> <!-- end of discus --> <script id=\"dsq-count-scr\" src=\"//webdevstarterpack.disqus.com/count.js\" async></script> <!-- live reload --> <!-- <script>\n    document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] +\n    ':35729/livereload.js?snipver=1\"></' + 'script>')\n  </script> -->")}]);