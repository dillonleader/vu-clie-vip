<template>
  <div class="vuex">
    <el-button type="primary" @click="add">加</el-button>
    <span>{{num}}</span>
    <el-button type="primary" @click="reduce">减</el-button>
    {{sum}}
  </div>
</template>

<script>
import { mapState, mapGetters} from "vuex";
export default {
  computed: {
    ...mapState({
      num() {
        return this.$store.state.num;
      }
    }),
    ...mapGetters({
        sum:'sum'
    })
  },
  methods: {
    add() {
      // this.$store.commit('add')
      // this.$store.commit({
      //   type:'add',
      //   n:pload
      // })
      this.$store.dispatch("onous");
    },
    reduce() {
      // this.$store.commit('reduce')
      // this.$store.commit({
      //   type:'reduce',
      //   n:pload
      // })
      this.$store.dispatch("asays");
    }
  }
};
</script>

<style lang="scss" scoped>
.vuex {
  width: 250px;
  height: 50px;
  margin: 300px auto;
  span {
    padding: 0 15px;
  }
}
</style>