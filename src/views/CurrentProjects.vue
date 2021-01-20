<template>
  <core-section id="current-projects">
    <abstract-3 />

    <core-heading>Experiments... take a look!</core-heading>

    <v-col cols="12">
      <v-carousel
        :cycle="false"
        :height="650"
        :show-arrows="false"
        class="elevation-0"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(project, i) in project"
          :key="i"
          @click="redirect(1)"
        >
          <project :value="project" />
        </v-carousel-item>

        <v-carousel-item
          v-for="(project2, i) in project2"
          :key="i"
          @click="redirect(2)"
        >
          <project2 :value="project2" />
        </v-carousel-item>

        <v-carousel-item
          v-for="(project3, i) in project3"
          :key="i"
          @click="redirect(3)"
        >
          <project3 :value="project3" />
        </v-carousel-item>

        <v-carousel-item
          v-for="(project4, i) in project4"
          :key="i"
          @click="redirect(4)"
        >
          <project4 :value="project4" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <!-- <v-col cols="12">
      <v-carousel
        :cycle="false"
        :height="650"
        :show-arrows="false"
        class="elevation-0"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
        >
          <project :value="project" />
        </v-carousel-item>
      </v-carousel>
    </v-col> -->
  </core-section>
</template>

<script>
  export default {
    name: 'CurrentProjects',

    components: {
      Abstract3: () => import('@/components/Abstract3'),
      Project: () => import('@/components/VoiceApp'),
      Project2: () => import('@/components/FaceApp'),
    },

    data: () => ({
      project: [
        {
          name: 'Voice Verification App',
          category: 'Voice Processing and Embeddings',
          src: 'audio_app.jpg',
        },
      ],
      project2: [
        {
          name: 'Face Verification App',
          category: 'Computer Vision, Tensorflow and Syamese Networks',
          src: 'face_app.jpg',
        },
      ],
    }),
  }
</script>
