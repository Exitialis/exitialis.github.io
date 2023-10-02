<script setup>
import { useI18n } from 'vue-i18n'

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Services */
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <ul class="about-list">
        <About/>
      </ul>
    </section>

    
    <div class="separator"></div>
    <!-- service -->

    <section class="service">
      <br />
      <h3 class="h3 pb-5">
        {{ $t("about.skills") }}
      </h3>
      <ul class="service-list">
        <Skill v-for="service in services" :key="service.id" :skill="service" />
      </ul>
    </section>
  </article>
</template>
