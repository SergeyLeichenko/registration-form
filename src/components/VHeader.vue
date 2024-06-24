<template>
  <header class="header-block">
    <div class="header-block__logo">
      <img src="../assets/images/powercode.png" alt="Powercode Academy">
    </div>
    <div class="header-block__info">
      <div class="header-block__info_date-time">
        <img src="../assets/images/calendar_today.svg" alt="calendar">
        <p>28 декабря</p>
      </div>
      <div class="header-block__info_date-time time">
        <img src="../assets/images/gg_time.svg" alt="time">
        <p>3,5 часа</p>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '../assets/style/_variables';
.header-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1031px;
  padding: 32px 47px 0 47px;
  margin: auto;
  &__info {
    display: flex;
    &_date-time {
      width: 141px;
      padding: 10px 0px 8px 27px;
      background-color: $blue;
      border-radius: 10px;
      display: flex;
      p {
        margin-left: 8px;
        font-size: 14px;
        font-weight: 600;
      }
    }
    .time {
      margin: 0 20px;
    }
  }
}

@media (max-width: 608px) {
  .header-block {
    flex-direction: column;
  }
}
</style>