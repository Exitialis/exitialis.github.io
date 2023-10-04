<script setup>
</script>

<template>
  <li class="about-item">
    <div class="about-content-box">
      <p class="about-item-text">
        {{ $t("about.description") }}
      </p>

      <p class="about-item-text mentor-ads">
        {{ $t("about.description2") }}
      </p>

    </div>
  </li>
</template>

<style>
.mentor-ads {
  margin-top: 30px;
  font-weight: bold;
}
</style>
