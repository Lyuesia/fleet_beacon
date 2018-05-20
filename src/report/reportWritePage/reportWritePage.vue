<template>
  <div class="reportWritePageArea">
    <div class="outterBorder roundBorder">
      <div class="innerBorder roundBorder title">
        ㆎ 건의사항
      </div>
    </div>
    <div class="reportWritingarea">
      <table class="fullBox writingTable">
        <colgroup>
          <col width="10%">
          <col width="90%">
        </colgroup>
        <tr>
          <td>닉네임</td><td class="inputArea"><input type="text" maxlength="20" v-model="nicname"></td>
        </tr>
        <tr>
          <td>비밀번호</td><td class="inputArea"><input type="text" maxlength="20" v-model="password"></td>
        </tr>
        <tr>
          <td>이메일</td><td class="inputArea"><input type="text" maxlength="50" v-model="email"> <span style="font-size:70%">(회신을 원할 경우 입력해주세요)</span></td>
        </tr>
        <tr>
          <td>제목</td><td class="inputTitleArea"><input type="text" maxlength="50" v-model="articleTitle"></td>
        </tr>
        <tr>
          <td colspan="2"><vue-editor class="inputArticle" v-model="articleContent"></vue-editor></td>
        </tr>
        <tr class="buttonRow">
          <td colspan="2">
            <div class="buttonArea">
              <button type="button" name="button">취소</button>
            </div>
            <div class="buttonArea">
              <button type="button" @click="submitForm">작성</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  components: {
      VueEditor
   },
  data(){
    return{
      nicname: null,
      password: null,
      email: null,
      articleTitle: null,
      articleContent: null
    }
  },
  methods: {
    submitForm(){
      this.$http.post("/addReport", {
        nicname: this.nicname,
        password: this.password,
        email: this.email,
        articleTitle: this.articleTitle,
        articleContent: this.articleContent
      }).then((result) => {
        console.log("Sent properly!");
        console.log(result.data);
      }).catch((error) => console.log(error))
    }
  }
}
</script>

<style scoped>
  .reportWritePageArea {
    padding-left: 0.4em;
    padding-right: 0.4em;
  }
  .reportWritingarea {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .writingTable>tr>td {
    padding: 0.3em;
  }
  .inputArea input{
    width: 40%;
  }
  .inputTitleArea input {
    width: 90%;
  }
  .buttonArea {
    display: inline-block;
    padding: 1em;
  }
  .inputArea {
    text-align: left;
  }
  .buttonRow {
    text-align: center;
  }
  .inputArticle {
    background-color: white;
    margin-top: 2em;
    margin-bottom: 2em;
    height: 30em;
  }
</style>
