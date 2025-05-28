import { Text, View } from 'react-native';

export default function OrderSummary (props: any) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffeee0' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Pedido Finalizado!</Text>
            <Text>Muito Obrigado!</Text>
            
        </View>
    )
}