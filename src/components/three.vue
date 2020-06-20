<template>
  <div>
    <Three></Three>
    <h1>{{ msg }}</h1>
    <comOne :goChilData="fatherData" @chilEven="chilData"></comOne>
    <h2>{{ mess }}</h2>
    <el-table
    :data="arr"
    stripe
    style="width: 100%">
    <el-table-column
      prop="updatetime"
      label="时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="content"
      label="内容">
    </el-table-column>
    <el-table-column
      prop="unixtime"
      label="时间戳" width="180">
    </el-table-column>
  </el-table>
  <el-pagination
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import comOne from "@/components/comOne";
import Three from "../components/comThree";
export default {
  name: "three",
  data() {
    return {
      msg: "three组件",
      fatherData: {
        name: "父传子",
        msg: "父组件向子组件传值的数据"
      },
      mess: "",
      arr:[]
    };
  },
  created() {
    this.$axios
      .get("/juhe/joke/content/list.php", {
        params: {
          key:'6cd9f8e687d0165c0aad64cdac2eac4e',
          sort: "desc", 
          page: "10",
          pagesize: "20",
          time: "1418816972"
        }
      })
      .then((res, err) => {
        if(res){
          console.log(res);
          this.arr = res.data.result.data
        }
      });
  },
  methods: {
    chilData(childrenData) {
      this.mess = childrenData;
    }
  },
  mounted() {},
  components: {
    comOne,
    Three
  }
};
</script>

<style style="sass" scoped>
</style>
