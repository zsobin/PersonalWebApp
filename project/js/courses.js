var app = angular.module("courseApp", []);
app.controller("courseCtrl", function($scope) {

        $scope.courseList = [
            {
                "code": "CSCB58",
                "courseName": "Computer Organization",
                "semester": "Winter 2020",
                "link": "https://utsc.calendar.utoronto.ca/course/cscb58h3",
                "notesLink": "/documents/CSCB58Notes.pdf",
                "notesName": "CSCB58Notes",
                "description": "Logic Gates, Sequential Circuits, Finite State Machines, ALU, Storage, Control Unit, Assembly Code"
            },
            {
                "code": "CSCB63",
                "courseName": "Design and Analysis of Data Structures",
                "semester": "Winter 2020",
                "link": "https://utsc.calendar.utoronto.ca/course/cscb63h3",
                "notesLink": "/documents/CSCB63Notes.pdf",
                "notesName": "CSCB63Notes",
                "description": "Worse Case Complexity, Balanced Trees, Priority Queues, Graphs, Amortized Analysis"
            },
            {
                "code": "CSCC73",
                "courseName": "Algorithm Design and Analysis",
                "semester": "Fall 2020",
                "link": "https://utsc.calendar.utoronto.ca/course/cscc73h3",
                "notesLink": "/documents/CSCC73Notes.pdf",
                "notesName": "CSCC73Notes",
                "description": "Greedy Algorithm, Divide and Conquer, Dynamic Programming, Max Flow and its Applications, Linear Programming, Approximation Algorithm"
            },
            {
                "code": "MATA22",
                "courseName": "Linear Algebra I",
                "semester": "Winter 2019",
                "link": "https://utsc.calendar.utoronto.ca/course/mata22h3",
                "notesLink": "/documents/MATA22Notes.pdf",
                "notesName": "MATA22Notes",
                "description": "Vectors, Matrices, Linear Transformation, Determinants, Algebra of Complex Numbers"
            },
            {
                "code": "MATB24",
                "courseName": "Linear Algebra II",
                "semester": "Fall 2019",
                "link": "https://utsc.calendar.utoronto.ca/course/matb24h3",
                "notesLink": "/documents/MATB24Notes.pdf",
                "notesName": "MATB24Notes",
                "description": "Vector Spaces, Orthogonality, Change of Basis, Complex Scalars"
            },
            {
                "code": "MATB41",
                "courseName": "Techniques of the Calculus of Several Variables I",
                "semester": "Fall 2019",
                "link": "https://utsc.calendar.utoronto.ca/course/matb41h3",
                "notesLink": "/documents/MATB41Notes.pdf",
                "notesName": "MATB41Notes",
                "description": "Planes, Curves, Limits, Partial Derivatives, Higher Order Derivatives, Extrema of Real Valued Functions, Double Integrals, Triple Integrals"
            },
            {
                "code": "MATB43",
                "courseName": "Introduction to Analysis",
                "semester": "Winter 2021",
                "link": "https://utsc.calendar.utoronto.ca/course/matb43h3",
                "notesLink": "/documents/MATB43Notes.pdf",
                "notesName": "MATB43Notes",
                "description": "Real Sequences, Real Series, Open and Closed Sets, Limits, Continuity, Derivatives, Sequence of Functions, Series of Functions"
            },
            {
                "code": "MATB44",
                "courseName": "Differential Equations I",
                "semester": "Fall 2019",
                "link": "https://utsc.calendar.utoronto.ca/course/matb44h3",
                "notesLink": "/documents/MATB44Notes.pdf",
                "notesName": "MATB44Notes",
                "description": "First and Second Order Ordinary Differential Equations, Solving Linear ODEs, Inhomogeneous Systems, Difference Equations"
            },
            {
                "code": "MATB61",
                "courseName": "Linear Programming and Optimization",
                "semester": "Winter 2020",
                "link": "https://utsc.calendar.utoronto.ca/course/matb61h3",
                "notesLink": "/documents/MATB61Notes.pdf",
                "notesName": "MATB61Notes",
                "description": "Linear Programming, Simplex Method, Duality, Integer Programming, Transportation Problem, Assignment Problem"
            },
            {
                "code": "MATC01",
                "courseName": "Groups and Symmetry",
                "semester": "Fall 2020",
                "link": "https://utsc.calendar.utoronto.ca/course/matc01h3",
                "notesLink": "/documents/MATC01Notes.pdf",
                "notesName": "MATC01Notes",
                "description": "Groups, Subgroups, Cyclic Groups, Permutation Groups, Homomorphisms, Cosets, Lagrange's Theorem, Normal Subgroups, Quotient Groups"
            },
            {
                "code": "STAB52",
                "courseName": "An Introduction to Probability",
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
            $(".notesPreview").on("click",function() {
                var noteName = $(this).attr("id").slice(1);
                console.log(noteName)
                $("#" + noteName).animate({
                    height: "toggle",
                },"slow");
                $(this).html(($(this).html() == "Preview")? "Close" : "Preview");
            });
            
        });

});
