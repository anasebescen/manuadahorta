const plantas = [
  {
    id: 1,
    name: 'Beterraba',
    handle: '@jokerjames',
    img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    companheiras: "lista de plantas companheiras",
    // artigos: [
    //   { link: 'Learn JavaScript' },
    //   { link: 'Learn Vue' },
    //   { link: 'Build something awesome' }
    // ]
  },
  {
    id: 2,
    name: 'Cenoura',
    handle: '@fantasticfatima',
    img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
    companheiras: "lista de plantas companheiras",
    // artigos: [
    //   { link: 'Learn JavaScript' },
    //   { link: 'Learn Vue' },
    //   { link: 'Build something awesome' }
    // ]
  },
  {
    id: 3,
    name: 'Xin',
    handle: '@xeroxin',
    img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
    companheiras: "lista de plantas companheiras",
    // artigos: [
    //   { link: 'Learn JavaScript' },
    //   { link: 'Learn Vue' },
    //   { link: 'Build something awesome' }
    // ]
  }
]

Vue.component('planta-component', {
  template: `
    <tr>
      <th scope="row"><img :src="planta.img" height="40" alt="Image"></th>
      <td>{{planta.name}}</td>
      <td>{{planta.companheiras}}</td>
      <td></td>
    </tr>
  `,
  props: {
    planta: Object
  }
});

new Vue({
  el: '#app',
  data: {
    plantas
  }
});
