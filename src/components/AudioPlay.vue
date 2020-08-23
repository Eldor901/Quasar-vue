<template>
  <label class="audioIcon">
    <q-btn unelevated round :color="color"  @click.prevent="playSound(audio)" icon="volume_up"  />
  </label>
</template>

<script>
    export default {
        props: {
          audio: String,
          color: String
        },
        name: "AudioPlay",

      methods: {
          playSound(sound){
            if(sound)
            {
              let audio = new Audio(sound);
              audio.play();
            }
          }
        }
    }
</script>

<style scoped>
  .audioIcon {
    margin: 10px;
  }
</style>
