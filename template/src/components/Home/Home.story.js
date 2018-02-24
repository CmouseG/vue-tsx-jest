import { storiesOf } from '@storybook/vue'

import Home from './Home'

storiesOf('Home', module).add(
  'Default (primary) color with custom text',
  () => ({
    render(h) {
      return <Home />
    }
  })
)
