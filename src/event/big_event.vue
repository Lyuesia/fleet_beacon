<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ {{ eventGeneral.bigeventkoreanname }}
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
              <li><a href="#eventinfo">ㆎ 이벤트 개요</a></li>
              <li><a href="#eventcharacter">ㆎ 이벤트 캐릭터 정보</a></li>
              <li><a href="#eventexchange">ㆎ 이벤트 교환 목록</a></li>
              <li><a href="#eventquest">ㆎ 이벤트 한정임무</a></li>
              <li><a href="#eventstagegeneral">ㆎ 이벤트 해역 개요</a></li>
              <li><a href="#eventstage">ㆎ 이벤트 해역 정보</a></li>
              <li v-for="(subRegion,regionKey,index) in eventRegionInfo">&nbsp;&nbsp;&nbsp;&nbsp;<a :href="'#region'+regionKey">ㆎ {{ regionKey }}해역</a></li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="wikiContentArea">
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="infoDropDown=!infoDropDown" v-if="eventGeneral.bigeventdescription != null">
        <div class="innerBorder roundBorder title" id="eventinfo">
          ㆎ 이벤트 개요 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="infoDropDown">
        <div class="eventInfoArea" v-html="eventGeneral.bigeventdescription">

        </div>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="characterDropDown=!characterDropDown">
        <div class="innerBorder roundBorder title" id="eventcharacter">
          ㆎ 이벤트 캐릭터 정보 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="characterDropDown">
         <table class="eventBuildTable fullBox">
           <colgroup>
             <col width="10%">
             <col width="10%">
             <col width="10%">
             <col width="10%">
             <col width="10%">
             <col width="10%">
             <col width="15%">
             <col width="25%">
           </colgroup>
           <tr>
             <th>함종</th><th>아이콘</th><th>이름</th><th>레어도</th><th>한정건조</th><th>교환</th><th>이벤트 드랍장소</th><th>비고</th>
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
             <td>{{ character.eventbuild }}</td>
             <td>{{ character.itemexchange }}</td>
             <td>{{ character.eventdropspot }}</td>
             <td>{{ character.extraavailable }}</td>
           </tr>
         </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="exchangeDropDown=!exchangeDropDown">
        <div class="innerBorder roundBorder title" id="eventexchange">
          ㆎ 이벤트 교환 목록 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="exchangeDropDown">
        <table class="eventExchangeTable">
          <colgroup>
            <col width="55%">
            <col width="15%">
            <col width="15%">
            <col width="15%">
          </colgroup>
          <tr>
            <th>품목</th><th>필요 {{ eventGeneral.bigeventitemname }}</th><th>교환 가능 횟수</th><th>분류</th>
          </tr>
          <tr v-for="exchangeitem in eventExchangeList">
            <td>{{ exchangeitem.itemname }}</td><td>{{ exchangeitem.itemprice }}</td><td>{{ exchangeitem.numberavailable }}</td><td>{{ exchangeitem.exchangeitemtype }}</td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="questDropDown=!questDropDown">
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
          <tr v-for="quest in eventQuestList">
            <td>{{ quest.questcontent }}</td><td>{{ quest.questreward }}</td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="stageGeneralDropDown=!stageGeneralDropDown">
        <div class="innerBorder roundBorder title" id="eventstagegeneral">
          ㆎ 이벤트 해역 개요 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="stageGeneralDropDown">
        <table class="eventQuestTable">
          <colgroup>
            <col width="30%">
            <col width="35%">
            <col width="35%">
          </colgroup>
          <tr>
            <th>스테이지</th><th>{{ eventGeneral.bigeventitemname }} 획득 수</th><th>전투횟수</th>
          </tr>
          <tr v-for="region in eventStageGeneral">
            <td>{{ region.regionname }}{{ region.regionnumber }}</td><td>{{ region.regioneventitemobtain }}</td><td>{{ region.regionbattlenumber }} + 보스</td>
          </tr>
        </table>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="stageDropDown=!stageDropDown">
        <div class="innerBorder roundBorder title" id="eventstage">
          ㆎ 이벤트 해역 정보 ▼
        </div>
      </div>
      <div class="" v-for="(subRegion,regionKey,index) in eventRegionInfo" v-if="stageDropDown">
        <div class="outterBorder roundBorder wikiSubHeader">
          <div class="innerBorder roundBorder title" :id="'region'+regionKey">
            ㆎ {{ regionKey }}해역
          </div>
        </div>
        <div class="" v-for="region in subRegion">
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
                 <td class="regionLimitations" colspan="3">
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
                         {{ equip.equipkoreanname }} {{ equip.equiptier }}
                       </div>
                   </div>
                 </td>
               </tr>
             </table>
          </div>
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
      eventGeneral: null,
      eventCharacterList: null,
      eventStageGeneral: null,
      eventExchangeList: null,
      eventQuestList: null,
      eventRegionList: null,
      eventRegionInfo: null,
      infoDropDown: true,
      characterDropDown: true,
      exchangeDropDown: true,
      questDropDown: true,
      stageGeneralDropDown: true,
      stageDropDown: true
    }
  },
  mounted() {
    let self = this
    this.eventIndex = this.$route.params.eventIndex

    this.$http.post("/bigeventinfo", {
      eventIndex: this.eventIndex
    }).then(function(result) {
      self.eventGeneral = result.data[0][0]
      self.eventCharacterList = result.data[1]
      self.eventStageGeneral = result.data[2]
      self.eventExchangeList = result.data[3]
      self.eventQuestList = result.data[4]
      self.eventRegionList = result.data[5]
      self.eventRegionInfo = result.data[6]
      for (let i = 0; i < self.eventCharacterList.length; i++) {
        if (self.eventCharacterList[i].eventbuild == 0) {
          self.eventCharacterList[i].eventbuild = 'X'
        }
        else {
          self.eventCharacterList[i].eventbuild = 'O'
        }
        if (self.eventCharacterList[i].itemexchange == 0) {
          self.eventCharacterList[i].itemexchange = 'X'
        }
        else {
          self.eventCharacterList[i].itemexchange = 'O'
        }
      }
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
  padding-right: 0.5em;
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
.eventInfoArea {
  margin-top: 2em;
  margin-bottom: 2em;
}
.dropequiparea {
  text-align: left;
  vertical-align: middle;
  clear: both;
  padding: 0.3em;
}
.dropequipname {
  line-height: 50px;
}
.regionLimitations {
  line-height: 1.5;
}
</style>
