<template>
  <section class="mb-96 process">
    <div class="text-center" id="title" :class="{ active: titleCss }">
      <div class="our_values_header mb-3">Our Process</div>
      <div class="our_values_subtext">
        Elevate your presence in the decentralized era with D3's Web3 Design and
        UX/UI services. Our strategic approach goes beyond aesthetics, providing a
        competitive edge in the dynamic digital landscape.
      </div>
    </div>
    <section id="panels">

      <div id="panels-container" style="width: 760%;">
        <article id="panel-5" class="panel full-screen">

          <div class="container">
            <div class="row">
              <div class="col-12 d-flex flex-column">
                <div class="cards-wrapper">
                  <div class="card card1">
                    <div class="mt-10 mb-20 pb-10 overflow-x-auto stepper_container">
                      <!-- <img :src="ourProcessSVG" class="stepper"/> -->
                      <svg class="active" width="1793" height="111" viewBox="0 0 1793 111" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1150 54.2131L1459.5 96.2131L2331 69.2131" stroke="#152329" stroke-width="5" />
                        <circle cx="170" cy="104" r="7" fill="#152329" :style="{ fill: isActive ? '#89E18A' : '#152329' }"/>
                        <path d="M1 56.2131L168 103.713 L1096 56.2131" stroke="#152329" stroke-width="5" />
                      </svg>
                      <svg class="inactive" width="1793" height="111" viewBox="0 0 1793 111" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <!-- <path id="path2" class="path" d="M1150 54.2131L1459.5 96.2131L2331 69.2131" stroke="#152329" stroke-width="5" /> -->
                        <path id="path1" class="path" d="M1 56.2131L168 103.713L1096 56.2131 L1150 54.2131L1459.5 96.2131L2331 69.2131" stroke="#89E18A"
                          stroke-width="5" :style="{ display: isActive ? 'block' : 'none' }"/>
                      </svg>
                      <div class="slide">
                        <div class="point start">
                          <h5>P1</h5>
                          <div>
                            <img :src="activePoint" />
                          </div>
                        </div>
                        <div class="description" :class="{ active: isActive }">
                          <h5>Exploration Meeting</h5>
                          <p>Dive into a comprehensive needs assessment session where we utilize a targeted set of
                            questions to understand
                            your <strong>Web3 goals</strong>, pain points, and end-user expectations.</p>
                        </div>
                        <div class="point end">
                          <h5>P2</h5>
                          <div>
                            <img :src="isActive ? activePoint : inactivePoint" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card card2">
                    <div class="mt-10 mb-20 pb-10 overflow-x-auto stepper_container">
                      <svg class="active" style="margin-left: -150px;" width="1920" height="111" viewBox="0 0 1920 111"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="path2" d="M0 99 L1370 44 L1700 20" stroke="#89E18A" stroke-width="5" :style="{ display: isActive1 ? 'block' : 'none' }"/>
                        <circle cx="157" cy="94" r="7" fill="#89E18A" :style="{ fill: isActive1 ? '#89E18A' : '#152329' }"/>
                        <!-- <path d="M1370 44 L1700 20" stroke="#89E18A" stroke-width="5" /> -->
                      </svg>
                      <div class="slide">
                        <div class="description" :class="{ active: isActive1 }">
                          <h5>Assessment and Solution</h5>
                          <p>We assess all options and present you with a tailored solution along with a transparent
                            quote. Our <strong>solutions</strong> are driven by your needs, ensuring a strategic fit for
                            your Web3 project.</p>
                        </div>
                        <div class="point end">
                          <div>
                            <img :src="isActive1 ? activePoint : inactivePoint" />
                          </div>
                          <h5>P3</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card card3">
                    <div class="mt-10 mb-20 pb-10 overflow-x-auto stepper_container">
                      <svg class="active" style="margin-left: 0;" width="1793" height="111" viewBox="0 0 1793 111"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- <path id="path6" class="path" d="M1230 100 L1700 30" stroke="#89E18A" stroke-width="5" /> -->
                        <circle cx="5" cy="20" r="7" fill="#89E18A" :style="{ fill: isActive2 ? '#89E18A' : '#152329' }"/>
                        <path id="path3" class="path" d="M0 21 L1230 100 L1700 30" stroke="#89E18A" stroke-width="5" :style="{ display: isActive2 ? 'block' : 'none' }"/>
                      </svg>
                      <div class="slide">
                        <div class="description" :class="{ active: isActive2 }">
                          <h5>Exploration Meeting</h5>
                          <p>Dive into a comprehensive needs assessment session where we utilize a targeted set of
                            questions to understand
                            your <strong>Web3 goals</strong>, pain points, and end-user expectations.</p>
                        </div>
                        <div class="point end">
                          <h5>P4</h5>
                          <div>
                            <img :src="isActive2 ? activePoint : inactivePoint"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card card4">
                    <div class="mt-10 mb-20 pb-10 overflow-x-auto stepper_container">
                      <svg class="active" style="margin-left: -150px;" width="1920" height="111" viewBox="0 0 1920 111"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="path4" d="M0 56 L1370 44 L1700 100" stroke="#89E18A" stroke-width="5" :style="{ display: isActive3 ? 'block' : 'none' }"/>
                        <circle cx="158" cy="54" r="7" fill="#89E18A" :style="{ fill: isActive3 ? '#89E18A' : '#152329' }"/>
                        <!-- <path id="path4" d="M1370 44 L1700 100" stroke="#89E18A" stroke-width="5" /> -->
                      </svg>
                      <div class="slide">
                        <div class="description" :class="{ active: isActive3 }">
                          <h5>Regular Update Meetings</h5>
                          <p>Stay informed and engaged with regular update meetings. We compare the development roadmap
                            with KPIs, ensuring transparency and alignment throughout the project.</p>
                        </div>
                        <div class="point end">
                          <div>
                            <img :src="isActive3 ? activePoint : inactivePoint" />
                          </div>
                          <h5>P5</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card card5">
                    <div class="mt-10 mb-20 pb-10 overflow-x-auto stepper_container">
                      <svg class="active" style="margin-left: 0;" width="1793" height="111" viewBox="0 0 1793 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- <path id="path10" d="M1230 50 L1700 57" stroke="#89E18A" stroke-width="5" /> -->
                        <circle cx="6" cy="98" r="7" fill="#89E18A" :style="{ fill: isActive4 ? '#89E18A' : '#152329' }"/>
                        <path id="path5" class="path" d="M0 98 L1230 50 L1700 57" stroke="#89E18A" stroke-width="5" :style="{ display: isActive4 ? 'block' : 'none' }"/>
                      </svg>
                      <div class="slide">
                        <div class="description" :class="{ active: isActive4 }">
                          <h5>Delivery of Work and Feedback</h5>
                          <p>Experience the <strong>final delivery</strong> of your project with one round of feedback and
                            in-scope iterations. Your satisfaction is our priority.</p>
                        </div>
                        <div class="point end">
                          <h5>P6</h5>
                          <div>
                            <img :src="isActive4 ? activePoint : inactivePoint" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card card6">
                    <div class="mt-10 mb-20 pb-10 overflow-x-auto stepper_container">
                      <svg class="active" style="margin-left: 0;" width="1793" height="111" viewBox="0 0 1793 111"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="168" cy="102" r="7" fill="#89E18A" :style="{ fill: isActive5 ? '#89E18A' : '#152329' }"/>
                        <!-- <path class="path" d="M1150 54.2131 L1700 20" stroke="#89E18A" stroke-width="5" /> -->
                        <path id="path6" class="path" d="M1 56.2131L168 103.713L1096 56.2131 L1700 20" stroke="#89E18A"
                          stroke-width="5" :style="{ display: isActive5 ? 'block' : 'none' }"/>
                      </svg>
                      <div class="slide">
                        <div class="description" :class="{ active: isActive5 }">
                          <h5>Delivery of Work and Feedback</h5>
                          <p>Experience the <strong>final delivery</strong> of your project with one round of feedback and
                            in-scope iterations. Your satisfaction is our priority.</p>
                        </div>
                        <div class="point end">
                          <div>
                            <img :src="isActive5 ? activePoint : inactivePoint" />
                          </div>
                          <h5>P7</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card card7">
                    <div class="mt-10 mb-20 pb-10 overflow-x-auto stepper_container">
                      <svg class="active" style="margin-left: 0;" width="1793" height="111" viewBox="0 0 1793 111"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="28" r="7" fill="#89E18A" :style="{ fill: isActive6 ? '#89E18A' : '#152329' }"/>
                        <path id="path7" class="path" d="M0 28 L740 28" stroke="#89E18A" stroke-width="5" :style="{ display: isActive6 ? 'block' : 'none' }"/>
                      </svg>
                      <div class="slide">
                        <div class="description" :class="{ active: isActive6 }">
                          <h5>Maintenance and Ongoing Support</h5>
                          <p>Benefit from one month of <strong>free maintenance</strong> post-deployment. For ongoing
                            peace of mind, consider our maintenance contracts, offering efficient and prompt support for
                            the longevity of your codebase.</p>
                        </div>
                        <div class="point end">
                          <div>
                            <img :src="isActive6 ? activePoint : inactivePoint" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
    <div class="text-center title-bottom" :class="{ active: titleCss }">
      <div class="our_values_header mb-3">Our Process</div>
      <div class="our_values_subtext">
        Elevate your presence in the decentralized era with D3's Web3 Design and
        UX/UI services. Our strategic approach goes beyond aesthetics, providing a
        competitive edge in the dynamic digital landscape.
      </div>
    </div>
  </section>
