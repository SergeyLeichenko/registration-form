<template>
  <div class="form-wrap">
    <form class="form" @submit.prevent="submitForm">
      <div class="form__title">
        <h2 class="form__title_text">Запишитесь <span>бесплатно</span> и получите подарок</h2>
      </div>

      <div class="form__field">
        <input type="text" placeholder="Ваше имя и фамилия" v-model.trim="form.name" @blur="v$.name.$touch()"
          :class="{ invalid: v$.name.$invalid }" />
        <small class="valid" v-if="v$.name.$invalid">{{ v$.name.required.$message }}</small>
      </div>

      <div class="form__field">
        <input type="text" placeholder="Ваш номер телефона" v-model="form.phone"
          :class="{ invalid: form.phone.length === 0}" v-maska="'+##(###)###-##-##'" maxlength="17" />
        <small class="valid" v-if="form.phone.length < 16">{{ v$.phone.$message }}</small>
      </div>

      <div class="form__field">
        <input type="email" placeholder="Ваш email" v-model="form.email"
          :class="{ invalid: v$.email.email.$invalid }" />
        <small class="valid" v-if="v$.email.email.$invalid">{{ v$.email.email.$message }}</small>
      </div>

      <div class="form__field button">
        <input type="submit" value="Записаться бесплатно">
      </div>

      <div class="form__privacy-policy">
        <a href="#">Нажимая на кнопку я согашаюсь <br /><span>с политикой конфидециальности</span></a>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/style/variables';

.form-wrap {
  max-width: 366px;

  .form {
    border-radius: 5px;
    padding: 50px 60px;
    background-color: $bg-form;

    &__title {
      margin-bottom: 24px;

      &_text {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        margin-top: 4px;

        span {
          color: $red;
        }
      }
    }

    &__field {
      margin-bottom: 10px;

      input {
        width: 100%;
        padding: 20px;
        background-color: $dark-blue;
        border-radius: 5px;
        border: 0;
        color: $white;

        &::placeholder {
          font-size: 13px;
          color: $white;
        }
      }

      .invalid {
        border: 2px solid $red;
      }

      .valid {
        color: $red;
        font-size: 12px;
      }
    }

    .button input {
      background-color: $red;
      color: $white;
      cursor: pointer;
      font-size: 15px;
      font-weight: 700;
    }

    &__privacy-policy a {
      display: block;
      font-size: 12px;
      font-weight: 500;
      color: $ligth-grey;
      text-align: center;
      line-height: 1.8em;

      span {
        border-bottom: 1px solid;
      }
    }
  }
}
</style>

<script setup>
import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { vMaska } from "maska/vue";
import axios from 'axios';

const form = reactive({
  name: '',
  phone: '',
  email: ''
})

const rules = {
  name: {
    required: helpers.withMessage('Введите имя и фамилию', required)
  },
  phone: helpers.withMessage('Введите номер телефона', required),
  email: {
    email: helpers.withMessage('Введите email', email)
  }
}

const v$ = useVuelidate(rules, form)

const url = 'https://t.me/rgb_hr';

const submitForm = async () => {

  if (form.phone.length === 17) {
    await axios.post(url, {
      data: form
    })
    .then((resp) => {
      console.log(resp);
    })
  } else {
    alert('Заполните все поля')
  }
}

</script>