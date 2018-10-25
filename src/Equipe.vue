<template lang="html">
  <section id="equipe" class="row d-flex flex-wrap">
    <aside class="intro col-12">
      <h2>{{title}}</h2>
      <p v-for="description in descriptions">{{description}}</p>
    </aside>

    <div class="col-12 d-flex flex-wrap justify-content-around justify-content-lg-center">
        <aside v-for="item in items" class="profile col-12 col-md-4">
          <img :src="item.image" alt="">
          <h3>{{item.name}}</h3>
          <p>{{item.occupation}}</p>
          <p>{{item.registration}}</p>
        </aside>
    </div>


    <div class="ribbon col-12 d-flex justify-content-center">
      <div class="col-md-8 col-lg-6">
        <h3>Une équipe à votre écoute</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button type="button" class="btn btn-outline-light col-12 col-md-4">voir nos prestations</button>
      </div>
    </div>
  </section>



</template>

<script>
export default {
  data () {
    return {
      title: 'L\'Equipe',
      descriptions: ['Diplômés de la Faculté de Chirurgie Dentaire de Lille.','Membres de l\'Ordre National des Chirurgiens-Dentiste (O.N.C.D.)'],
      items: [
        {
          name: 'Dr. Jean-François Salomé',
          image: 'https://image.flaticon.com/icons/svg/607/607414.svg',
          occupation: 'Docteur en Chirurgie Dentaire',
          registration: 'Inscription O.N.C.D. n°10100123456'
        },
        {
          name: 'Dr. Aline Suybeng',
          image: 'https://image.flaticon.com/icons/svg/122/122454.svg',
          occupation: 'Docteure en Chirurgie Dentaire',
          registration: 'Inscription O.N.C.D. n°10100123456'
        }
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

@mixin flex-column($row,$column) {
  display: flex;
  flex-direction: column;
  align-items: $row;
  justify-content: $column;
}

#equipe {

  .intro{
    margin: 2em 0;
    h2 {
      margin: 0.5em 0;
      text-align: center;
      font-size: 2em;
      text-transform: uppercase;
      color: #0072BB;
      text-align: center;
      font-family: 'Lato', sans-serif;
    }
    p {
      text-align: center;
      font-size: 1.6em;
      color: #7d7d7d;
      margin: 0.5em ;
    }
  }
  .profile {
    @include flex-column(center,center);
    padding-bottom: 3em;
    margin: 3em 0;
    img {
      height: 180px;
      width: 180px;
    }
    h3 {
      margin: 0.5em;
      font-weight: 400;
      font-size: 1.2em;
      letter-spacing: -2px;
    }
    p {
      margin: 0.2em;
      text-align: center;
      font-size: 0.9em;
      color: #484848;
      width: 250px;
    }
  }
  .ribbon {
    background: #00AFB5;
    color: #D4F4DD;
    padding: 4em 2em ;
    text-align: center;
    h3 {
      font-weight: 300;
    }
    p {
      margin: 2em 0;
      font-weight: 300;

    }
  }

}

</style>
