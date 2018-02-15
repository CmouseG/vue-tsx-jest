import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Container, MainInput } from './style'

@Component
class Home extends Vue {
  render(h: Function) {
    return <Container>
      <MainInput />
    </Container>
  }
}

export default Home
