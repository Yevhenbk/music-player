import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MusicPlayer from "./musicplayer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<MusicPlayer />
		</div>
	);
};

export default Home;
