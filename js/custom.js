
(function ($) {

  "use strict";

  // AOS ANIMATIONS
  AOS.init();

  // NAVBAR
  $('.navbar-nav .nav-link').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 66
        }, 10);
      }
    }
  });

})(window.jQuery);

var projects = {
  ' 2022': [
    {
      'title': 'RVM cold',
      'sub-title': 'A logistic solution',
      'description': ['A logistic solution that handles the collection, storage and transport of items from multiple sources to multiple destinations giving access and real-time information to multiple types of users with multiple types of permissions.'],
      'tag': ['Python', 'Javascript', 'Django', 'React-js'],
      'link': 'https://rvmcold.com/',
    },
    {
      'title': 'Bizmandala v2: [work in progress]',
      'sub-title': 'Web app that provides Mandala ERP as a subscription model ERP.',
      'description': ['Changes from v1: Migrated from the Request-Response model to Event Driven Architecture using Rabbitmq as message broker and Redis as celery backend',
        'Converted from using docker to using events to trigger new ERP instance creation.'],
      'tag': ['Event Driven', 'Python', 'System-design', 'Service based architecture', 'Django', 'React-js'],
      'link': 'https://bizmandala.com/',
    },
    {
      'title': 'Booksmandala Repository v2',
      'sub-title': 'A book repository.',
      'description': ['App acts as a collection and point of data for multiple ERPs that need to connect and provide data to https://booksmandala.com/.', 'Migrated from the Request-Response model to Event Driven Architecture using Rabbitmq as message broker and Redis as celery backend.'],
      'tag': ['Python', 'Javascript', 'Django', 'React-js'],
      'link': '',
    }, {
      'title': 'Mandala ERP v2',
      'sub-title': 'A feature rich web solution.',
      'description': ['Changes from v1: Migrated from the Request-Response model to Event Driven Architecture using Rabbitmq as message broker and Redis as celery backend', 'Added custom celery consumers to consume events from Rabbitmq queues.', 'Converted into a stateless application.', 'Old isolation was achieved between different ERPs instances. The old approach was to use docker and deploy a new container if a new ERP is needed. The whole process was automated and controlled by Bizmandala and was a subscription model.', 'Now isolation is achieved within the database using isolated schema. A single database keeps every ERP\'s data. Each ERP\'s data is in a separate schema within the single database. Schema is selected during the request process instead of when the app starts. The sub-domain is mapped to a particular schema.'],
      'tag': ['system design', 'Python', 'Javascript', 'Django', 'multi-tenancy', 'database', 'schema-based'],
      'link': 'https://stgpokhara.bizmandala.com/',
    }, {
      'title': 'Lineage-name-checker',
      'sub-title': 'Automation for name check.',
      'description': ['A automation script to check if a name is available or not at https://linageenameregistrar.com/'],
      'tag': ['Python', 'automation'],
      'link': 'https://linageenameregistrar.com/',
    }, {
      'title': 'GweiStation',
      'sub-title': 'Ethereum utility app.',
      'description': [
        "Gas price free of Ethereum",
        "Has Mainnet Block Explorer",
        "Has an account spy feature (push notification is sent every time the saved address makes a transfer)",
        "Also has a discord bot for gas price updates and push notifications",

      ],
      'tag': ['mobile-app', 'Python', 'Django', 'Flutter'],
      'link': 'https://gweistation.io/',
    }, {
      'title': 'Book-Image-Selector',
      'sub-title': 'Automation script',
      'description': [
        "automation solution for updating book images on https://booksmandala.com/", "Clicked image is used to replace the image of the current book"
      ],
      'tag': ['Python', 'selenium', 'automation'],
      'link': '',
    }, {
      'title': 'IRD sync service',
      'sub-title': 'Proxy for ERP to connect to IRD server',
      'description': [
        "A simple relay application coded using express js.",
        "is used to relay billing information from multiple ERPs to Inland Revenue Department servers"
      ],
      'tag': ['node-js', 'express-js', 'micro-service'],
      'link': '',
    },
    {
      'title': 'Book verification Script',
      'sub-title': 'Automation script that uses google search.',
      'description': [
        "Automation solution to verify book details and images using google search.",
        "Is used to update any mistakes in book details and images and is used to process 60,000 books from https://booksmandala.com/"
      ],
      'tag': ['Python', 'selenium', 'automation'],
      'link': '',
    }, {
      'title': 'Vedalaya',
      'sub-title': 'Portfolio website with E-com and CMS.',
      'description': ['A company portfolio website with e-commerce and custom content management ability.'],
      'tag': ['Python', 'Javascript', 'Django', 'React-js'],
      'link': 'https://www.vedalayagroup.com/',
    }, {
      'title': 'Degenhouse server',
      'sub-title': 'Utility backend for blockchain betting ',
      'description': ['A simple REST server for persistent data storage and off-chain calculation.'],
      'tag': ['Python', 'blockchain'],
      'link': '',
    }
  ],
  ' 2021': [
    {
      'title': 'AutoDeploy',
      'sub-title': 'An in-house tool created to automate the deployment process of new web applications to an EC2 server',
      'description': ["An in-house tool created to automate the deployment process of new web applications to an EC2 server.",
        "The main idea is to automatically clone projects from GitHub and create the required Nginx file, uwsgi file and service file to run the app.",
        "This only handles the initial part, for CI/CD I used GitHub action to trigger a git pull script in the server. ",
      ],
      'tag': ['Python', 'Django', 'automation', 'CI/CD'],
      'link': '',
    },

    {
      'title': 'Image-Compression',
      'sub-title': 'Automation tool to compress images using multiple algorithms.',
      'description': ["automation tool to compress images using multiple algorithms. ",
        "effectively compressed files by 80% without any obvious loss in quality.",
      ],
      'tag': ['Python', 'automation', 'crunch', 'pillow'],
      'link': 'https://github.com/lurayy/Image-Compression',
    },
    {
      'title': 'Bizmandala v1',
      'sub-title': 'Provides ERP v1 in the SaaS model.',
      'description': [
        "Uses docker containers to achieve complete isolation of data for every user's instance of ERP",
        "deploys kills and removes ERP container based on the user's subscription",
        'Has payment subscription model'
      ],
      'tag': ['Python', 'Django', 'automation', 'DevOps'],
      'link': 'https://bizmandala.com/',
    }, {
      'title': 'Bizmandala v1',
      'sub-title': 'Provides ERP v1 in the SaaS model.',
      'description': [
        "Uses docker containers to achieve complete isolation of data for every user's instance of ERP",
        "deploys kills and removes ERP container based on the user's subscription",
        'Has payment subscription model'
      ],
      'tag': ['Python', 'Django', 'automation', 'DevOps'],
      'link': 'https://bizmandala.com/',
    }, {
      'title': 'Easyhome',
      'sub-title': 'A home automation solution that merges multiple third-party smart home applications with an architectural ability to add more services s in the future.',
      'description': [
        "uses a custom light version of Django striped down of middleware as the backend framework",
        "uses micro-service architecture and gRPC to communicate with other services ", "Core Component in the app architecture",
      ],
      'tag': ['Python', 'Django', 'micro-service architecture', 'docker', 'docker swarm'],
      'link': '',
    },

    {
      'title': 'WebScrapper using selenium',
      'sub-title': 'scrapper using selenium instead of using requests and beautiful soup.',
      'description': [''],
      'tag': ['Python', 'automation', 'selenium'],
      'link': 'https://github.com/lurayy/web_scrapper_aava',
    },
    {
      'title': 'Booksmandala Repository',
      'sub-title': 'Repo for books',
      'description': ["acts as a collection and point of data for multiple ERPs that need to connect and provide data to https://booksmandala.com/",
        "processes and handles invoices and relays them to the proper ERP."],
      'tag': ['Python', 'Django', 'system-design'],
      'link': '',
    }
  ],
  ' 2020': [{
    'title': 'Reading App',
    'sub-title': 'A mobile app for reading, buying and publishing ebooks',
    'description': [
      "A mobile app for reading, buying and publishing ebooks. ",
      "the pdfs are broken into pieces and transferred after being encrypted. ",
      "decrypts the pieces in saved RAM rather than on disk preventing unwanted access.",
    ],
    'tag': ['Python', 'Django', 'mobile app'],
    'link': '',
  },
  {
    'title': 'Ecwid App For Discount And Offer Management',
    'sub-title': 'A discount management web application that uses webhooks to discount information to an integrated site',
    'description': ["A discount management web application that uses webhooks to discount information to an integrated site.",
      "discount can be based on item, bill amount, coupon, general discount or location.",
      "Currently used in: https://produitsducap.com/ ",
    ],
    'tag': ['Python', 'Django'],
    'link': '',
  },
  {
    'title': 'Mandala Inventory [Deprecitated]',
    'sub-title': 'ERP',
    'description': ["An enterprise resource planning web application that includes inventory management, point of sales, staff management, ability to handle payment, gift cards as well as simple accounting and more."
    ],
    'tag': ['Python', 'Django'],
    'link': 'https://github.com/lurayy/simple_inventory',
  }],

  ' 2019': [
    {
      'title': 'AI Agent To Play Games',
      'sub-title': "Paper: https://github.com/lurayy/AI_playing_flappy_bird/blob/master/Documentation.pdf",
      'description': ["An AI model that can learn to play games using its own experience.",
        "achieved using Q learning a type of reinforcement learning algorithm",
        "Uses a clone of the flappy bird as an environment to train and demonstrate the agent's capability. ",
        "Paper: https://github.com/lurayy/AI_playing_flappy_bird/blob/master/Documentation.pdf"
      ],
      'tag': ['Python', 'automation', 'numpy', 'tensorflow', 'pygames'],
      'link': 'https://github.com/lurayy/AI_playing_flappy_bird/',
    }, {
      'title': 'Restaurant POS',
      'sub-title': 'A Point of Sale system for restaurants including an online menu for ordering, live updates to the kitchen and waiters using web sockets, inventory management, reception view and an online integrated payment system.',
      'description': ['A Point of Sale system for restaurants including an online menu for ordering, live updates to the kitchen and waiters using web sockets, inventory management, reception view and an online integrated payment system.'],
      'tag': ['Python', 'Django', 'html/css', 'js'],
      'link': 'https://github.com/lurayy/restaurant_module',
    }, {
      'title': 'Abettor ',
      'sub-title': 'College project for Software Engineering, 6th semester, BSc. CSIT',
      'description': ["College information management system",
        "Feature Includes ",
        "a. College message board",
        "b. Staff and Student management ",
        "c. Library management ",
        "d. Exam Result generation",
        "e. Online bill payment capabilities using Khalti",
        "f. Login using QR.",
      ],
      'tag': ['Python', 'Django', 'html/css', 'javascript'],
      'link': 'https://github.com/lurayy/Abettor',
    }, {
      'title': 'Auto-watch server for watching league videos',
      'sub-title': 'Automation script',
      'description': ['An automation script using python and pygubu for GUI. The script acts like a bot that watches the VOD of League of Legends games and collects rewards. It uses requests lib to create a session and uses a proxy to login into the website using multiple accounts at the same time.      '],
      'tag': ['Python', 'automation'],
      'link': '',
    },
  ]
}


