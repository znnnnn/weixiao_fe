import { InputItem, List } from '@ant-design/react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  H1,
  H3,
  Header,
  Icon,
  Input,
  Item,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Title,
  View
} from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

export interface State {
  name: string
  IDnumber: string
  phone: string
  code: string
}

export interface Props extends NavigationScreenProps {}

export default class OfferDetail extends React.Component<Props, State> {
  public state = {
    name: '',
    IDnumber: '',
    phone: '',
    code: ''
  }

  // private constructor(props: {}) {
  //   super(props);
  // }

  public render() {
    return (
      <Container>
        <Content style={{ padding: 15 }}>
          <Item style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <View>
              <H1>平面设计师</H1>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Icon name="pin" style={styles.icon} />
              <Text style={styles.iconText}>温州</Text>
              <Icon name="briefcase" style={styles.icon} />
              <Text style={styles.iconText}>经验不限</Text>
              <Icon name="school" style={styles.icon} />
              <Text style={styles.iconText}>大专</Text>
            </View>
            <Text style={{ color: '#1B82D2', fontSize: 26, marginTop: 10, marginBottom: 10 }}>
              5K-8K
            </Text>
          </Item>
          <ListItem thumbnail onPress={() => this.props.navigation.navigate('用户中心')}>
            <Left>
              <Thumbnail
                source={{ uri: 'http://111.231.116.130/wp-content/uploads/2019/03/3.jpg' }}
                style={{ marginLeft: -15 }}
              />
            </Left>
            <Body>
              <Text>znnnnn·招聘者</Text>
              <Text note>火星有限公司 · 执行董事</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <Item style={styles.descriptionContainer}>
            <H3 style={{ margin: 5, marginTop: 20 }}>职位详情</H3>
            <Text style={styles.description}>·做事认真负责，学习主动，没有不良嗜好</Text>
            <Text style={styles.description}>·做事认真负责，学习主动，没有不良嗜好</Text>
            <Text style={styles.description}>·做事认真负责，学习主动，没有不良嗜好</Text>
          </Item>
          <View style={styles.descriptionContainer}>
            <H3 style={{ margin: 5, marginTop: 20 }}>技能要求</H3>
            <Text style={styles.description}>·做事认真负责，学习主动，没有不良嗜好</Text>
            <Text style={styles.description}>·做事认真负责，学习主动，没有不良嗜好</Text>
            <Text style={styles.description}>·做事认真负责，学习主动，没有不良嗜好</Text>
          </View>
          <Button block style={{ margin: 10 }}>
            <Text>立即沟通</Text>
          </Button>
        </Content>
      </Container>
    )
  }

  // private inputItemFocus(): void {
  //   this.setState({
  //     inputBorderColor: '#29A1F7'
  //   })
  // }

  // private inputItemBlur(): void {
  //   this.setState({
  //     inputBorderColor: '#EEEEEE'
  //   })
  // }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 16
    // marginRight: 10
  },
  iconText: {
    fontSize: 14,
    color: '#3E3E3E',
    marginLeft: 5,
    marginRight: 15
  },
  descriptionContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 15,
    marginTop: 5
  },
  description: {
    margin: 5,
    fontSize: 14,
    color: '#848484'
  }
})
