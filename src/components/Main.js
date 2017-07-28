require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
var imageDatas = require('../data/imageDatas.json');
alert(imageDatas[0]);
//利用自执行函数将图片文件名转换为url
imageDatas = (function genImageDatas(imageArr){
	//alert(imageArr[1].fileName);
	for (var i=0,j=imageArr.length; i<j ; i++){
		alert('111');
		var singleImageData = imageArr[i];
		singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
		imageArr[i] = singleImageData;
		
	};
	return imageArr;
})(imageDatas);

class ImageFigure extends React.Component{
	render(){
		<figure>
			<img src={this.props.data.imageUrl}
				 alt={this.props.data.title}
			/>
			<figcaption>
				<h2>{this.props.data.title}</h2>
			</figcaption>
		</figure>
	}
};

class AppComponent extends React.Component {
  render() {
  	var controllerUnits = [],
  		imgFigures = [];
  	for(var item in imageDatas){
  	  imgFigures.push(<ImageFigure data={item}/>);
  	};
    return (
    	<section className="stage">
    		<section className="img-sec">
    			{imgFigures}
    		</section>
    		<nav className="control-nav">
				{controllerUnits}
    		</nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
