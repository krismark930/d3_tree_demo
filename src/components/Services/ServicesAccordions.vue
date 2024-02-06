<template>
  <section class="accordions_container">
    <div>
      <div class="accordions_text">
        <div class="">Web3 Design and UX/UI Services</div>
      </div>
      <div class="accordions_subtext">
        <p>
          Elevate your presence in the decentralized era with D3's Web3 Design
          and UX/UI services. Our strategic approach goes beyond aesthetics,
          providing a competitive edge in the dynamic digital landscape.
        </p>
      </div>
      <div class="mt-12 mb-12">
        <ServiceAccordion
          accordionName="Web3 Design Ideation"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />

        <ServiceAccordion
          accordionName="Web3 UX/UI Matching"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />

        <ServiceAccordion
          accordionName="Split Testing for Web3 Optimization"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
        <ServiceAccordion
          accordionName="Conversion Optimization for Web3"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
        <ServiceAccordion
          accordionName="Web3 User Flow Automation"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
      </div>

      <button class="accordions_buttons_contact">
        <div class="accordions_buttons_icon_contact">
          <img :src="atom" />
        </div>
        Contact Us Now
      </button>
    </div>
  </section>

  <section class="accordions_container">
    <div>
      <div class="accordions_text">
        <div class="">Solidity & Smart Contract Development</div>
      </div>
      <div class="accordions_subtext">
        <p>
          Embark on a transformative journey with D3's Solidity & Smart Contract
          Development services. We fuel your decentralized ambitions with secure
          and efficient blockchain solutions, tailored to elevate your projects
          in the dynamic landscape.
        </p>
      </div>
      <div class="mt-12 mb-12">
        <ServiceAccordion
          accordionName="Forks for Solidity Code Development:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />

        <ServiceAccordion
          accordionName="Code Iteration and Expansion:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />

        <ServiceAccordion
          accordionName="Code Assessment and Refactoring:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
        <ServiceAccordion
          accordionName="Proprietary Solidity Development:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
      </div>

      <button class="accordions_buttons_contact">
        <div class="accordions_buttons_icon_contact">
          <img :src="atom" />
        </div>
        Contact Us Now
      </button>
    </div>
  </section>

  <section class="accordions_container">
    <div>
      <div class="accordions_text">
        <div class="">React Development</div>
      </div>
      <div class="accordions_subtext">
        <p>
          Experience the synergy of Web2 and Web3 with D3's React Development
          services. As the epicentre of decentralized application (dApp)
          development, our comprehensive React codebase solutions seamlessly
          merge the best of both worlds.
        </p>
      </div>
      <div class="mt-12 mb-12">
        <ServiceAccordion
          accordionName="dApp Development Excellence:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />

        <ServiceAccordion
          accordionName="Smart Contract Integration:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
      </div>

      <button class="accordions_buttons_contact">
        <div class="accordions_buttons_icon_contact">
          <img :src="atom" />
        </div>
        Contact Us Now
      </button>
    </div>
  </section>

  <section class="accordions_container">
    <div>
      <div class="accordions_text">
        <div class="">DeFi consulting</div>
      </div>
      <div class="accordions_subtext">
        <p>
          Embark on a journey of seamless DeFi launches with D3's comprehensive
          consulting services. Rely on our seasoned expertise to design,
          validate, and deliver complex systems that cater to your unique needs.
          Our scientific approach to tokenomics, powered by proprietary tools,
          ensures sustainability through rigorous simulations.
        </p>
      </div>
      <div class="mt-12 mb-12">
        <ServiceAccordion
          accordionName="Tokenomic Design:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />

        <ServiceAccordion
          accordionName="Tokenomic Review:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
        <ServiceAccordion
          accordionName="Simulation Testing:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
        <ServiceAccordion
          accordionName="Full Suite Smart Contract Development:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
        <ServiceAccordion
          accordionName="GTM / Marketing Strategy:"
          :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          @updateActive="Web3IdeationOpen"
        />
      </div>

      <button class="accordions_buttons_contact">
        <div class="accordions_buttons_icon_contact">
          <img :src="atom" />
        </div>
        Contact Us Now
      </button>
    </div>
  </section>
</template>
<script setup>
import atom from "@/assets/atom.svg";
import ServiceAccordion from "@/ui/ServiceAccordion.vue";

import { ref } from "vue";

const Web3Ideation = ref(false);

function Web3IdeationOpen(value) {
  Web3Ideation.value = value;
}
</script>
<style lang="scss" scoped>
.accordions_container {
  display: flex;
  margin-top: 20%;
  margin-bottom: 20%;
}

.accordions {
  &_text {
    margin-bottom: 48px;
    font-size: 60px;
    font-weight: 700;
    width: fit-content;
    letter-spacing: 0em;
    background: linear-gradient(90deg, #B8F081 0%, #64F9C8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &_small {
      font-size: 50px;
    }
  }

  &_subtext {
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    color: #dddddd;
    max-width: 1300px;
  }
}

.accordions_buttons {
  &_icon_contact {
    background: #11161f1a;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_contact {
    margin-top: 50px;
    display: flex;
    gap: 8px;
    align-items: center;
    border-radius: 24px;
    background: linear-gradient(90deg, #b8f081 0%, #64f9c8 100%);
    padding: 12px 25px;
    border: none;
    font-family: 'Open Sans';
    font-style: normal;
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
