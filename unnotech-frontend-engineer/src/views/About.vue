<template>
  <home />
  <div class="about">
    <div class="card">
      <div class="d-flex p-3 m-2">
        <h2 class="">價格</h2>
        <h2 class="">{{ Price }}</h2>
      </div>
      <div class="d-flex justify-content-between p-3 m-2">
        <div>
          <h2 class="d-inline">數量</h2>
          <input
            type="button"
            value="-"
            class="minus minus-btn"
            @click="minus"
          />
          <h2 class="d-inline">{{ Count }}</h2>
          <input
            type="button"
            value="+"
            class="plus plus-btn"
            @click="
              () => {
                Count++;
              }
            "
          />
        </div>
        <button type="button" class="btn btn-dark" @click="postCount">確認修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import home from "./Home.vue";
import { mapState } from "vuex";

export default {
  name: "About",
  data() {
    return {
      Count: 0,
      Price: 0,
    };
  },
  components: { home },
  methods: {
    getBookDetail(id) {
      axios
        .get(`https://fe-interview-api.unnotech.com/profile/${id}`)
        .then((res) => {
          this.Count = res.data.count;
          this.Price = res.data.price;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postCount(){
axios
        .patch(`https://fe-interview-api.unnotech.com/profile/${this.id}`,{count:this.Count})
        .then((res) => {
          this.Count = res.data.count;
          this.Price = res.data.price;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    minus() {
      if (this.Count <= 0) {
        return 0;
      } else {
        return --this.Count;
      }
    },
  },
  watch: {
    id: function() {
      this.getBookDetail(this.id);
    },
  },
  created() {
    this.getBookDetail(this.$route.params.id);
  },
  computed: {
    ...mapState(["id"]),
  },
};
</script>
