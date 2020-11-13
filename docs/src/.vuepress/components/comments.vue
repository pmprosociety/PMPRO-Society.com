<template>
  <div>
    <h2>Discussion</h2>
    <div id="utternaces-comment" ref="commentContainer"></div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.callCommentService()
    },
    methods: {
      callCommentService () {
        this.$nextTick(() => {
          const script = window.document.createElement('script')
          script.src = 'https://utteranc.es/client.js'
          script.setAttribute('repo', 'pmprosociety/docs')
          script.setAttribute('issue-term', 'url')
          script.setAttribute('label', 'comments')
          script.setAttribute('theme', 'github-light')
          script.setAttribute('crossorigin', 'anonymous')
          script.setAttribute('async', 'async')
          this.$refs.commentContainer.appendChild(script)
        })
      }
    }
  }
</script>