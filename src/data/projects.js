const projects = [
  {
    className: "click",
    summary:
      "The City Atlas is a project exploring spatial patterns across metropolitan areas",
    description:
      "The City Atlas is a project exploring spatial patterns across metropolitan areas. It is designed to illustrate our cities’ current and future employment and service accessibility. You can look at how easy it is to get to jobs by public transport; the effect of automation on job availability; the concentration of jobs, including knowledge jobs; and how well serviced you are, if you live in different parts of the city.",
    links: {
      website: "http://cityatlas.com.au/"
    },
    slug: "cityatlas",
    title: "City Atlas",
    cover: require("./cityatlas.gif"),
    theme: {
      background: "#00a5d1"
      // light: true // Invert text color.
    }
  },
  {
    className: "kindyNow",
    summary:
      "Geospatial Land Use & Planning tool based on machine learning models",
    description:
      "As part of Land Use and Infrastructure Plan (LUIP) Digital Model, Open Space Modelling and Social Infrastructure Modelling aims to verify whether the municipality’s existing and proposed open space access and social infrastructure can meet the current and forthcoming demand created by population growth out to 2036. Through comprehensive internal research and engagement, a baseline of public, community and private sector facilities data was injected into the model.",
    links: {
      website: "http://vimeo.com/320035818"
    },
    slug: "landuse",
    title: "City Analytics",
    cover: require("./cityanalytics.png"),
    theme: {
      background: "#F7F7F7",
      light: true // Invert text color.
    }
  },
  {
    className: "click",
    summary:
      "UNLOCK YOUR ECONOMY: Track event impact, economic growth, online, visitor and escape expenditure",
    description:
      "Spendmapp is an online application that allows users to view expenditure activity in and from their region. It does this by taking bank transaction (EFTPOS) data and applying a proprietary data transformation to capture virtually all economic activity within a region.",
    links: {
      website: "http://spendmapp.com.au/"
    },
    slug: "spendmapp",
    title: "Spendmapp",
    cover: require("./spendmapp.png"),
    theme: {
      background: "#bdf1ff",
      light: true // Invert text color.
    }
  },
  {
    className: "kindyNow",
    summary: "Cloud Based Geospatial Database as a Service",
    description:
      "SpacialDB, is a backend (think database) for Web and Mobile apps with a strong emphasis on Geospatial functionality. We provide developers with an easy to use API to quickly import, query and update their data without needing to worry about the backend management, maintenance and scaling. The service makes it really easy for developers to build advanced Geospatial applications directly via their iPhone, Android or WP7 SDKs. SpacialDB also integrates with existing cloud hosting services such as Heroku, Engine Yard, Joyent and Rackspace for Web apps. In 2015 it was acquired by QGISCloud",
    links: {
      website: "https://qgiscloud.com/"
    },
    slug: "spacialdb",
    title: "SpacialDB",
    cover: require("./spacialdb.jpg"),
    theme: {
      background: "#f4f5fa",
      light: true // Invert text color.
    }
  },
  {
    className: "click",
    summary:
      "Public access a range of information on different population groups sourced from the national Census of Population and Housing",
    description:
      "The Office of Multicultural Interests developed this website so that Members of Parliament, State Government agencies, local governments, non-government organisations (NGOs), community groups, students and other members of the public, would be able to access a range of information on different population groups sourced from the national Census of Population and Housing. Information is available for key demographic, cultural and socioeconomic characteristics of people living across the State. It profiles these characteristics for all Western Australian electoral divisions and local government areas.",
    links: {
      // website: "http://vimeo.com/320035818"
      website: "https://geografia.com.au/dlgsc/"
    },
    slug: "dlgsc",
    title: "DLGSC Cultural Atlas of Western Australia",
    cover: require("./dlgsc.png"),
    theme: {
      background: "#a77e60"
      // light: true // Invert text color.
    }
  },
  {
    className: "kindyNow",
    summary: "Deep Learning Hardware & Software Stack",
    description:
      "Applied research in deep learning requires the fastest possible experiment turnaround times to rapidly explore multiple network architectures and manipulate and curate datasets to reduce solution delivery times for internal and external customers. The Deep Learning Box is a system that is designed and built for this specific task. Our goal is to build the fastest machine learning training device that you can plug and play for all your deep learning workloads.",
    links: {
      website: "http://deeplearningbox.com/"
    },
    slug: "dlb",
    title: "Deep Learning Box",
    cover: require("./dlb.png"),
    theme: {
      background: "#f4f5fa",
      light: true // Invert text color.
    }
  }
];

export default projects;
