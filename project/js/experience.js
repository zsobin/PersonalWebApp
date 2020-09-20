
var app = angular.module("experienceApp", []);
app.controller("experienceCtrl", function($scope) {

        $scope.experienceList = [
            {
                "name": "Softchoice App Dev Co-op",
                "date": "May-Aug 2020",
                //"link": "projects/maintenanceNotif",
                "image": "/images/softchoiceLogo.png",
                "description": "I worked as a .NET Developer Co-op at the Application Development Team at Softchoice. I mainly worked on creating data visualizations on the internal employee web portal.",
                "orgLink":"https://www.softchoice.com/"
            },
            {
                "name": "Visions of Science Volunteer Facilitator",
                "date": "Oct 2018-May 2020",
                //"link": "https://github.com/adin65/momeca",
                "image": "/images/visionsOfScienceLogo.jpg",
                "description": "I gave two hours every week back to the community to guide youths in learning STEM concepts through activities and experiments.",
                "orgLink":"https://www.vosnl.org/"
            },
            {
                "name": "Shuo Wen Input System Intern",
                "date": "Jun-Aug 2019",
                //"link": "projects/shoop",
                "image": "/images/shuowenLogo.png",
                "description": "I created videos and graphics to help promote this Chinese Input System.",
                "orgLink":"https://shuowen2.com/v2/"
            }
        ];
        
        $(document).ready(function() {  
            $scope.speak = function() {
                $(".speech").animate({
                    width: "show",
                },"slow");
            }  
            $scope.unspeak = function() {
                $(".speech").animate({
                    width: "hide"
                },"slow");
            }

        });  
});
