<template>
  <div class="q-pa-md">
    <q-table
      title="Lista de Estoque"
      :data="data"
      :columns="columns"
      row-key="id"
      :pagination.sync="pagination"
      :loading="loading"
      :filter="filter"
      @request="onRequest"
      binary-state-sort
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Procurar...">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
    <ul>
      <li v-for="stc in stocks" :key='stc'>{{stc}}</li>
    </ul>

    <ul>
      <li v-for="stcid in stocksid" :key='stcid'>{{stcid}}</li>
    </ul>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Stock',
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nome do Produto',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'marca', align: 'center', label: 'Marca', field: 'marca', sortable: true },
        { name: 'unidade_medida', label: 'Unidade de Medida', field: 'unidade_medida' },
        { name: 'minima', label: 'quantidade Mínima', field: 'minima', sortable: true },
        { name: 'quantidade', label: 'Quantidade', field: 'quantidade' },
        { name: 'data_validade', label: 'Data de Validade', field: 'data_validade' }
      ]
    }
  },
  created () {
    this.getStocks()
    this.getUnityStock(1)
  },
  computed: {
    ...mapState({
      stocks: state => state.stocks.list,
      stocksid: state => state.stocks.listid
    })
  },
  methods: {
    ...mapActions(['getStocks', 'getUnityStock'])
  }
}
</script>
