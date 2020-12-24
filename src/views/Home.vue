<template>
  <div>
    <hero />

    <v-container
      class="py-5 px-0"
      fluid
    >
      <who-i-am />

      <what-i-can-do-for-you />

      <where-ive-been />

      <what-i-know />

      <what-ive-done />

      <what-my-clients-say />

      <lets-talk />
    </v-container>
  </div>
</template>

<script>
  export default {
    components: {
      Hero: () => import('@/views/Hero'),
      WhoIAm: () => import('@/views/WhoIAm'),
      WhatICanDoForYou: () => import('@/views/WhatICanDoForYou'),
      WhereIveBeen: () => import('@/views/WhereIveBeen'),
      WhatIKnow: () => import('@/views/WhatIKnow'),
      WhatIveDone: () => import('@/views/WhatIveDone'),
      // WhatMyClientsSay: () => import('@/views/WhatMyClientsSay'),
      LetsTalk: () => import('@/views/LetsTalk'),
    },

    metaInfo () {
      return {
        title: this.$i18n.t('Home.title'),
      }
    },

    data: () => ({
      //
    }),
    mounted () {
      console.log('algo')
      const ckeditor = document.createElement('script')
      ckeditor.setAttribute(
        'src',
        'https://cdn.respond.io/webchat/widget/widget.js?cId=db3a926357fb58540970f07432d0ff938f5bc5af3797ff98e7b01459f6f4a14b',
        // "https://widget.flow.ai/w/NGExOTgwODItMzdiNy00OTExLWJhYmQtYWQ0Yzk3ZGIxNDQ1fDAwMThlZDdkLTQ1YjQtNDQ5OC05ODRhLTU0YzYzZDY2YTEzNw==/flow-webclient-1.1.2.min.js"
      )
      document.head.appendChild(ckeditor)
    },

  }
</script>
