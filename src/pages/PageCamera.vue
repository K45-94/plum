<template>
  <page>
    <page-header> <template #title> CAMERA </template></page-header>
    <page-body>
      <div class="camera-frame q-pa-md">
        <video
          v-show="!imageCaptured"
          ref="video"
          class="full-width"
          autoplay
        />
        <canvas
          v-show="imageCaptured"
          ref="canvas"
          class="full-width"
          height="240"
        />
      </div>
      <div class="text-center q-pa-md">
        <q-btn
          v-if="hasCameraSupport"
          @click="captureImage"
          round
          color="secondary"
          icon="camera"
        />
        <q-file
          v-else
          label="choose image"
          @input="captureImageFallback"
          outlined
          accept="image/"
          v-model="imageUpload"
          color="secondary"
          clear-icon="text-secondary"
        >
          <template v-slot:prepend>
            <q-icon name="eva-attach-outline" />
          </template>
        </q-file>
        <div class="row justify-center q-ma-md text-secondary">
          <q-input
            v-model="post.caption"
            class="col col-sm-6"
            placeholder="Caption"
            dense
          />
        </div>
        <div class="row justify-center q-ma-md">
          <q-input
            v-model="post.location"
            :loading="locationLoading"
            class="col col-sm-6 text-secondary"
            placeholder="Location"
            dense
            color="secondary"
          >
            <template v-slot:append>
              <q-btn
                v-if="!locationLoading"
                @click="getLocation"
                color="secondary"
                round
                dense
                flat
                icon="eva-navigation-2-outline"
              />
            </template>
          </q-input>
        </div>
        <div class="row justify-center q-mt-lg">
          <q-btn
            class="text-secondary"
            @click="addPost()"
            color="secondary"
            label="Post"
            rounded
            unelevated
            no-caps
          />
        </div>
      </div>
      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import { defineComponent } from "vue";
import { axios } from "axios";
import { uid } from "quasar";
import Page from "src/components/PagePlumComponent/Page.vue";

export default defineComponent({
  components: { Page },
  name: "PageCamera",
  data() {
    return {
      post: {
        id: uid(),
        caption: "",
        location: "",
        photo: null,
        date: Date.now(),
      },
      imageCaptured: false,
      imageUpload: [],
      hasCameraSupport: true,
      locationLoading: false,
    };
  },
  methods: {
    initCamera() {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((MediaStream) => {
          this.$refs.video.srcObject = MediaStream;
        })
        .catch((error) => {
          this.hasCameraSupport = false;
        });
    },
    captureImage() {
      let video = this.$refs.video;
      let canvas = this.$refs.canvas;
      canvas.width = video.getBoundingClientRect().width;
      canvas.height = video.getBoundingClientRect().height;
      let context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.imageCaptured = true;
      this.post.photo = this.dataURItoBlob(canvas.toDataUrl());
      this.disableCamera();
    },
    captureImageFallback(file) {
      this.post.photo = file;

      let canvas = this.$refs.canvas;
      let context = canvas.getContext("2d");

      var reader = new FileReader();
      reader.onload = (event) => {
        var img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);
          this.imageCaptured = true;
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    disableCamera() {
      this.$refs.video.srcObject.getVideoTracks().forEach((track) => {
        track.stop();
      });
    },
    dataURLtoBlob(dataURL) {
      var byteString = atob(dataURI.split(",")[1]);
      var mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      var blob = new Blob([ab], { type: mimeString });
      return blob;
    },
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.getCityAndCountry(position);
        },
        (err) => {
          this.locationError();
        },
        { timeout: 5500 }
      );
    },
    getCityAndCountry(position) {
      let apiUrl = `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`;
      this.$axios
        .get(apiUrl)
        .then((result) => {
          this.locationSuccess(result);
        })
        .catch((err) => {
          this.locationError();
        });
    },
    locationSuccess(result) {
      this.post.location = result.data.city;
      if (result.data.country) {
        this.post.location += `, ${result.data.country}`;
      }
      this.loadingLocation = false;
    },
    locationError() {
      this.$q.dialog({
        title: "Err",
        message: "Unable to load location. Try typing in 🙂",
      });
      this.loadingLocation = false;
    },
    addPost() {
      let formData = new FormData();
      formData.append("id", this.post.id);
      formData.append("caption", this.post.caption);
      formData.append("location", this.post.location);
      formData.append("date", this.post.date);
      formData.append("file", this.post.photo, `${this.post.id}.jpeg`);

      this.$axios
        .post(`${process.env.API}/createPost`, formData)
        .then((response) => {})
        .catch((err) => {});
    },
  },
  mounted() {
    this.initCamera();
  },
  beforeUnmount() {
    if (this.hasCameraSupport) {
      this.disableCamera();
    }
  },
});
</script>

<style lang="scss">
.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input {
  color: #33ac51;
}
</style>
