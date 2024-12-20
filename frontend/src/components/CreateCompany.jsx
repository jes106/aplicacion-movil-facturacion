
export default function Onboarding({ navigation }) {
    const handleComplete = async () => {
        try {
            await AsyncStorage.setItem('hasLaunchedBefore', 'true');
            navigation.replace('Home');
        } catch (error) {
            console.error('Error saving first launch:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a la App!</Text>
            <Text style={styles.description}>
                Esta es tu aplicación de facturación
            </Text>
            <Button 
                mode="contained" 
                style={styles.button}
                onPress={handleComplete}
            >
                Comenzar
            </Button>
        </View>
    );
}
