
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import { VideoPlayer, Trimmer } from 'react-native-video-processing';

import { RNCamera } from 'react-native-camera';


//const compareImages = require("resemblejs/compareImages");
//const fs = require("mz/fs");
// var im = require('imagemagick');

const App: () => React$Node = () => {


    // this.state = {
    //   count: "frejfnerf"
    // }
  


  async function getDiff() {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    // const data = await compareImages(
    //     await fs.readFile("./your-image-path/People.jpg"),
    //     await fs.readFile("./your-image-path/People2.jpg"),
    //     options
    // );

    // await fs.writeFile("./output.png", data.getBuffer());
    return 100;
}



  const [similarityPercentage, setValue] = useState(0);
  const [count, setCount] = useState(null);

  // const onPress = () => setCount(prevCount => prevCount + 1);
  const onPress = () => setCount(
    100
  );

  this.timer = setInterval(()=> this.takePicture(), 5000)

  async function trimVideo() {
    const options = {
        startTime: 0,
        endTime: 15,
        quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
        saveToCameraRoll: true, // default is false // iOS only
        saveWithCurrentDate: true, // default is false // iOS only
    };
    this.videoPlayerRef.trim(options)
        .then((newSource) => console.log(newSource))
        .catch(console.warn);
}

async function compressVideo() {
    const options = {
        width: 720,
        height: 1280,
        bitrateMultiplier: 3,
        saveToCameraRoll: true, // default is false, iOS only
        saveWithCurrentDate: true, // default is false, iOS only
        minimumBitrate: 300000,
        removeAudio: true, // default is false
    };
    this.videoPlayerRef.compress(options)
        .then((newSource) => console.log(newSource))
        .catch(console.warn);
}

async function getPreviewImageForSecond(second) {
    const maximumSize = { width: 640, height: 1024 }; // default is { width: 1080, height: 1080 } iOS only
    this.videoPlayerRef.getPreviewForSecond(second, maximumSize) // maximumSize is iOS only
    .then((base64String) => console.log('This is BASE64 of image', base64String))
    .catch(console.warn);
}

async function getVideoInfo() {
    this.videoPlayerRef.getVideoInfo()
    .then((info) => console.log(info))
    .catch(console.warn);
}

takePicture = async() => {

  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    // this.state.count = "kjwenfweonf";
    setCount(data.base64)
    // ImageA = new Image();
    // ImageA.src = "./assets/AfromCAMPAIGN.png";

    // console.log(data);


// // Create the image that shows the difference between the images
// var diff = imagediff.diff(ImageA, ImageB);    

// // Create a canvas with the imagediff method (with the size of the generated image)
// var canvas = imagediff.createCanvas(diff.width, diff.height);

// // Retrieve the 2d context
// var context = canvas.getContext('2d');

// // Draw the generated image with differences on the canvas
// context.putImageData(diff, 0, 0);

// // Now you can do whatever you want with the canvas
// // for example render it inside a div element:
// // document.getElementById("some-div-id").appendChild(canvas);
// setCount(canvas)

  }
};

// const deepai = require('deepai');
// deepai.setApiKey('aaa3a9e3-41c9-4955-b4dd-1746d0fff20f'); 

// var result = await deepai.callStandardApi("sentiment-analysis", {
//   text: "I am very happy to play with the newest APIs!"
// });
 
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View>
              <LoginButton
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      console.log("login has error: " + result.error);
                    } else if (result.isCancelled) {
                      console.log("login is cancelled.");
                    } else {
                       AccessToken.getCurrentAccessToken().then(
                        (data) => {
                          console.log("login successfully !");

                          console.log(data.accessToken.toString())
                        }
                      )
                    }
                  }
                }
                onLogoutFinished={() => console.log("logout.")}
              />

            </View>
            <View>
            <Text>
          Do I look like .. ? 
          {/* {result} */}
        </Text>

              {/* <Text>
                {count}
              </Text> */}
              {/* <Image
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          // source={require('./assets/rn-school-logo.png')}
          source={require('./assets/AfromCAMERA.jpg')}
        /> */}
        {/* <Image
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          source={require('./assets/AfromCAMPAIGN.png')}
           //source={{ uri: 'https://images.unsplash.com/photo-1540759786422-c60d5dc57d7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bd0585a4b1b7b27c818f42e98b671&auto=format&fit=crop&w=350&q=80' }}
        /> */}
<Image  style={{ width: 250, height: 250 }}           
        resizeMode="contain"
        source={{uri: `data:image/gif;base64,` + count}} />
        
        {/* <Image  style={{ width: 250, height: 250 }}           
        resizeMode="contain"
        source={{uri: `data:image/gif;base64,` + count}} /> */}


            </View>
            <View style={styles.container}>
              <View style={styles.countContainer}>
                {/* <Text>{count} %</Text> */}
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={onPress}
              >
                <Text>Compare</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    <View style={styles.container}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={{
                flex: 1,
                width: '100%',
              }}
            >
           </RNCamera>
           {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.taºkePicture.bind(this)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
            </TouchableOpacity>
            </View> */}
           </View>
    </>
  );

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#7CA1B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default App;
