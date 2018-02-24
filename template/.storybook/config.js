import { configure } from '@storybook/vue'

import Vue from 'vue'

function loadStories() {
  // You can require as many stories as you need.
  require('@/components/Home/Home.story')
}

configure(loadStories, module)
