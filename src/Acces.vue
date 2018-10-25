<template lang="html">
  <section id="acces" class="row">
    <h2>{{title}}</h2>

    <!-- text  -->

    <div class="col-12 d-flex flex-wrap info-iframe">

          <!-- address + schedule -->
        <div class="col-12 col-md-6 col-lg-6 info-text mups ">

          <div v-for="contact in contacts" class="col-12 ">
              <div class="d-flex justify-content-start align-items-baseline">
                  <i :class="contact.icon"></i>
                  <h3>{{contact.title}}</h3>
              </div>
            <p v-for="description in contact.descriptions" >{{description}}</p>

            <div  v-for="detail in contact.details" class="d-flex">
                <div class="d-flex align-items-baseline">
                    <i :class="detail.icon"></i>
                    <p class="pl-3  mt-2 text-bold">{{detail.description}}</p>
                </div>
            </div>
          </div>

          <div v-for="schedule in schedules" class="col-12 my-3">
              <div class="d-flex justify-content-start align-items-baseline">
                  <i :class="schedule.icon"></i>
                  <h3>{{schedule.title}}</h3>
              </div>
              <p v-for="description in schedule.descriptions" >{{description}}</p>
          </div>
        </div>

        <!-- moyen access -->

        <div class="col-12 col-md-6 col-lg-6  info-text chups ">
            <div v-for="acces in access" class="col-12">
                <div class="d-flex justify-content-start align-items-baseline">
                    <i :class="acces.icon"></i>
                    <h3>{{acces.title}}</h3>
                </div>
                <p v-for="description in acces.descriptions" >{{description}}</p>

                <div class="d-flex align-items-baseline">
                    <i class="far fa-compass"></i>
                  <p class="pl-3 mt-2"><i><a href="https://www.google.com/maps/dir//50.490006,2.566401/@50.490006,2.566401,17z?hl=fr">calculer son itinéraire en voiture  ici</a></i></p>
                </div>

                <div  v-for="detail in acces.details" class="d-flex">
                    <div class="d-flex align-items-baseline">
                        <i :class="detail.icon"></i>
                        <p class="pl-3 mt-5 text-bold">{{detail.description}}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

  <!-- iframe  -->
    <div class="map-iframe col-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.3735009097504!2d2.564212315136998!3d50.490005979480806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd1828b0d39059%3A0xac8c2365c6154a1b!2sSalome+Suybeng!5e0!3m2!1sen!2sfr!4v1524062289496" width="100%" height="550" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Plan d\'Accès',
      contacts: [
        {
            title:'Cabinet Dentaire',
            icon: 'fas fa-map-marker',
            descriptions:[
                '137 rue Jean Jaures',
                '62700 Bruay-La-Buissière'
            ],
            details: [
                {
                    description:'03 4567 4321',
                    icon: 'fas fa-phone',
                },
                {
                    description:'cabinetdentaire@email.com',
                    icon: 'fas fa-envelope'
                }
            ]
        }
    ],
      schedules: [
          {
            title:'Nos Horaires',
            icon:'far fa-clock',
            descriptions:[
                'Ouvert du lundi au vendredi',
                'De 9h jusqu\'à 18h',
            ]
          }
      ],
      access: [
        {
          title:'Moyen d\'accès',
          icon:'fas fa-bus',
          descriptions:[
              'Situé à 2 minutes à pieds de l\'arrêt "Mairie De Labuissière" de la ligne 16.',
              'Situé à 5 minutes à pieds de l\'arrêt "Bruay Poste" de la ligne Bulle 2 et 32.'
          ],
          details: [
              {
                  description: 'Accès possible aux personnes à mobilité réduite.',
                  icon: 'fab fa-accessible-icon'
              }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">

// ----- media queries:
$min-break-small: "only screen and (min-width : 576px)";
$min-break-medium: "only screen and (min-width : 768px)";
$min-break-large: "only screen and (min-width : 992px)";
$min-break-xlarge: "only screen and (min-width : 1200px)";

$max-break-small: "only screen and (max-width : 350px)";

// mixins

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

@import url('https://fonts.googleapis.com/css?family=Poppins');

.text-bold {
  font-weight: bold;
}

#acces {
  text-align: center;
  background-color: #1E91D6;
  padding-bottom: 5em;

  h2 {
    width: 100%;
    margin: 1em 0;
    text-align: center;
    color: #ffffff;
    text-align: center;
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Lato', sans-serif;
  }

  .map-iframe {
    padding: 0;
    margin: 0;

    @media #{$min-break-large} {
      padding: 0 5em;
      @include flex-row (flex-start,center);
    }
    iframe{
      height: 300px;
      @media #{$min-break-large} {
        height: 400px;
      }
    }
  }

  .info-iframe {
    color: #fff;
    margin-bottom: 3em;
    @media #{$min-break-medium} {
      @include flex-row(center,flex-start);
    }
    .info-text{
      margin: 1.5em 3em 1.5em 0;
      @media #{$min-break-medium} {
        margin: 1.5em 0;
        max-width: 400px;
      }
      a {
        color: white;
      }
      h3, p {
        margin-top: 0.5em;
        font-size: 0.9em;
        text-align: left;
      }
      h3 {
        margin-left: 20px;
        padding-top: 0.5em;
        margin-bottom: 1em;
      }
      i {
        padding-right: 20px;
      }
    }
  }
}

</style>
