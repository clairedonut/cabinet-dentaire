<template lang="html">
  <section id="accueil" class="row d-flex flex-column ">

    <div class="banner col-12">
      <div class="banner-text col-12 col-lg-6">

          <h3>{{description}}</h3>
          <h2>{{brand}}</h2>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        <!-- <h2>{{ paragraph }}</h2> -->

        <button type="button" class="btn btn-outline-primary"> {{ button }} </button>
      </div>
<!--
      <section class="col-12 d-flex">
          <aside v-for="item in items" class="col-4" :style="{ 'background-color': 'item.style' }">
              <p>{{item.title}}</p>
          </aside>

      </section> -->
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      brand: ' Dr. Salomé & Dr. Suybeng ',
      description: 'cabinet dentaire',
      button: 'Voir nos services',
      items: [
        {
          style: '#59C9A5',
          title: 'General Dentist',
          description: 'lorem'
        },
        {
          style: '#0FA3B1',
          title: 'General Dentist',
          description: 'lorem'
        },
        {
          style: '#59C9A5',
          title: 'General Dentist',
          description: 'lorem'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Raleway:200');

@mixin flex-column($row,$column) {
  display: flex;
  flex-direction: column;
  align-items: $row;
  justify-content: $column;
}

#accueil {
  font-family: 'Raleway', sans-serif;
  .banner {
    @include flex-column(flex-start,center);
    background-image: url('https://bostondental.com/wp-content/uploads/slider3-1-2080x1006.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 800px;
    width:100%;
    .banner-text {

      @include flex-column(center,center);
      h3 {
        font-family: 'Raleway', sans-serif;
        background-color: #2FBF71 ;
        color: #fff;
        padding: 5px 15px ;
        text-transform: uppercase;
        font-size: 1.2em;
        font-weight: 200;

      }
      h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        text-transform: uppercase;
        letter-spacing: -3px;
        font-size: 2.5em;
        margin: 0.5em 0;
        text-align: center;
      }
      p {
        font-size: 0.9em;
        color: #8D909B;
        font-weight: 200;
        margin: 2em 0;
      }
      button {
        margin-top: 2em ;
      }
    }
  }

  aside {
    @include flex-column(center,center);
    height : 150px;
    margin-top: 10em;
    color: #fff;
  }
}
</style>
