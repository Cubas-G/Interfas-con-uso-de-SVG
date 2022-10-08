import React from "react";
import image from "./image/valenciaga.webp";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign, FontAwesome, Feather, Fontisto } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navbar}>
          <Feather name="menu" style={styles.menu} />
          <Text style={styles.title}>Any Ecommerce</Text>
          <Feather name="shopping-cart" style={styles.car} />
        </View>
        <View style={styles.messagge}>
          <Text style={styles.messagge1}>Shop for</Text>
          <Text style={styles.messagge2}> AED 75 more free shippinig</Text>
        </View>
        <Text style={styles.mycart}>My Cart</Text>
        <View style={styles.product}>
          <Image source={image} style={{ height: 100, width: 175 }} />

          <View style={styles.imputShoes}>
            <Text style={styles.Primary}>Aldo</Text>
            <Text style={styles.Second}>Almond Toe</Text>
            <Text style={styles.third}>Size: 39 us</Text>
            <Text style={styles.t4}>AED 45</Text>
          </View>
          <View style={styles.btn}>
            <AntDesign name="plus" style={styles.plus} />
            <Text style={styles.number}>1</Text>
            <Ionicons name="remove-outline" style={styles.menos} />
          </View>
        </View>

        <View style={styles.product}>
          <Image source={image} style={{ height: 100, width: 155 }} />
          <View style={styles.imputShoes}>
            <Text style={styles.Primary}>Aldo</Text>
            <Text style={styles.Second}>Almond Toe</Text>
            <Text style={styles.third}>Size: 39 us</Text>
            <View style={styles.price}>
              <Text style={styles.Primary}>AED 50</Text>
              <Text style={styles.textright}>AED 45</Text>
            </View>
          </View>
          <View style={styles.btn}>
            <AntDesign name="plus" style={styles.plus} />
            <Text style={styles.number}>1</Text>
            <Ionicons name="remove-outline" style={styles.menos} />
          </View>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.couponCode}
            placeholderTextColor="#B4ADB7"
            placeholder="Coupon code"
          />
          <TouchableOpacity 
          style={styles.APPLY}>
            <Text>APPLY</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.facture}>
          <View style={styles.info}>
            <Text style={styles.factureInfo}>Subtotal:</Text>
            <Text style={styles.factureInfo}>Discount:</Text>
            <Text style={styles.factureInfo}>VAT:</Text>
            <Text style={styles.factureInfo}>Total:</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.factureData}>AED 126.57</Text>
            <Text style={styles.factureData}>-AED 21.31</Text>
            <Text style={styles.factureData}>AED 5.26</Text>
            <Text style={styles.factureData}>AED 125.52</Text>
          </View>
        </View>
        <View style={styles.messaggeEnd}>
          <Text style={styles.messaggeT}>PROCEED TO PAYMENT</Text>
        </View>
        <View style={styles.footer}>
          <Ionicons name="md-home" style={styles.iconFoot} />
          <AntDesign name="search1" style={styles.iconFoot} />
          <Fontisto name="star" style={styles.iconFoot} />
          <FontAwesome name="user" style={styles.iconFoot} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    paddingTop: 50,
    flexDirection: "row",
  },
  menu: {
    paddingLeft: 20,
    paddingEnd: 80,
    fontSize: 27,
  },
  car: {
    paddingLeft: 80,
    fontSize: 27,
  },
  title: {
    fontSize: 27,
  },
  messagge1: {
    fontStyle: "normal",
    fontSize: 18,
    color: "white",
  },
  messagge2: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  messagge: {
    marginTop: 12,
    padding: 10,
    paddingRight: 87,
    paddingLeft: 87,
    backgroundColor: "#333333",
    flexDirection: "row",
    fontSize: 25,
  },
  mycart: {
    paddingTop: 30,
    textAlign: "center",
    fontSize: 30,
  },
  product: {
    margin: 10,
    padding: 20,
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    flexDirection: "row",
  },
  btn: { marginLeft: 40 },

  imputShoes: { marginLeft: 20 },

  Primary:{ color: "#606167"
      },

  Second: { fontSize: 20 },

  third: {
    color: "#606167",
    fontSize: 15,
  },
  t4: {
    marginTop: 15,
    fontSize: 25,
  },
  price: { flexDirection: "row" },
  AED1: {
    textDecorationLine: "line-through",
    marginTop: 15,
    color: "#606167",
    fontSize: 18,
  },
  textright: {
    marginLeft: 5,
    color: "#FD7575",
    marginTop: 15,
    fontSize: 20,
  },

  plus: {
    fontSize: 18,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 7,
    paddingTop: 5,
    paddingBottom: 2,
  },
  menos: {
    fontSize: 18,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 7,
    paddingTop: 5,
    paddingBottom: 2,
  },
  number: {
    fontSize: 18,
    padding: 13,
  },
  input: {
    marginTop: 15,
    flexDirection: "row",
  },
  couponCode: {
    paddingRight: 180,
    paddingLeft: 10,
    flexDirection: "row",
    marginLeft: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    fontSize: 17,
    color: "white",
    width: "83%",
  },
  APPLY: {
    marginLeft: 15,
    padding: 15,
    borderWidth: 1,
   
  },
  facture: {
    padding: 8,
    flexDirection: "row",
    margin: 15,
    backgroundColor: "#F5F5F5",
  },
  info: {
    marginTop: 12,
    marginRight: 100,
  },
  data: {
    marginTop: 12,
    marginLeft: 110,
  },
  factureInfo: {
    color: "#606167",
    paddingBottom: 2,
    fontSize: 17,
    marginLeft: 12,
  },
  factureData: {
    paddingBottom: 2,
    fontSize: 17,
  },
  messaggeEnd: {
    marginTop: 12,
    padding: 15,
    paddingLeft: 110,
    alignItems: "center",
    backgroundColor: "#333333",
    flexDirection: "row",
  },
  messaggeT: {
    fontSize: 20,
    color: "white",
  },
  footer: {
    flexDirection: "row",
  },
  iconFoot: {
    marginLeft: 5,
    padding: 60,
    fontSize: 35,
    color: "#A0A0A0",
  },
});
