new Vue({
  el: "#app",
  data: {
    tableData: []
  },
  mounted() {
    axios.get("http://111.231.116.130:8080/user/code").then(res => {
      phone = Object.keys(res.data);
      /**
       * 遍历数据，返回结构数据
       */
      let data = phone.map(item => {
        return {
          date: new Date(res.data[item]["date"]).toLocaleString(),
          phone: res.data[item]["phone"],
          code: res.data[item]["code"],
          timeStamp: new Date(res.data[item]["date"])
        };
      });

      /**
       * 过滤五分钟内的验证码
       */
      this.tableData = data.filter(
        item=>{
          var codeDate = item["timeStamp"]
          let now = new Date();
          return ((now-codeDate) / 1000) < 300
        }
      )
    });
  }
});