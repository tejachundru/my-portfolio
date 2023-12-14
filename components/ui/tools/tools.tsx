import Image from "next/image"

const tools = [
  {
    href: "https://aws.amazon.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    name: "aws",
  },
  {
    href: "https://babeljs.io/",
    src: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
    name: "babel",
  },
  {
    href: "https://getbootstrap.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    name: "bootstrap",
  },
  {
    href: "https://www.chartjs.org",
    src: "https://www.chartjs.org/media/logo-title.svg",
    name: "chartjs",
  },
  {
    href: "https://www.w3schools.com/css/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    name: "css3",
  },
  {
    href: "https://www.cypress.io",
    src: "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
    name: "cypress",
  },
  {
    href: "https://www.docker.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    name: "docker",
  },
  {
    href: "https://expressjs.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    name: "express",
  },
  {
    href: "https://www.figma.com/",
    src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    name: "figma",
  },
  {
    href: "https://www.gatsbyjs.com/",
    src: "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
    name: "gatsby",
  },
  {
    href: "https://git-scm.com/",
    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    name: "git",
  },
  {
    href: "https://grafana.com",
    src: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
    name: "grafana",
  },
  {
    href: "https://graphql.org",
    src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    name: "graphql",
  },
  {
    href: "https://www.w3.org/html/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    name: "html5",
  },
  {
    href: "https://www.invisionapp.com/",
    src: "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
    name: "invision",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",

    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "javascript",
  },
  {
    href: "https://www.jenkins.io",
    src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
    name: "jenkins",
  },
  {
    href: "https://jestjs.io",
    src: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    name: "jest",
  },
  {
    href: "https://kafka.apache.org/",
    src: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
    name: "kafka",
  },
  {
    href: "https://www.linux.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    name: "linux",
  },
  {
    href: "https://www.mysql.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    name: "mysql",
  },
  {
    href: "https://nextjs.org/",
    src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    name: "nextjs",
  },
  {
    href: "https://www.nginx.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
    name: "nginx",
  },
  {
    href: "https://nodejs.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    name: "nodejs",
  },
  {
    href: "https://www.postgresql.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    name: "postgresql",
  },
  {
    href: "https://pugjs.org",
    src: "https://cdn.worldvectorlogo.com/logos/pug.svg",
    name: "pug",
  },
  {
    href: "https://www.rabbitmq.com",
    src: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
    name: "rabbitMQ",
  },
  {
    href: "https://reactjs.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    name: "react",
  },
  {
    href: "https://reactnative.dev/",
    src: "https://reactnative.dev/img/header_logo.svg",
    name: "reactnative",
  },
  {
    href: "https://realm.io/",
    src: "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg",
    name: "realm",
  },
  {
    href: "https://redis.io",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
    name: "redis",
  },
  {
    href: "https://redux.js.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    name: "redux",
  },
  {
    href: "https://www.sketch.com/",
    src: "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
    name: "sketch",
  },
  {
    href: "https://developer.apple.com/swift/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
    name: "swift",
  },
  {
    href: "https://tailwindcss.com/",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    name: "tailwind",
  },
  {
    href: "https://www.typescriptlang.org/",

    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    name: "typescript",
  },
  {
    href: "https://webpack.js.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
    name: "webpack",
  },
]

const Tools = () => {
  return (
    <div className="mb-5 mt-8">
      <p className="mb-5 text-xl font-bold ">Tools/Languages that I use</p>
      <div className="container flex flex-wrap justify-center gap-4">
        {tools.map((tool) => (
          <a
            href={tool.href}
            target="_blank"
            rel="noreferrer"
            key={tool.name}
            className="d flex flex-row rounded-lg bg-purple-100	p-1 shadow-2xl dark:bg-purple-400"
          >
            <Image src={tool.src} alt={tool.name} width="40" height="40" />
            <p className="p-2">{tool.name}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Tools
