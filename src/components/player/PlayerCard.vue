<template>
  <div class="card">
    <AvatarPlayer :avatar="avatar" :name="name" :color="color" :index="index" :can-edit="canEdit"/>
    <strong>{{name}}</strong>
    <DeletePlayer v-if="canEdit && index !== null" :index="index" text="X"/>
  </div>
</template>

<script>
import AvatarPlayer from "@/components/player/AvatarPlayer";
import DeletePlayer from "@/components/player/DeletePlayer";
export default {
  name: "PlayerCard",
  components: {DeletePlayer, AvatarPlayer},
  props: {
    index: {
      type: Number,
      default: null
    },
    avatar: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    canEdit: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
}

.delete {
  padding: 0.25rem 0;
  width: 2rem;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
</style>
