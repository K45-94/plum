<script setup>
import AuthLoginCard from "src/auth/components/LoginCard.vue";
</script>

<template>
  <div class="flex flex-center log" padding>
    <div class="text-center">
      <div class="q-mb-md text-secondary text-h5">Sign In</div>
      <AuthLoginCard />
      <q-btn
        class="full-width q-mt-md"
        color="grey-8"
        label="forgot password"
        flat
        :to="{ name: 'auth.requestPasswordReset' }"
      />
    </div>
  </div>
  <div class="absolute-top-right q-pa-md">
    <div class="text-gradient">Need an account?</div>
    <q-btn
      no-caps
      label="register"
      color="secondary"
      flat
      class="full-width"
      :to="{ name: 'auth.register' }"
    />
  </div>
</template>
<style lang="scss">
.log {
  background: linear-gradient(120deg, #000c04 15%, rgb(255, 255, 255) 85%);
  min-height: 100vh;
}
</style>
