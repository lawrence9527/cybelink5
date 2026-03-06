// App.tsx
import { Buffer } from 'buffer';
if (typeof global.Buffer === 'undefined') {
    global.Buffer = Buffer;
}

import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("--- ENV READY, LOADING GAME CONTENT ---");
            setIsReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    if (!isReady) {
        return (
            <View style={{flex: 1, backgroundColor: '#050505', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="orange" size="large" />
            </View>
        );
    }

    const Game = require('./GameContent').default;
    return <Game />;
}
