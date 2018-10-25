<template lang="html">
  <section id="apropos" class="row d-flex justify-content-center ">
    <div class="intro col-11 col-md-8 col-lg-6">
      <h2>{{title}}</h2>
      <p v-for="item in items"> {{item}} </p>
    </div>

    <div id="services" class="col-12 d-flex flex-wrap">
        <h2>Nos services</h2>
      <aside v-for="service in services" class="col-12 col-md-4 col-lg-4">
        <img :src="service.icon" alt="">
        <h4>{{service.name}}</h4>
        <p>{{service.description}}</p>
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Le Cabinet Dentaire',
      items:[
        'Bienvenue sur le site du Cabinet Dentaire des Docteurs Jean-François SALOME et Aline SUYBENG. Nous vous soignerons dans un cabinet moderne, équipé des dernières technologies dentaires.',
        'Notre vocation : vous assurer une bouche en parfaite santé, le bien-être d\'un sourire esthétique, une absence de douleur, un confort de mastication... tout au long de votre vie.'
      ],
      services: [
        {
          icon: './src/assets/img/service.svg',
          name: 'Soins',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: './src/assets/img/service-2.svg',
          name: 'Une équipe à votre écoute',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: './src/assets/img/service-3.svg',
          name: 'Prophylaxie',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: './src/assets/img/service-4.svg',
          name: 'Implants dentaires',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: './src/assets/img/service-5.svg',
          name: 'Endodontie',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
          icon: './src/assets/img/service-6.svg',
          name: 'Soins',
          description:'sunt in culpa qui officia deserunt mollit anim id est laborum'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

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


#apropos {
  .intro{
    margin: 5em 0;
    h2 {
      text-transform: uppercase;
      color: #0072BB;
      text-align: center;
      font-family: 'Lato', sans-serif;
    }
    p {
      text-align: justify;
      font-size: 1.4em;
      color: #002075;
      margin: 2em 0;
    }
  }
}

#services {
  background-color: #0072BB;
  color: #fff;
  padding: 5em 0;
  h2 {
    width: 100%;
    margin: 2em 0;
    text-align: center;
    color: #fff;
    // text-transform: lowercase;
    // letter-spacing: -5px;
    font-size: 2em;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
  }
  aside {
    text-align: center;
    padding: 2em 0;
    @include flex-column(center,center);
    h4 {
      margin: 1em 0;
      font-weight: 200;
    }
    p {
      text-align: center;
      width: 250px;
      font-weight: 300;
    }
  }
}

</style>
