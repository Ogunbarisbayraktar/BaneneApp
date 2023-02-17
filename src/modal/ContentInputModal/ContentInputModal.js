import React, { useState } from "react";
import { SafeAreaView, View, TextInput } from "react-native";
import styles from './ContentInputModal.style';
import Modal from "react-native-modal";
import Button from "../../components/Button/Button";




const ContentInputModal = ({ visible, onSend, onClose }) => {
    const [text, setText] = useState(null);

    function handleSend() {
        if(!text) {
            return;
        }
        onSend(text);
        setText(null);
    }
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}>
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder="Yaz bakalım.."
                        onChangeText={setText} 
                        multiline/>
                </View>
                <Button text='Gönder' onPress={handleSend} />
            </View>
        </Modal>
    )
}

export default ContentInputModal;