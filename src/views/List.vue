<template>
  <div>
    list 1pagejkl
  </div>
</template>

<script>
  import ListModel from 'models/list'

  const listModel = new ListModel()

  export default {
    name: 'List',
    async mounted() {
      const fieldData = await listModel.getCourseFields(),
            courseData = await listModel.getCourses('all')
            
      console.log(fieldData, courseData)
    }
  }
</script>

<style lang="scss" scoped>
  div {
    color: red;
  }
</style>