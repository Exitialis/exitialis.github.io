import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Go',
      description: {
        en: "I've been using go mostly for projects for the past few years, and I've been writing on it since 2019. I've written a lot of microservices and services with big business-logic.",
        ru_RU: 'Последние несколько лет я в основном использую go для реализации проектов, я пишу на нем с 2019 года. Я написал на нем множество как микросервисов, так и сервисов с обширной бизнес-логикой.',
      },
      icon: 'devicon:go',
      image: null,
    },
    {
      id: 2,
      title: 'Vue',
      description: {
        en: "I use Vue.js in many of my projects, for example for this portfolio site. But now i'm an backend engineer and not use it in prod apps.",
        ru_RU: 'Я использую Vue.js во многих своих проектах, например для этого портфолио. Но в первую очередь сейчас я backend разработчик и не использую его в продовых проектах.',
      },
      icon: 'devicon:vuejs',
      image: null,
    },
    {
      id: 3,
      title: 'PHP',
      description: {
        en: "I've been writing in PHP since 2014, first usage was for personal projects and since 2016 i've started to work in it with Laravel framework. Last several years i've stopped to use it and write on Go only.",
        ru_RU: 'Я писал на PHP с 2014 года, начинал его использовать для личных проектов и с 2016 года работал на нем с использованием фреймворка Laravel. Последние несколько лет не использую его, пишу на Go.',
      },
      icon: 'devicon:php',
      image: null,
    },
    {
      id: 4,
      title: 'Python',
      description: {
        en: 'I use Python for various tasks related to neural networks and data analysis. The last project was the chatbot trained on Avito’s internal documentation to help developers as part of a hackathon.',
        ru_RU: 'Я использую Python для различных задач связанных с нейросетями и анализом данных. Последний проект был создание чат-бота обученного на внутренней документации Авито для помощи разработчикам в рамках хакатона.',
      },
      icon: 'devicon:python',
      image: null,
    },
    {
      id: 5,
      title: 'PostgreSQL',
      description: {
        en: "I wrote many apps with usage PostgreSQL as main database. And i know how to use it with big amount of data and highload",
        ru_RU: 'Я написал множество приложений, которые используют PostgreSQL в качестве основной базы данных. И я знаю, как использовать её с большим объемом данных и высокой нагрузкой.',
      },
      icon: 'devicon:postgresql',
      image: null,
    },
  ]
})
