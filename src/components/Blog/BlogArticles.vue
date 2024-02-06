<template>
  <section class="mt-56 mb-36">
    <div class="big_article_container">
      <div class="w-1/2">
        <img :src="blog_image" class="big_article_container_img" />
      </div>
      <div class="w-1/2 big_article_container_right pl-5">
        <div class="flex justify-end">
          <img :src="pin" class="pr-4 pt-4" />
        </div>
        <div class="flex">
          <div class="tag">Ecosystem</div>
        </div>
        <div class="flex-col flex gap-14">
          <div>
            <div class="big_article_container_head">
              Introducing the 50M USD D3 Ecosystem Funding Program to Fuel Web3
            </div>
            <div class="big_article_container_text">
              Aleph Zero Foundation and its partner network are pleased to
              present an initiative to support developers in bringing adoption
              to Web3
            </div>
          </div>
          <div class="flex justify-between pr-4">
            <div class="flex items-center gap-[8px]">
              <img :src="logo" width="25" />
              <div class="article_footer">Nick Arbuckle</div>
            </div>
            <div class="flex items-center gap-[8px]">
              <img :src="date" width="15" />
              <div class="article_footer">Apr 18, 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="newsletter_container">
      <div class="w-2/3">
        <div class="big_article_container_head !mt-0">
          <span class="text-white">Subscribe</span><span class="big_article_container_small_title"> to our blog!</span>
        </div>
        <div class="big_article_container_text">
          Get our fresh, new content straight to your inbox.
        </div>
      </div>
      <div class="button_subscribe">
        <div class="flex items-center gap-2">
        <img :src="mail_icon" width="20"/> 
        Subscribe now
    </div>
      </div>
    </div>
  </section>


  <section class="mt-16 mb-96">
    <BlogCatalog/>
  </section>
</template>
<script setup>
import blog_image from "@/assets/blog/pepe.png";
import pin from "@/assets/blog/pin.svg";
import date from "@/assets/blog/date.svg";
import logo from "@/assets/logo.svg";
import mail_icon from "@/assets/blog/mail_icon.svg";
import BlogCatalog from "./BlogCatalog.vue";
</script>
<style lang="scss" scoped>
.big_article_container {
  display: flex;
  border-radius: 25px;
  &_img {
    border-radius: 25px 0 0 25px;
  }
  &_right {
    border-radius: 0 25px 25px 0;

    background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(100, 249, 200, 0.2) 0%,
      rgba(100, 249, 200, 0.05) 100%
    );
  }
  &_head {
    font-family: 'Inter';
    font-size: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
    overflow: hidden;
    line-height: 28px;
    letter-spacing: 0.7200000286102295px;
    margin-top: 20px;
    width: 90%;
  }
  &_small_title {
    color: #FFF;
    font-family: 'Poppins';
    font-size: 23px;
    font-style: normal;
    font-weight: 300;
    line-height: 28.32px; /* 123.13% */
    letter-spacing: 0.72px;
    color: rgba(255, 255, 255, 0.80);
  }

  &_text {
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    line-height: 23px;
    letter-spacing: 0.6399999856948853px;
    text-align: left;
    color: rgba(255, 255, 255, 0.60);
    margin-top: 10px;
    width: 90%;
  }
}

.newsletter_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  margin-top: 30px;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(100, 249, 200, 0.2) 0%,
    rgba(100, 249, 200, 0.05) 100%
  );
  border-radius: 25px;
  padding: 20px 30px;
}

.button_subscribe {
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.64px;
  text-align: center;
  color: #111B24;
  padding: 8px 12px;
  border-radius:25px;
  background: linear-gradient(90deg, #B8F081 0%, #64F9C8 100%);
  filter: drop-shadow(0 0 0.3rem #B8F081);
  cursor: pointer;
  &:hover {
      background: linear-gradient(90deg, #B8F081 0%, #64F9C8 100%);
      filter: drop-shadow(0 0 0.6rem #B8F081);
  }
}

.tag {
  background-color: #003826;
  padding: 3px 10px;
  font-family: 'Poppins';
  font-size: 13px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0.7799999713897705px;
  text-align: left;
  border-radius: 5px;
  color: white;
}

.article_footer {
  font-family: 'Karla';
  font-size: 13px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0.7799999713897705px;
  color: #ffffffb2;
}

.text-white {
  font-weight: 700;
}
</style>
