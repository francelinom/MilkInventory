<template>
  <q-layout>
    <q-page-container>
      <q-page class="row login">
        <div class="col-xs-12 col-sm-12 col-md-5">
          <div class="login-form">
            <div class="text-h2 text-bold login-title">Milk Inventary</div>
            <div>
              <form @submit.prevent="login" class="q-gutter-lg">
                <div class="col">
                  <div class="flex items-end">
                    <div class="text-h4 text-bold">Login</div>
                    <div class="text-h6 text-grey q-mr-sm q-ml-md">
                      <a>Cadastro</a>
                    </div>
                  </div>
                </div>
                <q-input v-model="user.username" label="Usuário" filled/>
                <q-input v-model="user.password" label="Senha" type="password" filled/>
                <div class="col">
                  <a class="text-grey" @click="showrecovery = true">Esqueceu a Senha?</a>
                </div>
                <div>
                  <q-btn
                    type="submit"
                    color="yellow-13"
                    label="Login"
                    icon="check_circle"
                    size="lg"
                    />
                </div>
              </form>
              <div class="q-mt-lg">
                <div class="text-body1 text-grey">📦 Estoque.</div>
                <div class="text-body1 text-grey">📊 Relatórios.</div>
              </div>
              <br/>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-7 login-info bg-login flex flex-center">
          <div class="flex flex-center">
            <div class="text-h2 text-bold text-white q-ma-lg">
              Controle
              <br />De Estoque
            <p class="text-overline">Copyright © 2020 PA2, EAJ - UFRN.</p>
            </div>
          </div>
        </div>
      </q-page>
      <q-dialog v-model="showrecovery" persistent>
        <q-card>
          <q-card-section class="row">
            <form @submit.prevent="sendRecovery()" class="q-gutter-md">
              <q-input label="Email" required />
              <q-btn flat label="Cancelar" color="primary" v-close-popup />
              <q-btn flat label="Enviar" color="primary" type="submit" />
            </form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    user: {},
    showrecovery: false
  }),
  methods: {
    async login () {
      this.$router.push('/')
    },
    sendRecovery () {
      this.showrecovery = false
      // para o backend
    },
    cancel () {
      this.showrecovery = false
    }
  }

}
</script>

<style lang="scss">
.login-form {
  width: 300px;
  margin: 0 auto;
}
.bg-login {
  //background-color: #1126ce;
  background: linear-gradient(
    to right,
    rgb(222, 208, 147) 0%,
    rgb(255, 194, 81) 41%,
    rgb(255, 207, 48) 100%
  );
}
.login-title {
  margin: 1.8em 0;
}
a {
  cursor: pointer;
}
</style>
