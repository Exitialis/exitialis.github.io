<script setup>
import { Icon } from "@iconify/vue"

let isOpen = ref(false)

</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure>
        <img class="avatar-box" src="/images/avatar.jpg" alt="Photo" width="80" height="100">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Neshchadin Ivan Pavlovich">
          {{$t("lastName")}} <br /> {{$t("firstName")}}
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">TechLead</span>
          <span>Backend Engineer</span>
          <span>Mentor</span>
          <span>530 000₽ net</span>
        </p>
        <!-- Comment -->
        <!--<p class="text-center xl:block flex items-center justify-center gap-1">
          <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium badge-blue">
           {{$t("status")}}
          </span>
        </p>-->
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
              <Icon icon="simple-icons:habr" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Habr
            </p>

            <a href="https://habr.com/en/users/exitialis" class="contact-link" target="_blank">exitialis</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/exitialis" class="contact-link" target="_blank">exitialis</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://id.linkedin.com/in/exitialis" class="contact-link" target="_blank">exitialis</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <Icon icon="ic:baseline-telegram" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Telegram
            </p>

            <a href="https://t.me/exitialis" class="contact-link" target="_blank">exitialis</a>
          </div>
        </li>


        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Moscow, Russia</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="mailto:lpexitialis@gmail.com" class="social-link" target="_blank">
            <ion-icon name="mail-outline" />
          </NuxtLink>
        </li>
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>
