(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ko/Downloads/myportfolio/myportfolio_angular/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profiledetails/profiledetails.component */ "ddbd");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projects/projects.component */ "zUkc");








function HomeComponent_ng_template_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " manjunathkankatteko@gmail.com ");
} }
function HomeComponent_ng_template_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " +91 8197326715 ");
} }
class HomeComponent {
    constructor() {
        this.Python = 'Python';
        this.Javascript = 'Javascript';
        this.visible_skype = false;
        this.visible_email = false;
        this.visible_phone = false;
        this.cpnyprojects = [
            {
                name: 'Terralogic Inc',
                projects: [
                    {
                        title: 'SmartHire',
                        url: 'https://smarthire.terralogic.com/',
                        description: 'SmartHire is used for recruiting fresher candidates, this helps to\
            conduct online MCQs based tests and coding challenges, this was developed for company internal use.',
                        moredesc: [
                            'Smart hire is a hiring assessment tool to identify the best candidates and to make the hiring \
            decisions faster, easier and bias-free',
                            'This is a internal tool used by Terralogic software solutions for recruiting purpose',
                            'Using this tool we can create exams which can be MCQs based or Coding challenges',
                            'At the end we can easily filter the candidates based on their performance',
                            'The technologies used in this project are Django, ReactJS and MySQL',
                        ],
                        rrs: [
                            'Involved in the development of REST APIs using Django',
                            'Involved in the development of UI components using ReactJS',
                            'Deployed the project on Nutanix server using Apache web server and WSGI',
                        ],
                    },
                    {
                        title: 'Warrior Framework',
                        url: 'https://github.com/warriorframework',
                        description: 'Warrior Framework is an open source automation framework \
            designed to enable anyone to automate their testing, processes, and repetitive tasks by simplifying\
            the complex process of building an automation infrastructure.',
                        moredesc: [
                            'Warrior Framework is an open source automation framework designed to enable anyone to automate their \
            testing, processes, and repetitive tasks by simplifying the complex process of building an automation infrastructure',
                            'As a keyword and data driven framework, Warrior???s infrastructure is built to maximize on re-usability of built in keywords',
                            'In addition, Warrior???s app based platform provides the users with native apps to easily implement their automation needs, \
            while providing the user with the ability to customize their own workflow apps',
                        ],
                        rrs: [
                            'Involved in the framework requirement gathering and in proposing solutions',
                            'Involved in designing and implementation of REST APIs and services',
                            'Integration of user-facing elements developed by front-end developers with server-side logic',
                            'Developing/Enhancing the code based on the client requirements',
                            'Developed generic keywords supporting multiple test environments like CLI, REST & SNMP',
                            'Created a user-friendly PIP package for Warrior framework and deployed in PyPI server',
                            'Experience with container-based deployments using Docker, working with Docker images, Docker Hub to built and deliver custom images for users',
                        ],
                    },
                    {
                        title: 'Katana Framework',
                        url: 'https://github.com/warriorframework',
                        description: 'Katana is Warrior Framework???s web based case creation and execution tool.\
            From Katana, users can create cases, suites, projects, input data files and\
            testdata files. Katana also allows user to execute cases, suites, and projects from the execution app.',
                        moredesc: [
                            'Katana is Warrior Framework???s web based case creation and execution tool',
                            'Katana is a Django based project',
                            'From Katana, users can create cases, suites, projects, input data files and testdata files',
                            ' Cases, suites, projects, input data files and testdata files in Katana are web based forms \
            that once saved, create the appropriate xml files',
                            'Katana also allows to execute cases, suites, and projects from the execution app',
                        ],
                        rrs: [
                            'Involved in adding Keycloak authentication to Katana Framework',
                            'Involved in the development of ReactJS and Angular based micro applications for clients',
                            'Involved in bug fixing and feature enhancements',
                            'Added DRF token authentication',
                            'Developed the custom middlewares',
                        ],
                    },
                ],
            },
        ];
        this.perslprojects = [
            {
                name: '',
                projects: [
                    // { title: 'CRM', description: 'CRM desc' },
                    {
                        title: 'Techynotes',
                        url: '',
                        description: 'Techynotes is a web based app which helps to create and save notes/documentations on github.',
                        moredesc: [
                            'Techynotes is a web based app which helps to create and maintain notes or documentations',
                            'This application is built using Django framework',
                            'The idea behind this project is to enable anyone to create notes or documentations and \
            to save those on github',
                            'It has a option to search for other user(s) notes, and this way one can easily take a look \
            at other\'s notes/documentations',
                            'I am still working on some other features to make this app \
             more useful',
                            'I am personally using this app to create my technical notes and documenations \
            and to save those on github',
                            'This is available as a pip package, so one can install(pip install techynotes) \
            and integrate this application in their own project, (PIP package link: https://pypi.org/project/techynotes/)',
                            'There is also a docker image of the same, where one can pull the image and run this application\
            on their system, (Docker image link: https://hub.docker.com/r/manjunathko/techynotes)'
                        ],
                        rrs: [
                            'Since it\'s a personal project I alone built it from scratch',
                            'And I am spending my free time in developing new features'
                        ],
                    },
                ],
            },
        ];
        this.loading = 'true';
        this.stopLoading = () => {
            setTimeout(() => {
                this.loading = 'false';
            }, 3000);
        };
    }
    ngOnInit() {
        this.stopLoading();
    }
    skype_id_show() {
        this.visible_skype = false;
    }
    email_id_show() {
        this.visible_skype = false;
    }
    phone_id_show() {
        this.visible_skype = false;
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 215, vars: 9, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "container-fluid"], [1, "row", "font", 2, "background-color", "#191923"], [1, "col-md-3", 2, "height", "100%", "width", "100%"], [1, "avatarblock"], [1, "card"], [2, "padding", "5px"], ["nzIcon", "user", "nzSrc", "./assets/images/myavatar1.jpg", 3, "nzSize"], [2, "color", "#fff", "font-size", "18px"], [2, "color", "#858587", "font-size", "18px", "font-weight", "400", "letter-spacing", ".25px"], [1, "card", "scrolleffect", 2, "background-color", "#20202a", "color", "#fff", "overflow-y", "scroll"], [1, "flexrowevn"], [1, "flexcol", "xsmfnt"], [1, "dimcolor"], [1, "flexrowctr"], [1, "icon"], ["nzColor", "#1e4360"], ["src", "./assets/images/python.png", "alt", "python", "title", "python", "height", "20px", "width", "20px"], ["nzColor", "#3c382b"], ["src", "./assets/images/javascript.png", "alt", "javascript", "title", "javascript", "height", "20px", "width", "20px"], ["src", "./assets/images/atom.png", "alt", "Reactjs", "title", "Reactjs", "height", "20px", "width", "20px"], ["nzColor", "#6e2a30"], ["src", "./assets/images/angular.png", "alt", "Angular", "title", "Angular", "height", "20px", "width", "20px"], ["nzColor", "#2d6589"], ["src", "./assets/images/django.png", "alt", "Django", "title", "Django", "height", "20px", "width", "20px"], ["nzColor", "#47653d"], ["src", "./assets/images/node.jpg", "alt", "Nodejs", "title", "Nodejs", "height", "20px", "width", "20px"], [1, "flexrowctr", 2, "margin-top", "5px"], ["src", "./assets/images/javascript.png", "alt", "Express", "title", "Express", "height", "20px", "width", "20px"], ["src", "./assets/images/mysql.png", "alt", "Django", "title", "Django", "height", "20px", "width", "20px"], ["src", "./assets/images/mongo.png", "alt", "Django", "title", "Django", "height", "20px", "width", "20px"], ["src", "./assets/images/postgres.png", "alt", "Django", "title", "Django", "height", "20px", "width", "20px"], ["nzColor", "rgba(52, 52, 136, 0.77)"], ["src", "./assets/images/github.png", "alt", "Git", "title", "Git", "height", "20px", "width", "20px"], ["src", "./assets/images/github.png", "alt", "Git Hub", "title", "Git Hub", "height", "20px", "width", "20px"], ["nzColor", "rgb(45, 101, 137)"], ["src", "./assets/images/bitbucket.png", "alt", "Bitbucket", "title", "Bitbucket", "height", "20px", "width", "20px"], ["src", "./assets/images/docker.png", "alt", "Docker", "title", "Docker", "height", "20px", "width", "20px"], ["nzColor", "rgba(230, 95, 42, 0.48)"], ["src", "./assets/images/gitlab.png", "alt", "Git Lab", "title", "Git Lab", "height", "20px", "width", "20px"], ["nzColor", "rgb(87, 87, 89)"], ["src", "./assets/images/nginx.png", "alt", "Nginx", "title", "Nginx", "height", "20px", "width", "20px"], ["src", "./assets/images/apache.png", "alt", "Apache", "title", "Apache", "height", "20px", "width", "20px"], ["src", "./assets/images/uwsgi.png", "alt", "uWSGI", "title", "uWSGI", "height", "20px", "width", "20px"], ["nzColor", "rgb(71, 101, 61)"], ["src", "./assets/images/aws.jpeg", "alt", "AWS", "title", "AWS", "height", "20px", "width", "20px"], ["nzColor", "#793018"], ["src", "./assets/images/html.png", "alt", "HTML", "title", "HTML", "height", "20px", "width", "20px"], ["src", "./assets/images/css.jpg", "alt", "javascript", "title", "javascript", "height", "20px", "width", "20px"], ["nzColor", "#153b5a"], ["src", "./assets/images/jquery.png", "alt", "javascript", "title", "javascript", "height", "20px", "width", "20px"], ["nzColor", "#301d54"], ["src", "./assets/images/bootstrap.png", "alt", "javascript", "title", "javascript", "height", "20px", "width", "20px"], ["src", "./assets/images/ajax.jpg", "alt", "javascript", "title", "javascript", "height", "20px", "width", "20px"], ["nz-menu", "", "nzMode", "horizontal", 1, "btm-nav-bar"], ["nz-menu-item", ""], ["href", "https://github.com/kom3", "target", "_blank", 2, "color", "#fff", "text-decoration", "none"], ["href", "https://www.linkedin.com/in/manjunath-ko-b4181115a/", "target", "_blank", 2, "color", "#fff", "text-decoration", "none"], ["nzType", "primary", "nz-popover", "", "nzPopoverTitle", "", "nzPopoverTrigger", "click", 2, "color", "#fff", "text-decoration", "none", 3, "nzPopoverVisible", "nzPopoverContent", "nzPopoverVisibleChange"], ["emailTemplate", ""], ["phoneTemplate", ""], [1, "col-md-9"], [1, "rightblock", 2, "width", "100%"], ["projectCategory", "Company projects", 3, "loading", "projects"], ["projectCategory", "Personal projetcs", 3, "loading", "projects"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "nz-avatar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Manjunath KO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Full stack developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Residence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Bengaluru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Programming languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "nz-tag", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "\u00A0Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "nz-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\u00A0Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Front end web frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "nz-tag", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\u00A0Reactjs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "nz-tag", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\u00A0Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Back end web frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "nz-tag", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "\u00A0Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "nz-tag", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "\u00A0Nodejs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "nz-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "nz-tag", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "\u00A0MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "nz-tag", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "\u00A0MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "nz-tag", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "\u00A0Postgres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "nz-tag", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "\u00A0Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "nz-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "\u00A0Git Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "nz-tag", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "\u00A0Bitbucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "nz-tag", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "\u00A0Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "nz-tag", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "\u00A0Git Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "nz-tag", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "\u00A0Nginx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "nz-tag", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "\u00A0Apache");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "nz-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "\u00A0uWSGI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "nz-tag", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "\u00A0AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " Front end web technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "nz-tag", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "\u00A0HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "nz-tag", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "\u00A0CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "nz-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "\u00A0JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "nz-tag", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "\u00A0jQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "nz-tag", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "\u00A0Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "nz-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "\u00A0Ant Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "nz-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](189, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "\u00A0Material UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "ul", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzPopoverVisibleChange", function HomeComponent_Template_a_nzPopoverVisibleChange_200_listener($event) { return ctx.visible_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](202, HomeComponent_ng_template_202_Template, 1, 0, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzPopoverVisibleChange", function HomeComponent_Template_a_nzPopoverVisibleChange_205_listener($event) { return ctx.visible_phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, " Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](207, HomeComponent_ng_template_207_Template, 1, 0, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](211, "app-profiledetails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](213, "app-projects", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "app-projects", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](203);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSize", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzPopoverVisible", ctx.visible_email)("nzPopoverContent", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzPopoverVisible", ctx.visible_phone)("nzPopoverContent", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("projects", ctx.cpnyprojects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("loading", ctx.loading)("projects", ctx.perslprojects);
    } }, directives: [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__["NzAvatarComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_2__["NzTagComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__["NzMenuDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["??NzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__["NzMenuItemDirective"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_5__["NzPopoverDirective"], _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_6__["ProfiledetailsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.rightblock[_ngcontent-%COMP%] {\n  background-color: #23232dfa;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: auto;\n}\n\n.avatarblock[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #23232dfa;\n  width: 95%;\n  text-align: center;\n  padding: 5px;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  clear: both;\n  display: block;\n  width: 96%;\n  background-color: #ffff0070;\n  height: 1px;\n}\n\n.flexcol[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n}\n\n.xsmfnt[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.dimcolor[_ngcontent-%COMP%] {\n  color: #848487;\n}\n\n.flexrowctr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.flexrowevn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.icon[_ngcontent-%COMP%] {\n  min-width: 85px;\n}\n\n.scrolleffect[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n\n.scrolleffect[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n  max-height: calc(100vh - 279px);\n}\n\n.carddmns[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 250px;\n}\n\n.projectsflex[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.projecttitle[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  height: 50px;\n  margin: 10px;\n}\n\n.btm-nav-bar[_ngcontent-%COMP%] {\n  background-color: #22222d;\n  color: #fff;\n  border: hidden;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxrQ0FBQTtBQURGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0FBS0Y7O0FBREEsNENBQUE7O0FBQ0E7RUFDRSx3QkFBQTtFQUEwQixnQkFBQTtFQUMxQixxQkFBQTtFQUF1QixZQUFBO0VBQ3ZCLCtCQUFBO0FBTUY7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUpBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFRRjs7QUFMQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBUUYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yaWdodGJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyZGZhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5hdmF0YXJibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyZGZhO1xuICB3aWR0aDogOTUlO1xuICAvLyAgIGhlaWdodDogMjk1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cbmhyIHtcbiAgYm9yZGVyOiAwO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5NiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA3MDtcbiAgaGVpZ2h0OiAxcHg7XG59XG4uZmxleGNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLnhzbWZudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kaW1jb2xvciB7XG4gIGNvbG9yOiAjODQ4NDg3O1xufVxuLmZsZXhyb3djdHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXhyb3dldm4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5pY29uIHtcbiAgbWluLXdpZHRoOiA4NXB4O1xufVxuLnNjcm9sbGVmZmVjdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xuICAvLyBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjc5cHgpO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbi5zY3JvbGxlZmZlY3Qge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuICBtYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSAyNzlweCk7XG59XG5cbi5jYXJkZG1ucyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5wcm9qZWN0c2ZsZXgge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wcm9qZWN0dGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmJ0bS1uYXYtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'myportfolio';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "WIap":
/*!******************************************************!*\
  !*** ./src/app/viewproject/viewproject.component.ts ***!
  \******************************************************/
/*! exports provided: ViewprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewprojectComponent", function() { return ViewprojectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");






function ViewprojectComponent_ng_container_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const desc_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](desc_r4);
} }
function ViewprojectComponent_ng_container_1_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](role_r5);
} }
function ViewprojectComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u00A0Project Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ViewprojectComponent_ng_container_1_li_6_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\u00A0Roles and Responsibilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ViewprojectComponent_ng_container_1_li_12_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.project_more_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.roles_resps);
} }
function ViewprojectComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ViewprojectComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.handleCancelMiddle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class ViewprojectComponent {
    constructor() {
        this.isVisibleMiddle = false;
        this.project_title = '';
        this.project_more_desc = [];
        this.roles_resps = [];
    }
    ngOnInit() { }
    showModalMiddle(title, moredesc, rrs) {
        this.project_more_desc = moredesc;
        this.project_title = title;
        this.roles_resps = rrs;
        console.log(this.project_title);
        this.isVisibleMiddle = true;
    }
    // handleOkMiddle(): void {
    //   console.log('click ok');
    //   this.isVisibleMiddle = false;
    // }
    handleCancelMiddle() {
        this.isVisibleMiddle = false;
    }
}
ViewprojectComponent.??fac = function ViewprojectComponent_Factory(t) { return new (t || ViewprojectComponent)(); };
ViewprojectComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ViewprojectComponent, selectors: [["app-viewproject"]], decls: 3, vars: 2, consts: [["nzCentered", "", "nzWidth", "75%", "nzMaskClosable", "false", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], [4, "nzModalFooter"], [2, "overflow-y", "scroll", "height", "500px"], [1, "viewpjheaders"], [1, "litems"], ["class", "list_item", 4, "ngFor", "ngForOf"], [1, "list_item"], ["nz-button", "", "nzType", "default", 3, "click"]], template: function ViewprojectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzVisibleChange", function ViewprojectComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.isVisibleMiddle = $event; })("nzOnCancel", function ViewprojectComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.handleCancelMiddle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ViewprojectComponent_ng_container_1_Template, 13, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ViewprojectComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzVisible", ctx.isVisibleMiddle)("nzTitle", ctx.project_title);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalContentDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["??NzTransitionPatchDirective"]], styles: [".viewpjheaders[_ngcontent-%COMP%] {\n  display: flex;\n  color: #fff;\n  min-height: 40px;\n  font-size: 22px;\n  margin: 0 8px 0 0;\n  border: 1px solid #00000029;\n  align-items: center;\n  box-shadow: 2px 1px 4px 1px #645946a8;\n  background-color: #000074a6;\n}\n\n.list_item[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.litems[_ngcontent-%COMP%] {\n  margin: 0 8px 0 0;\n  box-shadow: 1px 1px 3px 1px #645946a8;\n  margin-bottom: 10px;\n  border: 1px solid #d9d9d9;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZpZXdwcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLFdBQUE7RUFHQSxnQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0FBSEY7O0FBV0E7RUFDRSxlQUFBO0FBUkY7O0FBV0E7RUFDRSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBUkYiLCJmaWxlIjoidmlld3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld3BqaGVhZGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLy8gYm9yZGVyLWNvbG9yOiAjM2MxMWQ3NDA7XG4gIC8vICAgd2lkdGg6IDk5JTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgLy8gICBwYWRkaW5nOiA5cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAwIDhweCAwIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAyOTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDFweCA0cHggMXB4ICM2NDU5NDZhODtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA3NGE2O1xuXG59XG5cbi8vIHVse1xuLy8gICBib3gtc2hhZG93OjNweCAycHggN3B4IDBweCAjNjQ1OTQ2YTg7XG4vLyB9XG5cbi5saXN0X2l0ZW0ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5saXRlbXN7XG4gIG1hcmdpbjogMCA4cHggMCAwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggIzY0NTk0NmE4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItdG9wOiBub25lO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/typography */ "eHCX");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _viewproject_viewproject_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewproject/viewproject.component */ "WIap");
/* harmony import */ var _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profiledetails/profiledetails.component */ "ddbd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



// import { IconDefinition } from '@ant-design/icons-angular';
// import { NzIconModule } from 'ng-zorro-antd/icon';









// import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
// registerLocaleData(en);
/** config ng-zorro-antd i18n **/







// import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
// const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineInjector"]({ providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["en_US"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_5__["NzProgressModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__["NzTagModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardModule"],
            ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__["NzTypographyModule"],
            // NzIconModule,
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__["NzMenuModule"],
            ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__["NzPopoverModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
        _viewproject_viewproject_component__WEBPACK_IMPORTED_MODULE_16__["ViewprojectComponent"],
        _profiledetails_profiledetails_component__WEBPACK_IMPORTED_MODULE_17__["ProfiledetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_5__["NzProgressModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__["NzTagModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardModule"],
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_8__["NzTypographyModule"],
        // NzIconModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__["NzMenuModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__["NzPopoverModule"]] }); })();


/***/ }),

/***/ "ddbd":
/*!************************************************************!*\
  !*** ./src/app/profiledetails/profiledetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProfiledetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfiledetailsComponent", function() { return ProfiledetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProfiledetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfiledetailsComponent.??fac = function ProfiledetailsComponent_Factory(t) { return new (t || ProfiledetailsComponent)(); };
ProfiledetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProfiledetailsComponent, selectors: [["app-profiledetails"]], decls: 69, vars: 0, consts: [[1, "profilebkg"], [1, "profiledetailsblk"], [1, "header"], [1, "desc"], [1, "ctheader"]], template: function ProfiledetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Objective:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " I am a full stack web enthusiast having ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "2 years of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " experience in application layers, presentation layers, and databases. Willing to work in an organization that offers challenging opportunities and enriches my technical and managing skills and helps to achieve high carrier growth through a continuous learning process and helps to keep myself dynamic and competitive with the changing scenario of the world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Education:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "B.TECH | 2019 | REVA UNIVERSITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\u00B7 Branch: CSE | Secured: 8.59 CGPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "PUC | 2015 | KALPATARU PU COLLEGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\u00B7 combination: PCMB | Secured: 83%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "SSLC | 2013 | SNEHA HIGH SCHOOL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\u00B7 Secured: 90.88%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Experience:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\u00B7 Working as an Independent consultant for Fujitsu India (Client)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\u00B7 Involved in the development of Rest APIs using Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\u00B7 Involved in the development of fully fledged micro applications using React, and Angular frameworks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\u00B7 Involved in the development of python automation framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "\u00B7 Executed many POCs for clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "\u00B7 Involved in the development of hiring tool which made the recruitment process easier and fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "\u00B7 Also got hands-on deployment tools such as Apache, Nginx, uWSGI, and Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Certifications:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Hacker Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\u00B7 JavaScript Certificate: (Credential ID: 02378214144e)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\u00B7 Python Certificate: (Credential ID: b73078f49101)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "\u00B7 React Certificate: (Credential ID: c1c68fe9e5f2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "\u00B7 Angular Certificate: (Credential ID: 10f610a8bcc6)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Awards:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " \u00B7 Rising Star | Aug 26, 2020 | Terralogic Inc Received this award as a mark of appreciation towards dedication and hard work in the team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".profilebkg[_ngcontent-%COMP%] {\n  color: white;\n  width: 100%;\n  min-height: 300px;\n  background-color: #23232dfa;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.profiledetailsblk[_ngcontent-%COMP%] {\n  min-height: 200px;\n  width: 500px;\n  background-color: #47484847;\n  margin: 5px;\n  padding: 18px;\n  box-shadow: 4px 4px 5px 0px black;\n  border-radius: 18px;\n}\n\n.profiledetailsblk[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: white;\n  border-bottom: 2px solid red;\n}\n\n.desc[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  clear: both;\n  display: block;\n  width: 100%;\n  background-color: #ffff0070;\n  height: 1px;\n}\n\n.ctheader[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGVkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNFO0VBRUUsZUFBQTtBQUNKIiwiZmlsZSI6InByb2ZpbGVkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVia2d7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMmRmYTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnByb2ZpbGVkZXRhaWxzYmxre1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ODQ4NDc7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3gtc2hhZG93OiAgNHB4IDRweCA1cHggMHB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG5cbn1cblxuLnByb2ZpbGVkZXRhaWxzYmxrID4gaDN7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XG59XG4uZGVzY3tcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDcwO1xuICAgIGhlaWdodDogMXB4O1xuICB9XG4gIC5jdGhlYWRlcntcbiAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _viewproject_viewproject_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewproject/viewproject.component */ "WIap");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: "view", component: _viewproject_viewproject_component__WEBPACK_IMPORTED_MODULE_2__["ViewprojectComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _viewproject_viewproject_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewproject/viewproject.component */ "WIap");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");








function ProjectsComponent_div_4_nz_tag_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-tag", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const company_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzColor", "magenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](company_r2.name);
} }
function ProjectsComponent_div_4_div_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProjectsComponent_div_4_div_3_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const project_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6); return _r1.showModalMiddle(project_r6.title, project_r6.moredesc, project_r6.rrs); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "More details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function ProjectsComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "nz-switch", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nz-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-skeleton", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "nz-card-meta", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ProjectsComponent_div_4_div_3_ng_template_5_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, _r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzLoading", ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzAvatar", ctx_r4.avatarTemplate)("nzTitle", project_r6.title)("nzDescription", project_r6.description);
} }
function ProjectsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProjectsComponent_div_4_nz_tag_1_Template, 2, 2, "nz-tag", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProjectsComponent_div_4_div_3_Template, 7, 7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const company_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", company_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", company_r2.projects);
} }
class ProjectsComponent {
    constructor() {
        this._projects = {};
    }
    ngOnInit() { }
    set projects(value) {
        this._projects = value;
    }
}
ProjectsComponent.??fac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], inputs: { projectCategory: "projectCategory", loading: "loading", projects: "projects" }, decls: 7, vars: 2, consts: [["nzColor", "#153b5a", 1, "projecttitle"], [4, "ngFor", "ngForOf"], ["viewpj", ""], ["class", "companynametag", 3, "nzColor", 4, "ngIf"], [1, "projectsflex"], [1, "companynametag", 3, "nzColor"], ["ngModel", "loading"], [2, "width", "300px", "margin-top", "16px", "height", "311px", 3, "nzActions"], ["nzActive", "true", 3, "nzLoading"], [1, "project-title", 2, "height", "200px", 3, "nzAvatar", "nzTitle", "nzDescription"], ["actionEllipsis", ""], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nz-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ProjectsComponent_div_4_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-viewproject", null, 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u00A0", ctx.projectCategory, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx._projects);
    } }, directives: [ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_1__["NzTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _viewproject_viewproject_component__WEBPACK_IMPORTED_MODULE_3__["ViewprojectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardMetaComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["??NzTransitionPatchDirective"]], styles: [".projectsflex[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.projecttitle[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  height: 50px;\n  margin: 10px;\n}\n\n.carddmns[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 250px;\n}\n\n.companynametag[_ngcontent-%COMP%] {\n  height: 30px;\n  min-width: 180px;\n  padding: 5px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdGIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzZmxleCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnByb2plY3R0aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZGRtbnMge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG4uY29tcGFueW5hbWV0YWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map