</template>
<script setup>
// import ourProcessSVG from '@/assets/stepper/ourProcessSVG.svg'
import activePoint from '@/assets/stepper/activePoint.svg';
import inactivePoint from '@/assets/stepper/inactivePoint.svg';
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// const drawline = () => {
//   const tl = gsap.timeline();
//   tl.fromTo(
//     ["#path"],
//     {
//       opacity: 0,
//       autoAlpha: 0,
//     },
//     {
//       opacity: 1,
//       duration: 4,
//       delay: 0.5,
//       autoAlpha: 1,
//     }
//   );
// };

const animation = (id) => {
  const tl = gsap.timeline();
  const path = document.querySelector(id);
  const length = path.getTotalLength();

  tl.set(path, {
    strokeDashoffset: length,
    strokeDasharray: length,
  }).to(path, {
    strokeDashoffset: 0,
    duration: 3,
    ease: "none",
  })
}

const isActive = ref(false);
const isActive1 = ref(false);
const isActive2 = ref(false);
const isActive3 = ref(false);
const isActive4 = ref(false);
const isActive5 = ref(false);
const isActive6 = ref(false);

const titleCss = ref(false);

onMounted(() => {
  gsap.to(["#panels-container .panel"], {
    x: () => -1 * (10700 - innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: "#panels-container",
      pin: true,
      start: "top 30% top",
      scrub: 1,
      end: () => "+=" + (10700 - innerWidth),
      onUpdate: (self) => {
        console.log(self.progress);
        if (Math.abs(self.progress - 0.0014) < 0.001) {
          animation("#path1");
        }

        if (self.progress > 0.0014) {
          isActive.value = true;
        } else {
          isActive.value = false;
        }

        if (Math.abs(self.progress - 0.023) < 0.001) {
          animation("#path2");
        }

        if (self.progress > 0.023) {
          isActive1.value = true;
        } else {
          isActive1.value = false;
        }

        if (Math.abs(self.progress - 0.21) < 0.001) {
          animation("#path3");
        }

        if (self.progress > 0.21) {
          isActive2.value = true;
        } else {
          isActive2.value = false;
        }

        if (Math.abs(self.progress - 0.37) < 0.001) {
          animation("#path4");
        }

        if (self.progress > 0.37) {
          isActive3.value = true;
        } else {
          isActive3.value = false;
        }

        if (Math.abs(self.progress - 0.55) < 0.001) {
          animation("#path5");
        }

        if (self.progress > 0.55) {
          isActive4.value = true;
        } else {
          isActive4.value = false;
        }

        if (Math.abs(self.progress - 0.71) < 0.001) {
          animation("#path6");
        }

        if (self.progress > 0.71) {
          isActive5.value = true;
        } else {
          isActive5.value = false;
        }

        if (Math.abs(self.progress - 0.89) < 0.001) {
          animation("#path7");
        }

        if (self.progress > 0.89) {
          isActive6.value = true;
        } else {
          isActive6.value = false;
        }

        if (self.progress < 1 && self.progress > 0) {
          titleCss.value = true;
        } else {
          titleCss.value = false;
        }
      }
    }
  });
});
// import path1 from '@/assets/stepper/path1.svg';
</script>
<style lang="scss" scoped>
.our_values_header {
  font-size: 60px;
  font-weight: 700;
  width: fit-content;
  margin: 0 auto;
  line-height: 60px;
  letter-spacing: 0em;
  background: linear-gradient(90deg, #B8F081 0%, #64F9C8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 150px;
}

.our_values_subtext {
  font-family: 'Open Sans';
  padding-top: 34px;
  font-size: 24px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  color: #dddddd;
  text-align: center;
  width: 1150px;
  margin: 0 auto;
}

.process {
  // background: #040F15;
}

.stepper {
  max-width: none;
}

.stepper_container {}

/* Scrollbar */
.stepper_container::-webkit-scrollbar {

  height: 2px;
  width: 2px;
}

.stepper_container::-webkit-scrollbar {

  background: gray;
}

.stepper_container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 192, 135);
  border-radius: 100%;

}

