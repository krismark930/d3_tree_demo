<template>
  <section ref="main" class="values_container">
    <div class="values_text">
      <div class="values_title">Our Values</div>
    </div>
    <div class="cards">
      <div class="card_container" v-for="(card, i) in CardsData" :key="i">
        <img class="card_image" :src="card.icon" />
        <div class="card_text">{{ card.title }}</div>
        <div class="card_subtext">{{ card.subtext }}</div>
      </div>
    </div>
    <div class="values_button">
        <ContactButton/>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useTransitionComposable } from '../../composables/transition-composable';
import originality from '@/assets/our_values/originality.svg'
import dedication from '@/assets/our_values/dedication.svg'
import deliveries from '@/assets/our_values/deliveries.svg'
import clarity from '@/assets/our_values/clarity.svg'
import reliability from '@/assets/our_values/reliability.svg'
import solutionCentric from '@/assets/our_values/solutionCentric.svg'
import ContactButton from '@/ui/ContactButton'

const CardsData = ref([
  {
    icon: originality,
    title: "Originality",
    subtext: "At our core, we embody originality. We're not your typical development company—we thrive on pushing boundaries and thinking beyond the ordinary. From ideation to execution, our original mindset sets us apart, ensuring that your projects transcend the commonplace and achieve extraordinary outcomes.",
  },
  {
    icon: dedication,
    title: "Dedication",
    subtext: "Dedication is the heartbeat of our ethos. When we make a commitment, consider it a promise etched in stone. Our unwavering dedication ensures that your expectations are not just met but exceeded, as we tirelessly work towards delivering solutions that align seamlessly with your vision and goals.",
  },
  {
    icon: reliability,
    title: "Reliability",
    subtext: "At our core, we embody originality. We're not your typical development company—we thrive on pushing boundaries and thinking beyond the ordinary. From ideation to execution, our original mindset sets us apart, ensuring that your projects transcend the commonplace and achieve extraordinary outcomes.",
  },
  {
    icon: deliveries,
    title: "Deliveries",
    subtext: "Reliability is our hallmark. At D3 Consistency is not just a virtue; it's ingrained in our work culture. We take pride in maintaining unwavering work quality and meeting delivery time frames with clockwork precision. Your projects deserve nothing less than a consistent stream of excellence.",
  },
  {
    icon: clarity,
    title: "Clarity",
    subtext: "Transparency is our language of expertise. As seasoned professionals, D3 provides candid insights into the feasibility and potential challenges of your projects. If something isn't viable, we won't hesitate to share our honest perspective, ensuring a clear and transparent collaboration that respects your goals and values.",
  },
  {
    icon: solutionCentric,
    title: "Solution-Centric",
    subtext: "At D3, we pride ourselves on being solution-centric in every aspect of our work. Our approach begins with a comprehensive, systems-driven consulting method—from the initial brief to ideation and all the way through to delivery. ",
  },
]);

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector(".card_container");
    boxes.forEach((box) => {
      gsap.fromTo(
        '.values_button',
        {
          y: 320,
          opacity: 0,
          scrollTrigger: {
            trigger: box,

            scrub: true,
          },
        },
        {
          y: 0,
          opacity: 1,

          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 25%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        box,
        {
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
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });
    
  }, main.value); // <- Scope!
});


// gsap.to(".values_button", {
//   scrollTrigger: ".values_button", 
//   opacity: 1,
// });

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});

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
<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 56px;
  margin-top: 56px;
}

.values {
    &_container {
      margin-bottom: 25%;
    }

    &_text {
      margin-top: 15%;
      width: 100%;
    }
      &_title {
        margin: 0 auto;
        width: fit-content;
        font-size: 70px;
        font-weight: 700;
        font-style: normal;
        line-height: 60px;
        letter-spacing: 0em;
        background: linear-gradient(90deg, #B8F081 0%, #64F9C8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

  &_button {
    display: flex;
    justify-content: center;
  }
}

.card_container {
  width: 383px;
  height: 436px;
  padding: 33px, 37px;
  border-radius: 25px;
  border: 1px solid #ffffff2a;
  background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(100, 249, 200, 0.2) 0%,
      rgba(100, 249, 199, 0.032) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
}

.card_image {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    margin-top: 5%;

}

.card_text {
  font-family: Open Sans;
  color: #FFF;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 43px;
  text-shadow: 13.349px 0px 33.373px rgba(200, 200, 200, 0.30), 0px 0px 33.373px rgba(56, 255, 171, 0.30), -13.349px 0px 33.373px rgba(56, 255, 171, 0.30);
}

.card_subtext {
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 18px;
  padding: 20px 40px;
  color: rgba(255, 255, 255, 0.753);
}

</style>
