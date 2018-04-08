<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ노력, 희망과 계획
      </div>
    </div>
    <div class="indexTableArea">
      <table class="outterBorder indexTable">
        <tr>
          <th>
            <div class="indexTableHeader">
              목차
            </div>
          </th>
        </tr>
        <tr class="indexTableContent">
          <td>
            <ol>
              <li><a href="#tab1">1. 이벤트 한정건조</a></li>
              <li><a href="#tab2">2. 이벤트 한정임무</a></li>
              <li><a href="#tab3">3. 이벤트 스테이지</a></li>
              <li><a href="#tab3.1">&nbsp;3.1. SP1</a></li>
              <li><a href="#tab3.2">&nbsp;3.2. SP2</a></li>
              <li><a href="#tab3.3">&nbsp;3.3. SP3</a></li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="wikiContentArea">
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown1=!showDropDown1">
        <div class="innerBorder roundBorder title" id="tab1">
          1. 이벤트 한정건조 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown1">
         <table class="eventBuildTable">
           <colgroup>
             <col width="15%">
             <col width="15%">
             <col width="70%">
           </colgroup>
           <tr>
             <th>베이스</th><td colspan="2">중형건조</td>
           </tr>
           <tr>
             <th>레어도</th><th>함종</th><th>이름</th>
           </tr>
           <tr>
             <th rowspan="2">SSR</th><th>전함</th><td>프린스 오브 웨일즈</td>
           </tr>
           <tr>
             <th>중순</th><td>아타고</td>
           </tr>
           <tr>
             <th>SR</th><th>구축함</th><td>뱀파이어</td>
           </tr>
         </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown2=!showDropDown2">
        <div class="innerBorder roundBorder title" id="tab2">
          2. 이벤트 한정임무 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown2">
        <table class="eventQuestTable">
          <colgroup>
            <col width="60%">
            <col width="40%">
          </colgroup>
          <tr>
            <th>임무내용</th><th>보상</th>
          </tr>
          <tr>
            <td>SP1 클리어</td><td>범용형 부린 1척 (보부린)</td>
          </tr>
          <tr>
            <td>SP1 3성 클리어</td><td>100코인</td>
          </tr>
          <tr>
            <td>SP2 클리어</td><td>2500골드</td>
          </tr>
          <tr>
            <td>SP2 3성 클리어</td><td>랜덤 장비상자 T4 2개</td>
          </tr>
          <tr>
            <td>SP3 클리어</td><td>범용형 부린 1척 (보부린)</td>
          </tr>
          <tr>
            <td>SP3 3성 클리어</td><td>356mm 4연장포 T3 1개</td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown3=!showDropDown3">
        <div class="innerBorder roundBorder title" id="tab3">
          3. 이벤트 스테이지 ▼
        </div>
      </div>
      <div v-if="showDropDown3" class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown3_1=!showDropDown3_1">
        <div class="innerBorder roundBorder title" id="tab3.1">
          3.1. SP1 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown3 && showDropDown3_1">
         <table class="fullBox eventStageTable">
           <colgroup>
             <col width="25%">
             <col width="25%">
             <col width="25%">
             <col width="25%">
           </colgroup>
           <tr>
             <th colspan="4">맵</th>
           </tr>
           <tr>
             <td colspan="4"><img class="map" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/events/effort_hope_and_plan/maps/sp1.jpg" alt=""></td>
           </tr>
           <tr>
             <th>최저 요구 레벨</th><td colspan="3">15</td>
           </tr>
           <tr>
             <th>적 레벨</th><td>일반: 28<br>보스: 30</td><th>보스전까지 전투횟수</th><td>2회 + 보스</td>
           </tr>
           <tr>
             <th>드롭 아이템</th><td colspan="3">장비 강화판 T1~T2, 장비 상자 T1~T2, 골드</td>
           </tr>
           <tr>
             <th rowspan="5">드롭 장비 설계도</th><td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/322.png" alt=""></td><td colspan="2">BTD-1 디스트로이어 T2</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/329.png" alt=""></td><td colspan="2">풀머 T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/333.png" alt=""></td><td colspan="2">99식 함상폭격기 T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/349.png" alt=""></td><td colspan="2">소드피시 T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/359.png" alt=""></td><td colspan="2">텐잔 T3</td>
           </tr>
         </table>
      </div>

      <div v-if="showDropDown3" class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown3_2=!showDropDown3_2">
        <div class="innerBorder roundBorder title" id="tab3.2">
          3.2. SP2 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown3 && showDropDown3_2">
         <table class="fullBox eventStageTable">
           <colgroup>
             <col width="25%">
             <col width="25%">
             <col width="25%">
             <col width="25%">
           </colgroup>
           <tr>
             <th colspan="4">맵</th>
           </tr>
           <tr>
             <td colspan="4"><img class="map" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/events/effort_hope_and_plan/maps/sp2.jpg" alt=""></td>
           </tr>
           <tr>
             <th>최저 요구 레벨</th><td colspan="3">15</td>
           </tr>
           <tr>
             <th>적 레벨</th><td>일반: 32<br>보스: 35</td><th>보스전까지 전투횟수</th><td>4회 + 보스</td>
           </tr>
           <tr>
             <th>드롭 아이템</th><td colspan="3">장비 강화판 T1~T2, 장비 상자 T1~T3, 골드</td>
           </tr>
           <tr>
             <th>드롭 캐릭터</th>
             <td colspan="3">
               <div class="lFloat characterArea" v-for="character in sp2_characters_info">
                 <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                 <div class="characterName">
                   <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                 </div>
               </div>
             </td>
           </tr>
           <tr>
             <th rowspan="5">드롭 장비 설계도</th><td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/15.png" alt=""></td><td colspan="2">102mm 3연장포(부포) T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/48.png" alt=""></td><td colspan="2">140mm 연장포 T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/114.png" alt=""></td><td colspan="2">381mm 연장포 T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/126.png" alt=""></td><td colspan="2">410mm 연장포 T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/165.png" alt=""></td><td colspan="2">QF 2파운드 4연장 폼폼포 T3</td>
           </tr>
         </table>
      </div>

      <div v-if="showDropDown3" class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown3_3=!showDropDown3_3">
        <div class="innerBorder roundBorder title" id="tab3.3">
          3.3. SP3 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown3 && showDropDown3_3">
         <table class="fullBox eventStageTable">
           <colgroup>
             <col width="25%">
             <col width="25%">
             <col width="25%">
             <col width="25%">
           </colgroup>
           <tr>
             <th colspan="4">맵</th>
           </tr>
           <tr>
             <td colspan="4"><img class="map" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/events/effort_hope_and_plan/maps/sp3.jpg" alt=""></td>
           </tr>
           <tr>
             <th>최저 요구 레벨</th><td colspan="3">15</td>
           </tr>
           <tr>
             <th>적 레벨</th><td>일반: 38<br>보스: 40</td><th>보스전까지 전투횟수</th><td>5회 + 보스</td>
           </tr>
           <tr>
             <th>드롭 아이템</th><td colspan="3">장비 강화판 T1~T2, 장비 상자 T1~T3, 골드</td>
           </tr>
           <tr>
             <th>드롭 캐릭터</th>
             <td colspan="3">
               <div class="lFloat characterArea" v-for="character in sp3_characters_info">
                 <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                 <div class="characterName">
                   <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                 </div>
               </div>
             </td>
           </tr>
           <tr>
             <th rowspan="5">드롭 장비 설계도</th><td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/108.png" alt=""></td><td colspan="2">356mm 4연장포 T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/69.png" alt=""></td><td colspan="2">152mm 연장포B T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/81.png" alt=""></td><td colspan="2">203mm 연장포A T3</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/107.png" alt=""></td><td colspan="2">356mm 4연장포 T2</td>
           </tr>
           <tr>
             <td><img class="equipicon" src="https://s3.ap-northeast-2.amazonaws.com/fleetbeacon/equipmentIconImage/215.png" alt=""></td><td colspan="2">610mm 4연장어뢰 T2</td>
           </tr>
         </table>
      </div>

    </div>
    <div class="pageFooter"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropDown1: true,
      showDropDown2: true,
      showDropDown3: true,
      showDropDown3_1: true,
      showDropDown3_2: true,
      showDropDown3_3: true,
      sp1_characters_num: [],
      sp2_characters_num: [103,233,26,27,15,16,17,88,89,90,29,30,45,39,128,58,59,52,53,71,72,75,140],
      sp3_characters_num: [135,103,94,133,144,34,35,122,121,128,6,8,9,5,240,239,238,104,39,52,53,71,72,75,140],
      sp1_characters_info: [],
      sp2_characters_info: [],
      sp3_characters_info: []
    }
  },
  mounted() {
    let self = this
    this.$http.post("/eventdropcharacterlist",{
      characters_num: this.sp2_characters_num
    }).then(function(result) {
      self.sp2_characters_info = result.data
    }).catch((error) => console.log(error))
    this.$http.post("/eventdropcharacterlist",{
      characters_num: this.sp3_characters_num
    }).then(function(result) {
      self.sp3_characters_info = result.data
    }).catch((error) => console.log(error))
  }
}
</script>

