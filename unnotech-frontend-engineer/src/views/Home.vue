<template>
  <div class="home">
    <div class="booklistwrapper">
      <div v-for="(item, index) in bookList" :key="index" class="d-inline-flex">
        <book-card :cardinfo="item" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import bookCard from "../components/bookcard.vue";

export default {
  name: "Home",
  components: {
    bookCard,
  },
  methods: {
    getBookList() {
      axios
        .get("https://fe-interview-api.unnotech.com/books")
        .then((res) => {
          this.$store.commit("setList", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getBookList();
  },
  computed: {
    ...mapState(["bookList"]),
  },
};
</script>
