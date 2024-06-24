<template>
  <div class="wrap">
    <Header />
    <main>
      <div class="main">
        <div class="main__text">
          <div class="main__text_icon">
            <img src="../assets/images/gg_time1.svg" alt="">
            <p>Вебинар</p>
          </div>
          <div class="main__text_title">
            <h1>front-end</h1>
          </div>
          <div class="main__text_subtitle">
            <span>с нуля</span> легкий старт в IT профессии
          </div>
          <div class="main__text_text">
            <p>Узнайте какими <b>навыками должен обладать фронтенд разработчик в 2022 году</b> и как начать карьеру в
              востребованной профессии </p>
          </div>
          <div class="main__text_announcer">
            <div class="men block">
              <img src="../assets/images/man.png" alt="announcer">
              <div class="text">
                <p class="name">Кирилл <span>КАСАТОНОВ</span></p>
                <p class="desc">6 лет коммерческого опыта с такими компаниями как<br> Mercedes-Benz и другими крупными
                  корпорациями</p>
              </div>
            </div>
            <div class="box block">
              <img src="../assets/images/box.png" alt="box">
              <div class="text">
                <p class="bonus">Бонус за регистрацию</p>
                <p class="desc">PDF-файл "5 преимуществ<br> профессии фронтенд разработчика"</p>
              </div>
            </div>
          </div>
        </div>

        <div class="main__form">
          <FormRegistration @submit="submitForm" />
        </div>

        <div class="main__icons">
          <img src="../assets/images/HTML5_icon.png" alt="HTML" class="html">
          <img src="../assets/images/CSS3_icon.png" alt="css" class="css">
          <img src="../assets/images/javascript_icon.png" alt="javascript" class="js">
          <img src="../assets/images/sublime-text_icon.png" alt="sublime-text" class="st">
          <img src="../assets/images/VSC_icon.png" alt="VSC" class="vsc">
        </div>
      </div>

      <div class="footer-text">
        <h1>front-end developer</h1>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from './VHeader.vue';
import FormRegistration from './FormRegistration.vue';
</script>

<style scoped lang="scss">
@import '../assets/style/_variables';

.wrap {

  .main {
    max-width: 1150px;
    display: flex;
    justify-content: space-between;
    margin: 112px 112px 0 auto;

    &__text {
      max-width: 427px;

      &_icon {
        width: 119px;
        background: $light-blue;
        display: flex;
        border-radius: 5px;
        padding: 7px 7px 7px 13px;
        margin-top: 11px;

        p {
          margin-left: 5px;
          font-size: 16px;
          font-weight: 600;
        }
      }

      &_title {
        margin-top: -11px;

        h1 {
          font-size: 77px;
          font-weight: 800;
          color: $red;
          text-transform: uppercase;
          letter-spacing: -8px;
        }
      }

      &_subtitle {
        font-size: 22px;
        font-weight: 600;
        display: flex;
        align-items: center;

        span {
          width: 109px;
          height: 38px;
          border-radius: 5px;
          text-transform: uppercase;
          font-size: 24px;
          font-weight: 800;
          text-align: center;
          align-items: center;
          background-color: $red;
          rotate: 357deg;
          display: block;
          margin-right: 5px;
        }
      }

      &_text {
        font-size: 18px;
        line-height: 26px;
        margin: 27px 0 60px 0;
      }

      &_announcer {
        .men {
          margin-bottom: 19px;
        }

        .block {
          display: flex;

          img {
            width: 50px;
            height: 49px;
          }

          .text {
            margin-left: 18px;

            .name {
              text-transform: uppercase;
              font-size: 13px;
              font-weight: 700;

              span {
                color: $light-blue;
              }
            }

            .desc {
              font-size: 12px;
              line-height: 20px;
            }
          }
        }
      }
    }

    &__form {
      margin-left: 112px;
    }

    &__icons {
      display: flex;
      flex-direction: column;
      margin-top: 38px;
      width: 190px;

      img {
        width: 104px;
        height: 102px;
      }

      .html {
        margin-left: auto;
      }

      .js {
        margin: -45px 0 0 auto;
      }

      .st {
        width: 65px;
        height: 65px;
        margin: -18px 0 0 10px;
      }

      .vsc {
        width: 75px;
        height: 75px;
        margin: -1px 30px 0 auto;
      }
    }
  }

  .footer-text {
    margin-top: 10px;

    h1 {
      font-size: 7em;
      font-weight: 800;
      color: rgba(255, 255, 255, 0.05);
      text-transform: uppercase;
      letter-spacing: 3px;
      -webkit-text-stroke: 1.6px;
    }
  }
}

// media
@media (max-width: 1288px) {
  .wrap {
    .main {
      margin-right: 0;
      padding: 0 20px;

      @media (max-width: 1072px) {
        &__icons {
          display: none;
        }
      }
    }

    @media (max-width: 740px) {
      .main {
        display: flex;
        flex-direction: column;

        &__text {
          max-width: 100%;

          &_icon {
            margin: auto;
          }

          &_title,
          &_subtitle,
          &_text {
            display: flex;
            justify-content: center;
            text-align: center;
          }

          &_announcer {
            display: flex;
            flex-direction: column-reverse;
            width: 270px;
            margin: auto;
            .men {
              margin-bottom: 0;
            }
            .box {
              margin-bottom: 19px;
            }

            .block {
              justify-content: center;
            }
          }
        }
        &__form {
          margin-left: 0;
          margin-top: 20px;
          .form-wrap {
            margin: auto;
          }
        }
      }
    }
  }
}

@media (max-width: 1557px) {
  .wrap .footer-text {
    text-align: center;
  }
}

@media (max-width: 1072px) {
  .wrap .footer-text {
    text-align: center;
  }
}

@media (max-width: 828px) {
  .wrap .footer-text h1 {
    font-size: 3em;
  }
}
</style>