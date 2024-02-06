<template>
    <main>
      <ServicesHero/>
      <ServicesAccordions/>
      <ServicesOurProcess/>
      <HomeFooter/>
      <LandingFooter/>
      <div class="footer_bg">
  
</div>
 </main>
</template>
<script setup>
import HomeFooter from '@/components/Home/HomeFooter.vue';
import ServicesAccordions from '@/components/Services/ServicesAccordions.vue';
import ServicesHero from '@/components/Services/ServicesHero.vue';
import ServicesOurProcess from '@/components/Services/ServicesOurProcess.vue';
import LandingFooter from '@/layout/LandingFooter.vue';

</script>
<style lang="scss" scoped>
.footer_bg {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  margin-top: -500px;
  width: 100%;
  height: 500px;
  background: linear-gradient( hsla(0, 0%, 100%, 0), rgba(100, 249, 199, 0.322) 33.33%, rgba(137, 225, 138, 0.301) 66.67%);
  filter: blur(190px);
  z-index: -1;


}
</style>