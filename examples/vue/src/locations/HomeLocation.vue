<template>
  <div>Hello Home (AppId {{ sdk.ids.app }})</div>
</template>

<script setup lang="ts">
import type { HomeExtensionSDK } from '@contentful/app-sdk';

defineProps<{ sdk: HomeExtensionSDK }>();
</script>
