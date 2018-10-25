<template lang="html">
  <header>
    <nav class="navbar navbar-expand-lg">
        <router-link to="/" class="navbar-branding">{{brand}}</router-link>

      <!-- hamburger toggler -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars fa-lg"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div  class="navbar-nav">
          <!-- <router-link class="nav-item nav-link" to="/">Le Cabinet Dentaire</router-link> -->

          <a v-for="item in items" class="nav-item nav-link" :href="item.url"> {{ item.nav }}</a>

          <router-link class="nav-item nav-link" to="/urgences">Urgences</router-link>
          <router-link class="nav-item nav-link" to="/prestations">Prestations</router-link>
        </div>

        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Nous Joindre
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Horaires</a>
            <a class="dropdown-item" href="#">Planning</a>
            <a class="dropdown-item" href="#">Accès</a>
            <a class="dropdown-item" href="#">Contact</a>
          </div>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      brand: 'Cabinet Dentaire | Dr Salomé & Dr Suybeng',
      items: [
        { nav: 'A propos', url: '/#apropos' },
        {  nav: 'L\'Equipe', url: '/#equipe'}
        // { nav: 'Contact', url: '#contact'}
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

// properties


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


@import url('https://fonts.googleapis.com/css?family=Raleway:200');

.navbar-expand-lg {
  @media #{$min-break-large}{
    -webkit-box-pack: justify !important;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;  }
}

.navbar-expand-lg .navbar-collapse {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.navbar.navbar-expand-lg {
width: 100%;
}
.navbar-branding {
font-family: 'Raleway', sans-serif;
padding: 5px;
color: #2B3A67;
text-transform: uppercase;
font-size: 1.5em;

display: none;
  @media #{$min-break-medium}{
  // margin-right: 200px;
    display: block;

  }
&:hover {
  text-decoration: none;
  color: #2B3A67;
}
}

header {

  position: fixed;
  z-index: 1000;
  @include flex-row(space-between, center);
  background-color: rgba(#fff,0.8);
  width: 100%;
  -webkit-box-shadow: 1px 1px 10px #c3c3c3;
  box-shadow: 1px 1px 10px #c3c3c3;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 0 ;
  @media #{$min-break-medium} {
    padding : 1em 2em ;
  }

  nav {
    .nav-link {
    text-transform: uppercase;
    font-size: 0.9em;
    color: #00171F
    }
  }

}</style>
