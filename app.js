const app = new Vue({
  el: "#app",
  data() {
    return {
      imageSource: "",
    };
  },
  methods: {
    onChangeFileInput(e) {
      const file = e.target.files[0];

      if (!file) return;

      this.imageSource = URL.createObjectURL(file);
    },
  },
  watch: {
    imageSource() {
      const canvas = this.$refs.originImageLayer;
      const context = canvas.getContext("2d");

      const image = new Image();
      image.src = this.imageSource;

      console.log(image);

      image.onload = () => {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    },
  },
});

app.mount("#app");
