# react-native-picture
 
This component simplifies displaying a picture in React-Native.

![Example](/example/picture.jpg)

### Installation
    $ yarn add react-native-picture
    or
    $ npm i --save react-native-picture

### Usage
    import Picture from 'react-native-picture'
    
    <Picture 
      radius={200} 
      source={require(path/to/picture})} // or source={uri: "url.picture.com"}}
    />
    
### Props

|            Prop | Description                     | Default |
| --------------: | :------------------------ | :------------------------------------------- |
|     radius | The radius of the of the circle | _number_  |
|    source |Source of the image.        | [_ImageSourcePropType_](https://reactnative.dev/docs/image#source)  |
|    style | Style prop  | [_ViewStyle](https://reactnative.dev/docs/view-style-props#docsNav)_   |
