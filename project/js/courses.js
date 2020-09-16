var app = angular.module("courseApp", []);
app.controller("courseCtrl", function($scope) {

        $scope.courseList = [
            {
                "code": "CSCB58",
                "name": "Computer Organization",
                "semester": "Winter 2020",
                "link": "https://utsc.calendar.utoronto.ca/course/cscb58h3",
                "notesLink": "/documents/CSCB58Notes.pdf",
                "notesName": "CSCB58Notes",
                "description": "Logic Gates, Sequential Circuits, Finite State Machines, ALU, Storage, Control Unit, Assembly Code"
            },
            {
                "code": "CSCB63",
                "name": "Design and Analysis of Data Structures",
                "semester": "Winter 2020",
                "link": "https://utsc.calendar.utoronto.ca/course/cscb63h3",
                "notesLink": "/documents/CSCB63Notes.pdf",
                "notesName": "CSCB63Notes",
                "description": "Worse Case Complexity, Balanced Trees, Priority Queues, Graphs, Amortized Analysis"
            },
            {
                "code": "MATA22",
                "name": "Linear Algebra I",
                "semester": "Winter 2019",
                "link": "https://utsc.calendar.utoronto.ca/course/mata22h3",
                "notesLink": "/documents/MATA22Notes.pdf",
                "notesName": "MATA22Notes",
                "description": "Vectors, Matrices, Linear Transformation, Determinants, Algebra of Complex Numbers"
            },
            {
                "code": "MATB24",
                "name": "Linear Algebra II",
                "semester": "Fall 2019",
                "link": "https://utsc.calendar.utoronto.ca/course/matb24h3",
                "notesLink": "/documents/MATB24Notes.pdf",
                "notesName": "MATB24Notes",
                "description": "Vector Spaces, Orthogonality, Change of Basis, Complex Scalars"
            },
            {
                "code": "MATB41",
                "name": "Techniques of the Calculus of Several Variables I",
                "semester": "Fall 2019",
                "link": "https://utsc.calendar.utoronto.ca/course/matb41h3",
                "notesLink": "/documents/MATB41Notes.pdf",
                "notesName": "MATB41Notes",
                "description": "Planes, Curves, Limits, Partial Derivatives, Higher Order Derivatives, Extrema of Real Valued Functions, Double Integrals, Triple Integrals"
            },
            {
                "code": "MATB44",
                "name": "Differential Equations I",
                "semester": "Fall 2019",
                "link": "https://utsc.calendar.utoronto.ca/course/matb44h3",
                "notesLink": "/documents/MATB44Notes.pdf",
                "notesName": "MATB44Notes",
                "description": "First and Second Order Ordinary Differential Equations, Solving Linear ODEs, Inhomogeneous Systems, Difference Equations"
            },
            {
                "code": "MATB61",
                "name": "Linear Programming and Optimization",
                "semester": "Winter 2020",
                "link": "https://utsc.calendar.utoronto.ca/course/matb61h3",
                "notesLink": "/documents/MATB61Notes.pdf",
                "notesName": "MATB61Notes",
                "description": "Linear Programming, Simplex Method, Duality, Integer Programming, Transportation Problem, Assignment Problem"
            },
            {
                "code": "STAB52",
                "name": "An Introduction to Probability",
                "semester": "Summer 2020",
                "link": "https://utsc.calendar.utoronto.ca/course/stab52h3",
                "notesLink": "/documents/STAB52Notes.pdf",
                "notesName": "STAB52Notes",
                "description": "Probability Models, Random Variables and Distributions, Expectation, 1D and 2D Change of Variables, Variance, Covariance, Correlation, Generating Functions, Sampling Distribution"
            },
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

            $(".notesPreview").click(function() {
                var noteName = $(this).attr("id").slice(1);
                $("#" + noteName).animate({
                    height: "toggle",
                },"slow");
                $(this).html(($(this).html() == "Preview")? "Close" : "Preview");
            });

        });
});
