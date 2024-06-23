type Job = {
  slug: string;
  company: string;
  jobTitle: string;
  description: string;
  startDate: string;
  endDate?: string;
  techStack: string[]
}

type Education = {
  institution: string;
  title: string;
  slug: string;
  startDate: string;
  endDate?: string;
  description: string;

}

export const jobsData: Job[] = [
  {
    slug: 'datanet-consultores',
    company: 'Datanet Consultores',
    description:
      ` <p>
            Front-end developer in projects built with AngularJS, Angular2+ and
            VueJS. In the backend we used .NET to consume existing Microsoft
            Dynamics apps
          </p>
          <p>
            Among other projects, I created a Mailchimp-like app, a visual
            editor for creating responsive email templates and the intranet for
            cedro.org
          </p>`,
    jobTitle: "Junior Web Developer",
    startDate: "06/2017",
    endDate: "2/2018",
    techStack: ["AngularJS", "Angular4", "Bootstrap", ".NET", "JQuery"],
  },
  {
    company: 'Integratur',
    slug: 'integratur',
    description: `<p>
            I conducted several accessibility reports to help pointing out major
            flags in websites and build multiple prototypes to show the end
            client that a compliant website with the WCAG 2.0 would look and
            feel the same or even better than their current website.
          </p>
          <p>
            For this purpose, I used Vue.js, making both Single Page
            Applications and Multi Page Applications (with SEO in mind) and we
            tested out multiple approaches on accessible components and user
            interfaces.
          </p>`,
    jobTitle: 'Web Accessibility Consultant',
    startDate: '02/2017',
    endDate: '08/2019',
    techStack: ["VueJS", "WordPress"]
  },
  {
    company: 'Conwork',
    slug: 'conwork',
    description: `
         <p>
            I developed medium-sized e-commerces using modern front-end tools
            like Vue.js and TailwindCSS. I focused on delivering
            high-performance websites, with beautiful, handmade UIs and
            SEO-friendly.
          </p>
          <p>
            As for pure backend projects, I created several APIs with Lumen
            (PHP) and Deno, and tested them with Postman and Insomnia.
          </p>
          <p>
            I was also the lead developer in charge of modernizing the company's
            tech stack and teaching my workmates how to use and customize tools
            like Webpack, PostCSS, Parcel.js and GitHub Actions for continuous
            delivery purposes.
          </p>`,
    jobTitle: 'Full-stack developer',
    startDate: '10/2018',
    endDate: '02/2021',
    techStack: ["VueJS", "PHP", "Tailwind", "Deno", "GitHub Actions"]
  },
  {
    company: 'devaway_',
    slug: 'devaway',
    description: `
          <p>
            We worked on fast-paced startups from San Francisco to Brisbane to
            help them develop their MVP and get VC funds.
          </p>
          <p>
            I was able to work on different code bases and learn new
            technologies from my coworkers.
          </p>`,
    jobTitle: 'Frontend developer',
    startDate: '02/2021',
    endDate: '02/2022',
    techStack: ["React", "NextJS", "Tailwind", "React Testing Library", "Cypress", "Material UI"]
  },
  {
    company: 'Job&Talent',
    slug: 'jobandtalent',
    description: `
           <p>
            One of my main responsabilities is enabling the company's growth
            through the development of useful internal tools and webapps.
          </p>
          <p>
            I also contribute to the entire frontend ecosystem by developing and
            maintaining an in-house design system library for React and
            different tooling for a micro-frontend architecture.
          </p>`,
    jobTitle: 'Frontend developer',
    startDate: '02/2022',
    endDate: 'today',
    techStack: ["React", "NextJS", "Tailwind", "Storybook", "Playwright", "Microfrontend architecture", "AWS"]
  },


]

export const educationData: Education[] = [
  {
    title: "Bachelor of Multimedia Engineering",
    description: `
    
      <p>
            In this degree we learn everything you need to know to become a
            software engineer.
          </p>
          <p>
            We study various programming languages, build web app projects and
            videogames and we are able to develop a real-world project from the
            beginning to its end, learning soft skills along the way, like time
            management and leadership.
          </p>
    `,
    institution: "University of Alicante",
    startDate: "2012",
    endDate: "2016",
    slug: "multimedia-engineering"
  }
]
