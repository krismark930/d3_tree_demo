<template>
  <section class="experts_container">
    <div>
      <div class="experts_text">
        <div class="">Our Experts</div>
      </div>
      <div class="experts_subtext">
        <p>
          At D3, we believe that our experts are our greatest asset. We are
          confident in their abilities and their commitment to delivering
          top-notch Web3 solutions to our clients.
        </p>
      </div>

      <div class="cards">
        <div v-for="(card, i) in CardsData" :key="i">
          <div class="card_container" v-if="card.brief === false">
            <div class="card_about">
              <img class="card_image" :src="card.icon" />
              <div
                style="
                  display: flex;
                  align-items: baseline;
                  flex-direction: column;
                  justify-content: center;
                  gap: 5px;
                "
              >
                <div class="card_text">{{ card.name }}</div>
                <div style="display: flex; align-items: center; gap: 5px">
                  <div class="card_years_of_exp">5+</div>
                  <div 
                    style="font-family: 'Open San'
                    font-size: 14px;
                    font-style: normal;
                    background: linear-gradient(90deg, #64F9C8 0%, #B8F081 51.04%, #89E18A 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 400;
                    line-height: 34px; /* 242.857% */">
                    Years as UI/UX Designer
                  </div>
                  <img :src="figma" />
                  <img :src="owl" />
                  <img :src="photoshop" />
                  <img :src="adobe" />
                </div>
                <div style="display: flex; align-items: center; gap: 2px">
                  <img :src="linkedin" class="cursor-pointer" />
                  <img :src="twitter" class="cursor-pointer" />
                </div>
              </div>
            </div>
            <div
              class="flex justify-between w-10/12 mt-4 font-normal text-base font-semibold font-montserrat"
            >
              Areas of experience
            </div>
            <div class="flex flex-wrap mt-[20px]">
              <div
                class="flex items-center font-extralight w-1/2 gap-[9px] font-montserrat text-base"
              >
                <img :src="SkillsMarker" width="16" />User Interface Design
              </div>
              <div
                class="flex items-center font-extralight w-1/2 gap-[9px] font-montserrat text-base"
              >
                <img :src="SkillsMarker" width="16" />Brand Identity Design
              </div>
              <div
                class="flex items-center font-extralight w-1/2 gap-[9px] font-montserrat text-base"
              >
                <img :src="SkillsMarker" width="16" />User Experience Design
              </div>
              <div
                class="flex items-center font-extralight w-1/2 gap-[9px] font-montserrat text-base"
              >
                <img :src="SkillsMarker" width="16" />Wireframing and
                Prototyping
              </div>
            </div>

            <div class="flex justify-between mt-10 font-normal text-base mb-2 font-montserrat font-semibold">
              Company Role
            </div>
            <div class="flex flex-wrap flex-col gap-2 pb-[60px]">
              <div class="flex items-center font-extralight text-sm gap-[9px] font-montserrat">
                <img :src="SkillsStarMarker" width="16" />Co-founder
              </div>
              <div class="flex items-center font-extralight text-sm gap-[9px] font-montserrat">
                <img :src="SkillsStarMarker" width="16" />Front-End Lead
              </div>
            </div>
          </div>
          <div v-else-if="card.brief === true">
            <div class="brief_card_container">
              <img :src="card.icon" />
              <div class="brief_card_name">{{ card.name }}</div>
            </div>
          </div>
        </div>
      </div>

      <button class="experts_buttons_contact">
        <div class="experts_buttons_icon_contact">
          <img :src="atom" />
        </div>
        Contact
      </button>
    </div>
  </section>
</template>
<script setup>
import atom from "@/assets/atom.svg";

import adobe from "@/assets/experts/skills/adobe.svg";
import figma from "@/assets/experts/skills/figma.svg";
import owl from "@/assets/experts/skills/owl.svg";
import photoshop from "@/assets/experts/skills/photoshop.svg";
import linkedin from "@/assets/experts/skills/linkedin.svg";
import twitter from "@/assets/experts/skills/twitter.svg";

import Helder from "@/assets/experts/Helder.svg";
import Bernardo from "@/assets/experts/Bernardo.svg";
import Joao from "@/assets/experts/Joao.svg";
import SkillsMarker from "@/assets/experts/SkillsMarker.svg";
import SkillsStarMarker from "@/assets/experts/SkillsStarMarker.svg";
import { ref } from "vue";

const CardsData = ref([
  {
    icon: Helder,
    name: "Helder Lourenco",
    subtext:
      "At our core, we embody originality. We're not your typical development company—we thrive on pushing boundaries and thinking beyond the ordinary. From ideation to execution, our original mindset sets us apart, ensuring that your projects transcend the commonplace and achieve extraordinary outcomes.",
      brief: false
    },
  {
    icon: Bernardo,
    name: "Bernardo Marques",
    subtext:
      "At our core, we embody originality. We're not your typical development company—we thrive on pushing boundaries and thinking beyond the ordinary. From ideation to execution, our original mindset sets us apart, ensuring that your projects transcend the commonplace and achieve extraordinary outcomes.",
      brief: true
    },
  {
    icon: Joao,
    name: "Joao Costa",
    subtext:
      "At our core, we embody originality. We're not your typical development company—we thrive on pushing boundaries and thinking beyond the ordinary. From ideation to execution, our original mindset sets us apart, ensuring that your projects transcend the commonplace and achieve extraordinary outcomes.",
      brief: true
    },
]);
</script>
<style lang="scss" scoped>
.experts_container {
  display: flex;
  margin-top: 20%;
  margin-bottom: 20%;
}

.cards {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  gap: 20px;
  margin-bottom: 2%;
  margin-top: 110px;
  padding-bottom: 10px;
}

/* Scrollbar */
.cards::-webkit-scrollbar {

  height: 2px;
  width: 2px;
}

.cards::-webkit-scrollbar {
  
  background: transparent;
}

.cards::-webkit-scrollbar-thumb {
  background-color: rgba(0, 192, 135);
  border-radius: 100%;

}

.card_container {
  width: 700px;
  height: auto;
  padding: 15px 22px;
  border-radius: 25px;
  border: 1px solid #ffffff2a;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(100, 249, 200, 0.2) 0%,
    rgba(100, 249, 199, 0.032) 100%
  );
}

.brief_card_container {
  width: 293px;
  height: 283px;
  padding: 15px 22px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #ffffff2a;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(100, 249, 200, 0.2) 0%,
    rgba(100, 249, 199, 0.032) 100%
  );
}

.brief_card_name {
  color: #FFF;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
}

.card_about {
  display: flex;
}
.card_years_of_exp {
  background: #89e18a;
  padding: 0px 8px;
  height: 20px;
  font-size: clamp(14px, 1vw, 22px);

  border-radius: 6px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
}
.card_image {
  // width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: 5%;
}
.card_text {
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 500;
  line-height: 36px; /* 150% */
  letter-spacing: 0em;
  text-align: center;
  margin-top: 5%;
}
.card_subtext {
  font-size: clamp(10px, 1vw, 14px);
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 5%;
  color: rgba(255, 255, 255, 0.753);
}

.experts {
  &_text {
    margin-bottom: 48px;
    width: fit-content;
    font-size: 60px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    background: linear-gradient(90deg, #B8F081 0%, #64F9C8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &_small {
      font-size: clamp(30px, 1vw, 50px);
    }
  }

  &_subtext {
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 34px; /* 141.667% */
    letter-spacing: 0em;
    color: #dddddd;
    width: 45%;
  }
}

.experts_buttons {
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
    font-weight: 700;
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
