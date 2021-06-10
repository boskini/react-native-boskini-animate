import React, { useEffect, useRef, useImperativeHandle, useState } from 'react';
import { Animated } from 'react-native';
import { timer } from 'rxjs';

export default React.forwardRef((props: any, ref: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [durationTemp, setDurationTemp] = useState((props.autoStart === true ? props.duration : 0));

  const __start = () => {
    Animated.timing(fadeAnim, {
      toValue: props.fadeIn ? 0 : 1,
      duration: 0,
      useNativeDriver: false,
    }).start();

    if (durationTemp > 0) {
      Animated.timing(fadeAnim, {
        toValue: props.fadeIn ? 1 : 0,
        duration: durationTemp,
        useNativeDriver: false,
      }).start();
    }

    setDurationTemp(props.duration)
  };

  const __invert = () => {
    Animated.timing(fadeAnim, {
      toValue: props.fadeIn ? 1 : 0,
      duration: 0,
      useNativeDriver: false,
    }).start();

    if (durationTemp > 0) {
      Animated.timing(fadeAnim, {
        toValue: props.fadeIn ? 0 : 1,
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
  }));

  useEffect(() => {
    timer(!props.startInSeconds ? 1000 : props.startInSeconds).subscribe(() => __start());
  }, []);

  return (
    <Animated.View
      style={{ ...props.style, backfaceVisibility: 'hidden', opacity: fadeAnim }}
      ref={ref}
    >
      {props.children}
    </Animated.View>
  );
});

