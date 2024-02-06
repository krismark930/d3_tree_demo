<template>
  <section class="cards" ref="main">
    <div class="card_container" v-for="(card, i) in CardsData" :key="i">
      <div class="card_text">{{ card.title }}</div>
      <div class="card_subtext">{{ card.subtext }}</div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useTransitionComposable } from '../../composables/transition-composable';

const CardsData = ref([
  {
    title: "$57M+",
    subtext: "Combined TVL from projects at ATH 🔥",
  },
  {
    title: "30+",
    subtext: "Years of combined experience",
  },
  {
    title: "5+",
    subtext: "Experts team members",
  },
]);

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector('.card_container');
    boxes.forEach((box) => {
     
      gsap.fromTo(box, {
        x: -320,
        opacity: 0,
        scrollTrigger: {
          trigger: box,
        
          scrub: true,
        },
      },
      {
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
      },
      );
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});

// const animateCards = () => {
//   const tl = gsap.timeline();
//   tl.fromTo(
//     [".card_container"],
//     {
//       opacity: 0,
//       x: -50,
//       autoAlpha: 0,
//       stagger: {
//         each: 0.1,
//         from: "top",
//         ease: "power2.inOut",
//       },
//     },
//     {
//       opacity: 1,
//       x: 0,
//       autoAlpha: 1,
//       delay: 1.3,
//       duration: 1,
//       stagger: {
//         each: 0.1,
//         from: "top",
//         ease: "power2.inOut",
//       },
//     }
//   );
// };

// onMounted(() => {
//   animateCards();
// });
</script>
<style lang="scss">
.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  margin-top: 25%;
  margin-bottom: 25%;
}

.card_container {
  width: 343px;
  height: 330px;
  padding: 63px, 67px;
  border-radius: 25px;
  background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(100, 249, 200, 0.2) 0%,
      rgba(100, 249, 199, 0.032) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
}

.card_text {
  font-size: clamp(70px, 1vw, 70px);
  font-weight: 500;
  line-height: 85px;
  letter-spacing: 0em;
  color: #DDD;
  text-align: center;
  margin-top: 20%;
}

.card_subtext {
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  font-style: normal;
  margin-top: 20%;
  padding: 0px 90px;
  color: rgba(255, 255, 255, 0.6);
}
</style>
