<template>
  <header>
    <div class="header_container">
      <div class="header_logo">
        <img :src="logo" />
        <span class="logo_text">D3</span>
      </div>
      <nav class="nav_menu">
        <!-- {{ console.log(Route) }} -->
        <router-link v-if="Route.path === '/services' || Route.path === '/blog'" class="nav_menu_item" :to="'/'">Home</router-link>
        <router-link v-else-if="Route.path === '/'" class="nav_menu_item" :to="'/blog'">Blog</router-link>

        
        <router-link v-if="Route.path === '/services'" class="nav_menu_item" :to="'/blog'"
          >Blog</router-link
        >
        <router-link v-else-if="Route.path === '/' || Route.path === '/blog'" class="nav_menu_item" :to="'/services'"
          >Services</router-link
        >
        <div class="social_container">
          <a href="https://twitter.com/D3_firm">
            <div class="social_single_item">
              <img :src="twitter" width="15" />
            </div>
          </a>
          <a href="https://www.linkedin.com/company/d3-firm/">
            <div class="social_single_item">
              <img :src="linkedin" width="15" />
            </div>
          </a>
          <a href="">
            <div class="social_single_item">
              <img :src="medium" width="15" />
            </div>
          </a>
        </div>
        <a href="mailto:team@d3vs.xyz?subject=Contact">
        <button class="contact_button">Contact</button>
      </a>
      </nav>
    </div>
  </header>
</template>
<script setup>
import logo from "../assets/logo.svg";
import twitter from "@/assets/social/twitter.svg";
import linkedin from "@/assets/social/linkedin.svg";
import medium from "@/assets/social/medium.svg";
import gsap from 'gsap';
import { onMounted } from 'vue';

import {useRoute} from 'vue-router';

const Route = useRoute();

const animateHeader = () => {
  const tl = gsap.timeline();
  tl.fromTo(
      [".header_container"], 
    {
      opacity: 0,
      y: -50,
      autoAlpha: 0, 
      stagger: {
        each: 0.1,
        from: "top",
        ease: "power2.inOut"
      }
    },
    {
      opacity: 1,
      y: 0,
      autoAlpha: 1, 
      delay: 0.5,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "top",
        ease: "power2.inOut"
      }
    }
  )
}
onMounted(()=> {
  animateHeader();
})
</script>
<style scoped lang="scss">
.header_container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.header_logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 29px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
}

.logo_text {
  filter: drop-shadow(0 0 0.8rem rgb(255, 255, 255));
}

.nav_menu {
  display: flex;
  align-items: center;
  gap: 15px;

  &_item {
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-decoration: none;
    color: #dddddd;
    &:hover {
      color: #64f9c8;
      filter: drop-shadow(0 0 0.7rem #64f9c8 );

    }
  }
}

.social_container {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
.social_single_item {
  background: #dddddd0d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
  width: 40px;
  height: 40px;
  &:hover {
    background: #dddddd57;
    filter: drop-shadow(0 0 0.3rem #dddddd );

  }
}

.contact_button {
  font-family: 'Open Sans';
  border-radius: 8px;
  background: linear-gradient(90deg, #b8f081 0%, #64f9c8 100%);
  padding: 9px 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  color: #11161F;
  border: none;
  &:hover {
    filter: drop-shadow(0 0 0.3rem #64f9c8 );
    cursor: pointer;

  }
}
</style>
