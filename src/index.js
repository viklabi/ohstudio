import Header from "./Components/Header/Header";
import Title from "./Components/Title";
import Shop from "./Components/Shop/Shop";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Project/Project";
import Image from "./Components/Image";
import Badge from "./Components/Badge";
import JobPosition from "./Components/JobPosition/JobPosition";
import Video from "./Components/Video";

import {
	clientOne,
	clientTwo,
	clientThree,
	clientFour,
	clientFive,
	clientSix,
	clientSeven,
	clientEight,
	clientNine,
	clientTen,
	clientEleven,
	clientTwelve,
} from "./assets";

const clients = [
	clientOne,
	clientTwo,
	clientThree,
	clientFour,
	clientFive,
	clientSix,
	clientSeven,
	clientEight,
	clientNine,
	clientTen,
	clientEleven,
	clientTwelve,
];

const experienceList = [
	{
		time: "2017 - Present",
		workplace: "OH.STUDIO",
		jobType: "Freelance Designer",
		jobTitle: "Director",
	},
	{
		time: "2021 - Present",
		workplace: "Friendly Studio",
		jobType: "Lead Product Designer",
		jobTitle: "Freelance",
	},
	{
		time: "2022",
		workplace: "R/GA",
		jobType: "Senior Visual Designer",
		jobTitle: "Freelance",
	},
	{
		time: "2021",
		workplace: "R/GA",
		jobType: "Senior Visual Designer",
		jobTitle: "Freelance",
	},
	{
		time: "2021",
		workplace: "AKQA",
		jobType: "Senior Designer",
		jobTitle: "Freelance",
	},
	{
		time: "2020",
		workplace: "AKQA",
		jobType: "Senior Designer",
		jobTitle: "Freelance",
	},
	{
		time: "2019 - Present",
		workplace: "UI CENTRIC",
		jobType: "Senior Product Designer",
		jobTitle: "Freelance",
	},
	{
		time: "2017",
		workplace: "Agency TK",
		jobType: "Senior Digital Designer",
		jobTitle: "Permanent",
	},
	{
		time: "2012",
		workplace: "Agency TK",
		jobType: "Digital Designer",
		jobTitle: "Permanent",
	},
	{
		time: "2009",
		workplace: "Next Level",
		jobType: "Digital Designer",
		jobTitle: "Permanent",
	},
	{
		time: "2008",
		workplace: "Next Level",
		jobType: "Freelance Designer",
		jobTitle: "Junior Digital Designer",
	},
];

export {
	Header,
	Title,
	Image,
	Video,
	Shop,
	Footer,
	Project,
	Badge,
	JobPosition,
	clients,
	experienceList,
};