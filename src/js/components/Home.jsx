import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = (props) => {
	return (
		<main className="text-center d-flex flex-column justify-content-center">
		<h1 className="text-primary">Simple Counter</h1>
		<SecondsCounter 
		digitOne={props.digitOne}
        digitTwo={props.digitTwo}
        digitThree={props.digitThree}
        digitFour={props.digitFour}
        digitFive={props.digitFive}
        digitSix={props.digitSix} 
		/>
		<em>
			<p className="mt-5 text-secondary">Copyright &copy; 2025 {" "}
				<a href="https://github.com/hereisphil" target="_blank" className="link-secondary">
				Phillip Cantu
				</a>
			</p>
		</em>
		</main>
	);
};

export default Home;