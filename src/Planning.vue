<template lang="html">
  <section id="planning" class="row">
    <h2>{{title}}</h2>
    <p>{{description}}</p>
    <p>
      Prendre rendez-vous <a href="#contact">ici</a>
    </p>
    <iframe class="col-12 col-md-8" src="https://calendar.google.com/calendar/embed?src=drsalomesuybeng%40gmail.com&ctz=Europe%2FParis" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
  </section>

</template>

<script>
export default {
  data () {
    return {
      title: 'Planning',
      description: 'Retrouvez ici les dates d\'ouverture et le planning de notre cabinet',
    }
  }
}
</script>

<style lang="scss">

@mixin flex-column($row,$column) {
  display: flex;
  flex-direction: column;
  align-items: $row;
  justify-content: $column;
}

#planning {
  @include flex-column(center,center);
  text-align: center;
  h2 {
    width: 100%;
    margin: 1em 0;
    text-align: center;
    font-size: 2em;
    text-transform: uppercase;
    color: #0072BB;
    text-align: center;
    font-family: 'Lato', sans-serif;
  }
  p {
    text-align: center;
    font-size: 1.2em;
    color: #002075;
  }
  iframe {
    padding: 3em 0;
  }
}
</style>
