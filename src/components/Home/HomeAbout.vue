<template>
  <section class="about_container">
    <div class="about_text_container">
      <div class="about_text">
        <div class="">About D3</div>
        <div class="about_text_small">Forged in DeFi, Shaping the future</div>
      </div>
      <div class="about_subtext">
        <p>
          D3's story begins at university, where our founders discovered a
          shared passion for DeFi and blockchain. What started as a mutual
          interest evolved into a series of groundbreaking projects, now
          thriving under DAOs and vibrant communities.
        </p>
        <p class="pt-[25px]">
          Fuelled by the experiences gained, we recognized a calling in web3
          development. From these insights, D3 was born—a manifestation of our
          commitment to innovating, problem-solving, and building the
          decentralized future of the internet.
        </p>
        <p class="pt-[25px]">
          Join us in this exciting journey as we shape a future where
          decentralization is not just a concept but a reality. At D3, we're not
          just developers; we're architects of the decentralized landscape,
          crafting the future we envision.
        </p>
      </div>
      <button class="about_buttons_contact">
        <div class="about_buttons_icon_contact">
          <img :src="atom" />
        </div>
        Contact
      </button>
    </div>
    <div class="about_animation">
      <Vue3Lottie :animationData="d3JSON" :height="700" :width="600" />

    </div>
  </section>
</template>
<script setup>
import atom from "@/assets/atom.svg";
import { Vue3Lottie } from 'vue3-lottie'
import d3JSON from '@/assets/d3lottie.json'


</script>
<style lang="scss" scoped>
.about_container {
  display: flex;
  margin-top: 20%;
  margin-bottom: 20%;
}
.about_text_container {
  width: 50%;
}
.about_animation {
  width: 50%;
}
.about {
  &_text {
    font-size: 60px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    background: linear-gradient(90deg, #B8F081 0.01%, #64F9C8 23.7%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &_small {
      background: linear-gradient(90deg, #B8F081 -1.53%, rgba(100, 249, 200, 0.86) 42.76%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding-top: 5px;
      font-size: 30px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 500;
      line-height: 64px; /* 213.333% */
    }
  }

  &_subtext {
    font-family: 'Open Sans';
    padding-top: 45px;
    font-size: 24px;
    font-weight: 400;
    gap: 10px;
    line-height: 34px;
    letter-spacing: 0em;
    color: #dddddd;
  }
}


.about_buttons { 
  &_icon_contact {
    background: #11161f1a;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_contact {
    margin-top: 40px;

    display: flex;
    gap: 8px;
    align-items: center;
    border-radius: 24px;
    background: linear-gradient(90deg, #b8f081 0%, #64f9c8 100%);
    padding: 12px 25px;
    border: none;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    color: #000000;
    z-index: 5;
    filter: drop-shadow(0 0 0.3rem #64f9c8);

    &:hover {
      filter: drop-shadow(0 0 0.7rem #64f9c8);
      cursor: pointer;
    }
  }
  
}
</style>
