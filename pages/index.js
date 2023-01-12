import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ ifsc, micr, state, city, branch, bank }) {
	return (
		<>
			<h1>API Testing</h1>

			<button
				style={{ margin: "5px" }}
				onClick={() => {
					console.log(ifsc);
				}}
			>
				<p>Find IFSC</p>
			</button>
			<br></br>
			<button
				style={{ margin: "5px" }}
				onClick={() => {
					console.log(micr);
				}}
			>
				<p>Find MICR</p>
			</button>

			<br></br>
			<button
				style={{ margin: "5px" }}
				onClick={() => {
					console.log(state);
				}}
			>
				<p>Find State</p>
			</button>

			<br></br>
			<button
				style={{ margin: "5px" }}
				onClick={() => {
					console.log(city);
				}}
			>
				<p>Find City</p>
			</button>

			<br></br>
			<button
				style={{ margin: "5px" }}
				onClick={() => {
					console.log(branch);
				}}
			>
				<p>Find Branch</p>
			</button>

			<br></br>
			<button
				style={{ margin: "5px" }}
				onClick={() => {
					console.log(bank);
				}}
			>
				<p>Find Bank</p>
			</button>
		</>
	);
}

export const getStaticProps = async () => {
	const getIfsc = await fetch(`http://localhost:3000/api/ifsc`, {
		method: "POST",
		body: JSON.stringify({
			IFSC: "ABHY0065002",
		}),
		headers: {
			"content-type": "application/json",
		},
	});
	const ifsc = await getIfsc.json();

	const getMicr = await fetch(`http://localhost:3000/api/micr`, {
		method: "POST",
		body: JSON.stringify({
			MICR: "400065001",
		}),
		headers: {
			"content-type": "application/json",
		},
	});
	const micr = await getMicr.json();

	const getStates = await fetch(`http://localhost:3000/api/get-states`, {
		method: "POST",
		body: JSON.stringify({
			BANK: "Bank Of Baroda",
		}),
		headers: {
			"content-type": "application/json",
		},
	});
	const state = await getStates.json();

	const getCity = await fetch(`http://localhost:3000/api/get-city`, {
		method: "POST",
		body: JSON.stringify({
			BANK: "Allahabad Bank",
			STATE: "Maharashtra",
		}),
		headers: {
			"content-type": "application/json",
		},
	});
	const city = await getCity.json();

	const getBranch = await fetch(`http://localhost:3000/api/get-branch`, {
		method: "POST",
		body: JSON.stringify({
			BANK: "Allahabad Bank",
			STATE: "Maharashtra",
			CITY: "Mumbai",
		}),
		headers: {
			"content-type": "application/json",
		},
	});
	const branch = await getBranch.json();

	const getBank = await fetch(`http://localhost:3000/api/get-bank`, {
		method: "POST",
		body: JSON.stringify({
			BANK: "Allahabad Bank",
			STATE: "Maharashtra",
			CITY: "Mumbai",
			BRANCH: "Allahabad Bank Imps",
		}),
		headers: {
			"content-type": "application/json",
		},
	});
	const bank = await getBank.json();

	return {
		props: {
			ifsc,
			micr,
			state,
			city,
			branch,
			bank,
		},
	};
};
