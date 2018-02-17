import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Container, MainInput } from './style';
console.log(Container, MainInput);

@Component
class Home extends Vue {
  render(h: Function) {
    return (
      <div>
        ODIASHAOSPDHAOIPSDHOSIPDHSOP
        <Container>
          <MainInput />
        </Container>
      </div>
    );
  }
}

export default Home;
