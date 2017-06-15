<!-- template for the modal component -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <!--     <button id="show-modal" @click="showModal = true">Show Modal</button>

        <modal v-if="showModal" @close="showModal = false">

        <h3 slot="header">custom header</h3>
      </modal> -->
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        showModal: false
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Microsoft YaHei', Helvetica, Tahoma, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 93vh;
    background-color: #f4f4f4;
  }

  body {
    margin: 0;
    padding: 0;
    margin-top: 53px;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .trade .modal-mask {
    top: 97px;
  }

  .trade .modal-wrapper {
    display: block;
    z-index: 9999999;
    position: absolute;
    width: 100%;
  }

  .trade .modal-container {
    width: 90%;
    padding: 1em 5%;
  }

  .trade .modal-body {
    margin: 0;
  }

  .trade .modal-footer, .trade .modal-header {
    display: none;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }

</style>
