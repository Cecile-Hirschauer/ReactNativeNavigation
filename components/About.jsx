import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export default  function About() {
    return (
        <View style={style.container}>
            <Text style={style.pageTitle}>About me</Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur tellus tincidunt, rhoncus tortor sit amet, venenatis diam. Nullam semper, enim a varius egestas, purus nisi tincidunt ante, quis imperdiet mi lectus at massa. Donec porta consequat ante vitae convallis. Cras vitae condimentum ligula. Aliquam auctor ligula vel lectus bibendum, ut venenatis nibh bibendum. Fusce porttitor nec mauris ac venenatis. Pellentesque ullamcorper nisi metus, nec varius sem tristique eu. Etiam iaculis ante nisi, non condimentum magna ultrices quis. Ut consectetur, massa eget aliquam rutrum, lectus nunc mattis arcu, nec bibendum sem magna id massa. Phasellus dignissim, magna vel mattis sollicitudin, diam lorem congue quam, vel sodales dolor purus nec arcu. Maecenas ut ullamcorper mauris, id mattis enim. Suspendisse ligula elit, placerat quis neque in, consectetur euismod nisi. Vivamus dignissim euismod metus nec condimentum.

                Vivamus eget tortor id lorem rhoncus mattis id vel ligula. In sit amet varius neque, ac suscipit ligula. Donec sed egestas neque, in tristique ipsum. Praesent vel suscipit tellus. Integer elementum nunc a libero lobortis consectetur. Maecenas placerat aliquet augue, vitae rutrum nunc vulputate ut. Quisque scelerisque vehicula ante, non facilisis justo viverra nec. Donec ac tincidunt magna. Proin semper quam nec mi feugiat, in consequat velit pellentesque. Donec sed nibh auctor, fermentum quam eu, varius ante. In vel ex nisl. Sed nec ipsum magna. Praesent ut tortor et ligula aliquet semper.
            </Text>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 8
    }
});