function popup(year, index) {
  data = projects[year][index]
  var content = document.createElement('div')
  content.className = 'swal-div main-div main-div2'
  h2 = document.createElement('h2')
  h2.textContent = data['title']
  content.append(h2)
  ul = document.createElement('ul')
  ul.style = 'color: yellow; text-align:justify;'
  content.append(ul)
  data['description'].forEach(element => {
    li = document.createElement('li')
    p = document.createElement('span')
    p.textContent = element
    li.append(p)
    ul.append(li)
  });
  var tags = ''
  data['tag'].forEach(ele => {
    tags = tags + ele + ', '
  })

  p = document.createElement('p')
  p.textContent = 'tags: ' + tags
  content.append(p)

  p = document.createElement('p')
  p.textContent = `Link: ${data['link']}`
  content.append(p)

  swal({
    button: true,
    danger: true,
    content: content
  })
}


function populate_projects() {
  project_container = document.getElementById('projects-container')
  for (const [key, value] of Object.entries(projects)) {
    var title = document.createElement('h4')
    title.textContent = 'On ' + key + ': ' + value.length
    project_container.append(title)

    var main = document.createElement('ul')
    main.className = 'cards'
    project_container.append(main)

    value.forEach((ele, index) => {

      li_card = document.createElement('li')
      li_card.className = 'card'
      li_card.setAttribute("onclick", `popup("${key}", ${index})`)
      main.append(li_card)
      h3 = document.createElement('h3')
      h3.className = 'card-title'
      h3.textContent = ele['title']
      li_card.append(h3)

      sub_title = document.createElement('p')
      sub_title.className = 'sub-title'
      sub_title.textContent = ele['sub-title']
      li_card.append(sub_title)
      inner_div = document.createElement('div')
      inner_div.className = 'card-content'
      li_card.append(inner_div)

      sub_title = document.createElement('p')
      sub_title.className = 'sub-title'
      sub_title.textContent = ele['tag'].join(', ')
      inner_div.append(sub_title)

    })

  }
}

function redirect(url) {
  window.open(url, '_blank');
}


populate_projects()