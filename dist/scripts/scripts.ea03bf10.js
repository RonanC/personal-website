"use strict";angular.module("personalWebsiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/tweets",{templateUrl:"views/tweets.html",controller:"TweetsCtrl",controllerAs:"tweets"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/portfolio",{templateUrl:"views/portfolio.html",controller:"PortfolioCtrl",controllerAs:"portfolio"}).otherwise({redirectTo:"/"})}]),angular.module("personalWebsiteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("TweetsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").controller("PortfolioCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("personalWebsiteApp").run(["$templateCache",function(a){a.put("views/about.html","<p>About me</p>"),a.put("views/contact.html",'<div class="jumbotron"> </div>'),a.put("views/main.html",'<div class="jumbotron" id="header"> <h1>Ronan Connolly</h1> <p class="lead"> <img src="images/me_round.6dc4c2ae.png" alt="I\'m Ronan" id="profile_image" class="img-circle"> <br> <br> Software Developer | Web Designer | Polymath </p> <!--<p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p>--> </div> <div class="jumbotron"> <p>Hello! I\'m Ronan. <br> I created this website as an aggregator for my many online profiles, presences and personalities.</p> <br> <p>I\'m currently studying/working in the West of Ireland (Galway).</p> </div> <div class="panel panel-default"> <div class="panel-heading">A brief synopsis </div> <ul class="list-group"> <li class="list-group-item">I grew up in Leitrim/Sligo.</li> <li class="list-group-item">I moved to Galway.</li> <li class="list-group-item">I cycle a lot, for fun and function.</li> <li class="list-group-item">I really like mexican and Italian food, burritos are my kryptonite.</li> <li class="list-group-item">I studied business for two years.</li> <li class="list-group-item">I worked for a year as an assistant manager.</li> <li class="list-group-item">I am currently in my fourth/final year studying software development in GMIT.</li> <li class="list-group-item">I am starting work in IBM as an Angular/Node/Java developer in June.</li> <li class="list-group-item">I always take on too many projects.</li> <li class="list-group-item">I tweet a lot, more for myself then others.</li> <li class="list-group-item">I have a love for a broad range of things.</li> </ul> </div> <div class="row"> <a href="https://ie.linkedin.com/in/ronanconnolly/" target="_blank"> <div class="col-xs-7"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-linkedin-square"></i>&emsp;LinkedIn</h3></div> <div class="panel-body"> All work, education, certificates and recommendations can be found here. </div> </div> </div> </a> <a href="https://github.com/ronanc" target="_blank"> <div class="col-xs-5"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-github"></i>&emsp;GitHub</h3></div> <div class="panel-body"> All my software projects are up here, I\'m a very active user.\' </div> </div> </div> </a> </div> <div class="row"> <a href="https://twitter.com/RonanDConnolly" target="_blank"> <div class="col-xs-5"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-twitter"></i>&emsp;Twitter</h3></div> <div class="panel-body"> If you ever want to know what I\'m up to, then check this out. </div> </div> </div> </a> <a href="https://roncontech.wordpress.com/" target="_blank"> <div class="col-xs-7"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-pencil-square-o"></i>&emsp;Blog</h3></div> <div class="panel-body"> I write the occasional blog post every few months. </div> </div> </div> </a> </div> <div class="row"> <a href="http://instagram.com/ronnyconn" target="_blank"> <div class="col-xs-7"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-instagram"></i>&emsp;Instagram</h3></div> <div class="panel-body"> I spam my account with photos a few times a year. </div> </div> </div> </a> <a href="https://www.flickr.com/photos/128928518@N02/albums" target="_blank"> <div class="col-xs-5"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-flickr"></i>&emsp;Flickr</h3></div> <div class="panel-body"> Events and trips abroad in full quality. </div> </div> </div> </a> </div> <div class="row"> <a href="http://pastebin.com/u/jaxter91#" target="_blank"> <div class="col-xs-5"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-trash"></i>&emsp;PasteBin</h3></div> <div class="panel-body"> Code snippets, when github is just a bit too much. </div> </div> </div> </a> <a href="http://stackoverflow.com/users/2052295/ronanc" target="_blank"> <div class="col-xs-7"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"><i class="fa fa-stack-overflow"></i>&emsp;StackOverflow</h3></div> <div class="panel-body"> I hope to become a more active user over time. </div> </div> </div> </a> </div> <a href="mailto:hi@ronanconnolly.ie" target="_blank"> <button type="button" class="btn btn-default btn-lg col-xs-12"> <span aria-hidden="true"></span> Email Me <!--class="glyphicon glyphicon-email"--> </button> </a> <br> <br> <br>'),a.put("views/portfolio.html",'<div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">&emsp;GMIT Catering App</h3></div> <div class="panel-body"> <p> For my final year project me and a fellow class mate created a food ordering system for our college ( <a href="http://www.gmit.ie" target="_blank">GMIT</a>). </p> <p> I had to learn many new languages and frameworks including Javascript, Angular and Ionic; as well as brush up on my HTML/CSS skills. </p> <p>I created the front end Ionic application. It\'s published on the <a href="https://play.google.com/store/apps/details?id=ie.gmit.gmitcatering2015&hl=en" target="_blank">Android</a> and <a href="https://itunes.apple.com/ie/app/gmit-catering/id1054850061?mt=8" target="_blank">iOS</a> store</p> <p> My colleague created the backend in PHP with ZendFramework 2. </p> <img src="images/portfolio/gmit-catering-ss.33f0ef20.jpeg" class="img-responsive center-block" alt="GMIT Catering Screen Shot" width="250em"> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">&emsp;GMIT Hackathon</h3></div> <div class="panel-body"> <p> I organised a hackathon for our college (<a href="http://gmithackathon.xyz/" target="_blank">GMIT Hackathon</a>) three years in a row. <br> I secured sponsorship from Microsoft, HP, Papa Johns, GMIT, Innovation Hubs and Bank of Ireland. </p> <p> Collaborated with numorous people including volunteers, web designers, company officials, lecturers, facilities staff and employees in the IT sector. </p> <p> <a href="http://www.gmit.ie/gmit-student-hackathon">College Press release.</a> </p> <img src="images/portfolio/gmit-hackathon.03058122.jpg" class="img-responsive center-block" alt="GMIT Catering Screen Shot" width="250em"> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">&emsp;Allsop App</h3></div> <div class="panel-body"> <p> A push notification enabled mobile application which displays information about the company and displays a real time list of up coming auctions. <br> A backend web app that allows employees to send push notifications and add/remove auctionss. </p> <p> I created the front end with Ionic and published the app on the android and ios stores. <br> I created the backend with Angular, Yeoman, PouchDB/CouchDB and Heroku. </p> <img src="images/portfolio/allsop.a96b1987.jpg" class="img-responsive center-block" alt="Allsop App Screen Shot" width="250em"> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">&emsp;Gesture Controlled Robot</h3></div> <div class="panel-body"> <p> I created an Arduino robot with the Johnny-Five JS framework that is controlled via the Myo armband via gestures. </p> <br> <p> Below I am testing out the motors with a Zoetrope project. </p> <!--<div class="embed-responsive embed-responsive-16by9 col-xs-12 text-center">--> <div class="embed-responsive embed-responsive-16by9 text-center"> <iframe width="560" height="315" src="https://www.youtube.com/embed/EMrSyQx4wYo" frameborder="0" allowfullscreen></iframe> </div> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">&emsp;Dodgy Spike</h3></div> <div class="panel-body"> <p> A Unity 2D Game that I created in C# and published to the <a href="https://play.google.com/store/apps/details?id=com.Roncon.DodgySpike&hl=en" target="_blank">Android</a> and <a href="https://www.microsoft.com/en-us/store/apps/dodgy-spike/9nblgggzllwk" target="_blank">Windows Phone</a> store. <br> </p> <img src="images/portfolio/dodgy-spike-ss.19e922e5.jpg" class="img-responsive center-block" alt="Dodgy Spike Screen Shot" width="250em"> </div> </div> </div> </div>'),a.put("views/tweets.html",'<div id="twitter"> <a class="twitter-timeline" href="https://twitter.com/RonanDConnolly" data-widget-id="704019751241125893">Tweets by @RonanDConnolly</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script> </div>')}]);