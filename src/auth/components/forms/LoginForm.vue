<script setup>
import { QInput, QForm } from "quasar";

defineProps({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  validationErrors: {
    required: false,
    type: Object,
    default() {
      return {};
    },
  },
});

const emit = defineEmits(["update:email", "update:password"]);
</script>

<template>
  <q-form>
    <slot name="top" />
    <q-input
      filled
      label="Email"
      :model-value="email"
      :error="!!validationErrors?.['email']"
      :error-message="validationErrors?.['email']?.[0]"
      class="q-mb-md"
      color="accent"
      hide-bottom-space
      @update:model-value="(value) => emit('update:email', value)"
    />
    <q-input
      filled
      type="password"
      label="Password"
      :model-value="password"
      :error="!!validationErrors?.['password']"
      :error-message="validationErrors?.['password']?.[0]"
      class="q-mb-sm"
      color="secondary"
      hide-bottom-space
      @update:model-value="(value) => emit('update:password', value)"
    />
    <slot name="bottom" />
  </q-form>
</template>
