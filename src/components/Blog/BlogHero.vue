<template>
  <div class="hero_bg">
    <img :src="hero_bg" width="100%" />
  </div>
  <main class="hero_container">
    <div class="hero_logo">
      <div class="hero_logo_text">
        <span> D3 </span>
        <span class="hero_logo_services">Blog</span
        >
      </div>
      <div class="hero_logo_subtext">
        We offer a full suite of services at D3, from individual elements of web3 development to complete package delivery from ideation to delivery. Contact us to learn more about our solution driven services.
      </div>
    </div>
    <div class="hero_buttons">
      <button class="hero_buttons_services">
        <div class="hero_buttons_icon_service">
          <img :src="message" />
        </div>
        Services
      </button>
      <button class="hero_buttons_contact">
        <div class="hero_buttons_icon_contact">
          <img :src="atom" />
        </div>
        Contact
      </button>
    </div>
  </main>
</template>
<script setup>
import hero_bg from "@/assets/hero_bg.svg";
import atom from "@/assets/atom.svg";
import message from "@/assets/message.svg";
import { onMounted, ref } from "vue";
import gsap from "gsap";

const revealUp = ref(null);
const animateImage = () => {
  gsap.fromTo(
    revealUp.value,
    {
      opacity: 0,
      clipPath: "polygon(0% 8%, 0% 7%, 0% 99%, 0% 100%)",
      autoAlpha: 0,
      scale: 1.2,
    },
    {
      opacity: 1,
      clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)",
      autoAlpha: 1,
      delay: 0.5,
      duration: 3,
      scale: 1,
      ease: "power4.out",
    }
  );
};

const animateText = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    [".hero_logo_text", ".hero_logo_subtext"],
    {
      opacity: 0,
      y: 150,
      autoAlpha: 0,
      stagger: {
        each: 0.1,
        from: "top",
        ease: "power2.inOut",
      },
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
        ease: "power2.inOut",
      },
    }
  );
};


const animateButtonService = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    [".hero_buttons_services"],
    {
      opacity: 0,
      x: -50,
      autoAlpha: 0,
      stagger: {
        each: 0.1,
        from: "top",
        ease: "power2.inOut",
      },
    },
    {
      opacity: 1,
      x: 0,
      autoAlpha: 1,
      delay: 1,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "top",
        ease: "power2.inOut",
      },
    }
  );
};
const animateButtonContact = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    [".hero_buttons_contact"],
    {
      opacity: 0,
      x: 50,
      autoAlpha: 0,
      stagger: {
        each: 0.1,
        from: "top",
        ease: "power2.inOut",
      },
    },
    {
      opacity: 1,
      x: 0,
      autoAlpha: 1,
      delay: 1,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "top",
        ease: "power2.inOut",
      },
    }
  );
};
const animateHeroBG = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    [".hero_bg"],
    {
      opacity: 0,
 
      autoAlpha: 0,
      stagger: {
        each: 0.1,
        from: "top",
        ease: "power2.inOut",
      },
    },
    {
      opacity: 1,

      autoAlpha: 1,
      delay: 0,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "top",
        ease: "power2.inOut",
      },
    }
  );
};

onMounted(() => {
  animateHeroBG();
  animateImage();
  animateText();
  animateButtonService();
  animateButtonContact();
});
</script>
<style scoped lang="scss">
.hero_bg {
  position: absolute;
  left: 0;
  margin-top: 30px;
  width: 100%;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 85%, 0),
    #64f9c723 33.33%,
    #b8f08115 66.67%,
    hsla(0, 0%, 85%, 0)
  );
}

.hero_container {
  height: 84vh;
}
.hero_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  &_text {
    font-size: 70px;
    font-weight: 500;
    line-height: 85px;
    letter-spacing: 0em;
    font-family: 'Ubuntu';
    color: #dddddd;
    text-align: center;
    width: 80%;
  }
  &_services {
    background: linear-gradient(90deg, #89E18A 31.53%, #64F9C8 99.95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &_subtext {
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: #dddddd;
    width: 1100px;
  }
}

.hero_buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: -90px;

  &_icon_service {
    background: #dddddd0d;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &_icon_contact {
    background: #11161f1a;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_contact {
    display: flex;
    gap: 8px;
    align-items: center;
    border-radius: 24px;
    background: linear-gradient(90deg, #b8f081 0%, #64f9c8 100%);
    padding: 10px 25px;
    border: none;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    color: #000000;
    z-index: 5;

    &:hover {
      filter: drop-shadow(0 0 0.3rem #64f9c8);
      cursor: pointer;
    }
  }
  &_services {
    display: flex;
    gap: 8px;
    align-items: center;
    border-radius: 24px;
    background: #dddddd0d;
    padding: 10px 25px;
    border: none;
    font-family: 'Open Sans';
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
</style>
