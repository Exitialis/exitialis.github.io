<script setup>
import { useI18n } from 'vue-i18n'

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="about-item">

    <div class="about-content-box">
      <p class="about-item-text">
        {{ $t("about.description") }}       
      </p>
    </div>
  </li>
</template>
