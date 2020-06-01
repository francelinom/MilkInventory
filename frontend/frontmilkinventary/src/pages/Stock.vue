<template>
  <div class="q-pa-md">
    <div>
      <div class="text-h3 text-bold login-title">Lista de Estoques</div>
        <q-table :data="stocks" title="Produtos" :columns="columns" row-key="id"/>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Stocks',
  data () {
    return {
      model: null,
      columns: [
        { name: 'name', label: 'Produto', field: 'name', sortable: true },
        { name: 'brand', label: 'Marca', field: 'brand', sortable: true },
        { name: 'unity', label: 'Unidade de Medida', field: 'unity', sortable: true },
        { name: 'qtyMinimun', label: 'Qtd Mínima', field: 'qtyMinimun', sortable: true },
        { name: 'validity', label: 'Validade', field: 'validity', sortable: true },
        { name: 'actions', label: 'Ações' }
      ]
    }
  },
  created () {
    this.getStocks()
  },
  computed: {
    ...mapState({
      stocks: state => state.stocks.list
    })
  },
  methods: {
    ...mapActions(['getStocks'])
  }
}
</script>
