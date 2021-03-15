<template>
<a :href="`#/books/${cardinfo.id}`" @click="chooseBook">
  <div class="card p-1 m-2" style="width:10rem;" v-bind:class={active:press}>
    <img :src="cardinfo.image" class="w-100 h-100" alt="..."/>
    <h5 class="card-title">{{ cardinfo.name }}</h5>
  </div>
</a>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "bookcard",
  data(){
      return{
      }
  },
  components: {},
  props: ["cardinfo"],
  methods: {
      chooseBook(){
          this.$store.commit('setId', this.cardinfo.id)
      }
  },
  created() {},
  computed: {
      ...mapState(['id']),
      press(){
          return this.id==this.cardinfo.id ? true : false
      }
  },
};
</script>

<style scoped>
.active {
    background-color: #FFFF37;
}
</style>