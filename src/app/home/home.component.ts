import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.stopLoading();
  }

  Python = 'Python';
  Javascript = 'Javascript';
  visible_skype: boolean = false;
  visible_email: boolean = false;
  visible_phone: boolean = false;

  skype_id_show(): void {
    this.visible_skype = false;
  }
  email_id_show(): void {
    this.visible_skype = false;
  }
  phone_id_show(): void {
    this.visible_skype = false;
  }

  cpnyprojects = [
    {
      name: 'Terralogic Inc',
      projects: [
        {
          title: 'SmartHire',
          url: 'https://smarthire.terralogic.com/',
          description:
            'SmartHire is used for recruiting fresher candidates, this helps to\
            conduct online MCQs based tests and coding challenges, this was developed for company internal use.',
          moredesc: [
            'Smart hire is a hiring assessment tool to identify the best candidates and to make the hiring \
            decisions faster, easier and bias-free',
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
          description:
            'Warrior Framework is an open source automation framework \
            designed to enable anyone to automate their testing, processes, and repetitive tasks by simplifying\
            the complex process of building an automation infrastructure.',
          moredesc: [
            'Warrior Framework is an open source automation framework designed to enable anyone to automate their \
            testing, processes, and repetitive tasks by simplifying the complex process of building an automation infrastructure',
            'As a keyword and data driven framework, Warrior’s infrastructure is built to maximize on re-usability of built in keywords',
            'In addition, Warrior’s app based platform provides the users with native apps to easily implement their automation needs, \
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
          description:
            'Katana is Warrior Framework’s web based case creation and execution tool.\
            From Katana, users can create cases, suites, projects, input data files and\
            testdata files. Katana also allows user to execute cases, suites, and projects from the execution app.',
          moredesc: [
            'Katana is Warrior Framework’s web based case creation and execution tool',
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

    // {
    //   name: 'Fujitsu India (Client)',
    //   projects: [
    //     {
    //       title: 'SmartHire',
    //       description:
    //         'SmartHire is used for recruiting fresher candidates, this helps to\
    //         conduct online aptitide tests and coding challenges, this was developed for company internal use only.',
    //     },
    //     {
    //       title: 'Katana Framework',
    //       description:
    //         'Katana is Warrior Framework’s web based case creation and execution tool.\
    //         From Katana, users can create cases, suites, projects, input data files and\
    //         testdata files. Katana also allows you to execute cases, suites, and projects from the execution app.',
    //     },
    //     {
    //       title: 'Warrior Framework',
    //       description:
    //         'Warrior Framework is an open source automation framework \
    //         designed to enable anyone to automate their testing, processes, and repetitive tasks by simplifying\
    //         the complex process of building an automation infrastructure.',
    //     },
    //   ],
    // },
  ];
  perslprojects = [
    {
      name: '',
      projects: [
        // { title: 'CRM', description: 'CRM desc' },
        {
          title: 'Task Tracker',
          url: '',
          description:
            'This app helps to keep track of all the tasks which have been done\
            or undergoing in a project, it provides an option to download the tasks report as a pdf file and also one can\
            directly send the tasks report via mail.',
          moredesc: [],
          rrs: [],
        },
        // {
        //   title: 'Knowledge Tree',
        //   url: '',
        //   description:
        //     'This is a tutorial website, where one can learn about web technologies and frameworks.',
        //   moredesc: [],
        //   rrs: [],
        // },
        {
          title: 'Techynotes',
          url: '',
          description:
            'Techynotes is a web based app which Helps to create and save notes on github.',
          moredesc: [],
          rrs: [],
        },
      ],
    },
  ];

  loading = 'true';

  stopLoading = () => {
    setTimeout(() => {
      this.loading = 'false';
    }, 3000);
  };

  //   MoreDetails = (ctgry, projtitle) => {
  //     console.log("catogary, project_name: ",ctgry, projtitle)
  // };
}
