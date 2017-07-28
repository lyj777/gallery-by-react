require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数将图片文件名转换为url
imageDatas = (function genImageDatas(imageArr){
	for (var i = 0, j = imageArr.length; i<j ; i++){
		var singleImageData = imageArr[i];
		singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
		imageArr[i] = singleImageData;
	}
	return imageArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
    	<section className="stage">
    		<section className="img-sec">

    		</section>
    		<nav className="control-nav">

    		</nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
