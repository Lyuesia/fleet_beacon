<template lang="html">
  <div class="charDBTitleArea">
    <div class="fullBox outterBorder roundBorder charDBTitle">
      <div class="innerBorder roundBorder title">
        ㆎ 캐릭터 DB
      </div>
    </div>
    <div class="userManualArea">
      <div class="userManualTitle">
        사용법
      </div>
      <div class="userManualContent">
        <p>1. 소속진영, 함정종류, 레어도는 서로 and 로직으로 묶여있기에 모두 체크하셔야 리스트를 볼 수 있습니다.</p><p>&nbsp; &nbsp;검색버튼을 누르지 마시고 체크박스만 체크하면 바로 결과를 볼 수 있습니다.</p><p>&nbsp; &nbsp;ex) 미국함만 보고싶을시: 소속진영[미국], 함정종류[전부체크], 레어도[전부체크]</p><p><br></p><p>2. 이름 검색의 경우 입력칸에 이름을 써넣고 엔터, 또는 검색 버튼을 클릭시 실행됩니다.</p><p>&nbsp; &nbsp;다만 이름 검색의 경우 위에 체크박스 필터를 전부 무시하여 실행됩니다.</p><p>&nbsp; &nbsp;또한 이름 입력칸을 빈칸으로 두고 검색시 모든 캐릭터 정보가 로딩되니 주의바랍니다.</p><p><br></p><p>3. 고급 필터의 경우 위의 체크박스 필터에서 걸러진 것을 한번 더 거르는 방식으로 진행됩니다.</p><p>&nbsp; &nbsp;그럼으로 인해 고급 설정 단독으로는 어떤 정보도 표시되지 않습니다.</p><p>&nbsp; &nbsp;또한 이름 검색은 고급필터링도 무시하고 검색되니 주의 바랍니다.</p><p><br></p>
        <p>
          4. 모든 수치는 레벨 100, 호감도 max치 기준입니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .charDBTitle {
    margin-bottom: 2em;
  }
  .userManualArea {
    padding: 1em;
    border: 1px solid black;
    margin-bottom: 2em;
  }
  .userManualTitle {
    text-align: center;
    padding: 0.5em;
    font-weight: 900;
  }
  .userManualContent {
    font-size: 90%;
  }
</style>