<style scoped>
td>p {
  margin: 0.4em;
  padding: 0;
  line-height: 150%;
  font-size: 80%;
}
ol {
  margin: 0;
  padding: 0;
}
ol>li {
  padding: 2px;
}
table,th, td {
  text-align: center;
  border: 1px solid black;
}
table>tr>th {
  background-color: #bad3f9;
}
table {
  border-collapse:collapse;
  margin-top: 2em;
  margin-bottom: 2em;
}
.wikiArea {
  padding-left: 0.4em;
  padding-right: 0.4em;
}
.indexTableArea {
  margin-top: 0.6em;
  margin-bottom: 0.6em;
}
.indexTable {
  width: 46.5625%;
  background-color: white;
}
.indexTable>tr {
  border: 1px solid #418cf2;
}
.indexTable>tr>th {
  background-color: white;
  padding: 0;
}
.indexTableHeader {
  border: 2px solid white;
  letter-spacing: 3em;
  text-indent: 3em;
  background-color: #3acaff;
}
.indexTableContent {
  font-size: 90%;
}
.indexTableContent>td {
  text-align: left;
  padding: 5px;
}
.wikiSubHeader {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.wikiSubContentArea {
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-size: 90%;
  padding-left: 1em;
  padding-right: 1em;
  width: 97%;
}
.wikiSubContentArea td,th {
  padding: 0.3em;
}
.pageFooter {
  margin-bottom: 7em;
}
.map {
  width: 100%;
}
.eventBuildTable {
  width: 50%;
}
.eventBuildTable>tr>td, .eventBuildTable>tr>th {
  padding: 0.5em;
  vertical-align: middle;
}
.eventQuestTable {
  width: 70%;
}
.eventQuestTable>tr>td, .eventQuestTable>tr>th {
  padding: 0.5em;
  vertical-align: middle;
}
.eventStageTable {
  width: 100%;
}
.eventStageTable>tr>td, .eventStageTable>tr>th {
  padding: 0.5em;
  vertical-align: middle;
}
.equipicon {
  width: 50px;
}
.characterArea {
  padding: 0.3em;
}
.characterArea img{
  width: 50px;
}
.characterName {
  font-size: 70%;
}
</style>
