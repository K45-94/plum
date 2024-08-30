<script setup>
import PasswordResetCard from "src/auth/components/PasswordResetCard.vue";
</script>

<template>
  <div class="flex flex-center password-reset" padding>
    <div class="text-center">
      <h5 class="q-mb-md">Password Reset</h5>
      <PasswordResetCard />
    </div>
  </div>
</template>
<style lang="scss">
.password-reset {
  background: linear-gradient(120deg, #000c04 15%, rgb(255, 255, 255) 85%);
  min-height: 100vh;
}
</style>
