<template>
  <section class="mt-52 mb-96">
    <div class="mb-12">
      <div class="article_header">{{ articleData.name }}</div>
      <div class="article_subheader">{{ articleData.text }}</div>
    </div>
    <div class="flex gap-4 items-center">
      <div class="article_author">{{ articleData.author }}</div>
      <div class="article_date">{{ articleData.date }}</div>
    </div>
    <div>
      <img :src="articleData.img" class="article_img" />
    </div>
    <div class="flex mt-6">
      <div class="w-1/5">
        <div class="share_container">
          <div>SHARE</div>
          <div class="flex gap-2 items-center">
            <a class="cursor-pointer">
              <img :src="twitter" />
            </a>
            <a class="cursor-pointer">
              <img :src="linkedin" />
            </a>
            <a class="cursor-pointer">
              <img :src="telegram" />
            </a>
            <a class="cursor-pointer">
              <img :src="mail" />
            </a>
            <a class="cursor-pointer">
              <img :src="chain" />
            </a>
          </div>
        </div>
      </div>
      <div class="w-4/5">
        <div class="article_content mb-6">
          <p>
            Solana mobile announced Friday that it had sold out of its Saga
            phones in the US market.Virtually all Saga owners will mint the
            “Saga Genesis NFT” the first time they boot up the phone.Virtually
            all Saga owners will mint the “Saga Genesis NFT” the first time they
            boot up the phone.Virtually all Saga owners will mint the “Saga
            Genesis NFT” the first time they boot up the phone.Virtually all
            Saga owners will mint the “Saga Genesis NFT” the first time they
            boot up the phone.Virtually all Saga owners will mint the “Saga
            Genesis NFT” the first time they boot up the phone.Virtually all
            Saga owners will mint the “Saga Genesis NFT” the first time they
            boot up the phone.Virtually all Saga owners will mint the “Saga
            Genesis NFT” the first time they boot up the phone.Virtually all
            Saga owners will mint the “Saga Genesis NFT” the first time they
            boot up the phone.Virtually all Saga owners will mint the “Saga
            Genesis NFT” the first time they boot up the phone.Virtually all
            Saga owners will mint the “Saga Genesis NFT” the first time they
            boot up the phone.Virtually all Saga.
          </p>
          <div class="my-5">
            <img :src="example" />
          </div>
          <div>
            {{ articleData.article_content }}
          </div>
        </div>
        <hr style="border-top: 1px solid #e5e7eb" />
        <div class="article_subheader flex justify-end mt-2">
          <span class="mr-2">Don't miss the next big story - </span>
          <span class="article_link"> join our free daily newsletter.</span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2 mt-10">
      <div class="article_content">Categories:</div>
      <div
        class="flex items-center gap-2"
        v-for="(category, i) in articleData.tags"
        :key="`catgs-${i}`"
      >
        <div :class="'category'">
          {{ category }}
        </div>
      </div>
    </div>
    <div class="mt-24">
      <hr style="border-top: 1px solid #e5e7eb" />
      <div class="flex justify-between my-6 mx-6">
        <div class="article_subheader">Breaking headlines across our core coverage categories.</div>
        <div class="flex items-center more_news gap-1">
          MORE FROM NEWS
          <svg
            width="8"
            height="4"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.005 1.5H0V2.5H6.005V4L8 2L6.005 0V1.5Z"
              fill="#64F9C8"
            />
          </svg>
        </div>
      </div>
      <hr style="border-top: 1px solid #e5e7eb" />
    </div>

    <div>
      <div class="flex gap-2 flex-wrap items-center mt-12">
        <div class="text-base  article_content">Categories:</div>
        <div
          class="flex items-center gap-2"
          v-for="(category, i) in categories"
          :key="`catgs-${i}`"
        >
          <div
            :class="
              activeCategory === category
                ? 'category category_active'
                : 'category'
            "
            @click="activeCategory = category"
          >
            {{ category }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-8 flex-wrap mt-12">
      <div
        v-for="(article, i) in activeCategory === 'All'
          ? articles.slice(0, 5)
          : filteredArticles()"
        :key="`article-${i}`"
        class="article_container cursor-pointer"
      >
    
      <a :href="`/blog/${article.id}`">
        <div class="flex flex-col h-full">
        <div class="">
          <img :src="article.img" class="article_container_img" />
        </div>
        <div class="flex flex-col justify-between h-full p-4">
          <div>
            <div class="flex flex-row gap-2">
              <div>
                <div class="text-[10px] font-[Inter] text-[#64F9C8] uppercase" style="font-size: 8px;">{{ article.tags[0] }}</div>
              </div>
            </div>
            <div class="text-sm  font-[Inter] font-semibold text-[#64F9C8] mt-2">{{ article.name.slice(0, 29) }}</div>
            <div class="text-xs  font-[Inter] font-medium text-[#6A6A6A] mt-1">{{ article.text.slice(0, 50) }}...</div>
          </div>

          <div class="flex justify-between " style="font-size: 8px;">
            <div class="flex items-center gap-2 text-[#64F9C8]">
              BY <div class="article_footer">{{ article.author }}</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="article_footer">{{ article.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
 
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRoute } from "vue-router";
import articles from "@/assets/mock/articles.json";
import twitter from "@/assets/share_icons/twitter.svg";
import linkedin from "@/assets/share_icons/linkedin.svg";
import telegram from "@/assets/share_icons/telegram.svg";
import mail from "@/assets/share_icons/mail.svg";
import chain from "@/assets/share_icons/chain.svg";
import example from "@/assets/blog/example.png";
import { ref } from "vue";

const Route = useRoute();

const articleData = articles[Route.path.split("/").pop() - 1];

console.log(articleData);


const categories = ref([
  "All",
  "Progress",
  "Ecosystem",
  "Events",
  "Applications",
  "Technology",
  "Business",
  "Fundamentals",
  "Tutorials",
  "Featured",
  "Others",
]);

const activeCategory = ref("All");

function filteredArticles() {
  return articles.slice(0, 5).filter((item) =>
    item.tags.includes(activeCategory.value)
  );
}


</script>
<style lang="scss" scoped>
.article {
  &_header {
    font-size: 47px;
    font-weight: 400;
    line-height: 62px;
    letter-spacing: 0em;
    font-family: 'Poppins';
    color: #64f9c8;
  }
  &_subheader {
    padding-top: 20px;
    font-family: 'Poppins';
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 28px;
  }
  &_author {
    font-family: 'Poppins';
    font-size: 13px;
    font-weight: 300;
    color: #ffffffb2;
    text-transform: uppercase;
  }
  &_date {
    font-family: 'Poppins';
    font-size: 12px;
    font-weight: 400;
    color: #64f9c8;
    text-transform: uppercase;
  }
  &_img {
    width: 100%;
    margin-top: 20px;
    height: 450px;
    object-fit: cover;
  }
  &_content {
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    color: #999999;
  }
  &_link {
    border-bottom: 1px solid #64f9c8;
    color: #64f9c8;
  }
}

.share_container {
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  //   align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 0px 20px;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(100, 249, 200, 0.2) 0%,
    rgba(100, 249, 200, 0.05) 100%
  );
  border-radius: 25px;
  font-family: 'Poppins';
  font-size: clamp(10px, 1vw, 14px);
  font-weight: 400;
  line-height: 20px;
  color: #64f9c8;
}

.category {
  color: #BCCBD6;
  font-family: 'Inter';
  font-size: clamp(10px, 1vw, 12px);
  font-weight: 700;
  line-height: 14px;
  text-align: center;

  padding: 9px 18px;
  background: #ffffff0d;
  border-radius: 48px;

  cursor: pointer;
  &_active {
    background: linear-gradient(90deg, #b8f081 0%, #64f9c8 100%);
    box-shadow: 0px 0px 40px -5px #64f9c80d;
    color: #111b24;
    filter: drop-shadow(0 0 0.3rem #b8f081);
  }
  &:hover {
    background: linear-gradient(90deg, #b8f081 0%, #64f9c8 100%);
    filter: drop-shadow(0 0 0.6rem #b8f081);
    color: #111b24;
  }
}

.more_news {
  font-size: clamp(10px, 1vw, 14px);
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #64F9C8;
}


.article_container {
 width: 17.8%;
 height: 300px;
 border-radius: 25px;
 background: linear-gradient(
   rgba(100, 249, 200, 0.15) 0%,
   rgba(100, 249, 200, 0.01) 100%
 );

 &_img {
  //  border-radius: 25px 25px 0 0;
   height: 120px;
   width: 100%;
 }

 &_head {
   font-size: 20px;
   font-weight: 600;
   line-height: 28px;
   letter-spacing: 0.7200000286102295px;
   margin-top: 20px;
 }
 &_text {
   font-size: clamp(12px, 1vw, 14px);
   font-weight: 300;
   line-height: 24px;
   letter-spacing: 0.6399999856948853px;
   text-align: left;
   color: #ffffffb2;
   margin-top: 10px;
 }
}
.article_footer {
  font-size: clamp(8px, 1vw, 10px);
  font-weight: 200;
  line-height: 18px;
  letter-spacing: 0.7799999713897705px;
  color: #ffffffb2;
}
</style>
