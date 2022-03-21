<template>
  <div class="card">
    <AvatarPlayer :name="name" :color="color"/>
    <strong>{{name}}</strong>
  </div>
</template>

<script>
import AvatarPlayer from "@/components/player/AvatarPlayer";
export default {
  name: "PlayerCard",
  components: {AvatarPlayer},
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
}
</style>
