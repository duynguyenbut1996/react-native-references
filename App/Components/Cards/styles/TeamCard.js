import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width ;

export default StyleSheet.create({
  teamCard: {
    height: 131,
    width: width - 24,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  teamInfo: {
    flex: 5/7,
    flexDirection: 'row'
  },
  avatar: {
    flex: 1/4,
    height: '100%',
    alignItems:'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 60,
    height: 60
  },
  info: {
    flex: 3/4,
  },
  names: {
    flex: 1/3,
    flexDirection: 'row',
    paddingTop: 9
  },
  metaName: {
    fontSize: 13,
    color: '#FFF',
    fontWeight: 'bold',
  },
  displayName: {
    fontSize: 13,
    color: '#FFF',
    fontWeight: 'bold',
    opacity: 0.5
  },
  rankIcon: {
    width: 26,
    height: 26
  },
  gameInfo: {
    flex: 1/3,
    flexDirection: 'row',
    marginTop: 9
  },
  gameInfoText:{
    lineHeight: 15,
    color: '#FFF',
    marginRight: 8
  },
  gameProfile: {
    flex: 1/3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameText: {
    color: '#FFFFFF'
  },
  title: {
    lineHeight: 15,
    color: '#FFF',
    opacity: 0.5
  },
  buttons: {
    flex: 2/7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center'
  },
  ellipsis: {
    marginRight: 13,
    marginTop: 8
  },
  popover: {
    width: width - 20,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  popoverIcon: {
    color: '#7F7F7F',
  },
  popoverText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  popoverTouch: {
    width,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  statusIcon: {
    width: 13,
    height: 13,
  },
  scrimIcon:{
    width: 24,
    height: 24,
    opacity: 0.5
  }
});
