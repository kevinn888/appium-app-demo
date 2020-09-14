import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Button } from '../../components';
import { TextInput, Snackbar } from 'react-native-paper';

function Calculation(props): JSX.Element {
    const [price, setPrice] = React.useState(0);
    const [discount, setDiscount] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [visible, setVisible] = React.useState(false);

    const calculate = () => {
        if (isNaN(price) || isNaN(discount)){
            setVisible(true);
        }
        const discountPrice = price * discount / 100;
        setTotal(price-discountPrice);
    };

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', justifyContent:"center"}}>
            <TextInput
                accessible={true}
                accessibilityLabel="priceInput"
                testID="priceInput"
                label="Harga"
                value={price}
                onChangeText={text => setPrice(text)}
                style={{margin: 16}}
            />
            <TextInput
                accessible={true}
                accessibilityLabel="discountInput"
                testID="discountInput"
                label="Diskon"
                value={discount}
                onChangeText={text => setDiscount(text)}
                style={{margin: 16}}
            />
            <Text accessible={true} accessibilityLabel="totalInfo" testID="totalInfo" style={{ margin: 16}}>{total}</Text>
            <Button accessibilityLabel='calculationButton' testID='calculationButton' label='kalkulasi' onPress={calculate} />
            <Snackbar
                accessible={true}
                accessibilityLabel="NaNInfo"
                testID="NaNInfo"
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Undo'
                }}
                style={{backgroundColor: 'red'}}>
                your input is not a number
            </Snackbar>
        </SafeAreaView>
    )
}

export default Calculation;