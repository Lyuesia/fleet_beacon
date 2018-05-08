<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ {{ eventGeneral.minieventkoreanname }}
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
              <li><a href="#eventcharacter" v-if="eventGeneral.minieventcharacter == 1">ㆎ 이벤트 캐릭터 정보</a></li>
              <li><a href="#eventquest" v-if="eventGeneral.minieventquest == 1">ㆎ 이벤트 한정임무</a></li>
              <li><a href="#eventstage" v-if="eventRegion != null">ㆎ 이벤트 스테이지</a></li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="wikiContentArea">
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="characterDropDown=!characterDropDown" v-if="eventGeneral.minieventcharacter == 1">
        <div class="innerBorder roundBorder title" id="eventcharacter">
          ㆎ 이벤트 캐릭터 정보 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="characterDropDown">
         <table class="eventBuildTable fullBox">
           <colgroup>
             <col width="10%">
             <col width="10%">
             <col width="20%">
             <col width="10%">
             <col width="15%">
             <col width="35%">
           </colgroup>
           <tr>
             <th>함종</th><th>아이콘</th><th>이름</th><th>레어도</th><th>이벤트 드랍장소</th><th>비고</th>
           </tr>
           <tr v-for="character in eventCharacterList">
             <td>{{ character.type }}</td>
             <td>
               <div class="characterArea">
                 <router-link :to="'/characters/'+character.id">
                   <img :src="character.iconimage" alt="">
                 </router-link>
               </div>
             </td>
             <td>
               <div class="characterName">
                 <router-link :to="'/characters/'+character.id">
                   {{ character.koreanname }}
                 </router-link>
               </div>
             </td>
             <td>{{ character.rarity }}</td>
             <td>{{ character.eventdropspot }}</td>
             <td>{{ character.extraavailable }}</td>
           </tr>
         </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="questDropDown=!questDropDown" v-if="eventGeneral.minieventquest == 1">
        <div class="innerBorder roundBorder title" id="eventquest">
          ㆎ 이벤트 한정임무 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="questDropDown">
        <table class="eventQuestTable">
          <colgroup>
            <col width="60%">
            <col width="40%">
          </colgroup>
          <tr>
            <th>임무내용</th><th>보상</th>
          </tr>
          <tr v-for="quest in eventQuestTable">
            <td>{{ quest.questcontent }}</td><td>{{ quest.questreward }}</td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="stageDropDown=!stageDropDown" v-if="eventRegion != null">
        <div class="innerBorder roundBorder title" id="eventstage">
          ㆎ 이벤트 스테이지 ▼
        </div>
      </div>
      <div v-for="region in eventRegion" v-if ="stageDropDown">
        <div class="outterBorder roundBorder wikiSubHeader">
          <div class="innerBorder roundBorder title">
            ㆎ {{ region.regionname }}{{ region.regionnumber }}
          </div>
        </div>
        <div class="fullBox wikiSubContentArea">
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
               <td colspan="4"><img class="map" :src="region.regionmap" alt=""></td>
             </tr>
             <tr>
               <th>최저 요구 레벨</th><td>{{ region.regionlevellimit }}</td><th>보스 위치</th><td>{{ region.regionbossplace }}</td>
             </tr>
             <tr>
               <th>적 레벨</th><td>일반: {{ region.regionenemylevel }}<br>보스: {{ region.regionbosslevel }}</td><th>보스까지 전투횟수</th><td>{{ region.regionbattlenumber }}회 + 보스</td>
             </tr>
             <tr>
               <th>드롭 아이템</th><td colspan="3">{{ region.regiondropitemlist }}</td>
             </tr>
             <tr v-if="region.regionfleet1limit != null || region.regionfleet2limit != null || region.regionparameterlimit != null">
               <th>출격 제한</th>
               <td colspan="3">
                제1함대: {{ region.regionfleet1limit }}
                <br />
                제2함대: {{ region.regionfleet2limit }}
                <br />
                {{ region.regionparameterlimit }}
               </td>
             </tr>
             <tr>
               <th>드롭 캐릭터</th>
               <td colspan="3">
                 <div class="lFloat characterArea" v-for="character in region.regiondropcharacterlist">
                   <router-link :to="'/characters/'+character.id"><img :src="character.iconimage" alt=""></router-link>
                   <div class="characterName">
                     <router-link :to="'/characters/'+character.id">{{ character.koreanname }}</router-link>
                   </div>
                 </div>
               </td>
             </tr>
             <tr>
               <th>드롭 장비 설계도</th>
               <td colspan="3">
                 <div class="dropequiparea" v-for="equip in region.regiondropequiplist">
                     <img class="equipicon lFloat" :src="equip.equipiconimage" alt="">
                     <div class="dropequipname lFloat">
                       {{ equip.equipkoreanname }}
                     </div>
                 </div>
               </td>
             </tr>
           </table>
        </div>
      </div>
    </div>
    <div class="pageFooter"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventIndex: null,
      characterDropDown: true,
      questDropDown: true,
      stageDropDown: true,
      eventGeneral: null,
      eventCharacterList: null,
      eventQuestTable: null,
      eventRegion: null
    }
  },
  mounted() {
    let self = this
    this.eventIndex = this.$route.params.eventIndex

    this.$http.post("/minieventinfo", {
      eventIndex: this.eventIndex
    }).then(function(result) {
      self.eventGeneral = result.data[0][0]
      self.eventCharacterList = result.data[1]
      self.eventQuestTable = result.data[2]
      self.eventRegion = result.data[3]
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
}
.eventBuildTable>tr>td, .eventBuildTable>tr>th {
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
  padding: 0.3em;
}
.characterArea {
  padding: 0.3em;
}
.characterArea img{
  width: 50px;
}
.characterName {
  font-size: 80%;
}
.dropequiparea {
  text-align: left;
  vertical-align: middle;
  clear: both;
}
.dropequipname {
  line-height: 50px;
}
</style>
