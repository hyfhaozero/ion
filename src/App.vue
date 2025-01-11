<script setup>
import { useNoticeStore } from '@/stores/notice_pb'
const store_notice = useNoticeStore()
</script>

<template>
  <p>msg: {{ store_notice.notice }}</p>
</template>