.slide {
  display: flex;
  margin-top: -252px;
}

.point {
  h5 {
    font-family: 'Plus Jakarta Sans';
    font-size: 72px;
    font-weight: 800;
    line-height: 101px;
    letter-spacing: 0.11em;
    text-align: left;
    color: #89E18A;
    margin-bottom: 60px;
  }
}

.start {
  padding-left: 50px;
}

.end {
  margin-left: auto;
  margin-right: 240px;
}

.description {
  width: 572px;
  padding: 12px;
  padding-right: 0;

  margin-left: 125px;
  margin-top: 250px;

  border-style: dashed;
  border-width: 0 0 0 2px;
  padding-left: 45px;
  border-color: linear-gradient(180deg, #152329 0%, rgba(21, 35, 41, 0) 99.75%);
  // border-color: #64F9C8;

  h5 {
    font-family: "Open Sans";
    font-size: 30px;
    font-weight: 600;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
  }

  p {
    font-family: "Open Sans";
    font-size: 20px;
    font-weight: 300;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;

    strong {
      color: #89E18A;
    }
  }
}

.description.active {
  border-color: #64F9C8;
}

svg.active {
  margin-left: 103px;
  margin-top: 140px;
}

svg.inactive {
  margin-left: 103px;
  margin-top: -111px;
}

.cards-wrapper {
  display: flex;
}

.card {
  width: 100%;
}

#panel-5 {
  width: unset;
  flex: 1 0 auto
}

