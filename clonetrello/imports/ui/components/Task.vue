<template>
  <li v-bind:class="taskClassName">
    <input
      type="checkbox"
      readOnly
      v-bind:checked="!!this.task.checked"
    @click="toggleChecked"
  />
  <span class="text">{{ this.task.text }}</span>
</li>
</template>

<script>
  export default {
      props: ["task"],
      data() {
      return {};
  }
};
</script>