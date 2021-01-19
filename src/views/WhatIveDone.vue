<template>
  <core-section id="what-ive-done">
    <abstract-3 />

    <core-heading>What I've done</core-heading>

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
    name: 'WhatIveDone',

    components: {
      Abstract3: () => import('@/components/Abstract3'),
      Project: () => import('@/components/Project'),
      Project2: () => import('@/components/Project2'),
      Project3: () => import('@/components/Project3'),
      Project4: () => import('@/components/Project4'),
    },

    data: () => ({
      project: [
        {
          name: 'Conversational Agent for client retention',
          category: 'Backend Development with AWS and Machine Learning',
          src: 'bayport_logo.png',
        },
      ],
      project2: [
        {
          name: 'Modems Diagnostic with Computer Vision',
          category: 'Computer Vision and AWS',
          src: 'telefonica.png',
        },
      ],
      project3: [
        {
          name: 'Client Segmentation and Data Driven Messaging',
          category: 'Chatbots, Machine Learning and Data Science',
          src: 'solidaria_logo.png',
        },
      ],
      project4: [
        {
          name: 'Document Analisis with OCR and NLP',
          category: 'Computer Vision, NLP and AWS',
          src: 'beneficiar_logo.svg',
        },
      ],
    }),
  }
</script>
