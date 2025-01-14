<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Avito
          </h4>
          <span>01.06.2024 - Present</span>
          <p class="timeline-item-desc">
            Moscow
          </p>
          <p class="timeline-text">
            {{ $t("resume.avito2.description") }}
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Avito
          </h4>
          <span>03.2020 - 01.06.2024</span>
          <p class="timeline-item-desc">
            Moscow
          </p>
          <p class="timeline-text">
            {{ $t("resume.avito.description") }}
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Carprice
          </h4>
          <span>03.2019 - 03.2020</span>
          <p class="timeline-item-desc">
            Moscow
          </p>
          <p class="timeline-text">
            {{ $t("resume.carprice.description") }}
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Onlinesim
          </h4>
          <span>11.2017 — 03.2019</span>
          <p class="timeline-item-desc">
            Moscow/Sankt Petersburg
          </p>
          <p class="timeline-text">
            {{ $t("resume.onlinesim.description") }}
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Simex inc.
          </h4>
          <span>01.2015 - 12.2016</span>
          <p class="timeline-item-desc">
            Moscow
          </p>
          <p class="timeline-text">
            {{ $t("resume.simex.description") }}
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Go
            </h5>
            <data value="100"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 100%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Neo4j
            </h5>
            <data value="95"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 95%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Redis
            </h5>
            <data value="100"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 100%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              MySQL
            </h5>
            <data value="80"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              PostgreSQl
            </h5>
            <data value="100"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 100%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              SQL
            </h5>
            <data value="95"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 95%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Vim
            </h5>
            <data value="100"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 100%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Docker
            </h5>
            <data value="80"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Grafana, ELK
            </h5>
            <data value="100">as user</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 100%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Kubernetes
            </h5>
            <data value="80"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Vue.js
            </h5>
            <data value="70"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              JavaScript
            </h5>
            <data value="65"></data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 65%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              PHP
            </h5>
            <data value="80">rare usage</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              English
            </h5>
            <data value="80">B2</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Russian
            </h5>
            <data value="100">Native</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 100%;" />
          </div>
        </li>

      </ul>
    </section>
  </article>
</template>
