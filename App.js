
import React, { Component } from 'react'
import GetLocation from 'react-native-get-location'
import axios from 'axios'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Config from './config'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      postalCode: '',
      label: '',
      latitude: '',
      longitude: '',
      number: '',
      street: '',
      confidence: '',
      region: '',
      regionCode: '',
      county: '',
      locality: '',
      distance: '',
      administrativeArea: '',
      neighbourhood: '',
      country: '',
      countryCode: '',
      continent: '',
    };
  }

  getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        var config = {
          method: 'get',
          url: 'http://api.positionstack.com/v1/reverse?access_key=' + Config.locationAPIKey + '&query=' + location.latitude + ',' + location.longitude,
        };
        var self = this
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            console.log(JSON.stringify(response.data.data[0].name));
            self.setState({
              latitude: response.data.data[0].latitude,
              longitude: response.data.data[0].longitude,
              name: response.data.data[0].name,
              postalCode: response.data.data[0].postal_code,
              label: response.data.data[0].label,
              distance: response.data.data[0].distance,
              number: response.data.data[0].number,
              street: response.data.data[0].street,
              confidence: response.data.data[0].confidence,
              region: response.data.data[0].region,
              regionCode: response.data.data[0].region_code,
              administrativeArea: response.data.data[0].administrative_area,
              neighbourhood: response.data.data[0].neighbourhood,
              country: response.data.data[0].country,
              countryCode: response.data.data[0].country_code,
              continent: response.data.data[0].continent,
            })
          })
          .catch(function (error) {
            console.log(error);
          });

      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ margin: 10 }}>
            <Text style={{ alignSelf: 'center', textDecorationLine: 'underline', color: 'green' }}>Get Current Location</Text>
            <View style={styles.locTextView}>
              <Text>Latitude :</Text>
              <Text style={styles.locText}> {this.state.latitude}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Longitude :</Text>
              <Text style={styles.locText}> {this.state.longitude}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Name :</Text>
              <Text style={[styles.locText, , { flexWrap: 'wrap', width: '70%' }]}> {this.state.name}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Postal Code : </Text>
              <Text style={styles.locText}>{this.state.postalCode}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Address :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.label}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Distance :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.distance}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Number :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.number}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Street :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.street}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Confidence :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.confidence}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Region :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.region}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Region Code :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.regionCode}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>County :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.county}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Locality :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.locality}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Administrative Area :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.administrativeArea}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Neighbourhood :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.neighbourhood}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>country :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.country}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Country Code :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.countryCode}</Text>
            </View>
            <View style={styles.locTextView}>
              <Text>Continent :</Text>
              <Text style={[styles.locText, { flexWrap: 'wrap', width: '70%' }]}>{this.state.continent}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              title="Get Location"
              onPress={() => this.getLocation()}
              style={{
                backgroundColor: 'grey',
                margin: 20,
                padding: 10,
                alignSelf: 'center',
                borderRadius: 10,
              }}>
              <Text style={{ color: '#fff', fontWeight: '700' }}>Get Location</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  locText: {
    color: 'blue',
    paddingLeft: 10
  },
  locTextView: {
    flexDirection: 'row',
    marginVertical: 10
  }
})