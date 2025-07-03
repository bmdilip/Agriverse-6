
<script setup>
import { ref } from 'vue';
</script>

<template>
  <nav class="w-full flex justify-between items-center px-6 py-4 bg-black text-white fixed top-0 z-50">
    <div class="flex items-center space-x-3">
      <span class="text-2xl font-bold text-neon">🌱 Agriverse</span>
      <span class="text-sm">Web3 Agriculture</span>
    </div>
    <div class="flex space-x-8 text-md font-medium">
      <a href="/" class="hover:text-neon transition">Home</a>
      <a href="/agrihub" class="hover:text-neon transition">AgriHub</a>
      <a href="/gaming" class="hover:text-neon transition">Gaming</a>
      <a href="/resources" class="hover:text-neon transition">Resources</a>
      <a href="/rwacert" class="hover:text-neon transition">RWAcert</a>
      <a href="/marketplace" class="hover:text-neon transition">NFT Marketplace</a>
      <a href="/purchase" class="hover:text-neon transition">Purchase</a>
    </div>
    <div class="flex items-center space-x-4">
      <button class="bg-neon px-4 py-2 rounded-md text-black font-bold">Connect Wallet</button>
    </div>
  </nav>
</template>

<style scoped>
.text-neon {
  color: #B3FFAB;
}
.bg-neon {
  background-color: #B3FFAB;
}
</style>
