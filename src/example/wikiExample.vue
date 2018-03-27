<template lang="html">
  <div class="wikiArea fullBox">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
       ㆎ함선추천
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
              <li>1. 들어가기에 앞서</li>
              <li>2. 구축함</li>
              <li>3. 경순양함</li>
              <li>4. 중순양함</li>
              <li>5. 경항공모함</li>
              <li>6. 항공모함</li>
              <li>7. 전함</li>
              <li>8. 그 외</li>
            </ol>
          </td>
        </tr>
      </table>
    </div>
    <div class="wikiContentArea">
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown1=!showDropDown1">
        <div class="innerBorder roundBorder title">
          1. 들어가기에 앞서 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown1">
        <p>
          이 문서에 적혀있는 함선 외에도 좋은 함선이 많으니 차별하지 말자.
        </p>
        <p>
          여기에 적혀있는 함선은 최대한 성능에 대한 이견이 없는 것 들을 적었을 뿐임.
        </p>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown2=!showDropDown2">
        <div class="innerBorder roundBorder title">
          2. 구축함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown2">
        <p>
          이 문서에 적혀있는 함선 외에도 좋은 함선이 많으니 차별하지 말자.
        </p>
        <p>
          여기에 적혀있는 함선은 최대한 성능에 대한 이견이 없는 것 들을 적었을 뿐임.
        </p>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown3=!showDropDown3">
        <div class="innerBorder roundBorder title">
          3. 경순양함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown3">
        <p>
          이 문서에 적혀있는 함선 외에도 좋은 함선이 많으니 차별하지 말자.
        </p>
        <p>
          여기에 적혀있는 함선은 최대한 성능에 대한 이견이 없는 것 들을 적었을 뿐임.
        </p>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown4=!showDropDown4">
        <div class="innerBorder roundBorder title">
          4. 중순양함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown4">
        <p>
          이 문서에 적혀있는 함선 외에도 좋은 함선이 많으니 차별하지 말자.
        </p>
        <p>
          여기에 적혀있는 함선은 최대한 성능에 대한 이견이 없는 것 들을 적었을 뿐임.
        </p>
      </div>
      <div class="outterBorder roundBorder wikiSubHeader" v-on:click.prevent="showDropDown5=!showDropDown5">
        <div class="innerBorder roundBorder title">
          5. 경항공모함 ▼
        </div>
      </div>
      <div class="fullBox wikiSubContentArea" v-if="showDropDown5">
        <p>
          이 문서에 적혀있는 함선 외에도 좋은 함선이 많으니 차별하지 말자.
        </p>
        <p>
          여기에 적혀있는 함선은 최대한 성능에 대한 이견이 없는 것 들을 적었을 뿐임.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropDown1: true,
      showDropDown2: true,
      showDropDown3: true,
      showDropDown4: true,
      showDropDown5: true,
      showDropDown6: true,
      showDropDown7: true,
      showDropDown8: true
    }
  }
}
</script>

<style scoped>
ol {
  margin: 0;
  padding: 0;
}
ol>li {
  padding: 2px;
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
.indexTableHeader {
  border: 2px solid white;
  background-color: #3acaff;
  letter-spacing: 3em;
  text-indent: 3em;
}
.indexTableContent {
  font-size: 14px;
}
.indexTableContent>td {
  padding: 5px;
}
.wikiSubHeader {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.wikiSubContentArea {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 14px;
  padding-left: 1em;
  padding-right: 1em;
}
</style>
