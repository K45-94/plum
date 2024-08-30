<script setup>
import PasswordResetRequestCard from "src/auth/components/PasswordResetRequestCard.vue";
</script>

<template>
  <div class="flex flex-center password-reset" padding>
    <div class="text-center">
      <div class="q-mb-md text-gradient">Password Reset</div>
      <PasswordResetRequestCard />
      <q-btn
        class="full-width q-mt-md"
        color="secondary"
        label="back"
        flat
        :to="{ name: 'auth.login' }"
      />
    </div>
  </div>
</template>
<style lang="scss">
.password-reset {
  background: linear-gradient(120deg, #000c04 15%, rgb(255, 255, 255) 85%);
  min-height: 100vh;
}
</style>
