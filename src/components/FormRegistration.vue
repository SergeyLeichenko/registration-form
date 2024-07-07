<template>
  <div class="form-wrap">
    <form class="form" @submit.prevent="submitForm">
      <div class="form__title">
        <h2 class="form__title_text">Запишитесь <span>бесплатно</span> и получите подарок</h2>
      </div>

      <div class="form__field">
        <input 
          type="text" 
          placeholder="Ваше имя и фамилия" 
          v-model="v$.name.$model"
          :class="{ 'error-border': v$.name.$error }" 
        />
        <small class="error" v-if="v$.name.$error">{{ v$.name.required.$message }}</small>
      </div>

      <div class="form__field">
        <input 
          type="text" 
          placeholder="Ваш номер телефона" 
          v-model="v$.phone.$model"
          :class="{ 'error-border': v$.phone.$error }" 
          v-maska="'+##(###)###-##-##'" 
          maxlength="17" 
        />
        <small class="error" v-if="v$.phone.$error">{{ v$.phone.phone.$message }}</small>
      </div>

      <div class="form__field">
        <input
          type="email" 
          placeholder="Ваш email" 
          v-model="v$.email.$model"
          :class="{ 'error-border': v$.email.$error }" 
        />
        <small class="error" v-if="v$.email.$error">{{ v$.email.email.$message }}</small>
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
        outline: none;

        &::placeholder {
          font-size: 13px;
          color: $white;
        }
      }
      .error-border {
        border: 2px solid $red;
      }

      .error {
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
import { reactive, defineEmits, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { vMaska } from "maska/vue";

const emit = defineEmits(['submit'])

const form = reactive({
  name: '',
  phone: '',
  email: ''
})

const rules = computed(() => {
  return {
    name: {
    required: helpers.withMessage('Введите имя и фамилию', required)
    },
    phone: {
      phone: helpers.withMessage('Введите номер телефона', required)
    },
    email: {
      email: helpers.withMessage('Введите коректний email', required, email)
    }
  }
})

const v$ = useVuelidate(rules, form);

const submitForm = async () => {
  const result = await v$._value.$validate()

  if (!result) {
    alert('Fill in all fields!')
  } else {
    alert('Form submited')
    emit('submit', form);
  }
}

</script>