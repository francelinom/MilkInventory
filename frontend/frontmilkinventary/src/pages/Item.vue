<template>
  <div class="q-pa-md flex flex-center">
    <div>
      <div class="text-h3 text-bold login-title">Cadastro de Itens</div>

      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input v-model="text" label="Nome do Produto" :dense="dense" />

        <q-input v-model="text" label="Marca" :dense="dense" />

        <q-select v-model="model" :options="options" label="Unidade de Medida" />

        <q-input v-model="text" type="number" label="Quantidade Miníma" :dense="dense" />

        <q-input v-model="date" filled type="date" hint="Data de Validade" />

        <q-card-actions align="center">
          <q-btn label="Cadastrar" type="submit" color="primary" />
        </q-card-actions>

        <ul id="example-1">
          <li v-for="item in itens" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Item',
  data () {
    return {
      model: null,
      options: [
        'G', 'MG', 'L', 'ML'
      ]
    }
  },
  created () {
    this.getItens()
    console.log(this.getItens())
  },
  methods: {
    ...mapActions(['getItens'])
  },
  computed: {
    ...mapState({
      itens: state => state.itens.list
    })
  }
}
</script>
