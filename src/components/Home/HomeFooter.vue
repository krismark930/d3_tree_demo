<template>
  <div class="footer_bg">
    <img :src="footer_bg" width="800px" />
  </div>

  <main class="footer_container">
    <div class="footer_logo">
      <div class="footer_logo_text">
      <span>let's build the next big thing, <span class="footer_logo_services">together</span></span>
      </div>
      <div class="footer_buttons">
      
      <button class="footer_buttons_contact">
        <div class="footer_buttons_icon_contact">
          <img :src="messageBlack" />
        </div>
        Talk to us
      </button>
    </div>
    </div>
    
  </main>
</template>
<script setup>
import footer_bg from "@/assets/footer_bg.svg";
import messageBlack from "@/assets/messageBlack.svg";

</script>
<style lang="scss" scoped>


.footer_bg {

  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  margin-top: -50px;
  width: 100%;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 85%, 0),
    #64f9c723 33.33%,
    #b8f08115 66.67%,
    hsla(0, 0%, 85%, 0)
  );
}


.footer_container {
  height: 84vh;
}
.footer_logo {
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
    width: 735px;
  }
  &_services {
    background: linear-gradient(90deg, #B8F081 0%, #64F9C8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &_subtext {
    font-size: clamp(18px, 1vw, 24px);
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: #dddddd;
    width: 75%;
  }
}

.footer_buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 70px;

 
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
    border-radius: 12px;
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

}
</style>
