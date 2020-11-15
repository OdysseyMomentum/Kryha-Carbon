/** In the function newLink i want to update the link connection to what those new arrays have, but it isnt working for me, do you know how?*/
import React,{ useState } from "react";
import styled from 'styled-components';
import { scaleLinear } from "d3-scale";

var mapStyles = { position: "relative" };
var svgStyles = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };

function Map({ width, height , links: defaultLinks }) {
  var xScale = scaleLinear()
    .domain([0, 100])
    .range([0, width]);
  var yScale = scaleLinear()
    .domain([0, 100])
		.range([0, height]);
		const [colorNode, setColorNode] = useState("#CBFF5B")

		const [selectedStartNode, setStartSelection] = useState(null);

		const [nodes, setNodes] = useState([
				{ x: 10, y: 10, val: 1, done: false},
				{ x: 50, y: 10 , val: 2, done: false},
				{ x: 90, y: 10, val: 3, done: true},
				{ x: 10, y: 30, val: 1, done: false},
				{ x: 50, y: 30, val: 1 , done: true},
				{ x: 90, y: 30, val: 2, done: false},
				{ x: 10, y: 50, val: 3 , done: true},
				{ x: 50, y: 50, val: 1, done: false},
				{ x: 90, y: 50, val: 2, done: false}
		]);

		const [avg, setAvg] = useState(3)

		const [linkz, setLinkz] = useState([
			{ s: 2, d: 4 },
			{ s: 4, d: 6 }
			])

		const avgs = (elem) => {
			var sum = 0;
			for( var i = 0; i < elem.length; i++ ){
				sum += parseInt( elem[i], 10 );
			}
			sum = sum/3
			sum = Math.round(sum)
			return sum;
		}

		const handleOnClickCircle = (node, i) => {
			setStartSelection(node, i)

			if (i < 3) {
				setLinkz([
					{ s: i, d: linkz[0].d },
					linkz[1],
				]);



				console.log(node.done, 'done')
				console.log(i, 'done')
			}
			if (i > 2 && i < 6) {
				setLinkz([
					{ s: linkz[0].s, d: i },
					{ s: i, d: linkz[1].d },
				]);
			}
			if (i > 5) {
				setLinkz([
					linkz[0],
					{ s: linkz[1].s, d: i },
				]);
			}
		}

  return (
		<div>
			<div>
				<h1>
					Result: {avg}
				</h1>
			</div>
			<div id="map" style={mapStyles}>
				<svg
					style={svgStyles}
					width={width}
					height={height}
					viewBox={`0 0 ${width} ${height}`}
				>
					{linkz.map((link, i) => (
						<line
							key={i}
							x1={xScale(nodes[link.s].x)}
							x2={xScale(nodes[link.d].x)}
							y1={yScale(nodes[link.s].y)}
							y2={yScale(nodes[link.d].y)}
							strokeWidth={5}
							stroke={
								nodes[link.s].done === true && nodes[link.d].done
									? "#CBFF5B"
									: "grey"
							}
						/>
					))}
					{nodes.map((node, i) => (
						<circle
							key={i}
							cx={xScale(node.x)}
							cy={yScale(node.y)}
							r="20"
							stroke={selectedStartNode === node ? "red" : "none"}
							fill={node.done === true ? "#CBFF5B" : "grey"}
							onClick={() => handleOnClickCircle(node, i)}
						/>
					))}
				</svg>
			</div>
		</div>
  );
}

	var elem = [2, 3, 3];

export const NodeDemo = () => {

  return (
    <Container>
			<div style = {mapp}>
        <Map width={666} height={1340} />
      </div>
			<div style = {parent}>
				<div>
					<div style = {box}>
						<img src={'https://placehold.it/60x60'} style = {imgStyle} />
						<span >Upstream</span>
					</div>
					<div style = {box}>
						<img src={'https://placehold.it/60x60'} style = {imgStyle} />
						<span >Middlestream</span>
					</div>
					<div style = {box}>
						<img src={'https://placehold.it/60x60'} style = {imgStyle} />
						<span >Downstream</span>
					</div>
				</div>
				<div>
				<div style = {box}>
					<hr style={hrtext}/>
					<span >Supply chain</span>
				</div>
				</div>
				<div style = {box}>
					<img src={'https://placehold.it/60x60'} style = {imgStyle} />
					<span >CO2 rating (1 worst - 3 best)</span>
				</div>
			</div>
    </Container>
  );
};

const Container = styled.div`
	svg {
		&:nth-child(2) {
			margin: 0 8px;
		}
	}
`;

const parent = {
	width: '70%',
	position: 'absolute',
	display: 'flex',
	justifyContent: 'space-between',
	color: '#D7CEF1',
	left: '27.18%',
	right: '24.79%',
	top: '76.44%',
	bottom: '29.78%',
}

const hrtext = {
	border: '3px solid #CBFF5B',
	width:'75%',
}

const mapp = {
}
const box = {
	top: '45.44%',
}

const imgStyle =  {
	height: '20px',
	width: '20px'
}
