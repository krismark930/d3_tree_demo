<template>
  <div>
    <div class="flex justify-between items-start">
      <div class="flex gap-2 w-4/5 flex-wrap items-center">
        <div class="text-base categories">Categories:</div>
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
      <div
        class="cursor-pointer text-[13px] flex gap-2 items-center text-[#64F9C8]"
      >
        Sort by date
        <svg
          width="15"
          height="13"
          viewBox="0 0 15 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9395 11.0649V0.768066H11.9395V11.0649L14.0801 8.92432L14.7988 9.62744L11.7988 12.6274H11.0801L8.08008 9.62744L8.79883 8.92432L10.9395 11.0649ZM0.439453 2.76807H7.43945V1.76807H0.439453V2.76807ZM7.43945 5.76807H2.43945V4.76807H7.43945V5.76807ZM7.43945 8.76807H4.43945V7.76807H7.43945V8.76807Z"
            fill="#64F9C8"
          />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <div class="flex gap-8 flex-wrap mt-12">
      <div
        v-for="(article, i) in activeCategory === 'All'
          ? articles
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
              <div v-for="(tag, i) in article.tags" :key="i">
                <div class="tag">{{ tag }}</div>
              </div>
            </div>
            <div class="article_container_head">{{ article.name }}</div>
            <div class="article_container_text">{{ article.text }}</div>
          </div>

          <div class="flex justify-between pb-4">
            <div class="flex items-center gap-2">
              <img :src="logo" width="25" />
              <div class="article_footer">{{ article.author }}</div>
            </div>
            <div class="flex items-center gap-2">
              <img :src="date" width="15" />
              <div class="article_footer">{{ article.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
 
      </div>
    </div>
    <div class="flex justify-center mt-5">
      <svg
        width="194"
        height="47"
        viewBox="0 0 194 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.530029"
          width="193"
          height="45"
          rx="22.5"
          stroke="#1B2B38"
        />
        <g opacity="0.3">
          <rect
            x="5"
            y="5.03003"
            width="36"
            height="36"
            rx="18"
            fill="#0F3236"
          />
          <path
            d="M25.3526 32.1951L16.7197 23.5622V22.5065L25.3526 13.8737L26.4317 14.9293L18.3149 23.0226L26.4317 31.1394L25.3526 32.1951Z"
            fill="#4BA57D"
          />
        </g>
        <path
          d="M85 45.03H61V47.03H85V45.03Z"
          fill="#4BA57D"
          mask="url(#path-4-inside-1_506_3417)"
        />
        <path
          d="M74.8529 16.1036V27.74H73.0916V17.865H73.0234L70.2393 19.6832V18.0014L73.1427 16.1036H74.8529Z"
          fill="white"
        />
        <path
          d="M91.5916 28.3345C91.3198 28.3345 91.0862 28.2383 90.8906 28.0461C90.6951 27.8505 90.5973 27.6152 90.5973 27.3401C90.5973 27.0684 90.6951 26.8363 90.8906 26.6441C91.0862 26.4486 91.3198 26.3508 91.5916 26.3508C91.8634 26.3508 92.0971 26.4486 92.2926 26.6441C92.4882 26.8363 92.5859 27.0684 92.5859 27.3401C92.5859 27.5224 92.5395 27.6898 92.4467 27.8423C92.3572 27.9914 92.2379 28.1107 92.0888 28.2002C91.9396 28.2897 91.7739 28.3345 91.5916 28.3345ZM96.1965 28.3345C95.9247 28.3345 95.691 28.2383 95.4955 28.0461C95.2999 27.8505 95.2021 27.6152 95.2021 27.3401C95.2021 27.0684 95.2999 26.8363 95.4955 26.6441C95.691 26.4486 95.9247 26.3508 96.1965 26.3508C96.4682 26.3508 96.7019 26.4486 96.8975 26.6441C97.093 26.8363 97.1908 27.0684 97.1908 27.3401C97.1908 27.5224 97.1444 27.6898 97.0516 27.8423C96.9621 27.9914 96.8428 28.1107 96.6936 28.2002C96.5445 28.2897 96.3788 28.3345 96.1965 28.3345ZM100.801 28.3345C100.53 28.3345 100.296 28.2383 100.1 28.0461C99.9048 27.8505 99.807 27.6152 99.807 27.3401C99.807 27.0684 99.9048 26.8363 100.1 26.6441C100.296 26.4486 100.53 26.3508 100.801 26.3508C101.073 26.3508 101.307 26.4486 101.502 26.6441C101.698 26.8363 101.796 27.0684 101.796 27.3401C101.796 27.5224 101.749 27.6898 101.656 27.8423C101.567 27.9914 101.448 28.1107 101.298 28.2002C101.149 28.2897 100.984 28.3345 100.801 28.3345Z"
          fill="#3C5061"
        />
        <path
          d="M111.458 28.24V27.0468L115.15 23.2222C115.544 22.8068 115.869 22.4428 116.125 22.1303C116.384 21.8142 116.577 21.5141 116.705 21.23C116.833 20.946 116.897 20.6441 116.897 20.3245C116.897 19.9623 116.812 19.6498 116.641 19.387C116.471 19.1207 116.238 18.9165 115.943 18.7744C115.649 18.6288 115.317 18.556 114.947 18.556C114.557 18.556 114.216 18.6359 113.925 18.7957C113.633 18.9555 113.41 19.181 113.253 19.4722C113.097 19.7634 113.019 20.1043 113.019 20.495H111.448C111.448 19.8309 111.6 19.2503 111.906 18.7531C112.211 18.256 112.63 17.8707 113.163 17.5972C113.696 17.3202 114.301 17.1818 114.979 17.1818C115.665 17.1818 116.268 17.3185 116.79 17.5919C117.316 17.8618 117.726 18.2311 118.021 18.6999C118.316 19.1651 118.463 19.6906 118.463 20.2766C118.463 20.6814 118.387 21.0773 118.234 21.4644C118.085 21.8515 117.824 22.283 117.451 22.7588C117.078 23.2311 116.56 23.8046 115.896 24.4793L113.728 26.7485V26.8284H118.639V28.24H111.458ZM125.096 28.4211C124.254 28.4175 123.535 28.1956 122.938 27.7553C122.342 27.3149 121.885 26.6739 121.569 25.8323C121.253 24.9907 121.095 23.9769 121.095 22.7908C121.095 21.6082 121.253 20.5979 121.569 19.7599C121.889 18.9218 122.347 18.2826 122.944 17.8423C123.544 17.4019 124.261 17.1818 125.096 17.1818C125.93 17.1818 126.646 17.4037 127.242 17.8476C127.839 18.2879 128.295 18.9271 128.611 19.7652C128.931 20.5997 129.091 21.6082 129.091 22.7908C129.091 23.9804 128.933 24.996 128.616 25.8376C128.3 26.6757 127.844 27.3167 127.248 27.7606C126.651 28.2009 125.934 28.4211 125.096 28.4211ZM125.096 26.9989C125.834 26.9989 126.411 26.6384 126.827 25.9175C127.246 25.1967 127.455 24.1544 127.455 22.7908C127.455 21.8852 127.359 21.12 127.168 20.495C126.979 19.8664 126.708 19.3906 126.353 19.0674C126.001 18.7407 125.582 18.5773 125.096 18.5773C124.36 18.5773 123.783 18.9396 123.364 19.664C122.945 20.3884 122.734 21.4307 122.73 22.7908C122.73 23.6999 122.825 24.4687 123.013 25.0972C123.205 25.7222 123.476 26.1963 123.828 26.5195C124.179 26.8391 124.602 26.9989 125.096 26.9989Z"
          fill="#4BA57D"
        />
        <rect
          x="153"
          y="5.03003"
          width="36"
          height="36"
          rx="18"
          fill="#0F3236"
        />
        <path
          d="M167.799 13.8737L176.432 22.5065V23.5622L167.799 32.1951L166.72 31.1394L174.837 23.0226L166.72 14.9293L167.799 13.8737Z"
          fill="#4BA57D"
        />
      </svg>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import date from "@/assets/blog/date.svg";
import logo from "@/assets/logo.svg";
import articles from "@/assets/mock/articles.json"




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
  return articles.filter((item) =>
    item.tags.includes(activeCategory.value)
  );
}
</script>
<style lang="scss" scoped>
.category {
  font-size: clamp(10px, 1vw, 13px);
  font-weight: 500;
  line-height: 14px;
  text-align: center;

  padding: 9px 18px;
  background: #ffffff0d;
  border-radius: 48px;
  color: #BCCBD6;

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

.tag {
  background-color: #053022;
  padding: 3px 10px;
  font-family: 'Karla';
  font-size: clamp(8px, 1vw, 13px);
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0.7799999713897705px;
  text-align: left;

  border-radius: 5px;
  color: #BCCBD6;
}

.article_container {
 

  width: 31.5%;
  height: 600px;
  border-radius: 25px;
  background: linear-gradient(
    rgba(100, 249, 200, 0.2) 0%,
    rgba(100, 249, 200, 0.05) 100%
  );

  &_img {
    border-radius: 25px 25px 0 0;
    height: 230px;
    width: 100%;
  }

  &_head {
    font-family: 'Inter';
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.7200000286102295px;
    margin-top: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &_text {
    font-family: 'Karla';
    font-size: 16px;
    font-weight: 300;
    line-height: 24px; /* 150% */
    letter-spacing: 0.64px;
    text-align: left;
    color: rgba(255, 255, 255, 0.70);
    margin-top: 10px;
  }
}

.article_footer {
  font-family: 'Karla';
  font-size: 13px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0.78px;
  color: #ffffffb2;
}

.categories {
  color: #BCCBD6;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 300;
  line-height: 14px; /* 100% */
}
</style>
