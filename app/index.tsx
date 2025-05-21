import { Animated, StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useEffect , useRef } from 'react';

export default function SplashScreen() {

    const FadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(()=>{
        Animated.parallel([
            Animated.timing(FadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.spring(scaleAnim,{
                toValue: 1,
                tension: 10,
                friction: 2,
                useNativeDriver: true
            }),
        ]).start();
    }, []);

    return(
    <View style={styles.container} >
        <Animated.View style = {[
            styles.iconContainer,
                {
                    opacity: FadeAnim,
                    transform: [{scale: scaleAnim}]
                }
            ]}>
            <Ionicons name="medkit" size={100} color="white" />
            <Text>        Medo</Text>
            </Animated.View>
        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a7ea4',
    },

    iconContainer: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop : 20,
        letterSpacing: 1,

    },
});