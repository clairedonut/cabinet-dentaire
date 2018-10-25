<template lang="html">
  <section id="partenaires" class="row  d-flex ">
    <img v-for="logo in logos" :src="logo" class="col-3 col-md-2" alt="">
  </section>
</template>

<script>
export default {
  data () {
    return {
      logos: [
          './src/assets/img/logo-ameli.png',
          './src/assets/img/logo-oncd.png',
          './src/assets/img/logo-ufsbd.png',
          './src/assets/img/logo-mt.png'
      ]
    }
  }
}
</script>


<style lang="scss">
@mixin flex-row($row,$column) {
  display: flex;
  flex-direction: row;
  justify-content: $row;
  align-items: $column;
}

#partenaires {
  @include flex-row(space-around,center);
  background-color: rgba(#fff,0.7);
  padding: 4em 0;
  @include flex-row(space-around,center);
  img {
    z-index: -10;
    position: relative;
  }
}
</style>
