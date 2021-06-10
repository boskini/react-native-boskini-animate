import React, { useRef } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, ScrollView, Pressable, Image, Linking } from 'react-native';
import { Fade, Flip } from 'react-native-boskini-animate';
import BoxUser from './Components/BoxUser';

export default function App() {
  const fadeContainerRef = useRef();
  const flipZContainerRef = useRef();
  const flipXContainerRef = useRef();
  const flipYContainerRef = useRef();
  const footerTemplate = useRef();
  return (
    <SafeAreaView style={{ backgroundColor: '#383B40', flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 25, color: '#3CD1B1', marginBottom: 25 }}>Animated Suit</Text>

          <View style={styles.list}>
            <Fade style={styles.box} ref={fadeContainerRef} startInSeconds={1000} duration={2000} autoStart fadeIn onClick={() => console.log('clicou')}>
              <Pressable onPress={() => fadeContainerRef?.current?.invert()}>
                <BoxUser></BoxUser>
              </Pressable>
            </Fade>

            <Flip
              style={styles.box}
              ref={flipXContainerRef}
              startInSeconds={2000}
              duration={1000}
              autoStart
              rightToLeft
            >
              <Pressable onPress={() => flipXContainerRef?.current?.invert()}>
                <BoxUser></BoxUser>
              </Pressable>
            </Flip>

            <Flip
              style={styles.box}
              startInSeconds={2000}
              ref={flipYContainerRef}
              duration={1000}
              autoStart
              rightToLeft
              flipX
            >
              <Pressable onPress={() => flipYContainerRef?.current?.invert()}>
                <BoxUser></BoxUser>
              </Pressable>
            </Flip>

            <Flip
              style={styles.box}
              startInSeconds={2000}
              ref={flipZContainerRef}
              duration={1000}
              autoStart
              rightToLeft
              flipZ
            >
              <Pressable onPress={() => flipZContainerRef?.current?.invert()}>
                <BoxUser></BoxUser>
              </Pressable>
            </Flip>

          </View>
          <Button
            title="Start Again"
            onPress={() => {
              fadeContainerRef?.current?.start();
              flipYContainerRef?.current?.start();
              flipZContainerRef?.current?.start();
              flipXContainerRef?.current?.start();
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Fade startInSeconds={2000} ref={footerTemplate} duration={3500} autoStart fadeIn>
          <Pressable onPress={() => footerTemplate?.current?.start()}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri:
                  'https://avatars.githubusercontent.com/u/84158491?s=200&v=4'
              }} />
          </Pressable>
        </Fade>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flexDirection: 'column',
    display: 'flex',
    width: '90%',
  },
  box: {
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 5
  }
});
