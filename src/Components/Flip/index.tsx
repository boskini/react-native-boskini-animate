import React, { useEffect, useImperativeHandle, useState } from "react";
import { Animated } from "react-native";
import { timer } from 'rxjs';

export default React.forwardRef((props: any, ref: any) => {
  const [durationTemp, setDurationTemp] = useState((props.autoStart === true ? props.duration : 0));
  const spinValue = new Animated.Value(0);
  const arrRange = ["180deg", "0deg"];
  
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: props.rightToLeft ? arrRange : arrRange.reverse(),
  });

  const transformValue = () => {
    var returnValue =  [{ rotateY: spin }];
    if(props.flipX === true) returnValue = [{ rotateX: spin }];
    if(props.flipZ === true) returnValue = [{ rotateZ: spin }];

    return returnValue;
  };

  const __start = () => {
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    }).start()

    if (durationTemp > 0) {
      Animated.timing(spinValue, {
        toValue: 1,
        duration: durationTemp,
        useNativeDriver: false,
      }).start();
    }

    setDurationTemp(props.duration)
  };

  const __invert = () => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 0,
      useNativeDriver: false,
    }).start()

    if (durationTemp > 0) {
      Animated.timing(spinValue, {
        toValue: 0,
        duration: durationTemp,
        useNativeDriver: false,
      }).start();
    }
  }

  useImperativeHandle(ref, () => ({
    start() {
      __start();
    },
    invert() {
      __invert();
    }
  }))

  useEffect(() => {
    timer(!props.startInSeconds ? 1000 : props.startInSeconds).subscribe(() => __start());
  }, [])

  return (
    <Animated.View
      style={{ ...props.style, backfaceVisibility: "hidden", transform: transformValue() }}
    >
      {props.children}
    </Animated.View>
  );
})
