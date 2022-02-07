import React, { useState } from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./stylesheet";

const AlertMessage = ({
  modalVisible,
  setModalVisible,
  closeModal,
  title,
  message,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{title}</Text>
            <Text style={styles.modalText}>{message}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonOpen]}
              onPress={closeModal}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AlertMessage;
