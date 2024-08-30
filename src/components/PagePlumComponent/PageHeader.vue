<template>
  <header
    :class="[
      'page-header q-header q-layout__section',
      { 'fixed-top': !isScrolling, 'hide-header': isScrolling },
    ]"
  >
    <div class="q-toolbar row no-wrap items-center" active-color="secondary">
      <slot name="button-left" />
      <div
        class="page-header-title q-toolbar__title ellipsis q-pl-none q-ml-md text-weight-light text-center text-body1"
      >
        <span class="q-pa-md text-brand text-gradient">
          <slot name="title" />
          <i class="q-icon q-pa-md" aria-hidden="true" role="presentation"
            ><svg
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              data-name="Layer 1"
            >
              <title>leo</title>
              <g fill="#33ac51" class="nc-icon-wrapper">
                <path
                  d="M42.667 13.583a5.984 5.984 0 0 1 2.833 1.334c-.333-5.667-5.458-5-8.5-10 0 0 1.5.125 2-1.917-2.333.013-5-3-10-1a12.133 12.133 0 0 0-5-1 12.133 12.133 0 0 0-5 1c-5-2-7.667 1.013-10 1 .5 2.042 2 1.917 2 1.917-3.042 5-8.167 4.333-8.5 10a5.984 5.984 0 0 1 2.833-1.334C-3.417 32 8.581 42.167 8.581 42.167A18.447 18.447 0 0 1 9.333 38c2.834 8.5 11.084 5.5 14.667 8.833C27.583 43.5 35.833 46.5 38.667 38a18.447 18.447 0 0 1 .752 4.167S51.417 32 42.667 13.583zm-4.179 10.534l-3.94 5.571h-.013a4.989 4.989 0 0 1 .657 4.141l-.363 1.27A4 4 0 0 1 30.983 38H30v1a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-1h-.983a4 4 0 0 1-3.846-2.9l-.363-1.27a4.989 4.989 0 0 1 .657-4.141h-.012l-3.941-5.572a5 5 0 0 1-.646-4.57l2.744-7.776a6.339 6.339 0 0 1 8.812-3.56 8 8 0 0 0 7.156 0 6.339 6.339 0 0 1 8.812 3.56l2.744 7.776a5 5 0 0 1-.646 4.57z"
                  opacity=".8"
                ></path>
                <path
                  fill="none"
                  stroke="#33ac51"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M19 30l2-8"
                ></path>
                <path
                  d="M21 23h-2.037a3.178 3.178 0 0 1-2.841-1.755L15 19h4.72A2.28 2.28 0 0 1 22 21.28V22a1 1 0 0 1-1 1z"
                ></path>
                <path
                  fill="none"
                  stroke="#33ac51"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M29 30l-2-8"
                ></path>
                <path
                  d="M27 23h2.037a3.178 3.178 0 0 0 2.841-1.755L33 19h-4.72A2.28 2.28 0 0 0 26 21.28V22a1 1 0 0 0 1 1z"
                ></path>
                <path
                  d="M19.425 29h9.15a.5.5 0 0 1 .312.89l-3.613 2.891a1 1 0 0 1-.625.219h-1.3a1 1 0 0 1-.625-.219l-3.611-2.891a.5.5 0 0 1 .312-.89z"
                  stroke="#33ac51"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  d="M30 38v1a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-1"
                  fill="none"
                  stroke="#33ac51"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  fill="none"
                  stroke="#33ac51"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M24 35v-2"
                ></path>
                <path
                  d="M24 33v1a4 4 0 0 1-4 4h-2.983a4 4 0 0 1-3.846-2.9l-.363-1.27a5 5 0 0 1 1.272-4.91L16 27"
                  fill="none"
                  stroke="#33ac51"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  d="M24 33v1a4 4 0 0 0 4 4h2.983a4 4 0 0 0 3.846-2.9l.363-1.27a5 5 0 0 0-1.272-4.91L32 27"
                  fill="none"
                  stroke="#33ac51"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  d="M34.548 29.688l3.94-5.571a5 5 0 0 0 .646-4.57l-2.744-7.776a6.339 6.339 0 0 0-8.812-3.56 8 8 0 0 1-7.156 0 6.339 6.339 0 0 0-8.812 3.56l-2.744 7.776a5 5 0 0 0 .646 4.57l3.941 5.571"
                  fill="none"
                  stroke="#33ac51"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  d="M24 46.833C27.583 43.5 35.833 46.5 38.667 38a18.447 18.447 0 0 1 .752 4.167s12-10.167 3.248-28.584a5.984 5.984 0 0 1 2.833 1.334c-.333-5.667-5.458-5-8.5-10 0 0 1.5.125 2-1.917-2.333.013-5-3-10-1a12.133 12.133 0 0 0-5-1 12.133 12.133 0 0 0-5 1c-5-2-7.667 1.013-10 1 .5 2.042 2 1.917 2 1.917-3.042 5-8.167 4.333-8.5 10a5.984 5.984 0 0 1 2.833-1.334C-3.417 32 8.581 42.167 8.581 42.167A18.447 18.447 0 0 1 9.333 38c2.834 8.5 11.084 5.5 14.667 8.833z"
                  fill="none"
                  stroke="#33ac51"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <!-- Left Eye -->
                <circle cx="20" cy="23" r="2" id="left-eye" fill="#000000" />

                <!-- Right Eye -->
                <circle cx="28" cy="23" r="2" id="right-eye" fill="#000000" />
              </g></svg></i
        ></span>
      </div>
      <slot name="button-right" />
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      isScrolling: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    },
  },
};
</script>

<style lang="scss">
.hide-header {
  transform: translateY(-100%);

  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
