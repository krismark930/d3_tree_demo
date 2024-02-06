<template>
  <div class="mt-3 mb-3 py-2">
    <div
      class="flex justify-between items-center cursor-pointer"
      @click="toggleActive"
    >
      <div class="acccordion_text">{{ accordionName }}</div>
      <div>
        <img
          :src="arrow"
          :class="isActiveProp === true ? 'toggle-up' : 'toggle-down'"
        />
      </div>
    </div>
    <transition name="slide">
      <div v-if="isActiveProp === true" class="mt-4 accordion_inside">
        {{ text }}
      </div>
    </transition>
  </div>
</template>
<script setup>
import arrow from "@/assets/arrow.svg";
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  accordionName: String,
  text: String,
  isActive: Boolean,
});

const isActiveProp = ref(props.isActive);

const emit = defineEmits(["updateActive"]);

const emitUpdateActive = (value) => {
  emit("updateActive", value);
};

const toggleActive = () => {
  isActiveProp.value = !isActiveProp.value;
  emitUpdateActive(isActiveProp.value);
};
</script>
<style lang="scss" scoped>
.acccordion_text {
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
}

.accordion_inside {
  font-family: 'Open Sans';
}

.toggle-up {
  transform: rotate(180deg);
  transition: transform 0.2s linear;
}

.toggle-down {
  transform: rotate(0);
  transition: transform 0.2s linear;
}

.slide-enter-active {
  animation: slide-in 0.3s ease-in-out;
}
.slide-leave-active {
  animation: slide-in reverse 0.2s ease-in-out;
}
@keyframes slide-in {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
