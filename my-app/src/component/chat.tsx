import React from 'react'

// // function rrr() {
// //   return (
// //     <div>rrr</div>
// //   )
// // }
// // export default rrr

// // import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'

// // const Chat = () => {
// //     return (
// //         <ChatEngineWrapper>
// //             <ChatSocket 
// //                 projectID='a26da7dc-24b8-44c1-aea4-512e0d566b61'
// //                 chatID='138168'
// //                 chatAccessKey='12345'
// //                 senderUsername='Consultant'
// //             />

// //             <ChatFeed activeChat='123' /> 
// //         </ChatEngineWrapper>
// //     )
// // }

// // export default Chat


// // import { useMultiChatLogic, Message } from "react-chat-engine-advanced";

// // const projectId = "PROJECT_ID";
// // const username = "USER_NAME";
// // const secret = "USER_SECRET";

// // function App() {
// //   const chatProps = useMultiChatLogic(projectId, username, secret);
// //   return (
// //     <>

// // < Message
// //   chat={{
// //     admin: {
// //       avatar: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
// //       custom_json: '',
// //       first_name: 'Adam',
// //       is_online: true,
// //       last_name: 'La Morre',
// //       username: 'adam_lamorre'
// //     },
// //     attachments: [],
// //     created: '2021-01-28T02:41:48.826706Z',
// //     custom_json: {},
// //     id: 201,
// //     is_direct_chat: false,
// //     last_message: {
// //       attachments: [],
// //       created: '2021-07-14 01:01:00.000000+00:00',
// //       custom_json: '',
// //       id: 1001,
// //       sender: '[Circular]',
// //       sender_username: 'Adam_La_Morre',
// //       text: '<p>First message</p>'
// //     },
// //     people: [
// //       {
// //         chat_updated: '',
// //         last_read: 1001,
// //         person: '[Circular]'
// //       },
// //       {
// //         chat_updated: '',
// //         last_read: 1001,
// //         person: {
// //           avatar: null,
// //           custom_json: '',
// //           first_name: 'Bob',
// //           is_online: true,
// //           last_name: 'Baker',
// //           username: 'bob_baker'
// //         }
// //       }
// //     ],
// //     title: 'First Chat ☝️'
// //   }}
// //   message={{
// //     attachments: [],
// //     created: '2021-07-14 01:01:00.000000+00:00',
// //     custom_json: '',
// //     id: 1001,
// //     sender: {
// //       avatar: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
// //       custom_json: '',
// //       first_name: 'Adam',
// //       is_online: true,
// //       last_name: 'La Morre',
// //       username: 'adam_lamorre'
// //     },
// //     sender_username: 'Adam_La_Morre',
// //     text: '<p>First message</p>'
// //   }}
// //   renderMessage={function noRefCheck(){}}
// // />
 
 
// // </>
  
// //  )  
// // }

// // export default App;

// // import React, { Component } from 'react';
// // import { View, StyleSheet, Text, Linking, TextInput } from 'react-native';

// // export default class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       mobile_no: '',
// //     };
// //   }
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <TextInput
// //           value={this.state.mobile_no}
// //           onChangeText={mobile_no => this.setState({ mobile_no })}
// //           placeholder={'Enter Mobile to Send WhatsApp Message'}
// //           style={styles.input}
// //           keyboardType={'numeric'}
// //         />
// //         <Text
// //           style={{marginTop:30}}
// //           onPress={() => {
// //             Linking.openURL(
// //               'http://api.whatsapp.com/send?phone=962' + this.state.mobile_no
// //             );
// //           }}>
// //           Send WhatsApp Message
// //         </Text>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     marginTop:50,
// //     paddingTop: 30,
// //     backgroundColor: '#ffffff',
// //   },
// //  input: {
// //    width:250,
// //    height: 44,
// //    padding: 10,
// //    margin: 20,
// //    backgroundColor: '#D3D3D3',
// //  },
// // });



// // @ts-expect-error
// import React from 'react';
// import { SingleChatSocket } from 'react-chat-engine-advanced';

// const App: React.FC = () => {

    
//   return (
//     <SingleChatSocket
//       // Authentication
//       projectId='a26da7dc-24b8-44c1-aea4-512e0d566b61'
//       chatId={138168}
//       chatAccessKey='12345'
//       // Socket Hooks
//     />
//   );
// };

// export default App;