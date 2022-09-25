<template>
  <div class="container">
    <div class="top-mv">
      <button @click="test_3">OK</button>
      <div class="top-banner">
        <img :src="TopView" />
        <img style="margin-top: -10px;" :src="TopBanner" />
      </div>
      <div class="top-menu-content">
        <ul>
          <li>
            <a href="https://ref-rela.com/schedule/"><img :src="Menu2" /></a>
            <a href="https://ref-rela.com/cast/"><img :src="Menu3" /></a>
            <a href="https://ref-rela.com/request/"><img :src="Menu6" /></a>
          </li>
          <li>
            <a href="https://ref-rela.com/"><img :src="Menu21" /></a>
            <a href="https://ref-rela.com/"><img :src="Menu22" /></a>
            <a href="https://ref-rela.com/"><img :src="Menu9" /></a>
          </li>
          <li>
            <a href="https://ref-rela.com/access/"><img :src="Menu10" /></a>
            <a href="https://ref-rela.com/system/"><img :src="Menu4" /></a>
            <a href="https://ref-rela.com/staff/"><img :src="Menu12" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import TopView from "@/assets/img/top-view.png";
  import TopBanner from "@/assets/img/top-banner.png";
  import Menu1 from "@/assets/img/menu1.png";
  import Menu2 from "@/assets/img/menu2.png";
  import Menu3 from "@/assets/img/menu3.png";
  import Menu4 from "@/assets/img/menu4.png";
  import Menu5 from "@/assets/img/menu5.png";
  import Menu6 from "@/assets/img/menu6.png";
  import Menu7 from "@/assets/img/menu7.png";
  import Menu8 from "@/assets/img/menu8.png";
  import Menu9 from "@/assets/img/menu9.png";
  import Menu10 from "@/assets/img/menu10.png";
  import Menu11 from "@/assets/img/menu11.png";
  import Menu12 from "@/assets/img/menu12.png";
  import Menu21 from "@/assets/img/Menu2-1.png";
  import Menu22 from "@/assets/img/Menu2-2.png";
  export default {
    data() {
      return {
        test:"",
        Menu1:Menu1,
        Menu2:Menu2,
        Menu3:Menu3,
        Menu4:Menu4,
        Menu5:Menu5,
        Menu6:Menu6,
        Menu7:Menu7,
        Menu8:Menu8,
        Menu9:Menu9,
        Menu10:Menu10,
        Menu11:Menu11,
        Menu12:Menu12,
        Menu21:Menu21,
        Menu22:Menu22,
        TopBanner:TopBanner,
        TopView:TopView,
      };
    },
  };
  </script>