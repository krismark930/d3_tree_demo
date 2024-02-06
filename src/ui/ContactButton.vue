<template>
  <button class="about_buttons_contact">
    <div class="about_buttons_icon_contact">
      <img :src="atom" />
    </div>
    Contact
  </button>
</template>
<script setup>
import atom from "@/assets/atom.svg";
</script>
<style lang="scss" scoped>
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
