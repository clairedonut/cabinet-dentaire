<template lang="html">
  <footer class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 d-flex flex-column align-items-start">
          <h3>A propos</h3>
          <p>
              We are a highly motivated team, all with very individual qualities and experience, and a high standard of patient care.
          </p>
          <p>
              We have advanced high levels of training and decades of experience and we constantly strive to provide the best treatment available using the most up to date tried and tested technology.
          </p>
      </div>
      <div class="col-12  col-md-3 d-flex flex-column mun">
          <h3>Raccourcis</h3>
          <a v-for="link in links" :href="link.path">{{link.title}}</a>
      </div>
      <div class="col-12  col-md-3 d-flex flex-column">
          <h3>Le Cabinet Dentaire</h3>
          <p>Dr Salomé et Dr Suybeng</p>
          <p>
              137 rue Jean Jaures <br>
              62700 Bruay-La-Buissière
          </p>

          <h3>Prenez Rendez-vous au:</h3>
          <p>03 45 67 78 89</p>
      </div>
    </div>
  </footer>


</template>

<script>
export default {
  data () {
    return {
      links: [
          {
              title:'Apropos',
              path: 'index.html/#home'
          },
          {
              title:'L\'équipe',
              path: 'index.html/#home'
          },
          {
              title:'Prestations',
              path: 'index.html/#home'
          },
          {
              title:'Nos Services',
              path: 'index.html/#home'
          },
          {
              title:'Urgences',
              path: 'index.html/#home'
          },
          {
              title:'Contact',
              path: 'index.html/#home'
          },
          {
              title:'Plan du Site',
              path: 'index.html/#home'
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


footer {
  background-color: #0C1F37;
  padding: 3em ;
  text-align: left;
  font-weight: 200;
  line-height: 2em;
  .row {
    padding: 0 5em;
  }
  div {
  margin-bottom: 2em;
  }
  .mun{
  @media #{$min-break-medium} {
    max-width: 200px;
    margin: 0 auto;
  }
  }
  a {
    color: #A9D2D5;
  }
  h3 {
    width: 100%;
    margin: 1em 0;
    color: #13BABF;
    font-size: 1.3em;
    font-weight: 200;
  }
  p {
    font-size: 0.9em;
    color: #8D909B;
    font-weight: 200;
  }
}
</style>
