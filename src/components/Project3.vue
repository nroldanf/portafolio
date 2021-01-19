<template>
  <v-sheet
    class="py-md-5"
    height="100%"
    color="transparent"
  >
    <div class="text-center mb-5">
      <core-subheading
        class="mb-1"
        v-text="value.name"
      />
      <span
        class="subheading"
        v-text="value.category"
      />
    </div>
    <v-row>
      <v-col cols="auto">
        <div
          class="mb-3"
          style="max-width: 500px;"
        >
          <core-subheading class="mb-3">
            Project Details
          </core-subheading>
          <core-text>
            Implementation of a chatbot for Questions and Answers (QA) related to automobile insurance on WhatsApp channel using Twilio API, Dialogflow as Chatbot platform and Node.js as programming Language. Also, segmentation of clients for personalized messaging in order to improve debt collection KPI. I was the main developer with another team member (peer programming).
          </core-text>

          <core-subheading>
            Project Info
          </core-subheading>
          <v-list class="transparent">
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">
                  mdi-account
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Client Name
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                Aseguradora Solidaria de Colombia
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">
                  mdi-calendar
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Project Dates
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                January 2020, Current Date
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="primary">
                  mdi-tag
                </v-icon>
              </v-list-item-action>
              <v-list-item-title class="mr-2">
                Project Category
              </v-list-item-title>
              <v-list-item-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                Chatbot, Machine Learning
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col
        v-if="value.src"
        class="hidden-sm-and-down"
      >
        <v-img
          :src="require(`@/assets/projects/${value.src}`)"
          height="350"
          width="500"
          contain
          class="mx-auto"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object,
        default: () => ({
          name: '',
          category: '',
          src: undefined,
        }),
      },
    },
  }
</script>
