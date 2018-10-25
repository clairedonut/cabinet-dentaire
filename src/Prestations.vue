<template lang="html">
  <main class="container">
    <section id="prestations" class="row d-flex flex-column align-items-center">

      <div class="col-12 col-md-10 col-lg-8">
        <h2>{{title}}</h2>
        <p>
          {{description}}
        </p>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Prestations</th>
            <th scope="col"></th>
            <th scope="col">Tarifs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <th scope="row"></th>
            <td>{{item.name}}</td>
            <td>{{item.text}}</td>
            <td>{{item.tarif}}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Nos Prestations',
      description: 'Veuillez trouver ici tous nos service proposés. Pour plus de renseignements, n\'hésitez pas à nous joindre directement',
      items: [
        {
          name: 'Prophylaxie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Endodontie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Parodontologie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Prothèses dentaires',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Implants',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Prophylaxie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        },
        {
          name: 'Parodontologie',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation.',
          tarif: '00€'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
main {
  padding: 3em 0;
}

#prestations {

  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 5em 0;

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
    font-size: 1.2em;
    color: #5a5a5a;
    margin: 0.5em ;
  }

  table {
    margin: 5em;
  }
}

</style>
