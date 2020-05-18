<template>
  <div>
    index page1
  </div>
</template>

<script>
  import IndexModel from 'models/index'

  const indexModel = new IndexModel()

  export default {
    name: 'Index',
    async mounted() {
      const data = await indexModel.getCourseDatas()
      console.log(data)
    }
  }
</script>

<style lang="scss" scoped>
  div {
    color: red;
  }
</style>