<template>
  <div class="q-pa-md flex flex-center">
    <div>
      <div class="text-h3 text-bold login-title">Cadatro de Itens</div>

        <div class="q-gutter-y-md column" style="max-width: 300px">

          <q-input v-model="text" label="Nome do Produto" :dense="dense" />

          <q-input v-model="text" label="Marca" :dense="dense" />

          <q-input v-model="text" label="Unidade de Medida" :dense="dense" />

          <q-input v-model="text" label="Quantidade" :dense="dense" />

          <q-input v-model="date" filled type="date" hint="Data de Validade" />

          <q-card-actions align="center">
            <q-btn label="Cadastrar" type="submit" color="primary"/>
          </q-card-actions>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item'
}
</script>