#panels-container {
  overflow: hidden;
}

#panels #panels-container {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding: 0;
  overflow: hidden;
}

#panels #panels-container .panel {
  position: relative;
  min-width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: left;
  border-right: 1px solid #f00;
}

.card2 .description {
  margin-top: 0;
  margin-left: 5px;
  height: 227px;
}

.card2 .point.end {
  margin-top: 156px;
}

.card2 .point h5 {
  margin-bottom: 0;
  margin-top: 60px;
}

.card2 .stepper_container {
  padding-bottom: 101px;
  overflow-y: hidden;
}

.card3 .description {
  margin-left: 5px;
  margin-top: 175px;
  padding-bottom: 57px;
  padding-top: 42px;
}

.card3 .point {
  margin-top: 50px;
}

.card4 .description {
  margin-top: 214px;
  margin-left: 8px;
}

.card4 .point h5 {
  margin-bottom: 0;
  margin-top: 60px;
}

.card4 .point.end {
  margin-top: 156px;
}

.card5 .description {
  margin-left: 6px;
}

.card6 .description {
  margin-left: 166px;
}

.card6 .point h5 {
  margin-bottom: 0;
  margin-top: 60px;
}

.card6 .point.end {
  margin-top: 167px;
  margin-right: 343px;
}

.card7 .description {
  margin-top: 176px;
  margin-left: 10px;
  margin-bottom: 38px;
}

.card7 .point.end {
  margin-top: 142px;
  margin-right: 743px;
}
#title.active {
  position: fixed;
  bottom: 68vh;
  margin-left: 5vw;
  text-align: center;
}

#panels {
  overflow-x: hidden;
}
.title-bottom.active {
  display: none;
}
.title-bottom {
  display: block;
  margin-top: -135vh;
  margin-bottom: 135vh;
}
</style>
