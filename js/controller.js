angular.module('resumeController',[]).controller('resumeCtrl',['$scope', function($scope) {
  $scope.education = [
    {
      "course": "B.E. (EEE)",
      "name": "Sri Sairam Institute Of Technology",
      "year": "2015",
      "aggregate": "8.35 CGPA"
    },
    {
      "course": "HSC",
      "name": "S.B.O.A Matriculation & Higher Secondary School, Chennai",
      "year": "2011",
      "aggregate": "92.16%"
    },
    {
      "course": "SSLC",
      "name": "S.B.O.A School & Junior College, Chennai",
      "year": "2009",
      "aggregate": "87.4%"
    }
  ];

  $scope.languages = ["HTML", "CSS", "JavaScript", "SQL"];

  $scope.tools = [
    {
      name:"JavaScript",
      type:["AngularJS","jQuery","Bootstrap","nodeJS"]
    },
    {
      name:"CSS",
      type: ["Bootstrap"]
    },
    {
      name:"Tracking & Ticketing",
      type:["JIRA", "ServiceNow"]
    },
    {
      name:"Others",
      type:["Autosys","Excel"]
    }
  ];

  $scope.experience = [
    {
      title: "System Engineer",
      organisation: "Tata Consultancy Services Ltd.",
      year: "May2015- Present",
      works: [
        "Working as part of production team of a golden data repository application in mainframe and web platform for Morgan Stanley.",
        "Worked on creating and maintaining AngularJS based web application.",
        "Worked in automation of various reports and created documentation.",
        "Provided Training and timely feedbacks to Junior Engineers.",
        "Constant learning about product information."
      ]
    }
  ];

  $scope.honours = [
    "Won an “On the Spot Award” for effective incident management during a production outage.",
    "Was part of team winning the “Star Team Award” for overall performance.",
    "Won 1st place in paper presentation on “Multi Purpose Robot” in DMI College of Engineering.",
    "Won 3rd place in paper presentation on “Multi Purpose Robot” in Sri Andal Azhagar College of Engineering.",
    "Ranked as Cadet in NCC.",
  ];

  $scope.extras = [
    "Won 1st place in Movie Making at Project level competition.",
    "Head of Organizing Team of technical symposium Warros13.",
    "Won 2nd place in Miming at intra-college level."
  ];


}]);
