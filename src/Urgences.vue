<template lang="html">
  <main class="container">
    <section id="urgences" class="row d-flex flex-column align-items-center justify-content-center">
        <div v-for="item in items" class="col-12 col-lg-8">
            <h2>{{item.title}}</h2>
            <p v-for="description in item.descriptions">{{description}} </p>
        </div>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'En cas d\'Urgence',
          descriptions: [
            'Vous pouvez joindre le cabinet au 03 21 65 00 01, durant les heures d\'ouverture.',
            'En cas d\'urgence, prenez contact avec le service dentaire de l\'hôpital le plus proche.'
          ]
        },
        {
          title: 'Service de garde',
          descriptions: [
            'Un service de garde est assuré par les chirurgiens dentistes du département les dimanches et jours fériés.',
            'Pour consulter un dentiste de garde, veuillez chercher les coordonnées dans vos journaux régionaux ou téléphoner au commissariat de votre ville.',
            'Téléphone du commissariat de Bruay-La-Buissière: 03 21 64 53 20 '
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
main {
  padding: 8em 0;
}

#urgences {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  h2 {
    margin: 2em 0;
    text-align: center;
    font-size: 2em;
    text-transform: uppercase;
    color: #0072BB;
    text-align: center;
    font-family: 'Lato', sans-serif;
  }
  p {
    text-align: justify;
    font-size: 1.6em;
    margin-bottom: 2em;
    color: #5a5a5a;
  }
}
</style>
