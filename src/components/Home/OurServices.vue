<template>
  <section class="services_container">
    <div>
      <div class="services_text">
        <div class="">Our services</div>
      </div>
      <div class="services_subtext">
        <p>
          Leveraging state-of-the-art technology to revolutionize digital
          spaces.
        </p>
      </div>
      <div class="cards">
        <div class="card_container" v-for="(card, i) in CardsData" :key="i">
          <div class="card_text">{{ card.title }}</div>
          <div class="flex gap-2 mt-2">
            <div v-for="(tag, i) in card.tags" :key="`tags-${i}`">
              <div class="tag">{{ tag.text }}</div>
            </div>
          </div>
          <div class="services_card_desc">{{ card.subtext }}</div>
          <!-- <div class="flex justify-center">
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5.43144 5.43144"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M9.86328 1L5.43184 5.43144"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div> -->
        </div>
      </div>

      <button class="hero_buttons_services">
        <div class="hero_buttons_icon_service">
          <img :src="message" />
        </div>
        Services
      </button>
    </div>
  </section>
</template>
<script setup>
import message from "@/assets/message.svg";
import { ref } from "vue";

const CardsData = ref([
  {
    title: "UX/UI Design",
    subtext:
      "Unlock unparalleled growth with our UI/UX expertise. We offer more than designs.",
    tags: [
      {
        text: "Figma",
      },
      {
        text: "Notion",
      },
      {
        text: "...",
      },
    ],
  },
  {
    title: "DeFi Consulting",
    subtext:
      "We have extensive experience in designing, validating, and planning the development of complex systems to support in launching quality products tailored to the client's needs.",
    tags: [
      {
        text: "Blockchains",
      },
      {
        text: "Smart Contracts",
      },
      {
        text: "...",
      },
    ],
  },
  {
    title: "Web3 Development",
    subtext:
      "We construct and uphold intricate systems customized to meet the requirements of our clients, with an emphasis on security and cost-effectiveness (gas efficiency).",
    tags: [
      {
        text: "Typescript",
      },
      {
        text: "React",
      },
      {
        text: "...",
      },
    ],
  },
  {
    title: "Web3 Development",
    subtext:
      "We construct and uphold intricate systems customized to meet the requirements of our clients, with an emphasis on security and cost-effectiveness (gas efficiency).",
    tags: [
      {
        text: "Typescript",
      },
      {
        text: "React",
      },
      {
        text: "...",
      },
    ],
  },
]);
</script>
<style lang="scss" scoped>
.services_container {
  display: flex;
  margin-top: 20%;
  margin-bottom: 20%;
}

.cards {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-bottom: 2%;
  margin-top: 7%;
  padding-bottom: 10px;
}

.card_container {
  width: 342px;
  height: 343px;
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
  font-size: 24px;
  text-align: left;
  font-weight: 400;
  line-height: 30px !important;
  letter-spacing: 0em;
  margin-top: 32px;
  width: 170px;
  background: -webkit-linear-gradient(
    90deg,
    #64f9c8 0%,
    #b8f081 51.04%,
    #89e18a 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card_subtext {
  font-size: 16px;
  font-weight: 300;
  font-family: 'Open Sans';
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 5%;
  color: rgba(255, 255, 255, 0.753);
}

.services {
  &_text {
    margin-bottom: 48px;
    font-size: 60px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0em;
    width: fit-content;
    background: linear-gradient(90deg, #B8F081 0%, #64F9C8 100%);
    font-family: 'Ubuntu';
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &_small {
      font-size: 24px;
      width: 450px;
      line-height: 34px; /* 141.667% */
      font-family: 'Open Sans';
    }
  }

  &_subtext {
    font-family: 'Open Sans';
    width: 450px;
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    color: #dddddd;
  }
}

.services_card_desc {
  font-family: 'Open Sans';
  font-size: 16px;
  margin-top: 10%;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  color: #dddddd;
}

.hero_buttons {
  &_icon_service {
    background: #dddddd0d;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_services {
    display: flex;
    gap: 8px;
    align-items: center;
    border-radius: 24px;
    background: #dddddd0d;
    padding: 10px 25px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    color: #ffffff;
    z-index: 5;
    &:hover {
      filter: drop-shadow(0 0 0.3rem white);
      cursor: pointer;
    }
  }
}

.tag {
  font-family: 'Open Sans';
  background-color: #64f9c803;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 1px; 
  border-radius: 5px;
  color: #ffffff;
}
</style>
