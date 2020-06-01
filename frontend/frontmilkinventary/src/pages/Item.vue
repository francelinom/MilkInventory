<template>
  <div class="q-pa-md">
    <div>
      <div class="text-h3 text-bold login-title">Cadastro de Itens</div>

      <div class="q-gutter-y-md column col-3 col-sm-6" >
        <q-form>
          <q-input v-model="item.name" label="Nome do Produto"  />

          <q-input v-model="item.brand" label="Marca" />

          <q-select v-model="item.unity" :options="options" label="Unidade de Medida" />

          <q-input v-model="item.qtyMinimun" type="number" label="Quantidade Miníma" />

          <q-input v-model="item.validity" filled type="date" hint="Data de Validade" />

          <q-card-actions align="center">
            <q-btn label="Cadastrar" type="submit" color="primary" @click="submit()"/>
            <q-btn label="Cancelar" type="submit" color="red"/>
        </q-card-actions>
        </q-form>
      </div>

      <div>
        <q-table :data="itens" title="Produtos" :columns="columns" row-key="id">
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ItemService } from '../services/api.service'

export default {
  name: 'Item',
  data () {
    return {
      item: {},
      model: '',
      options: [
        'G', 'MG', 'L', 'ML'
      ],
      columns: [
        { name: 'stock_id', label: 'código', field: 'stock_id', sortable: true },
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
    this.getItens()
    this.createItem()
  },
  computed: {
    ...mapState({
      itens: state => state.itens.list,
      itensCreate: state => state.itens.createItem
    })
  },
  methods: {
    ...mapActions(['getItens', 'createItem']),
    async submit () {
      try {
        await ItemService.create(this.item)
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>
